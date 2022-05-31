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
      </main>
      <style jsx>{`
      `}</style>
    </div>
  );
}