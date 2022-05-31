import Link from "next/link";
import Head from "next/head";
import NavBarSocial from "./Navbar/Navbar";
export const siteTitle = "MicrometreUK Dedicated private servers built for your domain.";
export function PostLayout({ children }) {
  return (
    <>
      <div className="section">
        <Head>
          <link rel="icon" href="/images/logo.webp" />
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
      nav {
        text-align: center;
        box-shadow: 0 4px 8px 0 yellow;
      }
      nav a {
        margin-right: 2px;
        padding: 4px;
        font-size: 2rem;
      }
      main {
        margin: 2rem;
        padding: 2rem;
        display: flex;
        flex-direction: column;
        box-shadow: 0 4px 8px 0 blue;
        border: 2px solid green;
      }
    `}</style>
    </>
  );
}

export default PostLayout;
