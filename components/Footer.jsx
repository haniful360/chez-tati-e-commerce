import Image from "next/image";
import logo from "@/public/logo/footer_logo.svg";
import facebook from "@/public/icon/Icon-Facebook.svg";
import twitter from "@/public/icon/Icon-Twitter.svg";
import instagram from "@/public/icon/icon-instagram.svg";
import linkedin from "@/public/icon/Icon-Linkedin.svg";
import qrcode from "@/public/images/Qr Code.png";
import apple from "@/public/images/apple.png";
import play from "@/public/images/play.png";

import Link from "next/link";

// components/Footer.js
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white h-[360px] flex items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between flex-wrap gap-8 ">
          {/* Left Section: Logo & Description */}
          <div className="md:col-span-2">
            <Image src={logo} alt="" />
            <p className="text-[#F8FAFC] text-[14px]">
              Ecommerce is a free UI Kit from Paperpillar <br /> that you can
              use for your personal or <br /> commercial project.
            </p>
            <div className="mt-4 flex gap-2">
              <input
                type="email"
                placeholder="Type your email address"
                className="rounded-lg px-4 py-2 text-gray-800"
              />
              <button className="bg-white text-gray-900 rounded-[15px] px-6">
                Submit
              </button>
            </div>
          </div>

          {/* Center Section: Links */}
          <div>
            <h4 className="font-semibold mb-3">Account</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#">My Account</a>
              </li>
              <li>
                <a href="#">Login / Register</a>
              </li>
              <li>
                <a href="#">Cart</a>
              </li>
              <li>
                <a href="#">Wishlist</a>
              </li>
              <li>
                <a href="#">Shop</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Quick Link</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms of Use</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>

          {/* Right Section: Support and Download */}
          <div>
            <h4 className="font-semibold mb-3">Support</h4>
            <address className="text-gray-400 not-italic">
              111 Bijoy Sarani,
              <br />
              Dhaka, DH 1515, Bangladesh.
            </address>
            <a
              href="mailto:exclusive@gmail.com"
              className="block text-gray-400"
            >
              exclusive@gmail.com
            </a>
            <a href="tel:+8801588889999" className="block text-gray-400">
              +88015-8888-9999
            </a>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Download App</h4>
            <div className="flex space-x-4">
              <Image src={qrcode} width={80} height={80} alt="" />
              <div className="flex flex-col gap-3">
                <Link href="#">
                  <Image src={apple} width={104} height={30} alt="" />
                </Link>
                <Link href="#">
                  <Image src={play} width={104} height={30} alt="" />
                </Link>
              </div>
            </div>

            <div className="mt-6 flex space-x-4 text-white ">
              <Link href="#">
                <Image src={facebook} width={24} height={24} alt="" />
              </Link>
              <Link href="#">
                <Image src={twitter} width={24} height={24} alt="" />
              </Link>
              <Link href="#">
                <Image src={instagram} width={24} height={24} alt="" />
              </Link>
              <Link href="">
                <Image src={linkedin} width={24} height={24} alt="" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
