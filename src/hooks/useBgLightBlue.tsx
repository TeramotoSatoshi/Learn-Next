import { useEffect } from "react";

export const useBgLightBlue = () => {
  // レンダリングされたら実行
  return useEffect(() => {
    document.body.style.backgroundColor = "lightblue";
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);
};
