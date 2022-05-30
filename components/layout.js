import Link from "next/link";

const Layout = ({ children }) => (
  <>
    <nav>
      <Link href="/">
        <a>Tasks 🏡</a>
      </Link>
    </nav>
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

export default Layout;
