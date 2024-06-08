"use client";

import { NextStudio } from "next-sanity/studio";
import config from "@/sanity/config";
import styles from "./styles.module.css";

export default function Studio() {
  return (
    <div className={styles.studioCustomizations}>
      <NextStudio config={config} />
    </div>
  );
}
