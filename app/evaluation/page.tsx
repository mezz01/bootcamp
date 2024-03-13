const students = [
    {
      name: 'Leslie Alexander',
      email: 'leslie.alexander@example.com',
      role: 'Nextjs, Reactjs, Javascript',
      
    },
    {
      name: 'Michael Foster',
      email: 'michael.foster@example.com',
      role: 'Angular, git, java',
    },
    {
      name: 'Dries Vincent',
      email: 'dries.vincent@example.com',
      role: 'React, .net',
    },
    {
      name: 'Lindsay Walton',
      email: 'lindsay.walton@example.com',
      role: 'Vuejs, monogodb',
    },
    {
      name: 'Courtney Henry',
      email: 'courtney.henry@example.com',
      role: 'FireBase, C, JavaScript',
    },
    {
      name: 'Tom Cook',
      email: 'tom.cook@example.com',
      role: 'Golang, Api, Git',
    },
  ]


export default function Evaluation(){
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24 pb-72 pt-10 text-stone-100 bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700">
        <div className="flex flex-col h-svh" >
              <div className="hero relative">
                  <h1 className="herotxt text-[90px] p-36 pl-2 pr-2 pb-10 pt-24 font-bold tracking-wide text-center leading-tight">
                    Hello Mohamed Mr.evaluatorX
                  </h1>
              </div>
              <div className="adds flex justify-between pt-16 p-20 pl-0">
                  <p className="font-sans font-thin text-3xl pl-32">Students list :</p>
              </div>
              

              <ul role="list" className="divide-y divide-gray-100">
        {students.map((student) => (
          <li key={student.email} className="flex justify-between gap-x-10 py-10">
            <div className="flex min-w-0 gap-x-20">
              <div className="min-w-0 flex-auto">
                <p className="text-xl font-semibold leading-6 text-white">{student.name}</p>
                <p className="mt-1 truncate text-xs leading-5 text-white">{student.email}</p>
              </div>
            </div>
            <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
              <p className="text-sm leading-6 text-gray-900">{student.role}</p>
            </div>
          </li>
        ))}
      </ul>
          </div>
          
      </main>
    )
}