import Link from "next/link";
import en from "../../public/logo/en.png";
import hi from "../../public/logo/hi.png";
import es from "../../public/logo/es.png";
import Image from "next/image";

export default function Home() {

    return(

        <>
            <div className="flex flex-col items-center justify-center mt-[110px]">

                <h1 className="text-[30px]"> Select your language :  </h1>

                <div className="mt-[50px] flex gap-14">

                    <div className="flex flex-row hover:scale-110 hover:underline hover:underline-offset-[5px]"> 
                        <Link href={"/en"}> <Image className="mx-auto" src={en} height={40} width={40} alt="en"/> 
                            <p className="font-semibold"> English </p> 
                        </Link>
                    </div>

                    <div className="flex flex-row hover:scale-110 hover:underline hover:underline-offset-[5px]"> 
                        <Link href={"/hi"}> <Image className="mx-auto" src={hi} height={40} width={40} alt="en"/> 
                            <p className="font-semibold"> Hindi </p> 
                        </Link>
                    </div>

                    <div className="flex flex-row hover:scale-110 hover:underline hover:underline-offset-[5px]"> 
                        <Link href={"/es"}> <Image className="mx-auto" src={es} height={40} width={40} alt="en"/> 
                            <p className="font-semibold"> Spanish </p> 
                        </Link>
                    </div>

                </div>

            </div>
        
        </>

    )

}

