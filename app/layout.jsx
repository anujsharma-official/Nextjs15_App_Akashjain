import GlobalProvider from "@/components/Application/GlobalProvider";
import "./globals.css";
import { Assistant } from "next/font/google";
import { ToastContainer } from "react-toastify";
import Analytics from "@/components/Application/Analytics";
import Script from "next/script";

const assistantFont = Assistant({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Stylithic Fashions | Premium Online Shopping Experience",
  description:
    "Discover Stylithic Fashions – your one-stop destination for premium clothing, accessories, and lifestyle products.",
  icons: {
    icon: "/favicon.ico",
  },
  manifest: "/manifest.json", // ✅ PWA
  themeColor: "#000000", // ✅ PWA
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${assistantFont.className} antialiased`}>
        <GlobalProvider>
          <ToastContainer />
          <Analytics />
          {children}
        </GlobalProvider>

        {/* ✅ Chatbot Script */}
        <Script
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function (d, s, id) {
                var js, el = d.getElementsByTagName(s)[0];
                if (d.getElementById(id)) return;
                js = d.createElement(s);
                js.async = true;
                js.src = 'https://s3.ap-south-1.amazonaws.com/conferbot.defaults/dist/v1/widget.min.js';
                js.id = id;
                js.charset = 'UTF-8';
                el.parentNode.insertBefore(js, el);
                js.onload = function () {
                  window.ConferbotWidget("69b9098e81b201edcb37557b", "popup_chat");
                };
              })(document, 'script', 'conferbot-js');
            `,
          }}
        />

        {/* ✅ Service Worker Register (PWA) */}
        <Script
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function () {
                  navigator.serviceWorker.register('/sw.js');
                });
              }
            `,
          }}
        />
      </body>
    </html>
  );
}