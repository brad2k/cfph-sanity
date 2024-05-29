"use client";

import styles from "./dropdown.module.css";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useMediaQuery } from "@uidotdev/usehooks";
import Caret from "@/icons/caret";
import clsx from "clsx";

interface DropdownWrapperProps extends React.HTMLAttributes<HTMLLIElement> {}

export function DropdownWrapper({ children }: DropdownWrapperProps) {
  const [mdMQ, setMq] = useState("");

  useEffect(() => {
    setMq(
      getComputedStyle(document.documentElement).getPropertyValue("--mqMedium")
    );
  }, []);

  const isMediumDevice = useMediaQuery(`screen and (min-width : ${mdMQ})`);

  return (
    <li
      className={clsx(
        styles.dropdownWrapper,
        isMediumDevice && styles.enableHover
      )}
    >
      {children}
    </li>
  );
}

interface DropdownTriggerProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
}

export function DropdownTrigger({ children, href }: DropdownTriggerProps) {
  const [open, setOpen] = useState(false);

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

interface DropdownListProps extends React.HTMLAttributes<HTMLUListElement> {}

export function DropdownList({ children }: DropdownListProps) {
  return <ul className={styles.dropdown}>{children}</ul>;
}

interface DropdownListItemProps extends React.HTMLAttributes<HTMLLIElement> {}

export function DropdownListItem({ children }: DropdownListItemProps) {
  return <li className={styles.dropdownItem}>{children}</li>;
}
