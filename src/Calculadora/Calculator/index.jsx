import React, { useState } from 'react';
import Display from './Display';
import Button from './Button';
import './index.css';

const Calculator = () => {
  const [currentInput, setCurrentInput] = useState('0');
  const [operator, setOperator] = useState('');
  const [history, setHistory] = useState('');

  const updateDisplay = () => {
    setCurrentInput(currentInput);
    setHistory(history);
  };

  const addNumero = (numero) => {
    if (currentInput === '0' || currentInput === 'Erro') {
      setCurrentInput(numero.toString());
    } else {
      setCurrentInput((prev) => prev + numero.toString());
    }
    updateDisplay();
  };

  const addOperador = (op) => {
    if (operator !== '') {
      total();
    }
    setOperator(op);
    setHistory(`${currentInput} ${op}`);
    setCurrentInput('0');
    updateDisplay();
  };

  const total = () => {
    if (operator === '') {
      return;
    }
    const num1 = parseFloat(history);
    const num2 = parseFloat(currentInput);
    switch (operator) {
      case '+':
        setCurrentInput((num1 + num2).toString());
        break;
      case '-':
        setCurrentInput((num1 - num2).toString());
        break;
      case '*':
        setCurrentInput((num1 * num2).toString());
        break;
      case '/':
        if (num2 === 0) {
          setCurrentInput('Erro');
        } else {
          setCurrentInput((num1 / num2).toString());
        }
        break;
      case '%':
        if (num1 !== '%') {
          setCurrentInput((num1 * (num2 / 100)).toString());
        }
        break;
      default:
        break;
    }
    setOperator('');
    setHistory('');
    updateDisplay();
  };

  const limpar = () => {
    setCurrentInput('0');
    setOperator('');
    setHistory('');
    updateDisplay();
  };

  return (
    <div className="calculator">
      <Display value={currentInput} history={history} />
      <div className="button-container">
        <Button label="AC" onClick={() => limpar()} />
        <Button label="+/-" onClick={() => addOperador('+/-')} />
        <Button label="%" onClick={() => addOperador('%')} />
        <Button label="/" onClick={() => addOperador('/')} />

        <Button label="7" onClick={() => addNumero(7)} />
        <Button label="8" onClick={() => addNumero(8)} />
        <Button label="9" onClick={() => addNumero(9)} />
        <Button label="*" onClick={() => addOperador('*')} />

        <Button label="4" onClick={() => addNumero(4)} />
        <Button label="5" onClick={() => addNumero(5)} />
        <Button label="6" onClick={() => addNumero(6)} />
        <Button label="-" onClick={() => addOperador('-')} />

        <Button label="1" onClick={() => addNumero(1)} />
        <Button label="2" onClick={() => addNumero(2)} />
        <Button label="3" onClick={() => addNumero(3)} />
        <Button label="+" onClick={() => addOperador('+')} />

        <Button label="0" onClick={() => addNumero(0)} />
        <Button label="." onClick={() => addNumero('.')} />
        <Button label="=" onClick={() => total()} />
      </div>
    </div>
  );
};

export default Calculator;