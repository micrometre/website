import Link from 'next/link';
import styles from './Navbar.module.css'
import Image from "next/image";
import { socialdata } from "../../data/social-data";

export function NavBarSocial() {
  const socialIconStyles = {
    fontSize: "2.7em",
    color: "white",
    borderRadius: "4rem",
    top: "10px",
    right: "20px",
  };
  return (
    <>
      {socialdata.map((e, i) => {
        return (
          <>
            <div className="socialdiv" key={i}>
              <>
                <Link href="/">
                  <a>
                    <p style={{
                      color: "#fff",
                      backgroundColor: "#088413",
                      fontSize: 17,
                      fontWeight: "bold",
                      lineHeight: 1,

                    }}>
                      MicrometreUK
                    </p>

                  </a>
                </Link>
              </>
              {e.socialLinks.map((e, i) => {
                return (
                  <a
                    style={socialIconStyles}
                    href={e.href}
                    key={i}
                    title={e.title}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="icons" key={i}>
                      <e.icons className={socialIconStyles} />
                    </span>
                  </a>
                );
              })}
            </div></>
        );
      })}
      <style jsx>{`
        .socialdiv {
          width: 100%;
          display: flex;
          justify-content: space-around;
          background-color: #6c757d;
          position: fixed;
          top: 0;
          right: 0;
          left: 0;
          z-index: 1030;
          padding: 0rem;
          margin-bottom: 1rem;
        }
        @media (max-width: 990px) {
          .socialdiv {
            font-size: 0.9rem;
            width: 100%;
          }
        }
      `}</style>
    </>
  );
}


export default NavBarSocial