import Card, { CardBody, CardHeading } from "@/components/card";
import Heading from "@/components/heading";
import Hero from "@/components/hero";
import JoinNow from "@/components/joinNow";
import PageWrapper from "@/components/pageWrapper";
import { Metadata } from "next";
import Image from "next/image";
import styles from "../programs.module.css";

export const metadata: Metadata = {
  title: "Small group training at CrossFit Potrero Hill",
};

export default function ProgramSmallGroupTraining() {
  return (
    <>
      <Hero img="/cfph-hero.jpg" alt="Athletes warming up for a workout">
        <Heading headingLevel="h1">Small group training</Heading>
      </Hero>

      <PageWrapper padding="loose">
        <Heading headingLevel="h2">Personal training for small groups</Heading>

        <p>
          Small group personal training affords the benefits of personal
          training at a lower cost when shared with a friend or loved one.
          Motivate one another and benefit from the accountability and
          flexibility of working with a coach who will design a custom workout
          plan to meet your goals.
        </p>
      </PageWrapper>

      <PageWrapper className={styles.root} padding="loose">
        <Card className={styles.programGrid} background={false}>
          <CardBody>
            <CardHeading headingLevel="h3">What to expect</CardHeading>
            <ul>
              <li>Lower cost than private sessions</li>
              <li>Personal attention from a coach</li>
              <li>Customized workouts</li>
              <li>A good time for you and your workout buddy</li>
              <li>Flexible scheduling</li>
            </ul>
          </CardBody>

          <figure className={styles.programFigure}>
            <Image
              src="/crossfit.jpg"
              alt="Athletes doing situps"
              width={500}
              height={450}
              className={styles.programImage}
            />
          </figure>
        </Card>
      </PageWrapper>
      <JoinNow />
    </>
  );
}
