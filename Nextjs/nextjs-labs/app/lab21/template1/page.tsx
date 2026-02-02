import styles from "../styles/basic.module.css";
import Image from "next/image";

export default function Template1() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Lab 21 - CSS Applied</h1>
      <p className={styles.text}>
        This page demonstrates applying CSS on a static NextJS page.
      </p>

      <Image  
        src="/laptop.jpeg"
        alt="Lab 21 Image"
        width={200}
        height={200}
      />
    </div>
  );
}
