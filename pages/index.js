import Image from "next/image";
import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";
import Navbar from "../components/Navbar";
export default function Home({ blogs }) {
  return (
    <div className="container">
      <main>
        <Navbar />
        <h1 className="header">Tasks</h1>
        <div className="grid">
          {blogs.map((blog) => (
            <div key={blog.slug} className="card">
              <Image
                width={150}
                height={140}
                alt={blog.title}
                src={`/${blog.logoImage}`}
              />
              <Link href={`/blog/${blog.slug}`}>
                <a>
                  {blog.date}:{blog.title}
                </a>
              </Link>
            </div>
          ))}
        </div>

      </main>
      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }
        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: 3rem;
        }
        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }
        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        } 
      `}</style>
    </div>
  );
}

export async function getStaticProps() {
  // List of files in blgos folder
  const filesInBlogs = fs.readdirSync("./content/blogs");

  // Get the front matter and slug (the filename without .md) of all files
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
