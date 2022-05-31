import Image from "next/image";
import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";
import Wave from "react-wavify";
export default function Home({ blogs }) {
  return (
    <div className="container">
      <main>
        <>
          <div className="home-wave"
            style={{ height: "85vh", zIndex: 5, margin: 0, backgroundColor: "transparent", position: "relative", width: "100%", fontFamily: "Roboto, sans-serif", }}>
            <Wave
              style={{ height: "85vh", zIndex: 5, margin: 0, border: "1px solid #088413", transform: "rotate(180deg)", left: 0, }}
              className="wave-bg"
              fill="#140a42"
              paused={false}
              options={{
                height: 20,
                amplitude: 45,
                speed: 0.1,
                points: 5
              }}
            />
            <div className="wave-intro"
              style={{ position: "absolute", top: "40vh", left: "50%", transform: "translate(-50%, -50%)", textAlign: "center", paddingLeft: "7%", paddingRight: "5%", width: "60%", }}>
              <h1 style={{ lineHeight: 1.7, }}>
                Hi,
              </h1>
              <h3 style={{ lineHeight: 1.7, }}>
                Science student at the <code
                  style={{ color: "#fff", backgroundColor: "#088413", border: "1px solid #088413", fontSize: 11, fontWeight: "bold", letterSpacing: 1, }}>
                  University of Toronto.
                </code>
              </h3>
            </div>
          </div>
        </>
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
