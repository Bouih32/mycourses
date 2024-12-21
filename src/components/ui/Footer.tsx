import Image from "next/image";
import { FaTwitter, FaInstagram, FaFacebookF } from "react-icons/fa";
import logo from "@/images/logoFooter.png";

export default function Footer() {
  return (
    <footer className="hidden flex-col bg-dark pb-[22px] pt-[40px] text-16sm text-white lg:flex lg:px-[60px] xl:px-[120px]">
      <section className="grid grid-cols-4 pb-[60px]">
        <Image
          src={logo}
          alt="logo"
          height={43}
          width={152}
          className="fill-white"
        />
        <ul className="space-y-4">
          <li>Web Programming</li>
          <li>Mobile Programming</li>
          <li>Java Beginner</li>
          <li>PHP Beginner</li>
        </ul>
        <ul className="space-y-4">
          <li>Adobe Illustrator</li>
          <li>Adobe Photoshop</li>
          <li>Design Logo</li>
        </ul>
        <ul className="space-y-4">
          <li>Writing Course</li>
          <li>Photography</li>
          <li>Video Making</li>
        </ul>
      </section>
      <section className="flex items-center justify-between border-t border-white60 pt-[22px] text-white60">
        <p>Copyright © MyCourse.io 2024. All Rights Reserved</p>
        <div className="flex items-center gap-6 text-[24px]">
          <FaTwitter />
          <FaInstagram />
          <FaFacebookF />
        </div>
      </section>
    </footer>
  );
}
