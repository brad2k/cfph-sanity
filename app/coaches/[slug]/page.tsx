import Heading from "@/components/heading";
import JoinNow from "@/components/joinNow";
import PageWrapper from "@/components/pageWrapper";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import styles from "../styles.module.css";

import { groq, type SanityDocument } from "next-sanity";

import Owl from "@/components/owl";
import { sanityFetch } from "@/sanity/client";
import clsx from "clsx";

export const IMAGES: Record<string, string> = {
  "alexis-garrod":
    "https://images.squarespace-cdn.com/content/v1/6477b94136ccff61ffe0fd19/ff40e758-25c7-4c6c-bfc0-6b5213699db2/Alexis.jpg?format=1000w",
  "rachel-bradford":
    "https://images.squarespace-cdn.com/content/v1/6477b94136ccff61ffe0fd19/e6430b0c-88bb-4150-9af8-79a6668be6ef/Rachel.jpg?format=1000w",
  "chris-comma":
    "https://images.squarespace-cdn.com/content/v1/6477b94136ccff61ffe0fd19/0e5b73f3-d62b-45d8-98ed-da9b51eb3397/Chris.jpg?format=1000w",
  "marciano-pimentel":
    "https://images.squarespace-cdn.com/content/v1/6477b94136ccff61ffe0fd19/4dd9bece-8d88-4b41-bce8-232151292b26/9.jpg?format=1000w",
  "amber-pace":
    "https://images.squarespace-cdn.com/content/v1/6477b94136ccff61ffe0fd19/2cede5d7-55d8-4ae5-916b-e74df1c3805f/amber+pace.jpg?format=1000w",
  "liran-krell":
    "https://images.squarespace-cdn.com/content/v1/6477b94136ccff61ffe0fd19/16aa6ad4-99b3-4495-88b1-2f9cd6e9e23c/Liran.jpg?format=1000w",
  "nadia-khan":
    "https://images.squarespace-cdn.com/content/v1/6477b94136ccff61ffe0fd19/dfb81896-71f0-4d07-ac1c-dea819b5944f/10.jpg?format=1000w",
  "canessa-swanson-swett":
    "https://images.squarespace-cdn.com/content/v1/6477b94136ccff61ffe0fd19/c6a25491-49e0-40cb-8470-cd92b087969f/7.jpg?format=1000w",
  "becca-faulkner ":
    "https://images.squarespace-cdn.com/content/v1/6477b94136ccff61ffe0fd19/8392a254-95e2-4622-b746-f2788ca50e00/8.jpg?format=1000w",
  "mark-swett":
    "https://images.squarespace-cdn.com/content/v1/6477b94136ccff61ffe0fd19/65421dfa-9fe2-4152-b690-89246e57b6c3/9+copy.jpg?format=1000w",
};

const COACH_QUERY = groq`*[
    _type == "coach" &&
    slug.current == $slug
  ][0]{
    name,
    role,
    bio,
    certifications[]->{
      title
    },
    fullBio
}`;

export default async function CoachPage({
  params,
}: {
  params: { slug: string };
}) {
  console.log(params);
  const coach = await sanityFetch<SanityDocument>({
    query: COACH_QUERY,
    params,
  });

  return (
    <>
      <PageWrapper padding="loose" className={styles.coachPageGrid} owl={false}>
        <Owl>
          <Heading headingLevel="h1" styleAs="h4">
            <span className={styles.coachLabel}>{coach.role}</span>
            {coach?.name}
          </Heading>
          <p>{coach?.bio}</p>
          {coach?.fullBio && <PortableText value={coach.fullBio} />}
        </Owl>
        <div>
          <figure className={clsx(styles.coachFigure, styles.coachPageFigure)}>
            <Image
              alt={coach.name}
              width={1000}
              height={1250}
              className={styles.coachPhoto}
              src={IMAGES[params.slug]}
            />
          </figure>
        </div>
      </PageWrapper>
      <JoinNow />
    </>
  );
}
