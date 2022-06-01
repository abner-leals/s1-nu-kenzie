import { useState } from "react";
import { ListaFantasma } from "../Listavazia";
import "./index.css";

export function ResumoFinanceiro({ financas, setFinancas, props }) {
  const [Filtro, setFiltro] = useState("");
  function deletar(id) {
    setFinancas(financas.filter((element) => element.id !== id));
  }
  return props ? (
    <div className="Container-ResumoFinanceiro">
      <div className="ResumoFinanceiro-divBotoes">
        <h3>Resumo Financeiro</h3>
        <div className="cont-btn">
          <button
            className="kabecalho-botao"
            name="Todos"
            onClick={() => setFiltro("")}
          >
            Todos
          </button>
          <button
            className="kabecalho-botao"
            name="Entrada"
            onClick={() =>
              setFiltro(financas.filter((elem) => elem.tipo !== "Saída"))
            }
          >
            Entradas
          </button>
          <button
            className="kabecalho-botao"
            name="Saída"
            onClick={() =>
              setFiltro(financas.filter((elem) => elem.tipo === "Saída"))
            }
          >
            Saídas
          </button>
        </div>
      </div>
      <h3 className="h3pantarma">Você ainda não possui nenhum lançamento</h3>
      <ul className="ulpantarma">
        <li className="lipantarma">
          <div className="pantarma"></div>
          <div className="pantarma2"></div>
        </li>
        <li className="lipantarma">
          <div className="pantarma"></div>
          <div className="pantarma2"></div>
        </li>
        <li className="lipantarma">
          <div className="pantarma"></div>
          <div className="pantarma2"></div>
        </li>
      </ul>
    </div>
  ) : (
    <div className="Container-ResumoFinanceiro">
      <div className="ResumoFinanceiro-divBotoes">
        <h3>Resumo Financeiro</h3>
        <div className="cont-btn">
          <button
            className="kabecalho-botao"
            name="Todos"
            onClick={() => setFiltro("")}
          >
            Todos
          </button>
          <button
            className="kabecalho-botao"
            name="Entrada"
            onClick={() =>
              setFiltro(financas.filter((elem) => elem.tipo !== "Saída"))
            }
          >
            Entradas
          </button>
          <button
            className="kabecalho-botao"
            name="Saída"
            onClick={() =>
              setFiltro(financas.filter((elem) => elem.tipo === "Saída"))
            }
          >
            Saídas
          </button>
        </div>
      </div>
      <ul className="container-components container-lista">
        {Filtro !== ""
          ? Filtro.map((elem, ind) => (
              <li className={elem.tipo} key={ind}>
                <div>
                  <h3>{elem.descricao}</h3>
                  <p>{elem.tipo}</p>
                </div>
                <div>
                  <p>R$ {elem.valor.toFixed(2).toString().replace(".", ",")}</p>
                  <button id={ind} onClick={() => deletar(elem.id)}>
                    <img src="./trash.svg" />
                  </button>
                </div>
              </li>
            ))
          : financas.map((elem, ind) => (
              <li className={elem.tipo} key={ind}>
                <div>
                  <h3>{elem.descricao}</h3>
                  <p>{elem.tipo}</p>
                </div>
                <div>
                  <p>R$ {elem.valor.toFixed(2).toString().replace(".", ",")}</p>
                  <button id={ind} onClick={() => deletar(elem.id)}>
                    <img src="./trash.svg" />
                  </button>
                </div>
              </li>
            ))}
      </ul>
    </div>
  );
}
