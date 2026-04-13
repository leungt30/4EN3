import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FloodReady Dixie-Dundas: Community Early-Warning Network",
  description:
    "Hyperlocal flood alerts and emergency resources for residents of the Dixie-Dundas community in Mississauga. Sign up for early access.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
