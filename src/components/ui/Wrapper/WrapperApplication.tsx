import styles from "./WrapperApplication.module.scss";
type WrapperProps = {
  children: React.ReactNode;
};
export default function WrapperApplication({ children }: WrapperProps) {
  return <div className={styles.wrapper}>{children}</div>;
}

export function WrapperButtons({ children }: WrapperProps) {
  return <div className={styles.wrapper_buttons}>{children}</div>;
}

export function WrapperMessages({ children }: WrapperProps) {
  return <div className={styles.wrapper_messages}>{children}</div>;
}
