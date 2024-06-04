import Heading from "@/components/heading";
import Hero from "@/components/hero";
import JoinNow from "@/components/joinNow";
import PageWrapper from "@/components/pageWrapper";

export default function Page() {
  return (
    <>
      <Hero img="/cfph-hero.jpg" alt="Athletes warming up for a workout">
        <Heading headingLevel="h1">Frequently asked questions</Heading>
      </Hero>
      <PageWrapper padding="loose">
        <Heading headingLevel="h2">New members</Heading>
        <details>
          <summary>What is CrossFit?</summary>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </details>
        <details>
          <summary>Is there an age limit?</summary>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </details>
        <details>
          <summary>Can I bring my dog?</summary>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </details>
        <details>
          <summary>Do you have parking?</summary>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </details>
        <details>
          <summary>Can I work out with an injury?</summary>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </details>
      </PageWrapper>

      <PageWrapper padding="loose">
        <Heading headingLevel="h2">Existing members</Heading>
        <details>
          <summary>How do I pause my membership?</summary>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </details>
        <details>
          <summary>How do I cancel my membership?</summary>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </details>
        <details>
          <summary>Where can I find the dog waiver form?</summary>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </details>
        <details>
          <summary>Where can I provide feedback?</summary>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </details>
      </PageWrapper>

      <JoinNow />
    </>
  );
}
