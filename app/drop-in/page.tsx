import ButtonLink from "@/components/buttonLink";
import Card, { CardBody } from "@/components/card";
import Heading from "@/components/heading";
import Hero from "@/components/hero";
import PageWrapper from "@/components/pageWrapper";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Drop in at CrossFit Potrero Hill",
};

export default function DropIn() {
  return (
    <>
      <Hero img="/cfph-hero.jpg" alt="Athletes warming up for a workout">
        <Heading headingLevel="h1">Drop in</Heading>
      </Hero>

      <PageWrapper padding="loose">
        <Heading headingLevel="h2" styleAs="h4">
          Welcome, visiting CrossFitters!
        </Heading>

        <Card border>
          <CardBody>
            <p>
              Experienced CrossFit athletes who train regularly and are
              comfortable with all movements can drop in to any scheduled class
              for <strong>$35</strong>. We aren’t able to accommodate skill
              refresh or foundational instruction during a normal class.
            </p>

            <p>
              Athletes new to CrossFit can check out a{" "}
              <Link href="/get-started">free introductory class</Link>.
            </p>

            <p>
              Sign up for a class using the link below, but please arrive 10
              minutes early to sign a waiver and acclimate with our box.
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
      </PageWrapper>
    </>
  );
}
