import ButtonLink from "@/components/buttonLink";
import Card, { CardBody, CardHeading } from "@/components/card";
import Heading from "@/components/heading";
import Hero from "@/components/hero";
import PageWrapper from "@/components/pageWrapper";
import clsx from "clsx";
import { Metadata } from "next";
import styles from "./membership.module.css";

export const metadata: Metadata = {
  title: "Membership options - CrossFit Potrero Hill",
};

export default function Membership() {
  return (
    <>
      <Hero img="/cfph-hero.jpg" alt="Athletes warming up for a workout">
        <Heading headingLevel="h1">Membership</Heading>
      </Hero>

      <PageWrapper padding="tight" owl={false}>
        <div className={styles.root}>
          <Card border className={styles.intro}>
            <CardBody>
              <CardHeading
                headingLevel="h2"
                styleAs="h3"
                className={styles.accent}
              >
                Free intro
              </CardHeading>
              <p>
                New to CrossFit? Try out our free intro class and see if
                CrossFit is a good fit for you! We’ll introduce you to the
                CrossFit philosophy and run through an introductory workout.
              </p>

              <p>
                Introductory classes run Saturdays at South Park and Sundays at
                Potrero Hill.
              </p>

              <ButtonLink
                href="https://crossfitpotrerohill.wodify.com/OnlineSalesPortal/Sessions.aspx?LocationId=9289"
                rel="noopener"
                variant="primary"
              >
                Get started
              </ButtonLink>
            </CardBody>
          </Card>

          <Card border>
            <CardBody>
              <CardHeading headingLevel="h2" styleAs="h3">
                2x /week
              </CardHeading>
              <strong className={styles.price}>$219 /month</strong>
              <strong className={clsx(styles.price, styles.discount)}>
                $1,248 /6 months
                <span className={styles.savings}>&uarr; Save $11 /month!</span>
              </strong>
              <strong className={clsx(styles.price, styles.discount)}>
                $2,365 /12 months
                <span className={styles.savings}>&uarr; Save $22 /month!</span>
              </strong>
              <ButtonLink
                href="https://crossfitpotrerohill.wodify.com/OnlineSalesPortal/Plans.aspx?LocationId=0#"
                rel="noopener"
                className={styles.cta}
                variant="primary"
              >
                Get started
              </ButtonLink>
              <ul>
                <li>9 classes per month</li>
                <li>Access to Open Gym</li>
                <li>Access to all locations</li>
              </ul>
            </CardBody>
          </Card>

          <Card border>
            <CardBody>
              <CardHeading headingLevel="h2" styleAs="h3">
                3x /week
              </CardHeading>

              <strong className={styles.price}>$259 /month</strong>
              <strong className={clsx(styles.price, styles.discount)}>
                $1,476 /6 months
                <span className={styles.savings}>&uarr; Save $13 /month!</span>
              </strong>
              <strong className={clsx(styles.price, styles.discount)}>
                $2,797 /12 months
                <span className={styles.savings}>&uarr; Save $26 /month!</span>
              </strong>

              <ButtonLink
                href="https://crossfitpotrerohill.wodify.com/OnlineSalesPortal/Plans.aspx?LocationId=0#"
                rel="noopener"
                className={styles.cta}
                variant="primary"
              >
                Get started
              </ButtonLink>

              <ul>
                <li>13 classes per month</li>
                <li>Access to Open Gym</li>
                <li>Access to all locations</li>
              </ul>
            </CardBody>
          </Card>

          <Card border>
            <CardBody>
              <CardHeading headingLevel="h2" styleAs="h3">
                Unlimited
              </CardHeading>

              <strong className={styles.price}>$299 /month</strong>
              <strong className={clsx(styles.price, styles.discount)}>
                $1,704 /6 months
                <span className={styles.savings}>&uarr; Save $15 /month!</span>
              </strong>
              <strong className={clsx(styles.price, styles.discount)}>
                $3,229 /12 months
                <span className={styles.savings}>&uarr; Save $30 /month!</span>
              </strong>

              <ButtonLink
                href="https://crossfitpotrerohill.wodify.com/OnlineSalesPortal/Plans.aspx?LocationId=0#"
                rel="noopener"
                className={styles.cta}
                variant="primary"
              >
                Get started
              </ButtonLink>

              <ul>
                <li>Unlimited classes!</li>
                <li>Access to Open Gym</li>
                <li>Access to all locations</li>
              </ul>
            </CardBody>
          </Card>

          <p className={styles.intro}>
            Membership is for athletes who have successfully completed our
            Elements on-ramping or have been regularly training at another
            CrossFit gym.
          </p>
        </div>
      </PageWrapper>

      <section className={styles.process}>
        <PageWrapper padding="tight" as="div">
          <Heading headingLevel="h3">Joining is easy</Heading>
          <ol>
            <li>
              Click "Get started" above to be taken to Wodify, our scheduling
              software.
            </li>
            <li>
              Select the plan of your choice. You may be prompted to choose a
              location, but the price is the same and all memberships allow
              access at both locations.
            </li>
            <li>
              You’ll need to create a Wodify account if you don't already have
              one, which you'll use later to sign up for classes.
            </li>
            <li>
              <div>
                You’re set! Now download the Wodify app and book a class.
              </div>
              <a
                href="https://apps.apple.com/us/app/wodify/id1563729830?itsct=apps_box_badge&amp;itscg=30200"
                style={{
                  display: "inline-block",
                  verticalAlign: "middle",
                  overflow: "hidden",
                  borderRadius: "13px",
                  width: "190px",
                  height: "63px",
                  marginRight: "2rem",
                }}
              >
                <img
                  src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/white/en-us?size=250x83&amp;releaseDate=1619481600"
                  alt="Download on the App Store"
                  style={{
                    borderRadius: "13px",
                    width: "190px",
                    height: "63px",
                  }}
                />
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.wodify.client.prd&pcampaignid=web_share&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"
                style={{
                  display: "inline-block",
                  verticalAlign: "middle",
                  overflow: "hidden",
                  borderRadius: "13px",
                  width: "233px",
                  height: "90px",
                }}
              >
                <img
                  alt="Get it on Google Play"
                  src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                />
              </a>
            </li>
          </ol>
        </PageWrapper>
      </section>
    </>
  );
}
