import { SiInstagram } from "@icons-pack/react-simple-icons";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex justify-between w-full items-center mt-32 h-20 px-8 md:px-16">
      <div className="">© David Van Loon</div>
      <Link href={"https://www.instagram.com/osloco/"} target="_blank">
        <SiInstagram />
      </Link>
    </footer>
  );
}
