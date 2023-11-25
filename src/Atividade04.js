import Calculadora from "./Calculadora/Calculator";
import {Link} from "react-router-dom";


function Atividade04(){
    return(
        <>
         <h1 class="certer"> Atividade 04  </h1>
         <Calculadora/>
         
         <div className="container">
         <Link to="/">Retormar</Link></div>
         
        </>
    )
}
export default Atividade04;