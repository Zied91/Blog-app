import Image from "next/image";
import styles from "./posts.module.css";
import Link from "next/link";

export default function Posts({ Posts }) {
  return (
    <>
      <div className={styles.mainPosts}>
        <div className={styles.ads}>You can place ads here.</div>
        <div className={styles.latestPosts}>
          <h1 className={styles.h1}>Latest Posts</h1>

          <ul className={styles.ul}>
            {Posts.map((post) => (
              <div className={styles.postContainer} key={post._id}>
                <ul className={styles.ul}>
                <Link href={`/posts/${post._id}`}>
                  <li>
                    <Image
                      src={`/images/${post.image}`}
                      alt="image"
                      width={360}
                      height={240}
                    />
                    <br />
                    <h5 className={styles.h5}>{post.category}</h5>
                    <p className={styles.p}>{post.title}</p> <br />
                    <div className={styles.author}>
                      <Image
                        src={`/images/${post.authorImage}`}
                        alt="image"
                        width={36}
                        height={36}
                      />
                      <h6 className={styles.h6}>{post.author}</h6>
                      <h6 className={styles.h6}>{post.date}</h6>
                    </div>
                  </li>
                  </Link>
                </ul>
              </div>
            ))}
          </ul>
        </div>
      </div>
      <div className={styles.ads}>You can place ads here.</div>
    </>
  );
}
