import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}
