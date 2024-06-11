import Heading from "@/components/heading";
import Hero from "@/components/hero";
import JoinNow from "@/components/joinNow";
import PageWrapper from "@/components/pageWrapper";
import { Metadata } from "next";
import styles from "./styles.module.css";

import { sanityFetch } from "@/sanity/client";
import { groq, SanityDocument } from "next-sanity";
import Link from "next/link";

const COACHES_QUERY = groq`*[_type == "coach"]{_id, name, role, slug}|order(name desc)`;

export const metadata: Metadata = {
  title: "Coaches - CrossFit Potrero Hill",
};

export const IMAGES: Record<string, string> = {
  "alexis-garrod":
    "https://images.squarespace-cdn.com/content/v1/633e5ea06ff19b3170e4ea41/5c733c42-9d2a-42d3-9e7f-1189db8ce3fa/2Q0A1592_crop.jpg",
  "rachel-bradford":
    "https://images.squarespace-cdn.com/content/v1/633e5ea06ff19b3170e4ea41/c058693c-999c-4d72-a066-189efb53662a/2Q0A1536_crop.jpg",
  "chris-comma":
    "https://images.squarespace-cdn.com/content/v1/633e5ea06ff19b3170e4ea41/e3d80e17-9a4f-4bfa-b306-11c1225e99e8/2Q0A1569_crop.jpg",
  "marciano-pimentel":
    "https://images.squarespace-cdn.com/content/v1/633e5ea06ff19b3170e4ea41/90b6b52b-c1f3-4908-af36-0cd7752fe8d5/2Q0A1689_crop.jpg",
  "amber-pace":
    "https://images.squarespace-cdn.com/content/v1/633e5ea06ff19b3170e4ea41/b7f62b3a-725a-432e-8c8b-d6a595f44377/2Q0A1577_crop.jpg",
  "mike-cicciarelli":
    "https://images.squarespace-cdn.com/content/v1/633e5ea06ff19b3170e4ea41/ec2df456-0bda-4ef7-b9d0-b5e9a07f43ac/2Q0A1509_crop.jpg",
  "nadia-khan":
    "https://images.squarespace-cdn.com/content/v1/6477b94136ccff61ffe0fd19/8960f642-2eda-4e55-b4be-eebdf6730cf4/IMG_1082.jpg",
};

const ROLE_LABELS: Record<string, string> = {
  coach: "Coach",
  headCoach: "Head coach",
};

