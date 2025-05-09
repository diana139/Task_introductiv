import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
   <div className="bg-amber-50  opacity-75">
    <p className="text-red-600 font-bold text-[70px] text-center">Meet the Team</p>
   </div>
<div className="flex justify-center mt-[10vh]">
  <Link href="/membri/mentori">
   <div className="
  p-6
  h-[500px] w-[450px]
  bg-gradient-to-br from-[#ffecc1] to-amber-50
  rounded-[10px] 
  float-left mr-[10vw] mt-[10vh]
  hover:bg-gradient-to-r hover:from-[#895a5a] hover:to-[#f00e0e]
  transition-all duration-500
">
  <p className="text-[#464544] text-center font-bold">Mentori</p>
</div>
</Link>
  <Link href="/membri/boboci">
<div className="
  p-6
  h-[500px] w-[450px]
  bg-gradient-to-br from-[#ffecc1] to-amber-50
  rounded-[10px] 
  float-left mr-[10vw] mt-[10vh]
  hover:bg-gradient-to-r hover:from-[#895a5a] hover:to-[#f00e0e]
  transition-all duration-500
">
  <p className="text-[#464544] text-center font-bold">Boboci</p>
</div>

</Link>
</div>
 
    
  
   </>
  );
}
 
 