import "./index.css";
export default function Saldo({ saldo, financas }) {
  return (
    <div>
      <h3 className="saldo-titulo">
        <span className="saldo-valor">Saldo </span>R$
        {financas.reduce((valor_inicial, elem) => {
          if (elem.tipo === "Saída") {
            valor_inicial -= elem.valor;
          } else {
            valor_inicial += elem.valor;
          }
          return parseFloat(valor_inicial);
        }, 0)}
      </h3>
    </div>
  );
}
