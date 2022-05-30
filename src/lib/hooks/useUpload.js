import { useState, useContext, useEffect } from "react";
import { SERVER } from "../server/server";
import axios from "axios";
import { UserContext } from "../../context";

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
    const url = `${SERVER}/upload`;
    const res = await axios.post(url, file, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      onUploadProgress: (progressEvent) => {
        setProgress(progressPercentage(progressEvent));
      },
    });
    const link = `https://cwrfdvnvvcedqjylgvms.supabase.co/storage/v1/object/public/${res.data.Key}`;
    setlink(link);
    setProgress(100);
    setStatus("done");
  };

  return [status, progress, link, uploadFile];
};

export default useUpload;
