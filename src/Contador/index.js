import React from 'react';
import './index.css';
import imgMasculino from '../img/homen.jpg';
import imgFeminino from '../img/mulher.png';
import imgAddMasculino from '../img/adcionar.jpg';
import imgSubtrairMasculino from '../img/subtrair.jpg';
import imgAddFeminino from '../img/adcionar.jpg';
import imgSubtrairFeminino from '../img/subtrair.jpg';
import imgZerar from '../img/Zerar.jpg'
import { useState, useEffect } from 'react';

function ContadorDePessoas() {

    const [contadorMasculino, setContadorMasculino] = useState(0);
    const [contadorFeminino, setContadorFeminino] = useState(0);
    const [contadorTotal, setContadorTotal] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        atualizarContadores();
      }, 10000);
  
      return () => {
        clearInterval(interval);
      };
    }, []);
    const atualizarContadores = ()=> {
        setContadorTotal(contadorMasculino + 1);
        setContadorTotal(contadorFeminino + 1);
        
      }
    
  function adicionarMasculino() {
    
    setContadorMasculino(contadorMasculino + 1);
    atualizarContadores();
  }

  function adicionarFeminino() {
    setContadorFeminino(contadorFeminino + 1);
    atualizarContadores();
  }

  function subtrairMasculino() {
    if (contadorMasculino > 0) {
      setContadorMasculino(contadorMasculino - 1);
      atualizarContadores();
    }
  }

  function subtrairFeminino() {
    if (contadorFeminino > 0) {
      setContadorFeminino(contadorFeminino - 1);
      atualizarContadores();
    }
  }

  function zerarContador() {
    setContadorMasculino(0);
    setContadorFeminino(0);
     setContadorTotal(0);
  }

  return (
    <div>
      <div className="zerar">
        <img src={imgZerar} alt="" id="imagemZerarContador" width="50px" onClick={zerarContador} />
      </div>
      <div>
          <div className="contador-div">Total: {contadorTotal}</div>
      </div>
      <div>
        <div className="contador-div">Homens: {contadorMasculino}</div>
      </div>
      <div>
        <div className="contador-div">Mulheres: {contadorFeminino}</div>
      </div>
      <div id="imagens">
        <div className="posicao01">
          <img src={imgMasculino} alt="Masculino" id="imagemMasculino" width="110px" height="110px" onClick={adicionarMasculino} />
        </div>
        <div className="posicao02">
          <img src={imgFeminino} alt="Feminino" id="imagemFeminino" width="100px" height="110px" onClick={adicionarFeminino} />
        </div>
        <div className="img02">
          <img src={imgAddMasculino}alt="" id="imagemAddMasculino" width="95px" height="90px" onClick={adicionarMasculino} />
          <img src={imgSubtrairMasculino} alt="" id="imagemSubtrairMasculino" width="75px" height="70px" onClick={subtrairMasculino} />
        </div>
        <div className="img01">
          <img src={imgAddFeminino}alt="" id="imagemAddFeminino" width="95px" height="90px" onClick={adicionarFeminino} />
          <img src={imgSubtrairFeminino} alt="" id="imagemSubtrairFeminino" width="75px" height="70px" onClick={subtrairFeminino} />
        </div>
      </div>
    </div>
  );
}

export default ContadorDePessoas;