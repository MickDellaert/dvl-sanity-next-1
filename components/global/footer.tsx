import { SiInstagram } from "@icons-pack/react-simple-icons";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-32 flex h-20 w-full items-center justify-between px-8">
      <div className="">© David Van Loon</div>
      <Link href={"https://www.instagram.com/osloco/"} target="_blank">
        <SiInstagram />
      </Link>
    </footer>
  );
}
