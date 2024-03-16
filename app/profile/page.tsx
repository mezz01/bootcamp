import Link from "next/link"

export default function Profile(){
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24 pt-10 text-stone-100 bg-gradient-to-r from-indigo-800 via-purple-800 to-pink-800">
        <div className="flex flex-col h-svh" >
              <div className="hero relative">
                  <h1 className="herotxt text-[90px] p-36 pl-2 pr-2 pb-10 pt-24 font-bold tracking-wide text-center leading-tight">
                    Hello Mohamed Amine Mezzat
                  </h1>
              </div>
              <div className="adds flex justify-between pt-16 p-20 pl-0">
                  <p className="font-sans font-thin text-3xl pl-32">Your informations :</p>
              </div>
              <form className="space-y-6">

          <div>
              <div className="flex items-center justify-between">
                <label htmlFor="fullname" className="block text-sm font-medium leading-6 text-gray-900">
                  Full Name
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="fullname"
                  name="fullname"
                  placeholder="Mohamed Amine Mezzat"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
        </div>


        <div>
              <div className="flex items-center justify-between">
                <label htmlFor="fullname" className="block text-sm font-medium leading-6 text-gray-900">
                  Change phone number
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="fullname"
                  name="fullname"
                  placeholder="06-52-86-21-01"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
        </div>

        <div>
              <div className="flex items-center justify-between">
                <label htmlFor="fullname" className="block text-sm font-medium leading-6 text-gray-900">
                  Add programming languages and frameworks
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="fullname"
                  name="fullname"
                  placeholder="Nextjs, Reactjs, Tailwindcss, git"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
        </div>

        <div>
              <div className="flex items-center justify-between">
                <label htmlFor="fullname" className="block text-sm font-medium leading-6 text-gray-900">
                  Change latest academic level
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="fullname"
                  name="fullname"
                  placeholder="Bac+2"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
        </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
               Change Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="mezzatamine2002@gmail.com"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  change password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="current-password"
                  placeholder="**************"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>


            <div>
              <button
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Save changes
              </button>
            </div>
          </form>
          </div>
          
      </main>
    )
   
}