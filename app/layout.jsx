import "./globals.css";
import { Montserrat } from "next/font/google";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Wine Cellar",
  keywords: "wine, collection, cellar",
  description: "My wine collection",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <div>
          <Header />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
