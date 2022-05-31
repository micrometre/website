import fs from "fs";
import ReactMarkdown from "react-markdown";
import matter from "gray-matter";
import Head from "next/head";
import Image from "next/image";
import Layout from "../../components/PostLayout";

export default function Blog({ frontmatter, markdown }) {
  return (
    <Layout>
      <div>
        <Head>
          <title>{frontmatter.title}</title>
        </Head>
        <h1>{frontmatter.title}</h1>
        <Image
          width={350}
          height={140}
          alt={frontmatter.title}
          src={`/${frontmatter.logoImage}`}
        />
        <hr />
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </div>
    </Layout>
  );
}

export async function getStaticProps({ params: { slug } }) {
  const fileContent = matter(
    fs.readFileSync(`./content/blogs/${slug}.md`, "utf8")
  );
  let frontmatter = fileContent.data;
  const markdown = fileContent.content;

  return {
    props: { frontmatter, markdown },
  };
}

export async function getStaticPaths() {
  const filesInProjects = fs.readdirSync("./content/blogs");

  // Getting the filenames excluding .md extension
  // and returning an array containing slug (the filename) as params for every route
  // It looks like this
  // paths = [
  //   { params: { slug: 'my-first-blog' }},
  //   { params: { slug: 'how-to-train-a-dragon' }},
  //   { params: { slug: 'how-to-catch-a-pokemon' }},
  // ]
  const paths = filesInProjects.map((file) => {
    const filename = file.slice(0, file.indexOf("."));
    return { params: { slug: filename } };
  });

  return {
    paths,
    fallback: false, // This shows a 404 page if the page is not found
  };
}
