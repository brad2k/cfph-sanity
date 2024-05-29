import PageWrapper from "@/components/pageWrapper";
import Heading from "@/components/heading";
import styles from "../programs.module.css";
import Hero from "@/components/hero";
import Card, { CardBody, CardHeading } from "@/components/card";
import Image from "next/image";
import JoinNow from "@/components/joinNow";
import Head from "next/head";

export default function ProgramCrossFitOnRamp() {
  return (
    <>
      <Head>
        <title>CrossFit On-ramping - CrossFit Potrero Hill</title>
      </Head>
      <Hero img="/cfph-hero.jpg" alt="Athletes warming up for a workout">
        <Heading headingLevel="h1">CrossFit on-ramp</Heading>
      </Hero>

      <PageWrapper padding="loose">
        <Heading headingLevel="h2">Let’s get started</Heading>

        <p>
          Your CrossFit journey begins with learning the lingo and the
          fundamentals of Olympic and power lifting to safely and effectively
          complete the movements. CrossFit Elements is our comprehensive
          on-ramping program for athletes new to CrossFit, but experienced
          athletes can skip ahead and test out with one of our coaches. Private
          on-ramping is available for those who prefer a more personalized
          introduction.
        </p>
      </PageWrapper>

      <PageWrapper className={styles.root} padding="loose">
        <Card className={styles.programGrid} background={false}>
          <CardBody>
            <CardHeading headingLevel="h3">What to expect</CardHeading>
            <p>
              CrossFit Elements is series of small group classess for new
              athletes to work with a coach to learn the mechanics of the
              movements we perform in our regular CrossFit classes. Each class
              will focus on a different group of movements followed by a short
              <abbr title="Workout of the day">WOD</abbr>, so you’ll still leave
              with a good workout. Class sizes are small and you’ll have the
              personal attention from a coach to ensure you can confidently
              complete our regular programming.
            </p>

            <p>
              CrossFit Elements classes are scheduled weekday mornings and you
              are free to attend as many as you would like until you feel ready
              to schedule your 1:1 test out with a coach. Most people can
              complete their Elements training in ~5 sessions.
            </p>

            <p>
              Private on-ramping is available for those who prefer personalized
              introduction or struggle with morning classes.
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
