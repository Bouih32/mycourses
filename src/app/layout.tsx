import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";

const gilroy = localFont({
  src: [
    {
      path: "../../public/fonts/Gilroy-Regular.ttf",
      weight: "400",
      style: "normal",
    },

    {
      path: "../../public/fonts/Gilroy-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-gilroy",
});

export const metadata: Metadata = {
  title: "MyCourses",
  description:
    "Your personalized study planner, tracking your courses, goals, and progress.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${gilroy.variable} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
