import { CabecalhoListaVazia, ListaFantasma, ListaVazia } from "../Listavazia";

export default function Inicio({ setInicio }) {
  return (
    <div className="App">
      <header className="App-header">
        <div className="info">
          <span className="titulo">
            <span className="nome-logo titulo">Nu</span> Kenzie
          </span>
          <h1>Centralize o controle das suas finanças</h1>
          <p>de forma rápida e segura</p>
          <button className="App-botao" onClick={() => setInicio(false)}>
            Iniciar
          </button>
        </div>
        <div className="container">
          <ListaVazia />
          <ul className="ul">
            <CabecalhoListaVazia />
            <ListaFantasma />
            <ListaFantasma />
            <ListaFantasma />
            <ListaFantasma />
            <ListaFantasma />
          </ul>
        </div>
      </header>
    </div>
  );
}
