import { useState } from "react";
import Formulario from "../Form";
import { ResumoFinanceiro } from "../ResumoFinanceiro";
import Kabecalho from "../Cabecalho";
import Saldo from "../Saldo";
export default function Home({ setInicio }) {
  const [financas, setFinancas] = useState([]);
  const [saldo, setSaldo] = useState(0);

  function handleFinancas(valor, setForm) {
    setForm({
      descricao: valor.descricao,
      tipo: valor.tipo,
      valor: parseFloat(valor.valor),
    });
    setFinancas([...financas, valor]);
    handleSaldo();
  }

  function handleSaldo() {
    const resultado = financas.reduce((valor_inicial, elem) => {
      if (elem.tipo === "Saída") {
        valor_inicial -= elem.valor;
      } else {
        valor_inicial += elem.valor;
      }
      return valor_inicial;
    }, 0);
    setSaldo(resultado);
  }
  return financas.length > 0 ? (
    <>
      <Kabecalho setInicio={setInicio} />
      <div className="container-conteudo">
        <div className="container-components">
          <Formulario
            setFinancas={handleFinancas}
            saldo={() => handleSaldo()}
          />
          <Saldo saldo={saldo} financas={financas} />
        </div>
        <ResumoFinanceiro financas={financas} setFinancas={setFinancas} />
      </div>
    </>
  ) : (
    <>
      <Kabecalho setInicio={setInicio} />
      <div className="container-conteudo">
        <div className="container-components">
          <Formulario
            setFinancas={handleFinancas}
            saldo={() => handleSaldo()}
          />
        </div>
        <ResumoFinanceiro financas={financas} props={true} />
      </div>
    </>
  );
}
