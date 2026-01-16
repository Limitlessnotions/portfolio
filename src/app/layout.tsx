import "./globals.css";
import Header from "../components/Header";

export const metadata = {
  title: "Silas — AI Automation Engineer",
  description:
    "AI automation expert building sales-driven chatbots, CRM systems, workflow automation, and high-impact websites for growing businesses.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Silas — AI Automation Engineer",
    description:
      "AI automation, smart chatbots, CRM optimization, and revenue-focused systems.",
    url: "https://yourdomain.com",
    siteName: "Silas",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Silas — AI Automation Engineer",
    description:
      "AI automation expert building scalable systems for modern businesses.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
