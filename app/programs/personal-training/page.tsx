import PageWrapper from "@/components/pageWrapper";
import Heading from "@/components/heading";
import styles from "../programs.module.css";
import Hero from "@/components/hero";
import Card, { CardBody, CardHeading } from "@/components/card";
import Image from "next/image";
import JoinNow from "@/components/joinNow";
import Head from "next/head";

export default function ProgramPersonalTraining() {
  return (
    <>
      <Head>
        <title>Personal training - CrossFit Potrero Hill</title>
      </Head>
      <Hero img="/cfph-hero.jpg" alt="Athletes warming up for a workout">
        <Heading headingLevel="h1">Personal training</Heading>
      </Hero>

      <PageWrapper padding="loose">
        <Heading headingLevel="h2">
          Prefer a personal touch?
          <br />
          We’ve got you covered.
        </Heading>

        <p>
          Do you have a specific goal or want to work on a specific skill? Our
          team of coaches can develop a plan just for you. Working privately
          with a coach will allow them to develop a holistic approach to meet
          your goals, from your lifestyle, diet, and a custom workout designed
          for your unique needs and schedule.
        </p>
      </PageWrapper>

      <PageWrapper className={styles.root} padding="loose">
        <Card className={styles.programGrid} background={false}>
          <CardBody>
            <CardHeading headingLevel="h3">What to expect</CardHeading>
            <p>
              The time is yours. Work with your coach to set your goals and
              develop a plan. Some athletes choose to compliment their personal
              training with occasional CrossFit classes.
            </p>

            <p>
              What ever your goal is, our team of experienced and
              CrossFit-certified coaches will help you get there.
            </p>
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
