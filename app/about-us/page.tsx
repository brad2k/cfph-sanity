import Heading from "@/components/heading";
import Hero from "@/components/hero";
import JoinNow from "@/components/joinNow";
import PageWrapper from "@/components/pageWrapper";
import Head from "next/head";

export default function AboutUs() {
  return (
    <>
      <Head>
        <title>About us - CrossFit Potrero Hill</title>
      </Head>
      <Hero img="/cfph-hero.jpg" alt="Athletes warming up for a workout">
        <Heading headingLevel="h1">About CrossFit Potrero Hill</Heading>
      </Hero>
      <PageWrapper padding="loose">
        <p>
          In 2009, two friends heard about CrossFit for the first time and
          challenged each other to a WOD (Workout Of the Day) named Murph. Over
          an hour later, they finished and slumped to the ground. A workout had
          never exhausted them quite like that. This led them on a search to
          find the answer to a simple question: What is CrossFit?
        </p>

        <p>
          Within a few months, CrossFit Potrero Hill opened in the back of World
          Gym at the bottom of Potrero Hill in San Francisco. In August 2013,
          CrossFit Potrero Hill was successfully moved across DeHaro Street into
          a refurbished industrial warehouse with more space, better equipment,
          and new energy. With a deep coaching staff and years of experience
          building a CrossFit community, the CrossFit Potrero Hill team offers a
          robust group and personal coaching program. The CrossFit Potrero Hill
          team brings passion, hard work, and dedication to the box every day.
          Athletes of all levels and abilities are always welcomed and
          challenged to meet their fitness goals.
        </p>

        <p>
          After several years, the search to answer that first question “What is
          CrossFit?” continues. However, more important now is another goal: To
          help our athletes find their own answer to this question. The results
          have changed peoples’ lives and health. At CrossFit Potrero Hill, we
          are driven by two fundamental beliefs, that in all areas of our lives
          we strive to be better everyday, and that in each of our endeavors we
          go All In.
        </p>
      </PageWrapper>
      <JoinNow />
    </>
  );
}
