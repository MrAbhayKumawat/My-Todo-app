import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/Redux/Provider";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Todo-App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <Providers>
    <html lang="en">
      <body className={inter.className}>
          {children}
          <ToastContainer/>
      </body>
    </html>
    </Providers>
  );
}
  