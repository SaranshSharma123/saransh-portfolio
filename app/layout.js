import "./globals.css";

export const metadata = {
  title: "Saransh Sharma | Software Engineer",
  description:
    "Portfolio of Saransh Sharma — Software Engineer crafting exceptional digital experiences with modern web technologies.",
  keywords: [
    "Saransh Sharma",
    "Software Engineer",
    "Full Stack Developer",
    "Portfolio",
    "Web Developer",
    "Next.js",
    "React",
  ],
  authors: [{ name: "Saransh Sharma" }],
  openGraph: {
    title: "Saransh Sharma | Software Engineer",
    description:
      "Portfolio of Saransh Sharma — Software Engineer crafting exceptional digital experiences.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
