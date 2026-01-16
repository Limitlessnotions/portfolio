import "./globals.css";
import Header from "../components/Header";

export const metadata = {
  title: "Silas — AI Automation Engineer",
  description: "AI automation, WhatsApp systems, backend workflows",
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
