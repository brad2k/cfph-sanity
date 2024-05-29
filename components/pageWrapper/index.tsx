import styles from "./pageWrapper.module.css";
import clsx from "clsx";

type props = {
  as?: "section" | "div" | "aside" | "footer";
  children: any;
  className?: string;
  owl?: boolean;
  padding?: "none" | "tight" | "loose";
};

export default function PageWrapper({
  as = "section",
  children,
  className,
  owl = true,
  padding = "none",
}: props): React.ReactNode {
  const Element = as;
  return (
    <Element
      className={clsx(
        styles.root,
        owl && styles.owl,
        padding != "none" && styles[`padding-${padding}`],
        className
      )}
    >
      {children}
    </Element>
  );
}
