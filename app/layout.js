import { Playfair_Display } from "next/font/google";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
  weight: ["400","500", "600", "700"], 
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${playfairDisplay.variable} antialiased`}
        style={{ fontFamily: "var(--font-playfair-display), serif" }}
        cz-shortcut-listen="true"
      >
        {children}
      </body>
    </html>
  );
}
