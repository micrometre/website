import Image from "next/image";
import matter from "gray-matter";
import Link from "next/link";
import Wave from "react-wavify";
export default function Moto() {
  return (
    <>
      <div
        className="home-wave"
        style={{
          marginTop: 50,
          zIndex: 5,
          margin: 0,
          backgroundColor: "transparent",
          position: "relative",
          width: "100%",
          fontFamily: "Roboto, sans-serif",
        }}
      >
        <Wave
          style={{
            height: "59vh",
            zIndex: 5,
            transform: "rotate(180deg)",
            left: 0,
          }}
          className="wave-bg"
          fill="#00acc1"
          paused={false}
          options={{
            height: 10,
            amplitude: 25,
            speed: 0.1,
            points: 5,
          }}
        />
        <div
          className="wave-intro"
          style={{
            position: "absolute",
            top: "34vh",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
            paddingLeft: "7%",
            paddingRight: "5%",
            width: "60%",
          }}
        >
          <h1
            className="wave-moto"
            style={{ lineHeight: 1.4, color: "#fff", fontSize: 33 }}
          >
            Dedicated private servers built for your domain.
          </h1>
        </div>
      </div>
      <style jsx>{`
        @media (max-width: 600px) {
          .home-wave {
            width: 100%;
            flex-direction: column;
            font-size: 13.3rem;
          }
        }
      `}</style>
    </>
  );
}
