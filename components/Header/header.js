import Image from "next/image";
import styles from "./header.module.css";
export default function Header({ Posts }) {
  return (
    <div className={styles.headerContainer}>
      <Image src="/images/Header.png" alt="header" width={1216} height={600} />
      <div className={styles.headerOverlayDiv}>
        <h5 className={styles.h5}>{Posts[1].category}</h5>
        <p className={styles.p}>{Posts[1].title}</p>
        <div className={styles.author}>
          <Image
            src={`/images/${Posts[1].authorImage}`}
            alt="image"
            width={36}
            height={36}
          />
          <h6 className={styles.h6}>{Posts[1].author}</h6>
          <h6 className={styles.h6}>{Posts[1].date}</h6>
        </div>
      </div>
    </div>
  );
}
