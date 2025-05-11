import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
     <div className=" min-h-screen transition-colors duration-300">
            <div className="relative w-full h-[500px]">
              <Image
                src="/images/poza_grup.jpg"
                alt="Poza de grup"
                fill
                className="object-cover opacity-70"
                priority
              />
                <div className="absolute inset-0 flex items-end justify-center pb-30">
                <h1 className="text-red-700 text-[100px] font-bold">Meet the Team</h1>
                </div>
            
            </div>
          <div className="flex justify-center gap-[7vw] flex-wrap mt-[5vh]">
          <Link href="/membri/mentori">
            <div className="
          p-6
          h-[70px] w-[300px]
          bg-gradient-to-br from-[#ffecc1] to-amber-50
          rounded-[20px] 
          hover:bg-gradient-to-r hover:from-[#895a5a] hover:to-[#f00e0e]
          transition-all duration-500
          ">
          <p className="text-[#464544] text-center font-bold">Mentori</p>
          </div>
          </Link>
          <Link href="/membri/coordonator">
          <div className="
          p-6
          h-[70px] w-[300px]
          bg-gradient-to-br from-[#ffecc1] to-amber-50
          rounded-[20px] 
          hover:bg-gradient-to-r hover:from-[#895a5a] hover:to-[#f00e0e]
          transition-all duration-500
          ">
          <p className="text-[#464544] text-center font-bold">Coordonator IT</p>

          </div>
          </Link>
          <Link href="/membri/boboci">
          <div className="
          p-6
          h-[70px] w-[300px]
          bg-gradient-to-br from-[#ffecc1] to-amber-50
          rounded-[20px] 
          hover:bg-gradient-to-r hover:from-[#895a5a] hover:to-[#f00e0e]
          transition-all duration-500
          ">
          <p className="text-[#464544] text-center font-bold">Boboci</p>
          </div>

          </Link>
          </div>
</div>
    
  
   </>
  );
}
 
 