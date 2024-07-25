import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          margiin: 20,
          flex: 4,
        }}
      >
        <Link href="/">
          <Image src="/logo_256x256.webp" height={100} width={100}></Image>
        </Link>
        <h1 style={{ lineHeight: 0.1, marginTop: 50 }}>Enactus NSUT</h1>
        <p>Copyright Enactus NSUT @ 2024</p>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          margiin: 20,
          flex: 3,
        }}
      >
        <h2>Quick Links</h2>
        <Link style={{ marginBottom: 15 }} href="/">
          Home
        </Link>
        <a href="https://annotsav.enactus.in">Annotsav</a>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          margiin: 20,
          flex: 3,
        }}
      >
        <h2>Contact</h2>
        <b>Address</b>
        <p style={{ margin: 0, textAlign: "center" }}>
          Netaji Subhas University of Technology
        </p>
        <p style={{ margin: 0, textAlign: "center" }}>New Delhi, India</p>
        <br></br>
        <b>Phone</b>
        <p style={{ margin: 0, textAlign: "center" }}>+91 85956 22774</p>{" "}
        <br></br>
        <b>Email</b>
        <p style={{ margin: 0, textAlign: "center" }}>enactus@nsut.ac.in</p>
      </div>
    </footer>
  );
}
