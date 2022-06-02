import Link from "next/link";
import Head from "next/head";
import NavBarSocial from "./Navbar/Navbar";
export const siteTitle = "MicrometreUK Dedicated private servers built for your domain.";
export function PostLayout({ children }) {
  return (
    <>
      <div className="post-layout">
        <Head>
          <link rel="icon" href="/images/MicrometreUK.svg" />
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#ffffff" />
          <meta name="description" content={siteTitle} />
          <meta name="og:title" content={siteTitle} />
          <meta name={siteTitle} content={siteTitle} />
          <title>{siteTitle}</title>
        </Head>
      </div>
      <NavBarSocial />
      <main>{children}</main>
      <style jsx>{`
      main {
        margin-top: 8rem;
        padding: 1rem;
      }
    `}</style>
    </>
  );
}

export default PostLayout;
