import Image from "next/image";
import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";
import styles from '../styles/Home.module.css'
import Moto from "../components/Moto/Moto";
import PageLayout from "../components/PageLayout ";
import Navbar from "../components/Navbar/Navbar";
export default function Home({ blogs }) {
  return (
    <div className={styles.container}>
      <PageLayout>
      <Navbar />
      <Moto />
      <main className={styles.main}>
        <div className={styles.grid}>
          {blogs.map((blog) => (
            <div key={blog.slug} className={styles.card}>
              <Link href={`/blog/${blog.slug}`}>
                <a>
                  <h2>
                    {blog.title}
                    &rarr;</h2>
                  <p>
                    {blog.excerpt}
                    </p>
                  <br />
                </a>
              </Link>
            </div>
          ))}
        </div>
      </main>
      </PageLayout>
    </div>
  );
}

export async function getStaticProps() {
  const filesInBlogs = fs.readdirSync("./content/blogs");
  const blogs = filesInBlogs.map((filename) => {
    const file = fs.readFileSync(`./content/blogs/${filename}`, "utf8");
    const matterData = matter(file);
    return {
      ...matterData.data, // matterData.data contains front matter
      slug: filename.slice(0, filename.indexOf(".")),
    };
  });

  return {
    props: {
      blogs,
    },
  };
}
