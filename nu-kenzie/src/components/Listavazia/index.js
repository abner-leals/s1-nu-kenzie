import "../../App.css";
export function ListaVazia() {
  return (
    <>
      <div className="div1">
        <figure className="quadro1">
          <img src={require("../../components/img/credit-card.png")}></img>
        </figure>
        <div>
          <div className="livazio1"></div>
          <div className="livazio2"></div>
        </div>
      </div>
      <div className="div2">
        <figure className="quadro2">
          <img src={require("../../components/img/credit-card.png")}></img>
        </figure>
        <div>
          <div className="livazio2"></div>
        </div>
      </div>
    </>
  );
}
export function ListaFantasma() {
  return <li className="livazio"></li>;
}
export function CabecalhoListaVazia() {
  return (
    <div className="botoes">
      <div className="t1"></div>
      <div className="t2"></div>
      <div className="t3"></div>
    </div>
  );
}
