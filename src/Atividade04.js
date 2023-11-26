import Calculator from "./Calculadora/Calculator/index.jsx";
import Button from "./Calculadora/Button/index.jsx";
import Display from "./Calculadora/Display/index.jsx";
import {Link} from "react-router-dom";


function Atividade04(){
    return(
        <>
         <h1 class="certer"> Calculadora </h1>
         <Calculator/>
         
         
         <div className="container">
         <Link to="/">Retormar</Link></div>
         
        </>
    )
}
export default Atividade04;