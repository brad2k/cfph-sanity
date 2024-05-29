import Heading, { HeadingProps } from "@/components/heading";
import styles from "./card.module.css";
import clsx from "clsx";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  background?: boolean;
  border?: boolean;
}

export default function Card({
  background = true,
  border = false,
  children,
  className,
}: CardProps) {
  return (
    <div
      className={clsx(
        styles.card,
        background && styles.background,
        border && styles.border,
        className
      )}
    >
      {children}
    </div>
  );
}

export function CardHeading({ children, className, ...rest }: HeadingProps) {
  return (
    <Heading className={clsx(styles.cardHeading, className)} {...rest}>
      {children}
    </Heading>
  );
}

type CardBodyProps = {
  children: React.ReactNode;
};

export function CardBody({ children }: CardBodyProps) {
  return <div className={styles.cardBody}>{children}</div>;
}

type CardGridProps = {
  children: React.ReactNode;
};

export function CardGrid({ children }: CardGridProps) {
  return <div className={styles.cardGrid}>{children}</div>;
}
