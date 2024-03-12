import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 text-stone-300 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <header className="p-0 items-center justify-end">
        <ul>
          <li><Link href="/auth/loginpage">Login</Link></li>
        </ul>
      </header>
      <div className="flex flex-col h-svh" >
            <div className="hero relative">
                <h1 className="herotxt text-[130px] p-36 pl-2 pr-2 pb-10 pt-0 font-bold tracking-wide text-center leading-tight">
                .NET/Java Bootcamp<br/>Using <br/>Reactjs/Angular
                </h1>
            </div>
            <Link href="/auth/signuppage" className="text-3xl p-10 font-bold text-center">Start NOW !</Link>
            <div className="adds flex justify-between">
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
            <div>

            </div>
        </div>


    </main>
  );
}
