import Image from "next/image";
import Link from "next/link";
import People from "./components/people";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 pt-10 text-stone-100 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className="flex flex-col h-svh" >
            <div className="hero relative">
                <h1 className="herotxt text-[130px] p-36 pl-2 pr-2 pb-10 pt-24 font-bold tracking-wide text-center leading-tight">
                  JT bootcamp<br/>for Web developers
                </h1>
            </div>
            <button ><Link href="/auth/loginpage" className="inline-flex items-center rounded-md bg-gray-50 p-8 text-4xl font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">Start NOW !</Link></button>
            <div className="adds flex justify-between pt-16">
                <p className="font-sans font-thin text-3xl pl-32">2024 Promo open</p>
                <h2 className="text-3xl font-sans font-thin pr-32" >We are the best at<br/><span className="txtcr italic font-serif">what we do</span></h2>
            </div>
        </div>

        <div className="flex flex-col h-svh" >
            <div className="hero relative">
                <h1 className="herotxt text-[100px] p-36 pl-2 pr-2 pb-10 font-bold tracking-wide text-center leading-tight">
                  Open gates for the tech world
                </h1>
            </div>
            <div className="flex flex-col text-7xl">
              <div className="flex p-20 justify-around font-extrabold">
              <Image src="/aspnet.svg" 
                    alt="Avatar"
                    className="meimg right-1/4 "
                    width={300}
                    height={300}
              ></Image>
              <Image src="/java.svg" 
                    alt="Avatar"
                    className="meimg right-1/4"
                    width={300}
                    height={300}
              ></Image>
              </div>
              <div className="flex p-20 pt-5 justify-around font-extrabold">
              <Image src="/react.svg" 
                    alt="Avatar"
                    className="meimg right-1/4"
                    width={300}
                    height={300}
              ></Image>
              <Image src="/angular.svg" 
                    alt="Avatar"
                    className="meimg right-1/4"
                    width={300}
                    height={300}
              ></Image>
              </div>
            </div>
        </div>

        <div className="flex flex-col h-svh" >
          <h1 className="herotxt text-[100px] p-64 pl-2 pt-96 pr-2 pb-10 font-bold tracking-wide text-center leading-tight" >our team</h1>
          <People></People>
        </div>
        
    </main>
  );
}
