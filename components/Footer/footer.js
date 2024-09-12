import Image from "next/image";
import styles from "./footer.module.css";
export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footerParts}>
        <div className={styles.about}>
          <h3 style={{ color: "black" }}>About</h3>
          <p>
            Lorem ipsum dolor sit amet,
            <br /> consectetur adipiscing elit, sed do
            <br />
            eiusmod tempor incididunt ut labore et dolore
            <br />
            magna aliqua.Ut enim ad minim veniam
          </p>
          <b className={styles.b}>Email:</b>
          <p>info@gmail.com</p>
          <b className={styles.b}>Phone:</b>
          <p>98658273675</p>
        </div>
        <div className={styles.middle}>
          <div>
            <b className={styles.b}>Quick Links</b>
            <br />
            <br />
            <a href="/">Home</a>
            <br />
            <br />
            <a href="/about">About</a>
            <br />
            <br />
            <a href="/blog">Blog</a>
            <br />
            <br />
            <a href="/archived">Archived</a>
            <br />
            <br />
            <a href="/author">Author</a>
            <br />
            <br />
            <a href="/contact">Contact</a>
          </div>
          <div>
            <b className={styles.b}>Category</b>
            <br />
            <br />
            <a>Lifestyle</a>
            <br />
            <br />
            <a>Technology</a>
            <br />
            <br />
            <a>Travel</a>
            <br />
            <br />
            <a>Business</a>
            <br />
            <br />
            <a>Economy</a>
            <br />
            <br />
            <a>Sport</a>
          </div>
        </div>
        <div className={styles.last}>
          <h1> Weekly Newsletter</h1>
          <p>Get blog articles and offers via email</p>
          <input
            className={styles.input}
            type="email"
            placeholder="Your Email"
          ></input>
          <br />
          <br />
          <button className={styles.button}>Subscribe</button>
        </div>
      </div>
      <div className={styles.Copyright}>
      <div>
        <Image src="/images/CopyrightInfo.png" width={363} alt='image' height={54} />
      </div>
        <div className={styles.TermsAndPrivacy}>
          <p>Terms of Use</p>
          <p>Privacy Policy</p>
          <p>Cookie Policy</p>
        </div>
      </div>
    </div>
  );
}
