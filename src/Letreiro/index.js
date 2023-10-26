import React from 'react';

import './index.css';

class Letreiro extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      texto: 'Venha Estudar na FATEC ',
      atual: 0,
     
      };
  }

  componentDidMount() {
    this.Animar();
  }

  Animar() {
    this.intervalId = setInterval(() => {
       
      const { texto, atual } = this.state;
      if (atual < texto.length - 1) {
        this.setState({ atual: atual + 1 });
      } else {
         // Define textoCompleto como true quando todo o texto foi exibido
          this.setState({ atual: 0 });
      }
      
    
      
    }, 1200);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }


  render() {
    const { texto, atual } = this.state;
    const exibir = texto.substring(0, atual + 1);
    return(
     
      <div className="letreiro-container">
      <p className="letreiro-texto">{exibir}</p>
      </div>  
    );
  }

}
export default Letreiro;
