export default function contact(){
    return(
        <>
        <div className="flex min-h-screen">
      <div className="bg-red-900 text-white flex items-center justify-center w-1/3 p-8">
        <h1 className="text-5xl font-bold">Contact</h1>
      </div>

    
      <div className="text-gray-100 bg-gray-800 flex items-center justify-center w-full p-8">
      <div>
        <h2 className="text-lg max-w-md">
            Email: dominique.miller21@gmail.com
            </h2>
            <h2>
            <a href="https://github.com/DominiqueBullard" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Github</a>
            </h2>
            <a href="https://www.linkedin.com/in/dominique-bullard-48144a350" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Linkedin</a>   
      </div>
    </div>
    </div>
        </>
    )
}