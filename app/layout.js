import { Poppins } from "next/font/google";
import "./globals.css";

const poppinsSans = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["700", "300"],
});

export const metadata = {
  title: "Portfolio of Ariunbold",
  description: "my portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppinsSans.variable} antialiased`}>{children}</body>
    </html>
  );
}
