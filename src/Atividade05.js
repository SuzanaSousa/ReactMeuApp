import Jogo from "./Jogo/Game";
import {Link} from "react-router-dom";


function Atividade05(){
    return(
        <>
         <h1 class="certer"> Atividade 05  </h1>
        
         <div className="container">
         <Link to="/">Retormar</Link></div>
         <Jogo />
        </>
    )
}
export default Atividade05;