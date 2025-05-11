import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
      <footer className="  bg-gradient-to-br from-[#c1b9aa] to-[#fff3cb] text-black text-center py-10 ">
        <p className="text-sm"><Link href="https://www.asii.ro" >{new Date().getFullYear()} ASII</Link></p>
        <p className="text-xs mt-2">Realizat cu <Link href="https://theconversation.com/what-is-love-heres-the-science-59281">❤️</Link> de echipa ASII</p>
        <div>
            <p><Link href="/contact">Contact</Link></p>
        </div>
      </footer>
    );
  }
  