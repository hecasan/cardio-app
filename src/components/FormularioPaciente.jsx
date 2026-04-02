import { useState } from "react";

export function FormularioPaciente({ onAddPaciente, onAnalisarIA }) {
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");
  const [pressaoSistolica, setPressaoSistolica] = useState("");
  const [pressaoDiastolica, setPressaoDiastolica] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!nome || !idade || !pressaoSistolica || !pressaoDiastolica) return;
    const paciente = {
      nome: nome.trim(),
      idade: parseInt(idade),
      pressaoSistolica: parseInt(pressaoSistolica),
      pressaoDiastolica: parseInt(pressaoDiastolica),
    };
    onAddPaciente(paciente);
    setNome("");
    setIdade("");
    setPressaoSistolica("");
    setPressaoDiastolica("");
  }

  function handleAnaliseIA(e) {
    e.preventDefault();
    if (!nome || !idade || !pressaoSistolica || !pressaoDiastolica) {
      alert('Por favor, preencha todos os campos antes de solicitar a análise da IA.');
      return;
    }
    const paciente = {
      nome: nome.trim(),
      idade: parseInt(idade),
      pressaoSistolica: parseInt(pressaoSistolica),
      pressaoDiastolica: parseInt(pressaoDiastolica),
    };
    onAnalisarIA(paciente);
  }

  return (
    <form>
      <input
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        placeholder="Nome"
        required
      />
      <input
        value={idade}
        onChange={(e) => setIdade(e.target.value)}
        placeholder="Idade"
        type="number"
        min="1"
        max="120"
        required
      />
      <div className="pressao-campos">
        <input
          value={pressaoSistolica}
          onChange={(e) => setPressaoSistolica(e.target.value)}
          placeholder="Pressão Sistólica (máxima)"
          type="number"
          min="60"
          max="250"
          required
        />
        <span className="separador-pressao">x</span>
        <input
          value={pressaoDiastolica}
          onChange={(e) => setPressaoDiastolica(e.target.value)}
          placeholder="Pressão Diastólica (mínima)"
          type="number"
          min="40"
          max="150"
          required
        />
      </div>
      <p className="exemplo-pressao">Exemplo: 120 x 80 mmHg</p>
      
      <div className="botoes-formulario">
        <button type="submit" onClick={handleSubmit} className="btn-cadastrar">
          Cadastrar Paciente
        </button>
        <button type="button" onClick={handleAnaliseIA} className="btn-ia">
          Análise com IA
        </button>
      </div>
    </form>
  );
}
