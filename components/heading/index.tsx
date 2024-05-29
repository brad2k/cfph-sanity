import clsx from "clsx";
import styles from "./heading.module.css";
import { ReactNode } from "react";

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  headingLevel?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
  styleAs?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
}

export default function Heading({
  children,
  className,
  headingLevel = "h2",
  styleAs,
}: HeadingProps): ReactNode {
  const Heading = headingLevel;
  return (
    <Heading
      className={clsx(
        className,
        styleAs ? [`${styles[styleAs]}`] : [`${styles[headingLevel]}`]
      )}
    >
      {children}
    </Heading>
  );
}
