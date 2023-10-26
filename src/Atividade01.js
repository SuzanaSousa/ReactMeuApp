
import  Relogio from "./Relogio";
import   Letreiro  from "./Letreiro";
import {Link} from "react-router-dom";

function Atividade01(){
    return(
        <>
         <h1 class="certer"> Atividade 01 </h1>
         <Letreiro /> 
         <Relogio />
         
         <Link to="/"> Retormar para pagina index</Link>
        </>
    )
}
export default Atividade01;