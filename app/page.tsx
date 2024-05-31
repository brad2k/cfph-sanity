import ButtonLink from "@/components/buttonLink";
import Card, { CardBody, CardHeading } from "@/components/card";
import Heading from "@/components/heading";
import Hero from "@/components/hero";
import PageWrapper from "@/components/pageWrapper";
import Dumbell from "@/icons/dumbell";
import Locations from "@/icons/locations";
import Wave from "@/icons/wave";
import Image from "next/image";
import styles from "./page.module.css";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "CrossFit Potrero Hill",
};

export default function Home() {
  return (
    <>
      <Hero
        img="/cfph-hero.jpg"
        alt="Athletes warming up for a workout"
        className={styles.hero}
      >
        <Heading headingLevel="h1">CrossFit Potrero Hill</Heading>
        <p>
          San Francisco’s largest CrossFit community committed to helping our
          diverse members hit their fitness goals.
        </p>
        <p className={styles.heroTagline}>We are ALL IN on fitness.</p>
        <ButtonLink href="/free-intro" variant="primary" grow>
          Schedule your free intro &#10132;
        </ButtonLink>
      </Hero>

      <PageWrapper padding="tight" className={styles.features} owl={false}>
        <Card border>
          <CardBody>
            <Wave />
            <CardHeading styleAs="h4">Everyone is welcome</CardHeading>
            <p>
              Community is at the core of who we are. We consider ourselves a
              family, and strive to provide a welcoming and inclusive
              environment for all, whether you’re new to fitness or a seasoned
              athlete.
            </p>
          </CardBody>
        </Card>

        <Card border>
          <CardBody>
            <Dumbell />
            <CardHeading styleAs="h4">Fun & effective workouts</CardHeading>
            <p>
              Diverse workouts combining strength training, gymnastics, and
              cardio. Workouts can be be scaled to meet you where you’re at and
              be adapted to injuries or limitations.
            </p>
          </CardBody>
        </Card>

        <Card border>
          <CardBody>
            <Locations />
            <CardHeading styleAs="h4">Two locations</CardHeading>
            <p>
              Members have access to our Potrero Hill and South Park locations
              with up to eight classes offered at each and the option for open
              gym.
            </p>
          </CardBody>
        </Card>
      </PageWrapper>

      <PageWrapper padding="loose" className={styles.programs}>
        <Heading headingLevel="h2">Choose a program that fits you!</Heading>

        <Card className={styles.programGrid} background={false}>
          <div>
            <CardHeading headingLevel="h3">CrossFit</CardHeading>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              arcu arcu, cursus at ipsum at, dignissim egestas orci. Morbi
              tincidunt sit amet orci ut ornare.
            </p>
          </div>

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
          <div>
            <CardHeading headingLevel="h3">Elements</CardHeading>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              arcu arcu, cursus at ipsum at, dignissim egestas orci. Morbi
              tincidunt sit amet orci ut ornare.{" "}
            </p>
          </div>

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
          <div>
            <CardHeading headingLevel="h3">Open Gym</CardHeading>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              arcu arcu, cursus at ipsum at, dignissim egestas orci. Morbi
              tincidunt sit amet orci ut ornare.{" "}
            </p>
          </div>

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
          <div>
            <CardHeading headingLevel="h3">Personal training</CardHeading>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              arcu arcu, cursus at ipsum at, dignissim egestas orci. Morbi
              tincidunt sit amet orci ut ornare.
            </p>
          </div>

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

      <section className={styles.gettingStarted}>
        <PageWrapper as="div" padding="tight">
          <div className={styles.gettingStartedGrid}>
            <div className={styles.listWrap}>
              <Heading styleAs="h3">Getting started is easy</Heading>

              <ol className={styles.gettingStartedList}>
                <li className={styles.gettingStartedItem}>
                  <Heading headingLevel="h3" styleAs="h4">
                    <strong className={styles.gettingStartedSubhead}>
                      Step one <i aria-hidden>&rarr;</i>
                    </strong>
                    <span className={styles.gettingStartedHeading}>
                      Try it out
                    </span>
                  </Heading>

                  <p>
                    New to CrossFit? Try out our free <b>Intro Class</b> and see
                    if CrossFit is a good fit for you!
                  </p>
                </li>

                <li className={styles.gettingStartedItem}>
                  <Heading headingLevel="h3" styleAs="h4">
                    <strong className={styles.gettingStartedSubhead}>
                      Step two <i aria-hidden>&rarr;</i>
                    </strong>
                    <span className={styles.gettingStartedHeading}>
                      On-ramp
                    </span>
                  </Heading>

                  <p>
                    Our comprehensive on-ramp program can help you get
                    comfortable with the coaches, facility, and movements in
                    just a few weeks.
                  </p>
                </li>

                <li className={styles.gettingStartedItem}>
                  <Heading headingLevel="h3" styleAs="h4">
                    <strong className={styles.gettingStartedSubhead}>
                      Step three <i aria-hidden>&rarr;</i>
                    </strong>
                    <span className={styles.gettingStartedHeading}>
                      Crush it!
                    </span>
                  </Heading>

                  <p>
                    You’re good to go—sign up for one of our memberships and
                    join our community to reach your fitness goals.
                  </p>
                </li>
              </ol>
            </div>

            <figure className={styles.gettingStartedFigure}>
              <Image
                src="/crossfit-2.jpg"
                alt="An athlete doing a push press"
                style={{ objectFit: "cover" }}
                fill={true}
              />
            </figure>
          </div>
        </PageWrapper>
      </section>
    </>
  );
}
