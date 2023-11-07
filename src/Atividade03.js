import Componentes from "./Componentes/Profile";
import {Link} from "react-router-dom";

function Atividade03(){
    return(
        <>
         <h1 class="certer"> Componente  </h1>
         <Componentes /> 
        
         <div className="container">
         <Link to="/">Retormar</Link></div>
        </>
    )
}
export default Atividade03;