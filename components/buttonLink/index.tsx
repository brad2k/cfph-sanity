import Link from "next/link";
import styles from "./buttonLink.module.css";
import { clsx } from "clsx";

export interface ButtonLinkProps
  extends React.DetailedHTMLProps<
      React.AnchorHTMLAttributes<HTMLAnchorElement>,
      HTMLAnchorElement
    >,
    React.AriaAttributes {
  href: string;
  grow?: boolean;
  variant?: "primary" | "secondary";
}

export default function ButtonLink({
  children,
  className,
  grow = false,
  href,
  variant = "secondary",
  ...rest
}: ButtonLinkProps) {
  return (
    <Link
      className={clsx(
        className,
        styles.button,
        [`${styles[variant]}`],
        grow && styles.grow
      )}
      href={href}
      {...rest}
    >
      {children}
    </Link>
  );
}
