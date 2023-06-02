import { useCallback, useState } from "react";

export const useInputArray = () => {
  const [text, setText] = useState<string>("");
  const [array, setArray] = useState<string[]>([]);
  // テキスト変更
  const handleChange = useCallback(
    (e: any) => {
      setText(e.target.value);
    },
    [text]
  );

  // 配列追加
  const handleAdd = useCallback(() => {
    setArray((prevArray) => {
      if (prevArray.some((item) => item === text)) {
        alert("配列内に同一の要素が存在します");
      }
      const newArray = [...prevArray, text];
      return newArray;
    });
  }, [text]);
  return { text, array, handleChange, handleAdd };
};
