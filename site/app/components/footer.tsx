import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
      <footer className=" bg-gradient-to-br from-[#ffecc1] to-amber-50 text-black text-center py-20 mt-16">
        <p className="text-sm">{new Date().getFullYear()} ASII</p>
        <p className="text-xs mt-2">Realizat cu ❤️ de echipa ASII</p>
        <div>
            <p>Contact</p>
            <Image 
            src="/images/instagram.png"
            width={30}
            height={30}
            alt="instagram"
            />
        </div>
      </footer>
    );
  }
  