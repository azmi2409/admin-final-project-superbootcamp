import { useState, useContext } from "react";
import { UserContext } from "../../context";
import { uploadImage } from "../server/server";

const progressPercentage = (progress) => {
  return Math.round((progress.loaded / progress.total) * 100);
};

const useUpload = () => {
  const [status, setStatus] = useState("");
  const [progress, setProgress] = useState(-1);
  const [link, setlink] = useState("");
  const { token } = useContext(UserContext);

  const uploadFile = async (file = {}) => {
    setStatus("uploading");
    setProgress(0);
    const res = await uploadImage(token, file, (progress) => {
      setProgress(progressPercentage(progress));
    });
    const link = res.data.Key;
    setlink(link);
    setProgress(100);
    setStatus("done");
  };

  return [status, progress, link, uploadFile];
};

export default useUpload;
