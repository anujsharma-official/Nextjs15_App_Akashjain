import GlobalProvider from "@/components/Application/GlobalProvider";
import "./globals.css";
import { Assistant } from 'next/font/google'
import { ToastContainer } from 'react-toastify';
import Analytics from "@/components/Application/Analytics"
const assistantFont = Assistant({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
  display: 'swap'
})

export const metadata = {
  title: "Stylithic Fashions | Premium Online Shopping Experience",
  description: "Discover Stylithic Fashions – your one-stop destination for premium clothing, accessories, and lifestyle products. Shop the latest trends with fast delivery, secure payments, and unmatched quality.",
  icons: {
    icon: "/favicon.ico", // public/ folder me apna logo
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${assistantFont.className} antialiased`}
      >
        <GlobalProvider>
          <ToastContainer />
          <Analytics /> 
          {children}
        </GlobalProvider>
      </body>
    </html>
  );
}
