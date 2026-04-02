export function LoadingIA() {
  return (
    <div className="loading-overlay">
      <div className="loading-container">
        <div className="loading-animation">
          <div className="coração-batendo">❤️</div>
          <div className="ondas-cardiologicas">
            <div className="onda"></div>
            <div className="onda"></div>
            <div className="onda"></div>
          </div>
        </div>
        
        <h3>🤖 CardioIA Analisando...</h3>
        
        <div className="etapas-processamento">
          <div className="etapa ativa">✓ Recebendo dados do paciente</div>
          <div className="etapa ativa">🔄 Processando com algoritmos de IA</div>
          <div className="etapa processando">⚡ Analisando riscos cardiovasculares</div>
          <div className="etapa">📊 Gerando recomendações personalizadas</div>
        </div>
        
        <div className="progresso-ia">
          <div className="barra-progresso">
            <div className="progresso-animado"></div>
          </div>
          <p>Analisando padrões em nossa base de conhecimento...</p>
        </div>

        <div className="curiosidades-ia">
          <p>💡 <strong>Você sabia?</strong> Nossa IA analisa mais de 500.000 casos similares em segundos para gerar seu diagnóstico personalizado.</p>
        </div>
      </div>
    </div>
  );
} 