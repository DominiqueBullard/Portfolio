import Image from '/Users/dbullard.if25/TKH_25/Profolio/Portfolio/portfolio/src/picture/Logo.png'

export default function about(){
    return(
    <div className="flex min-h-screen">
    <div className="bg-red-900 text-white flex items-center justify-center w-1/3 p-8">
     <img 
      src={Image}
      alt="Logo" 
      className="w-65 h-auto absolute top-9 left-4"
     />
        <h1 className="text-5xl font-bold">About me</h1>
      </div>    
      <div className="text-gray-100 bg-gray-800 flex items-center justify-center w-full p-8">
      
        <p className="text-lg max-w-lg">
          Hello, I'm Dominique.
I'm a frontend developer with a passion for creativity—whether that’s through coding, art, or cosplay. I enjoy bringing ideas to life through interactive and visually engaging web experiences.
 Outside of development, I'm also an artist and cosplayer, which lets me explore different forms of expression and storytelling.
I'm currently studying Japanese (at the N5 level) and expanding my knowledge in web technologies.
 While I may not have all the answers yet, I’m deeply curious and always open to learning something new.
  Whether it’s a coding challenge, a creative project, or a new language, I approach it all with enthusiasm and a growth mindset.
        </p>
      </div>
    </div>
    
    )
}