import Game from "./Jogo/Game/index";
import Board from "./Jogo/Board/index";
import Card from "./Jogo/Card/index";
import {Link} from "react-router-dom";


function Atividade05(){
    return(
        <>
         <h1 class="certer"> Atividade 05  </h1>
         <Game/>
        
         <div className="container">
         <Link to="/">Retormar</Link></div>
        
        
        </>
    )
}
export default Atividade05;