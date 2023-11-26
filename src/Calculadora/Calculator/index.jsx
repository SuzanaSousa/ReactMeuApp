import React, { useState } from "react";
import Display from "../Display/index";
import Button from "../Button/index";
import "../CSS/index.css";


const Calculator = () => {
  const [currentInput, setCurrentInput] = useState('');
  
  const handleButtonClick = (button) => {
    // Lógica para tratar os cliques nos botões
    let newValue = currentInput;

    switch (button) {
      case '=':
        newValue = calcularResultado(newValue);
        break;
      case 'C':
        newValue = '0';
        break;
      case '+/-':
        newValue = (parseFloat(newValue) * -1).toString();
        break;
      case '%':
        newValue = (parseFloat(newValue) / 100).toString();
        break;
      case '←':
        newValue = newValue.slice(0, -1);
        break;
      default:
        

        // Se um número é pressionado após uma operação, limpar o visor
        if (['+', '-', '*', '/'].includes()) {
          newValue += button;
        } else {
          // Caso contrário, adicionar ao valor existente
          newValue = currentInput === '0' ? button : newValue + button;
        }
    }

    setCurrentInput(newValue);
  };

  const calcularResultado = (expression) => {
    try {
      return eval(expression).toString();
    } catch (error) {
      return 'Erro';
    }
  };
  const botoes = [
    'C',' +/-','%', '/',
    '7', '8', '9', '*',
    '4', '5', '6', '-',
    '1', '2', '3', '+',
     '0', '.', '=','←',
  ];

  return (
    <div className="calculadora">
      <input type="text" value={currentInput} readOnly />
      <div className="button-container">
        {botoes.map((botao, index) => (
          <button key={index} onClick={() => handleButtonClick(botao)}>
            {botao}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calculator;

 