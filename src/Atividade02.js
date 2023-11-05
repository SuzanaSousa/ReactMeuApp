
import  Contador from "./Contador";
import {Link} from "react-router-dom";

function Atividade02(){
    return(
        <>
         <h1 class="certer"> Contador </h1>
         <Contador /> 
        
         <div className="container">
         <Link to="/">Retormar</Link></div>
        </>
    )
}
export default Atividade02;