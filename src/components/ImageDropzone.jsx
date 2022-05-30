import React from "react";
import { useDropzone } from "react-dropzone";
import useUpload from "../lib/hooks/useUpload";
import { CProgress, CProgressBar } from "@coreui/react";

const ImageDropzone = ({ cb }) => {
  const [status, progress, link, uploadFile] = useUpload();

  React.useEffect(() => {
    if (status === "done") {
      cb(link);
    }
  }, [status]);

  const onDrop = React.useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    if (!!file) {
      const reader = new FileReader();
      reader.onabort = () => console.log("file reading was aborted");
      reader.onerror = () => console.log("file reading has failed");
      reader.onload = async () => {
        // Log Base64 string
        const base64 = reader.result.split(",")[1];
        const name = file.name.replace(/\s/g, "-");
        const data = {
          image: base64,
          name: name,
        };
        await uploadFile(data);
      };
      reader.readAsDataURL(file);
    }
  }, []);
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    acceptedFiles,
    fileRejections,
  } = useDropzone({
    onDrop,
    accept: {
      "image/jpeg": [],
      "image/png": [],
      "image/gif": [],
      "image/bmp": [],
      "image/svg+xml": [],
      "image/webp": [],
    },
  });

  return (
    <div className="col-12">
      {status !== "done" && status !== "uploading" && (
        <div className="border p-5" {...getRootProps()}>
          <input {...getInputProps()} />
          {isDragActive ? (
            <p>Drop the files here ...</p>
          ) : (
            <>
              <p>Drag 'n' drop some files here, or click to select files</p>
            </>
          )}
        </div>
      )}
      {status === "done" && (
        <div className="border p-5">
          <img src={link} alt="uploaded" className="img-thumbnail" />
        </div>
      )}
      {status === "uploading" && (
        <div className="border p-5">
          <CProgress className="mb-3">
            <CProgressBar value={progress} animated color="success" />
          </CProgress>
        </div>
      )}
    </div>
  );
};

export default ImageDropzone;
