import "./index.css";
export default function Kabecalho({ setInicio }) {
  return (
    <div className="kabecalho-container">
      <h1 className="kabecalho-titulo">
        <span className="kabecalho-titulo_span">NU</span>Kenzie
      </h1>
      <button className="kabecalho-botao" onClick={() => setInicio(true)}>
        Inicio
      </button>
    </div>
  );
}
