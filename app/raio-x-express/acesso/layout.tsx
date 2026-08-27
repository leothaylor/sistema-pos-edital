import type { ReactNode } from "react";
import styles from "./access-interactions.module.css";

export default function RaioXAccessLayout({ children }: { children: ReactNode }) {
  return <div className={styles.interactionScope}>{children}</div>;
}
