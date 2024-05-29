import Squat from "@/icons/squat";
import ButtonLink from "../buttonLink";
import Heading from "../heading";
import PageWrapper from "../pageWrapper";
import styles from "./styles.module.css";

export default function JoinNow() {
  return (
    <div className={styles.root}>
      <PageWrapper padding="tight" className={styles.wrapper}>
        <div className={styles.content}>
          <Heading headingLevel="h2">Let's do this!</Heading>

          <p>Come see us and start your journey to level up your fitness.</p>

          <ButtonLink href="/get-started" variant="secondary" grow>
            Schedule your free intro &#10132;
          </ButtonLink>
        </div>

        <Squat />
      </PageWrapper>
    </div>
  );
}
