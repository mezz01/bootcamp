import Link from "next/link"

export default function Footer(){
    return (
    <footer className="flex justify-around p-44 pt-72">
        <div className="text-6xl"><Link href="/">JT studios</Link></div>
        <div className="flex-col ">
          <h2 className="text-3xl">Our technologies</h2>
          <ul className="text-xl p-10 ">
            <li className="p-3">Reactjs</li>
            <li className="p-3">Angularjs</li>
            <li className="p-3">.NET core</li>
            <li className="p-3">Java</li>
          </ul>
        </div>
    </footer>
    )
}