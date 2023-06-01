import { useCallback, useState } from "react";

export const useCounter = () => {
  const [count, setCount] = useState(1);
  const [isShow, setIsShow] = useState(true);

  // ボタン押下
  const handleClick = useCallback(() => {
    if (count !== undefined) {
      setCount((prevCount) => prevCount + 1);
    }
  }, [count]);

  // 表示変更
  const handleDisplay = useCallback(() => {
    setIsShow((prevIsShow) => !prevIsShow);
  }, []);
  return { count, isShow, handleClick, handleDisplay };
};
