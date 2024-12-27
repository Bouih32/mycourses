import Image from "next/image";
import { FaTwitter, FaInstagram, FaFacebookF } from "react-icons/fa";
import logo from "@/images/logoFooter.png";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-6 hidden flex-col bg-dark pb-[22px] pt-[40px] text-16sm text-white md:mt-10 lg:flex lg:px-[60px] xl:px-[120px]">
      <section className="grid grid-cols-4 pb-[60px]">
        <Image
          src={logo}
          alt="logo"
          height={43}
          width={152}
          className="fill-white"
        />
        <ul className="space-y-4">
          <li>
            <Link href="#">Web Programming</Link>
          </li>
          <li>
            <Link href="#">Mobile Programming</Link>
          </li>
          <li>
            <Link href="#">Java Beginner</Link>
          </li>
          <li>
            <Link href="#">PHP Beginner</Link>
          </li>
        </ul>
        <ul className="space-y-4">
          <li>
            <Link href="#">Adobe Illustrator</Link>
          </li>
          <li>
            <Link href="#">Adobe Photoshop</Link>
          </li>
          <li>
            <Link href="#">Design Logo</Link>
          </li>
        </ul>
        <ul className="space-y-4">
          <li>
            <Link href="#">Writing Course</Link>
          </li>
          <li>
            <Link href="#">Photography</Link>
          </li>
          <li>
            <Link href="#">Video Making</Link>
          </li>
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
