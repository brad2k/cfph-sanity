import Caret from "@/icons/caret";
import Link from "next/link";
import { useState } from "react";
import styles from "./dropdown.module.css";

interface DropdownTriggerProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
}

export function DropdownTrigger({ children, href }: DropdownTriggerProps) {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Link
      href={href}
      className={styles.dropdownTrigger}
      onClick={(e) => {
        e.preventDefault();
        setOpen(!open);
      }}
      aria-expanded={open}
    >
      {children} <Caret className={styles.caret} />
    </Link>
  );
}

interface DropdownWrapperProps extends React.HTMLAttributes<HTMLLIElement> {}

export function DropdownWrapper({ children }: DropdownWrapperProps) {
  return <li className={styles.dropdownWrapper}>{children}</li>;
}

interface DropdownListProps extends React.HTMLAttributes<HTMLUListElement> {}

export function DropdownList({ children }: DropdownListProps) {
  return <ul className={styles.dropdown}>{children}</ul>;
}

interface DropdownListItemProps extends React.HTMLAttributes<HTMLLIElement> {}

export function DropdownListItem({ children }: DropdownListItemProps) {
  return <li className={styles.dropdownItem}>{children}</li>;
}
