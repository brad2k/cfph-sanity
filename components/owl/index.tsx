import styles from "./styles.module.css";

type OwlType = {
  as?: "section" | "div" | "aside" | "footer";
  children: React.ReactNode;
};

export default function Owl({ as = "div", children }: OwlType) {
  const Element = as;
  return <Element className={styles.root}>{children}</Element>;
}
