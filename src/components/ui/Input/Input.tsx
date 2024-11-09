import styles from "./Input.module.scss";
import { ChangeEvent } from "react";

type InputProps = {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  placeholder?: string;
};
export default function Input({ onChange, type, placeholder }: InputProps) {
  return (
    <input
      type={type ? type : "text"}
      placeholder={placeholder ? placeholder : "Type something"}
      className={styles.input}
      onChange={onChange}
    />
  );
}
