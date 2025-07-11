import { Link } from "react-router-dom"
export default function footer(){
    return(
        <>
         <div className="container-fluid bg-gray-900">
         <ul className="p-2 py-5">
            <li className="p-3 text-white hover:bg-blue-900 rounded w-25 my-2" ><Link to="/home">Home</Link></li>
            <li className="p-3 text-white hover:bg-blue-900 rounded w-25 my-2" ><Link to="/projects">Project</Link></li>
            <li className="p-3 text-white hover:bg-blue-900 rounded w-25 my-2" ><Link to="/contact">Contact</Link></li>
         </ul>
         </div>
        </>
    )
}