export default async function Coaches() {
  const coaches = await sanityFetch<SanityDocument[]>({ query: COACHES_QUERY });

  return (
    <>
      <Hero img="/cfph-hero.jpg" alt="Athletes warming up for a workout">
        <Heading headingLevel="h1">Coaches</Heading>
      </Hero>

      <PageWrapper padding="loose">
        <ul className={styles.root}>
          {coaches.map((coach) => (
            <li key={coach._id}>
              <Link
                href={`/coaches/${coach.slug.current}`}
                className={styles.coach}
              >
                <figure className={styles.coachFigure}>
                  <img
                    alt={coach.name}
                    width={2500}
                    height={3125}
                    className={styles.coachPhoto}
                    src={IMAGES[coach.slug.current]}
                  />
                </figure>

                <Heading headingLevel="h2" styleAs="h4">
                  {coach?.role && (
                    <span className={styles.coachLabel}>
                      {ROLE_LABELS[coach.role]}
                    </span>
                  )}
                  {coach?.name && (
                    <span className={styles.coachName}>{coach.name}</span>
                  )}
                </Heading>
              </Link>
            </li>
          ))}
        </ul>

        {/* <p>
              Alexis is no cowgirl to joke about. With 15 year experience as an
              Equestrian Vaulter, she can do handstands on a moving horse —
              don’t try this at home even if you have a horse (this makes her a
              great person to get some extra coaching on your handstands). She
              moved to San Francisco to study exercise science at SFSU, and
              received her B.S. in Kinesiology in 2010. Also a personal trainer
              for World Gym, she discovered CrossFit as Eric Wittenberg was
              erecting the “cage” in the back of the gym. Constantly peering in,
              and wanting to try, Joe Talmadge took her in and introduced her to
              her first WOD. Hooked by the high intensity and community aspect,
              CrossFit makes her happy by feeling as if she is playing a sport
              and is part of a team again. As our CFPH mission statement states
              we train to become better at life and this is her motivation to
              keep pushing and stay CrossFitting!
            </p>

            <Heading headingLevel="h3" styleAs="h4">
              Q&A
            </Heading>

            <ol>
              <li>
                Why do you CrossFit?
                <p>
                  It’s the closest thing to being part of a sport again—with
                  meaningful scores, constantly challenging, and especially the
                  awesome community.
                </p>
              </li>
              <li>
                What’s your favorite WOD?
                <p>Filthy Fifty</p>
              </li>
              <li>
                If you could be immediately transported anywhere in the world to
                perform a WOD, where would it be?
                <p>
                  A warm place where all my CrossFit friends are simultaneously,
                  because nothing beats WODing with your friends.
                </p>
              </li>
              <li>
                Please make up a secret identity for yourself.
                <p>
                  My name is Shakira. I am a pop star from Colombia. Famous for
                  the song “Hips Don’t Lie”.
                </p>
              </li>
              <li>
                How do you eat?
                <p>
                  Gluten-Free, because I love chocolate and yogurt too much for
                  Paleo.
                </p>
              </li>
              <li>
                Interests &amp; hobbies?
                <p>
                  Dancing, acrobatics, travel, motorcycle riding on the coast,
                  bicycle rides in the city, the beach, steak dinner, wine and
                  CrossFit competitions.
                </p>
              </li>
            </ol>

            <Heading headingLevel="h3" styleAs="h4">
              Skills
            </Heading>

            <ul>
              <li>B.S. Kinesiology</li>
              <li>CrossFit Level 1 Trainer (CF-L1)</li>
              <li>CrossFit Level 2 Trainer (CF-L2)</li>
              <li>CrossFit Level 3 Trainer (CF-L3)</li>
              <li>CrossFit Mobility</li>
              <li>USAW</li>
              <li>Freestyle Connection</li>
              <li>CrossFit Adaptive</li>
            </ul> */}

        {/* <p>
              I was born and raised in CA, where I grew up with a family that
              loved sports. I played basketball, softball, and competed in track
              and field as a youth. My husband and I moved to Scotland where we
              lived for 11 years and had 3 kids along the way! I was introduced
              to CrossFit while in Scotland and was hooked immediately loving
              the combination of competition and community. I gained my CrossFit
              Level 1 Certification and began coaching there. We moved to San
              Francisco in 2014, and I continued to coach CF working at another
              box in the City. I currently coach classes at all three Hopper
              Life locations: CrossFit South Park, CrossFit Potrero Hill, and
              CrossFit Mission Bay.
            </p>

            <Heading headingLevel="h3" styleAs="h4">
              Q&A
            </Heading>

            <ol>
              <li>
                Why do you CrossFit?
                <p>
                  Because I LOVE it! I love the feeling of accomplishment after
                  a WOD, but most of all I love the camaraderie. There’s nothing
                  better than encouraging the person next to you in the middle
                  of a WOD.
                </p>
              </li>
              <li>
                What’s your favorite WOD?<p>Grace</p>
              </li>
              <li>
                If you could be immediately transported anywhere in the world to
                perform a WOD, where would it be?<p>New Zealand</p>
              </li>
              <li>
                How do you eat?
                <p>
                  I put food in my mouth, chew and swallow. Just joking! I don’t
                  follow any strict dietary regimens. I mainly stick to a good
                  balance of Protein, Carbs, Fats, Fruits, and Vegetables. I am
                  very fortunate that I have a husband who is a great cook and
                  does weekly meal prep for our lunches.
                </p>
              </li>
              <li>
                Interests &amp; hobbies?
                <p>Aerial, watching rugby, beach trips, camping</p>
              </li>
            </ol>

            <Heading headingLevel="h3" styleAs="h4">
              Skills
            </Heading>

            <ul>
              <li>CrossFit Level 1 Trainer (CF-L1)</li>
              <li>CrossFit Level 2 Trainer (CF-L2)</li>
              <li>CrossFit Level 3 Trainer (CF-L3)</li>
              <li>USAW Level 1 Certification</li>
            </ul> */}

        {/* <p>
              I was born and raised in Brooklyn, NY where I grew up with a love
              of baseball, which I played through High School. I subsequently
              served four (4) years in the US Navy followed by college and law
              school. I discovered CrossFit later in my life as I was in a
              running club training for 1/2 marathons and it was recommended to
              me as augmented training for this passion in Dallas, TX. What
              began as a training tool became my passion and outlet as I have
              met many of my closest friends and work colleagues through
              CrossFit. I completed my CF-L1 Certification in 2012 and began
              coaching in 2018 at another CrossFit Gym here in San Francisco. I
              moved to CrossFit Potrero Hill in 2020, and now I coach at all
              three Hopper Life locations: CrossFit South Park, CrossFit Potrero
              Hill, and CrossFit Mission Bay.
            </p>

            <p>
              Currently, outside of coaching, I am an Executive Director of HR
              Consulting and Talent Acquisition for a large healthcare system
              here in the Bay Area. Additionally, I serve as the President and
              Founder of Westside Athletes Association, a non-profit providing
              sponsorships to persons who have never tried CrossFit to assist it
              being affordable and sustainable.
            </p>

            <Heading headingLevel="h3" styleAs="h4">
              Q&A
            </Heading>

            <ol>
              <li>
                Why do you CrossFit?
                <p>
                  The through line in my life is transformation: Transforming
                  companies and people through unlocking potential. We get to do
                  this by voluntarily taking on or doing hard things and through
                  adversity, in my opinion.
                </p>
              </li>
              <li>
                What’s your favorite WOD?
                <p>Hellen</p>
              </li>
              <li>
                If you could be immediately transported anywhere in the world to
                perform a WOD, where would it be?
                <p>O’ahu, Hawai’i</p>
              </li>
              <li>
                Please make up a secret identity for yourself.
                <p>
                  There is no secret identity as my nickname is Lord Governor or
                  The Governor.
                </p>
              </li>
              <li>
                How do you eat?
                <p>
                  Macro Nutrients set by my nutrition coach based on a paleo
                  diet.
                </p>
              </li>
              <li>
                Interests &amp; hobbies?
                <p>
                  CrossFit, Gymnastics, Olympic Weightlifting, Macro-Economics,
                  Constitutional Law, Employment and Labor Law, Behavioral
                  Economics, Baseball, American Football, and Music.
                </p>
              </li>
            </ol>

            <Heading headingLevel="h3" styleAs="h4">
              Skills
            </Heading>

            <ul>
              <li>CrossFit Level 1 Trainer (CF-L1)</li>
              <li>CrossFit Level 2 Trainer (CF-L2)</li>
              <li>CrossFit Level 3 Trainer (CF-L3)</li>
              <li>USAW Level 2 Certification</li>
              <li>CrossFit Gymnastics</li>
              <li>CrossFit Endurance</li>
              <li>CrossFit Weightlifting</li>
              <li>CrossFit Mobility</li>
              <li>CrossFit Nutrition Course</li>
              <li>CrossFit Kettlebell Course</li>
              <li>Precision Nutrition Level 1</li>
            </ul> */}

        {/* <p>
              As long-distance runner, I never did weight training. One day, I
              stepped on a curb wrong while running and threw my back out. My
              brother, Victor, was coaching CrossFit at the time and was always
              bugging me to join. After my doctor told me I needed to start
              strength training, I called up my brother to help me. And I
              haven’t looked back!
            </p>

            <p>
              I want to make people stronger in life and be able to tackle any
              physical problem that comes their way so that they can live a
              healthier, longer life. I specialize in training for longer,
              endurance-type situations while having the power and strength to
              muscle through certain situations. If you are looking to try a
              Spartan Race, I’m your guy!
            </p>

            <Heading headingLevel="h3" styleAs="h4">
              Q&A
            </Heading>

            <ol>
              <li>
                Why do you CrossFit?
                <p>
                  At first, it was to improve my running. Now it’s a lifestyle
                  and a fun thing to do. I just want to become stronger and stay
                  fit.
                </p>
              </li>
              <li>
                What’s your favorite WOD?
                <p>Fight Gone Bad </p>
              </li>
              <li>
                If you could be immediately transported anywhere in the world to
                perform a WOD, where would it be?
                <p>Tokyo</p>
              </li>
              <li>
                Please make up a secret identity for yourself.
                <p>
                  Mild-mannered CrossFitter by day, Z fighter to save the day.
                  If you don’t know, just ask!
                </p>
              </li>
              <li>
                How do you eat?
                <p>No comment.</p>
              </li>
              <li>
                Interests &amp; hobbies?
                <p>
                  Long distance running. Obstacle course racing. Video games,
                  reading, movies and TV shows, plus anime and comics.
                </p>
              </li>
            </ol>

            <Heading headingLevel="h3" styleAs="h4">
              Skills
            </Heading>

            <ul>
              <li>CrossFit Level 1 Trainer (CF-L1)</li>
              <li>CrossFit Level 2 Trainer (CF-L2)</li>
              <li>USAW Sport Performance Certificate</li>
            </ul> */}

        {/* <p>
              Originally from Raleigh, NC, I am born and bred a Tar Heel. I grew
              up playing youth basketball and running track. After graduating
              from college, I moved around quite a bit and joined local gyms in
              order to make friends. I discovered CrossFit while living in
              Chicago, after being introduced to it by my friend/trainer at my
              neighborhood gym. I instantly fell in love with intensity, the
              variety, and most importantly the community.
            </p>

            <p>
              I completed my Level 1 certification in 2017, and began coaching
              at a box shortly after. I've been fortunate enough to have coached
              and been a member of CrossFit gyms across the country. I joined
              CrossFit Potrero Hill in August 2022, shortly after I moved to San
              Francisco from Oakland. I currently coach at all three Hopper Life
              locations: CrossFit South Park, CrossFit Potrero Hill, and
              CrossFit Mission Bay.
            </p>

            <Heading headingLevel="h3" styleAs="h4">
              Q&A
            </Heading>

            <ol>
              <li>
                Why do you CrossFit?
                <p>
                  The community. No matter where I go in the world, I know that
                  I find good people at a local box that speak the common
                  language of fitness.
                </p>
              </li>
              <li>
                What’s your favorite WOD?
                <p>Annie</p>
              </li>
              <li>
                If you could be immediately transported anywhere in the world to
                perform a WOD, where would it be?
                <p>A beach resort</p>
              </li>
              <li>
                Please make up a secret identity for yourself.
                <p>A.P.</p>
              </li>
              <li>
                How do you eat?
                <p>
                  I LOVE food! I love trying new restaurants and cuisines, so I
                  don't follow any strict diet regimens. I try to eat balanced,
                  generally healthy meals during the week.
                </p>
              </li>
              <li>
                Interests &amp; hobbies?
                <p>
                  Dancing, binge-watching TV shows, watching movies, going to
                  live music shows/concerts, and organizing.
                </p>
              </li>
            </ol>

            <Heading headingLevel="h3" styleAs="h4">
              Skills
            </Heading>

            <ul>
              <li>CrossFit Level 1 Trainer (CF-L1)</li>
              <li>CrossFit Level 2 Trainer (CF-L2)</li>
            </ul> */}

        {/* <p>
              I’ve been around sports from an early age as my dad was a track,
              cross-country and basketball coach. I played football, wrestled
              and ran track all through high school and stayed physically fit
              and active through college. However, as I got older and the
              demands of having a family and a fast paced career in technology
              increased, I fell into bad habits regarding my health. After a bit
              of a wake up call about my weight (had a classic dad bod) and
              health I needed a change. Eight years ago I decided to try
              CrossFit and fell in love. The workouts, the competition (both
              with others and myself) and especially the community are now some
              of my greatest passions.
            </p>

            <Heading headingLevel="h3" styleAs="h4">
              Q&A
            </Heading>

            <ol>
              <li>
                Why do you CrossFit?
                <p>
                  I do CrossFit for both the physical challenges as well as for
                  my mental health.
                </p>
              </li>
              <li>
                What’s your favorite WOD?
                <p>Anything with a barbell in it.</p>
              </li>
              <li>
                If you could be immediately transported anywhere in the world to
                perform a WOD, where would it be?
                <p>
                  I have been lucky to WOD in over a 100 boxes around the world
                  when I travel for work. One place I have never been and want
                  to visit and of course WOD is Scotland.
                </p>
              </li>
              <li>
                Please make up a secret identity for yourself.
                <p>
                  Fitness enthusiast by day, Master Whiskey Distiller by night.
                </p>
              </li>
              <li>
                How do you eat?
                <p>
                  I generally eat clean. I stay away from fast/processed foods
                  and mostly cook at home. Of course there are cheat meals, but
                  I try to keep those to 1 or 2 a week.
                </p>
              </li>
              <li>
                Interests &amp; hobbies?
                <p>
                  Besides CrossFit: Motorcycles, Hiking (when I can), PC Gaming
                  and reading fantasy/sci-fi.
                </p>
              </li>
            </ol>

            <Heading headingLevel="h3" styleAs="h4">
              Skills
            </Heading>

            <ul>
              <li>CrossFit Level 1 Trainer (CF-L1)</li>
              <li>USAW Level 1 Certification</li>
              <li>Judges Certificate (2022)</li>
            </ul> */}

        {/* <p>
              I was born and raised in Houston, TX though I have lived in a
              number of places since then. I first developed a love for fitness
              through a passion for running. I ran cross-country and track in
              junior high and high school, marathons in college and triathlons
              after college. I first tried CrossFit in 2013 as a way to add a
              strength component to my endurance training. As I continued with
              it, I started to notice I was running faster and doing things I
              never thought I could do, pain-free, for the first time in my life
              as a runner. I later got introduced to olympic weightlifting in
              2015 when I was approached at a competition by my first coach,
              Skipp Benzing. He gave me such an incredible foundation to
              weightlifting and made me fall in love with the sport. I've been
              competing in olympic weightlifting ever since.
            </p>

            <p>
              I have been blessed throughout my athletic life to have worked
              with a number of coaches that recognized a potential in me. It is
              through their mentorship that I have grown so much physically,
              emotionally and mentally as a person and the impact that has had
              on my life has reverberated so much past gym walls. My experience
              inspired me to get my USAWL1 and CFL1 certification in hopes of
              giving back to others in the same way. In my classes, I hope to
              share with you the lessons and love for CrossFit/weightlifting I
              have learned through private training and help you build better
              confidence, poise, and understanding of movement under the bar.
              Let's get it! I am so excited to work with you all!
            </p>

            <Heading headingLevel="h3" styleAs="h4">
              Skills
            </Heading>

            <ul>
              <li>CrossFit Level 1 Trainer (CF-L1)</li>
              <li>USAW Level 1 Certification</li>
        </ul> */}
      </PageWrapper>
      <JoinNow />
    </>
  );
}
