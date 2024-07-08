import Provider from "@/components/Provider";
import { Poppins } from "next/font/google";
import "../styles/globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Portfolio | Achem - Full Stack Developer",
  description:
    "I build websites from scratch, making them look good and work smoothly.",

  openGraph: {
    title: "Portfolio | Achem - Full Stack Developer",
    description:
      "I build websites from scratch, making them look good and work smoothly.",
    url: "https://ahn-sage.vercel.app/",
    siteName: "AHN",
    images: [
      {
        url: "https://ahn-sage.vercel.app/portfolio-dark.png",
        width: 800,
        height: 600,
      },
      {
        url: "https://ahn-sage.vercel.app/portfolio-light.png",
        width: 1800,
        height: 1600,
        alt: "Portfolio | Achem - Full Stack Developer",
      },
    ],
    locale: "bn_BD",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />

      <body>
        <Provider>
          <main
            className={`${poppins.className} font-poppins bg-neutral-100 dark:bg-neutral-900 text-black dark:text-white overflow-x-hidden`}
          >
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
}
