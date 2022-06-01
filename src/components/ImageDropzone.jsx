import React from "react";
import { useDropzone } from "react-dropzone";
import useUpload from "../lib/hooks/useUpload";
import { CProgress, CProgressBar, CImage } from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { cilX } from "@coreui/icons";

const ImageDropzone = ({ cb }) => {
  const [status, progress, link, uploadFile] = useUpload();
  const url = `https://cwrfdvnvvcedqjylgvms.supabase.co/storage/v1/object/public/${link}`;

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
              <p>Drag Picture Here, or click to select</p>
            </>
          )}
        </div>
      )}
      {status === "done" && (
        <div className="border p-5 d-flex justify-content-center">
          <div className="position-relative">
            <CImage rounded thumbnail src={url} width={200} height={200} />
            <button className="position-absolute top-0 end-0 rounded-circle btn btn-outline-primary mt-1 mr-1 btn-sm d-flex justify-content-center align-items-middle p-2">
              <CIcon icon={cilX} />
            </button>
          </div>
        </div>
      )}
      {status === "uploading" && (
        <div className="border p-5">
          <CProgress className="mb-3">
            <CProgressBar value={progress} animated color="success">
              {`${progress}%`}
            </CProgressBar>
          </CProgress>
        </div>
      )}
    </div>
  );
};

export default ImageDropzone;
