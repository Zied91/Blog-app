import { notFound } from "next/navigation";
import styles from "./page.module.css";
import Image from "next/image";

const PostDetailPage = async ({ params }) => {
  const postId = params.post;
  const res = await fetch(`http://localhost:3000/blogs/${postId}`, {
    cache: "no-store",
  });

  const postItem = await res.json();


  if (!postItem) {
    notFound();
  }
  return (
    <>
      <article>
        <div className={styles.mainPosts}>
          <header>
            <h1 className={styles.h5}>{postItem.category}</h1>
            <h1>{postItem.title}</h1>
            <div className={styles.author}>
              <Image
                src={`/images/${postItem.authorImage}`}
                alt="image"
                width={36}
                height={36}
              />
              <h6 className={styles.h6}>{postItem.author}</h6>
              <h6 className={styles.h6}>{postItem.date}</h6>
            </div>

            <img src={`/images/posts/${postItem.image}`} alt={postItem.title} />
          </header>
          <p>{postItem.content}</p>
        </div>
      </article>
    </>
  );
};

export default PostDetailPage;
