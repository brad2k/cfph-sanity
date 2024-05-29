import Image from "next/image";
import styles from "./footer.module.css";
import PageWrapper from "@/components/pageWrapper";
import Heading from "@/components/heading";

export default function Footer() {
  return (
    <PageWrapper padding="tight" as="footer" owl={false}>
      <div className={styles.footerWrap}>
        <div className={styles.footerLeft}>
          <Image
            src="/crossfit-potrero-hill-logo.svg"
            alt="CrossFit Potrero Hill logo"
            width={210}
            height={150}
            className={styles.footerLogo}
          />

          <ul className={styles.socialLinks}>
            <li>
              <a href="https://www.instagram.com/crossfitph/" rel="noopener">
                <Image
                  src="/instagram-logo.png"
                  alt="Instagram logo"
                  width={30}
                  height={30}
                />
                <span className="sr-only">
                  Follow CrossFit Potrero Hill on Instagram
                </span>
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/CrossFitPH/" rel="noopener">
                <Image
                  src="/facebook-logo.png"
                  alt="Facebook logo"
                  width={30}
                  height={30}
                />
                <span className="sr-only">
                  Follow CrossFit Potrero Hill on Facebook
                </span>
              </a>
            </li>
          </ul>
        </div>

        <div className={styles.footerContact}>
          <Heading styleAs="h4" className="sr-only">
            Contact
          </Heading>

          <ul className={styles.contactList}>
            <li className={styles.phone}>(415) 869-8776</li>
            <li className={styles.message}>info@crossfitpotrerohill.com</li>
            <li>membership@crossfitpotrerohill.com</li>
          </ul>

          <ul className={styles.contactList}>
            <li className={styles.location}>
              <strong>CrossFit Potrero Hill</strong>
              <address>
                <a
                  href="https://maps.app.goo.gl/MvCmY4i9CWR7bVjG7"
                  rel="noopener"
                >
                  175 De Haro St, San Francisco, CA 94107
                </a>
              </address>
            </li>

            <li>
              <strong>CrossFit South Park</strong>
              <address>
                <a
                  href="https://maps.app.goo.gl/cYx1kStqSBPEzsjr6"
                  rel="noopener"
                >
                  361 Brannan St, San Francisco, CA 94107
                </a>
              </address>
            </li>
          </ul>
        </div>
      </div>
    </PageWrapper>
  );
}
