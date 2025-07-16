import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
export default function project() {
  return(
    <>
    <h1 className="text-center text-blue-600 text-3xl p-3">My Projects</h1>
    <p  className=" text-cyan-600 text-2xl p-4 ">My E-commerce Website</p>
    
    
    <a  className="p-4 text-black underline text-2xl" href="https://e-commerce-five-sand-35.vercel.app/"><FontAwesomeIcon icon={faArrowRight} /><span>  </span>  E-Shop</a>
    
    <p  className=" text-cyan-600 text-2xl p-4 ">Age Calculator</p>
    
    
    <a  className="p-4 text-black underline text-2xl" href="https://age-calculator-tau-jet.vercel.app/"><FontAwesomeIcon icon={faArrowRight} /><span>  </span>  AgeCalculator</a>
    
    <p  className=" text-cyan-600 text-2xl p-4 ">Text-to-voice Converter</p>
    
    
    <a  className="p-4 text-black underline text-2xl" href="https://text-to-voice-six-lime.vercel.app/"><FontAwesomeIcon icon={faArrowRight} /><span>  </span>  TextToVoiceConverter</a>
    
    <p  className=" text-cyan-600 text-2xl p-4 ">Quiz App</p>
    
    
    <a  className="p-4 text-black underline text-2xl pb-4" href="https://quiz-app-teal-mu-70.vercel.app/"><FontAwesomeIcon icon={faArrowRight} /><span>  </span>  QuizApp</a>
    
    
    </> 
  )
}
