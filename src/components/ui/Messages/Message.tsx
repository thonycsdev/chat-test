import styles from "./Message.module.scss";
type MessageProps = {
  children: React.ReactNode;
};
export default function Message({ children }: MessageProps) {
  return <div className={styles.message}>{children}</div>;
}
