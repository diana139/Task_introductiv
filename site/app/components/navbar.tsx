import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    return (
        <>
        <nav style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "10px 10px",
            backgroundColor: "#ffffff",
            borderBottom: "1px solid #ccc"
        }}>
            
            <Link href="/">
                <Image 
                    src="https://www.asii.ro/_astro/asii.e9f13d98.svg" 
                    height={100} 
                    width={100} 
                    alt="logo" 
                    style={{ cursor: "pointer" }}
                />
            </Link>

            <ul className="text-black font-bold flex gap-10 text-[20px]" style={{
                display: "flex",
                gap: "30px",
                listStyle: "none",
                margin: 0,
                padding: 0,
            }} >
                <li><Link href="/">Acasa</Link></li>
                <li><Link href="/mentori">Mentori</Link></li>
                <li><Link href="/boboci">Boboci</Link></li>
                <li><Link href="/contact">Contact</Link></li>
            </ul>
        </nav>
        </>
        
        
        
    );
}
