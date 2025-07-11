import { Link } from "react-router-dom"
export default function Home() {
  return( 
    <>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
      <div className="bg-gray-300 p-4 m-4 rounded">
        <h2 className="text-center font-bold">Website Developer</h2>
        <p className="text-center p-3" >👋 Hi, I'm Ali Hamza – a MERN Stack Developer</p>
        <p  className="my-1">I'm a passionate full-stack web developer specializing in the MERN stack (MongoDB, Express.js, React, and Node.js). I love turning ideas into fully functional, responsive, and user-friendly web applications. Whether it's building powerful RESTful APIs, designing dynamic React interfaces, or managing data with MongoDB, I enjoy every part of the development process.</p>
        <p className="my-2">My focus is on writing clean, maintainable code and delivering real-world solutions that not only work but scale. I'm always learning, always building, and always looking for ways to grow in this fast-moving tech world.</p>
        <Link to="/contact"><button class="bg-blue-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded my-5 w-50">Hire Me!</button></Link>
      </div>
      <div className="bg-gray-100 p-4 m-4 rounded">
        <img src="https://res.cloudinary.com/doabbpdy1/image/upload/v1752217541/imageWeb2_mllqcp.jpg" alt="" />
      </div>
    </div>
    </>

   
   )
}
