import ButtonLink from "@/components/buttonLink";
import Card, { CardBody, CardGrid, CardHeading } from "@/components/card";
import Heading from "@/components/heading";
import Hero from "@/components/hero";
import PageWrapper from "@/components/pageWrapper";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get started at CrossFit Potrero Hill",
};

export default function GetStarted() {
  return (
    <>
      <Hero img="/cfph-hero.jpg" alt="Athletes warming up for a workout">
        <Heading headingLevel="h1">Get started</Heading>
      </Hero>

      <PageWrapper as="div" padding="tight">
        <Heading headingLevel="h2">What’ll it be?</Heading>
        <p>
          We’re excited to have you join us! We offer a few different paths to
          get you going.
        </p>
      </PageWrapper>

      <PageWrapper padding="loose">
        <CardGrid>
          <Card border>
            <CardBody>
              <CardHeading headingLevel="h3">Free intro</CardHeading>
              <p>
                New to CrossFit? Try out our free intro class and see if
                CrossFit is a good fit for you! We’ll introduce you to the
                CrossFit philosophy and run through an introductory workout.
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
              <CardHeading headingLevel="h3">CrossFit Elements</CardHeading>
              <p>
                Our CrossFit on-ramping program teaches the foundational
                movements we perform in our classes. It is a prerequisite to
                joining CrossFit classes.
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
              <CardHeading headingLevel="h3">Test-out</CardHeading>
              <p>
                Experienced CrossFit athletes can sign up for a membership and
                schedule a test-out.
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
              <CardHeading headingLevel="h3">Drop-in</CardHeading>
              <p>
                Just visiting? Experienced CrossFit athletes can drop in to any
                scheduled class for $35.
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
        </CardGrid>
      </PageWrapper>
    </>
  );
}
