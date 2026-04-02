import { useState } from 'react';

export function ResultadoDiagnostico({ resultado, onFechar }) {
  const [mostrarDetalhes, setMostrarDetalhes] = useState(false);

  if (!resultado) return null;

  const corRisco = {
    'CRÍTICO': '#c0392b',
    'ALTO': '#e74c3c',
    'MODERADO': '#f39c12', 
    'BAIXO': '#f1c40f',
    'MÍNIMO': '#2ecc71'
  };

  const iconeRisco = {
    'CRÍTICO': '🚨',
    'ALTO': '⚠️',
    'MODERADO': '⚡',
    'BAIXO': '📊',
    'MÍNIMO': '✅'
  };

  return (
    <div className="diagnostico-overlay">
      <div className="diagnostico-container">
        {/* Cabeçalho do Diagnóstico */}
        <div className="diagnostico-header">
          <h2>🤖 Diagnóstico CardioIA</h2>
          <button className="btn-fechar" onClick={onFechar}>✕</button>
        </div>

        {/* Informações do Paciente */}
        <div className="paciente-info">
          <h3>📋 Paciente: {resultado.paciente}</h3>
          <div className="info-medicas">
            <p><strong>🩺 Pressão Arterial:</strong> {resultado.pressaoArterial}</p>
            <p><strong>📊 Classificação:</strong> {resultado.classificacaoPressao.categoria}</p>
            <p className="descricao-pressao">{resultado.classificacaoPressao.descricao}</p>
          </div>
          <p className="timestamp">
            📅 Análise realizada em: {new Date(resultado.timestamp).toLocaleString('pt-BR')}
          </p>
        </div>

        {/* Nível de Risco */}
        <div className="risco-card" style={{ borderColor: corRisco[resultado.nivelRisco] }}>
          <div className="risco-header">
            <span className="risco-icone">{iconeRisco[resultado.nivelRisco]}</span>
            <div>
              <h3>Nível de Risco: {resultado.nivelRisco}</h3>
              <p>Pontuação: {resultado.pontuacaoRisco}/100</p>
            </div>
          </div>
          <div className="risco-barra">
            <div 
              className="risco-progresso" 
              style={{ 
                width: `${resultado.pontuacaoRisco}%`,
                backgroundColor: corRisco[resultado.nivelRisco]
              }}
            ></div>
          </div>
        </div>

        {/* Recomendações */}
        <div className="recomendacoes-section">
          <h3>💡 Recomendações</h3>
          <ul className="recomendacoes-lista">
            {resultado.recomendacoes.map((rec, index) => (
              <li key={index}>{rec}</li>
            ))}
          </ul>
        </div>

        {/* Próxima Consulta */}
        <div className="proxima-consulta">
          <h3>📅 Próxima Consulta Recomendada</h3>
          <p className="data-consulta">{resultado.proximaConsulta}</p>
        </div>

        {/* Botão para Mostrar Detalhes */}
        <button 
          className="btn-detalhes"
          onClick={() => setMostrarDetalhes(!mostrarDetalhes)}
        >
          {mostrarDetalhes ? '🔼 Ocultar Detalhes' : '🔽 Ver Detalhes Técnicos'}
        </button>

        {/* Detalhes Técnicos (Expandível) */}
        {mostrarDetalhes && (
          <div className="detalhes-tecnicos">
            <h4>🔬 Observações Técnicas</h4>
            <ul>
              {resultado.observacoes.map((obs, index) => (
                <li key={index}>{obs}</li>
              ))}
            </ul>
            
            <div className="confiabilidade">
              <p><strong>🎯 Confiabilidade da Análise:</strong> {resultado.confiabilidade}%</p>
              <div className="confiabilidade-barra">
                <div 
                  className="confiabilidade-progresso"
                  style={{ width: `${resultado.confiabilidade}%` }}
                ></div>
              </div>
            </div>

            {/* Aviso Ético */}
            <div className="aviso-etico">
              <h4>⚖️ Importante - Considerações Éticas</h4>
              <p>
                <strong>⚠️ Este diagnóstico é apenas uma análise preliminar baseada em IA.</strong><br/>
                • Não substitui consulta médica profissional<br/>
                • Sempre procure um cardiologista para confirmação<br/>
                • A IA pode ter limitações e vieses algorítmicos<br/>
                • Seus dados são processados respeitando a LGPD
              </p>
            </div>
          </div>
        )}

        {/* Botões de Ação */}
        <div className="acoes-diagnostico">
          <button className="btn-salvar">💾 Salvar Relatório</button>
          <button className="btn-compartilhar">📤 Compartilhar com Médico</button>
          <button className="btn-nova-analise" onClick={onFechar}>
            🔄 Nova Análise
          </button>
        </div>
      </div>
    </div>
  );
} 