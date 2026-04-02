import { useState, useEffect } from 'react';
import { FormularioPaciente } from './components/FormularioPaciente';
import { ListaPacientes } from './components/ListaPacientes';
import { ResultadoDiagnostico } from './components/ResultadoDiagnostico';
import { LoadingIA } from './components/LoadingIA';
import { iaService } from './services/iaService';
import './styles.css';

export default function App() {
  const [pacientes, setPacientes] = useState([]);
  const [carregandoIA, setCarregandoIA] = useState(false);
  const [resultadoIA, setResultadoIA] = useState(null);

  useEffect(() => {
    const dadosSalvos = localStorage.getItem('pacientes');
    if (dadosSalvos) setPacientes(JSON.parse(dadosSalvos));
  }, []);

  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify(pacientes));
  }, [pacientes]);

  function adicionarPaciente(paciente) {
    setPacientes([...pacientes, paciente]);
  }

  async function analisarComIA(paciente) {
    setCarregandoIA(true);
    setResultadoIA(null);
    
    try {
      const resultado = await iaService.analisarPaciente(paciente);
      setResultadoIA(resultado);
      
      // Opcional: adicionar paciente à lista após análise
      adicionarPaciente({
        ...paciente,
        ultimaAnalise: new Date().toISOString(),
        nivelRisco: resultado.nivelRisco
      });
      
    } catch (error) {
      console.error('Erro na análise da IA:', error);
      alert('Erro ao processar análise da IA. Tente novamente.');
    } finally {
      setCarregandoIA(false);
    }
  }

  function fecharResultado() {
    setResultadoIA(null);
  }

  return (
    <div>
      <h1>CardioIA – Batimentos de Dados</h1>
      <p className="subtitulo">
        🏥 Sistema Inteligente de Triagem Cardiológica
      </p>
      
      <FormularioPaciente 
        onAddPaciente={adicionarPaciente}
        onAnalisarIA={analisarComIA} 
      />
      
      <ListaPacientes pacientes={pacientes} />

      {/* Componentes da FASE 2 */}
      {carregandoIA && <LoadingIA />}
      
      {resultadoIA && (
        <ResultadoDiagnostico 
          resultado={resultadoIA} 
          onFechar={fecharResultado}
        />
      )}
    </div>
  );
}