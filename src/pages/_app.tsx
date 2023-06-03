import "src/styles/globals.css";
import type { AppProps } from "next/app";
import { useInputArray } from "src/hooks/useInputArray";
import { useCounter } from "src/hooks/useCounter";
import { useBgColor } from "@/src/hooks/useBgColor";

export default function App({ Component, pageProps }: AppProps) {
  const counter = useCounter();
  const inputArray = useInputArray();
  useBgColor();
  return <Component {...pageProps} {...counter} {...inputArray} />;
}
