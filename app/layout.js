import "./globals.css";

export const metadata = {
  title: "Saransh Sharma | Cloud Engineer",
  description:
    "Portfolio of Saransh Sharma — Cloud Engineer specializing in AWS, DevOps, Docker, and scalable cloud infrastructure.",
  keywords: [
    "Saransh Sharma",
    "Cloud Engineer",
    "AWS",
    "DevOps",
    "Docker",
    "MERN Stack",
    "Python",
    "Portfolio",
  ],
  authors: [{ name: "Saransh Sharma" }],
  openGraph: {
    title: "Saransh Sharma | Cloud Engineer",
    description:
      "Portfolio of Saransh Sharma — Cloud Engineer specializing in AWS, DevOps, and scalable cloud infrastructure.",
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
