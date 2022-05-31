import { useState } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css"
// Navbar.js
export default function Navbar() {

  const [isNavExpanded, setIsNavExpanded] = useState(false)
  return (
    <nav className={styles.navigation}>
      <a href="/" className={styles.brandName}>
        MacroSoft
      </a>
      <button className={styles.hamburger}
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div className={isNavExpanded ? "navigation-menu expanded" : "navigation-menu"}
        style={{
          margin: "auto",
          display: "flex",
          padding: 0,
          listStyleType: "none",
          margin: "0 1rem",
          textDecoration: "none",
          display: "block",
          width: "100%",
        }}

      >
        <ul>
          <li>
            <Link href="/home">
              <a>
                Home
              </a>
            </Link>
          </li>
          <li>
            <Link href="/home">
              <a>
                Home
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}