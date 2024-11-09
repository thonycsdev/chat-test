import styles from "./Input.module.scss";
import { ChangeEvent, KeyboardEvent } from "react";

type InputProps = {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  placeholder?: string;
  value?: string;
  onSubmit?: () => void;
};
export default function Input({
  onChange,
  type,
  placeholder,
  value,
  onSubmit,
}: InputProps) {
  const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      onSubmit && onSubmit();
    }
  };
  return (
    <input
      type={type ? type : "text"}
      placeholder={placeholder ? placeholder : "Type something"}
      value={value}
      className={styles.input}
      onChange={onChange}
      onKeyDown={handleKeyPress}
    />
  );
}
