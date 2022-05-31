import Link from "next/link";
import Head from "next/head";
export const siteTitle = "MicrometreUK Dedicated private servers built for your domain.";

export function PageLayout({ children }) {
  return (
    <>

      <div className="section">
        <Head>
          <link rel="icon" href="/images/logo.webp" />
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#ffffff" />
          <meta name="description"content={siteTitle} />
          <meta name="og:title" content={siteTitle} />
          <meta name={siteTitle}content={siteTitle} />
          <title>{siteTitle}</title>
        </Head>
      </div>
      <main>{children}</main>
    </>
  );
}

export default PageLayout;
