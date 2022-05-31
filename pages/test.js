import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";
export default function Home({ blogs }) {
  return (
    <div className="container">
      <main>
        <div className="grid">
          {blogs.map((blog) => (
            <div key={blog.slug} className="card">
              <Link href={`/pages/${blog.slug}`}>
                <a>
                  {blog.navItem}
                </a>
              </Link>
            </div>
          ))}
        </div>

      </main>
      <style jsx>{`
      `}</style>
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
