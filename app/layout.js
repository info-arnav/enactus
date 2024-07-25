import { Poppins } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Enactus",
  description:
    "Enactus NSUT empowers students to create sustainable solutions for real-world social, economic, and environmental challenges.",
  applicationName: "Enactus",
  referrer: "origin-when-cross-origin",
  keywords: [
    "enactus",
    "nsut",
    "Enactus",
    "farmers",
    "water",
    "plant",
    "smart",
    "irrigation",
    "sustainable farming",
  ],
  authors: [{ name: "Enactus NSUT", url: "https://www.enactus.in/" }],
  creator: "Enactus",
  publisher: "Enactus",
  openGraph: {
    title: "Enactus",
    description:
      "Enactus NSUT empowers students to create sustainable solutions for real-world social, economic, and environmental challenges.",
    url: "https://www.enactus.in/",
    siteName: "Enactus",
    images: [
      {
        url: "/logo_500x500.png",
        width: 500,
        height: 500,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Enactus",
    description:
      "Enactus NSUT empowers students to create sustainable solutions for real-world social, economic, and environmental challenges.",
    images: ["https://www.enactus.in/logo_500x500.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navigation></Navigation>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
