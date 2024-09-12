import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import styles from "./navbar.module.css";

export default function NavBar() {
  return (
    <div className={styles.navbarContainer}>
      <nav className={styles.navbar}>
        <ol className={styles.navbarList}>
          <Image src="/images/logo.png" width={158} height={36} alt="logo" />
          <li className="home">
            <Link href="/">Home</Link>
          </li>
          <li className="blog">
            <Link href="/blog">Blog</Link>
          </li>

          <li className="single-post">
            <Link href="/singlePost">Single Post</Link>
          </li>
          <li className="pages">
            <Link href="/pages">Pages</Link>
          </li>
          <li className="contact">
            <Link href="/contact">Contact</Link>
          </li>

          <li>
            <input
              type="search"
              id="search-input"
              name="search-input"
              className={styles.searchBar}
              placeholder="Search..."
            />
          </li>
        </ol>
      </nav>
    </div>
  );
}
