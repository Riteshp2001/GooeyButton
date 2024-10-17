import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Gooey Button Effect in Next.js",
  description:
    "Experience a gooey button effect created with Next.js. Inspired by simeydotme's codepen.",
  keywords: "Gooey Button, Next.js, CSS, Animation, UI, UX, Web Development",
  author: "Ritesh P",
  openGraph: {
    title: "Gooey Button Effect in Next.js",
    description:
      "Experience a gooey button effect created with Next.js. Inspired by simeydotme's codepen.",
    url: "https://yourwebsite.com",
    type: "website",
    images: [
      {
        url: "./open-graph.png",
        width: 800,
        height: 600,
        alt: "Gooey Button Effect",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gooey Button Effect in Next.js",
    description:
      "Experience a gooey button effect created with Next.js. Inspired by simeydotme's codepen.",
    image: "./open-graph.png",
  },
  canonical: "https://yourwebsite.com",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
