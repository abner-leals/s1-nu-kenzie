import { useState } from "react";
import "./index.css";

export default function Formulario({ setFinancas, saldo }) {
  const [form, setForm] = useState({
    descricao: "",
    tipo: "Entrada",
    valor: 0,
  });
  const [contador, setContador] = useState(0);
  return (
    <div className="container-form">
      <form
        className="form"
        onSubmit={(e) => {
          if (e.keyCode === 13) {
            e.preventDefault();
          }
          e.preventDefault();
          setForm({
            descricao: form.descricao,
            tipo: form.tipo,
            valor: parseFloat(form.valor),
          });
          setFinancas(
            {
              id: contador,
              descricao: form.descricao,
              tipo: form.tipo,
              valor: parseFloat(form.valor),
            },
            setForm
          );
          setForm({
            descricao: "",
            tipo: "Entrada",
            valor: 0,
          });
          setContador(contador + 1);
        }}
      >
        <label className="form-label">
          Descricao
          <input
            name="desc"
            className="form-input"
            placeholder="Digite aqui sua descrição"
            type={"text"}
            value={form.descricao}
            onChange={(e) => {
              setForm({
                descricao: e.target.value,
                tipo: form.tipo,
                valor: form.valor,
              });
            }}
          ></input>
          <label className="form-label_ex">Ex: Compra de roupas</label>
        </label>
        <div className="form-div">
          <label className="form-label">
            Tipo
            <select
              name="tipo"
              className="form-input"
              value={form.tipo}
              onChange={(e) => {
                setForm({
                  descricao: form.descricao,
                  tipo: e.target.value,
                  valor: form.valor,
                });
              }}
            >
              <option>Entrada</option>
              <option>Saída</option>
            </select>
          </label>
          <label className="form-label">
            Valor
            <input
              name="valor"
              className="form-input valor"
              type={"text"}
              value={form.valor}
              onChange={(e) => {
                e.preventDefault();
                setForm({
                  descricao: form.descricao,
                  tipo: form.tipo,
                  valor: e.target.value.toString().replace(",", "."),
                });
              }}
              onBlur={(e) => {
                setForm({
                  descricao: form.descricao,
                  tipo: form.tipo,
                  valor: parseFloat(
                    e.target.value.toString().replace(",", ".")
                  ),
                });
              }}
            ></input>
          </label>
        </div>
        <button className="form-button" type="submit">
          Inserir Valor
        </button>
      </form>
    </div>
  );
}
