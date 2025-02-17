import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import dynamic from "next/dynamic";

const NextProgress = dynamic(() => import("@/components/shared/NextProgress"), {
  ssr: false,
});

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shikshya ",
  description:
    "Shikshya is an AI-powered school management system designed to streamline administrative tasks and enhance the learning experience for students.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"></link>
      <body>
        <NextProgress />
        {children}
      </body>
    </html>
  );
}
