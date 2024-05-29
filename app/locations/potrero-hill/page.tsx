import Heading from "@/components/heading";
import Hero from "@/components/hero";
import JoinNow from "@/components/joinNow";
import PageWrapper from "@/components/pageWrapper";
import { Metadata } from "next";
import styles from "../locations.module.css";

export const metadata: Metadata = {
  title: "Location - CrossFit Potrero Hill",
};

export default function PotreroHillLocation() {
  return (
    <>
      <Hero img="/cfph-hero.jpg" alt="Athletes warming up for a workout">
        <Heading headingLevel="h1">Potrero Hill</Heading>
      </Hero>

      <PageWrapper padding="loose">
        <p className={styles.about}>
          Located in the Design District of Potrero Hill, our first dedicated
          CrossFit location remains our largest and most popular facility. Our
          renovated warehouse space has all the space and equipment for our
          athletes to push themselves further.
        </p>
      </PageWrapper>

      <PageWrapper className={styles.wrapperGrid} padding="loose">
        <div>
          <Heading
            headingLevel="h2"
            styleAs="h3"
            className={styles.skewedHeading}
          >
            Location
          </Heading>
        </div>

        <div>
          <p>
            175 De Haro Street
            <br />
            San Francisco, CA 94107
          </p>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6307.876470506143!2d-122.40434172423147!3d37.76804641254779!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f7e32a98a760b%3A0x5082a6ace93fc695!2sCrossFit%20Potrero%20Hill!5e0!3m2!1sen!2sus!4v1716229706139!5m2!1sen!2sus"
            width="600"
            height="450"
            style={{ border: "0", marginBlockStart: "2rem" }}
            allow="fullscreen"
            className={styles.iframe}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="CrossFit Potrero Hill's location on Google Maps"
          ></iframe>
        </div>

        <div>
          <Heading
            headingLevel="h2"
            styleAs="h3"
            className={styles.skewedHeading}
          >
            Features
          </Heading>
        </div>

        <ul>
          <li>Opened: 2010</li>
          <li>40ft pull-up rig</li>
          <li>8 lifting platforms</li>
          <li>Assault bikes</li>
          <li>Climbing ropes</li>
          <li>Rowers</li>
          <li>High ceilings for rope climbs</li>
          <li>Mobility & recovery equipment</li>
        </ul>

        <header>
          <Heading
            headingLevel="h2"
            styleAs="h3"
            className={styles.skewedHeading}
          >
            Amenities
          </Heading>
        </header>

        <ul>
          <li>Changing rooms</li>
          <li>Restrooms</li>
          <li>
            Lockers (<abbr title="Bring your own">BYO</abbr> lock)
          </li>
          <li>Bike parking</li>
          <li>"Not bad" street parking by San Francisco standards</li>
          <li>Snacks available for purchase</li>
          <li>
            Public <abbr title="Electric vehicle">EV</abbr> charging available
            next door
          </li>
        </ul>
      </PageWrapper>

      <PageWrapper padding="loose">
        <div>
          <Heading
            headingLevel="h2"
            styleAs="h3"
            className={styles.skewedHeading}
          >
            Virtual tour
          </Heading>
        </div>

        <iframe
          src="https://www.google.com/maps/embed?pb=!4v1716240547358!6m8!1m7!1sCAoSLEFGMVFpcE5BS1B3b3h3b19XeGFjU19NdHJyWXk2TVVEcG9FaVY0VG9DNUhL!2m2!1d37.767797660713!2d-122.40164287705!3f71.28195098931921!4f7.1857703448176125!5f0.7925236573033207"
          width="600"
          height="450"
          style={{
            border: 0,
            aspectRatio: "16 / 9",
            marginBlockStart: "2rem",
          }}
          allow="fullscreen"
          className={styles.iframe}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="A virtual walkthrough of CrossFit Potrero Hill's facility on Google Maps"
        ></iframe>
      </PageWrapper>
      <JoinNow />
    </>
  );
}
