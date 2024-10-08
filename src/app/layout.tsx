import "./globals.css";
import Footer from "@/components/Footer";

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
