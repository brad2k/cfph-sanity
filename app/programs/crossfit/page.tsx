import PageWrapper from "@/components/pageWrapper";
import Heading from "@/components/heading";
import styles from "../programs.module.css";
import Hero from "@/components/hero";
import Card, { CardBody, CardHeading } from "@/components/card";
import Image from "next/image";
import JoinNow from "@/components/joinNow";
import Head from "next/head";

export default function ProgramCrossFit() {
  return (
    <>
      <Head>
        <title>CrossFit classes - CrossFit Potrero Hill</title>
      </Head>
      <Hero img="/cfph-hero.jpg" alt="Athletes warming up for a workout">
        <Heading headingLevel="h1">CrossFit</Heading>
      </Hero>

      <PageWrapper padding="loose">
        <Heading headingLevel="h2">What is CrossFit?</Heading>

        <p>
          CrossFit isn’t just about barbells or flipping tires—it’s a full-body
          workout that combines olympic weight lifting, gymnastics, and cardio
          into fun, functional workouts to help you hit your fitness goals and
          push yourself to new heights. Every day is different, so you’ll never
          get bored and your body will never plateau from a single movement.
        </p>
      </PageWrapper>

      <PageWrapper padding="loose" className={styles.root}>
        <Card className={styles.programGrid} background={false}>
          <CardBody>
            <CardHeading headingLevel="h3">
              CrossFit is for everyone
            </CardHeading>
            <p>
              Our workouts are designed to be accessible for all, whether you’re
              a beginner or a competitive athlete. We provide scaled options for
              all workouts to adapt the weight, movement, or rep scheme to meet
              you where you’re at. Our coaches can offer modifications to work
              around injuries or limitations.
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

        <Card className={styles.programGrid} background={false}>
          <CardBody>
            <CardHeading headingLevel="h3">We’ve got your back</CardHeading>
            <p>
              All workouts are coach-led with limited class sizes to ensure that
              we’re supporting you in performing the movements safely and
              effectively. We work out as a community to support and motivate
              one another, celebrating our wins.
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

        <Card className={styles.programGrid} background={false}>
          <CardBody>
            <CardHeading headingLevel="h3">What to expect</CardHeading>
            <p>
              Classes begin with a targeted warmup followed by a demonstration
              of the movements in the workout of the day. Depending on the day,
              there may be dedicated skill development, separate strength and
              workout cycles, and/or time for mobility. The entire class is lead
              by a CrossFit-certified coach to help you get the most out of your
              workout.
            </p>

            <p>You’ll be in and out in an hour.</p>
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

        <Card className={styles.programGrid} background={false}>
          <CardBody>
            <CardHeading headingLevel="h3">Sample workout</CardHeading>
            <p>
              <b>For time:</b>
            </p>

            <p>
              21 kettlebell swings 70/53 lbs.
              <br />
              3 toes-to-bar
              <br />
              18 kettlebell swings
              <br />
              6 toes-to-bar
              <br />
              15 kettlebell swings
              <br />
              9 toes-to-bar
              <br />
              12 kettlebell swings
              <br />
              12 toes-to-bar
              <br />
              9 kettlebell swings
              <br />
              15 toes-to-bar
              <br />
              6 kettlebell swings
              <br />
              18 toes-to-bar
              <br />
              3 kettlebell swings
              <br />
              21 toes-to-bar
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
