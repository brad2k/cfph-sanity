import Heading from "@/components/heading";
import Hero from "@/components/hero";
import JoinNow from "@/components/joinNow";
import PageWrapper from "@/components/pageWrapper";
import { Metadata } from "next";
import styles from "../locations.module.css";

export const metadata: Metadata = {
  title: "Location - CrossFit South Park",
};

export default function SouthParkLocation() {
  return (
    <>
      <Hero img="/cfsp-hero.jpg" alt="CrossFit South Park gym floor">
        <Heading headingLevel="h1">South Park</Heading>
      </Hero>

      <PageWrapper padding="loose">
        <p className={styles.about}>
          Located in South Park area of SoMa, CFSP is our newest location with
          brand new equipment and tons of training space.
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
            361 Brannan Street
            <br />
            San Francisco, CA 94107
          </p>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.410051976234!2d-122.39302!3d37.780429000000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085810f6c3063ff%3A0xf5342472bb82ee5e!2sCrossFit%20South%20Park!5e0!3m2!1sen!2sus!4v1716242517041!5m2!1sen!2sus"
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
          <li>Opened: 2023</li>
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
          <li>Storage cubbies</li>
          <li>Bike parking</li>
          <li>Snacks available for purchase</li>
        </ul>
      </PageWrapper>
      <JoinNow />
    </>
  );
}
