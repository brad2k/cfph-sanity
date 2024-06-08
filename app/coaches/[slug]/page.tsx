import Heading from "@/components/heading";
import Hero from "@/components/hero";
import JoinNow from "@/components/joinNow";
import PageWrapper from "@/components/pageWrapper";

import { PortableText, type SanityDocument } from "next-sanity";

import { client, sanityFetch } from "@/sanity/client";

const EVENT_QUERY = `*[
    _type == "event" &&
    slug.current == $slug
  ][0]{
  ...,
  headline->,
  venue->
}`;

export default async function CoachPage({
  params,
}: {
  params: { slug: string };
}) {
  const event = await sanityFetch<SanityDocument>({
    query: EVENT_QUERY,
    params,
  });

  return (
    <>
      <Hero img="/cfph-hero.jpg" alt="Athletes warming up for a workout">
        <Heading headingLevel="h1">Single coach page</Heading>
      </Hero>
      <PageWrapper padding="loose">I am a coach</PageWrapper>
      <JoinNow />
    </>
  );
}
