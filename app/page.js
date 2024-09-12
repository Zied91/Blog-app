import styles from "./page.module.css";
import Header from "@/components/Header/header";
import Posts from "@/components/Posts/posts";

export default async function HomePage() {
  let data = await fetch("http://localhost:3000/blogs", { cache: "no-store" });
  let posts = await data.json();

  return (
    <div className={styles.container}>
      <Header Posts={posts} />
      <Posts Posts={posts} />
    </div>
  );
}
