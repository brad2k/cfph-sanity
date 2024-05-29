"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./header.module.css";
import ButtonLink from "@/components/buttonLink";
import { useEffect, useState } from "react";
import {
  DropdownWrapper,
  DropdownList,
  DropdownListItem,
  DropdownTrigger,
} from "@/components/dropdown";

type NavContentProps = {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

function NavContent({ visible, setVisible }: NavContentProps) {
  type NavLinkProps = {
    children: string;
    href: string;
  };

  function NavLink({ children, href }: NavLinkProps) {
    return (
      <Link href={href} onClick={() => setVisible(false)}>
        {children}
      </Link>
    );
  }

  return (
    <nav
      className={styles.nav}
      aria-label="Main"
      id="main-navigation"
      aria-expanded={visible}
      hidden={!visible}
    >
      <ul className={styles.navMain}>
        <DropdownWrapper>
          <DropdownTrigger href="/programs">Programs</DropdownTrigger>

          <DropdownList>
            <DropdownListItem>
              <NavLink href="/programs/crossfit">CrossFit</NavLink>
            </DropdownListItem>
            <DropdownListItem>
              <NavLink href="/programs/crossfit-on-ramp">
                CrossFit on-ramp
              </NavLink>
            </DropdownListItem>
            <DropdownListItem>
              <NavLink href="/programs/personal-training">
                Personal training
              </NavLink>
            </DropdownListItem>
            <DropdownListItem>
              <NavLink href="/programs/small-group-training">
                Small group training
              </NavLink>
            </DropdownListItem>
          </DropdownList>
        </DropdownWrapper>
        <DropdownWrapper>
          <DropdownTrigger href="/locations">Locations</DropdownTrigger>

          <DropdownList>
            <DropdownListItem>
              <NavLink href="/locations/potrero-hill">Potrero Hill</NavLink>
            </DropdownListItem>
            <DropdownListItem>
              <NavLink href="/locations/south-park">South Park</NavLink>
            </DropdownListItem>
          </DropdownList>
        </DropdownWrapper>
        <li>
          <NavLink href="/membership">Membership</NavLink>
        </li>
        <li>
          <NavLink href="/coaches">Coaches</NavLink>
        </li>
        <li>
          <NavLink href="/about-us">About us</NavLink>
        </li>
      </ul>

      <div className={styles.navSecondary}>
        <ButtonLink href="/drop-in" onClick={() => setVisible(false)}>
          Drop in
        </ButtonLink>

        <ButtonLink
          href="/get-started"
          variant="primary"
          onClick={() => setVisible(false)}
        >
          Get started
        </ButtonLink>
      </div>
    </nav>
  );
}

export default function Header() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    document.body.style.overflow = visible ? "hidden" : "unset";
  }, [visible]);

  return (
    <header className={styles.header}>
      <Link href="/" aria-label="Home">
        <Image
          src="/crossfit-potrero-hill-logo.svg"
          alt="CrossFit Potrero Hill logo"
          width={105}
          height={75}
          priority
          style={{ display: "block" }}
        />
      </Link>
      <button
        className={styles.toggle}
        aria-controls="main-navigation"
        aria-label="Main naviation"
        onClick={() => setVisible(!visible)}
      >
        {visible ? (
          <svg
            aria-hidden="true"
            role="img"
            focusable="false"
            aria-labelledby="close-label"
            width="1em"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <title id="close-label">Close</title>
            <path d="M6.586 8l-2.793 2.793a1 1 0 101.414 1.414L8 9.414l2.793 2.793a1 1 0 101.414-1.414L9.414 8l2.793-2.793a1 1 0 00-1.414-1.414L8 6.586 5.207 3.793a1 1 0 00-1.414 1.414L6.586 8z"></path>
          </svg>
        ) : (
          <svg
            aria-hidden="true"
            role="img"
            focusable="false"
            width="1em"
            fill="currentColor"
            viewBox="0 0 16 16"
            aria-labelledby="menu-label"
          >
            <title id="menu-label">Menu</title>
            <path d="M2 4.5a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.5zM2 8a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H2.75A.75.75 0 012 8zM2.75 10.75a.75.75 0 000 1.5h10.5a.75.75 0 000-1.5H2.75z"></path>
          </svg>
        )}
      </button>
      <NavContent visible={visible} setVisible={setVisible} />
    </header>
  );
}
