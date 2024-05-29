import styles from "./hero.module.css";
import Image from "next/image";
import clsx from "clsx";

interface HeroProps extends React.HTMLAttributes<HTMLElement> {
  img: string;
  alt: string;
}

export default function Hero({ children, img, alt, className }: HeroProps) {
  return (
    <header className={clsx(styles.heroContainer, className)}>
      <div className={styles.heroContent}>{children}</div>
      <Image
        src={img}
        fill={true}
        style={{ objectFit: "cover" }}
        priority={true}
        alt={alt}
      />
    </header>
  );
}
