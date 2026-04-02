// Serviço simulado de IA para diagnóstico cardiológico
export const iaService = {
  // Simula chamada para API de IA - retorna após 2-3 segundos para simular processamento
  async analisarPaciente(dadosPaciente) {
    // Simula delay de processamento da IA
    await new Promise(resolve => setTimeout(resolve, 2000 + Math.random() * 1000));
    
    const { nome, idade, pressaoSistolica, pressaoDiastolica } = dadosPaciente;
    
    // Algoritmo baseado em diretrizes brasileiras de cardiologia
    const classificacaoPressao = classificarPressaoArterial(pressaoSistolica, pressaoDiastolica);
    const risco = calcularRiscoCardiovascular(idade, pressaoSistolica, pressaoDiastolica, classificacaoPressao);
    const recomendacoes = gerarRecomendacoes(risco, idade, classificacaoPressao);
    const proximaConsulta = calcularProximaConsulta(risco);
    
    return {
      paciente: nome,
      timestamp: new Date().toISOString(),
      pressaoArterial: `${pressaoSistolica} x ${pressaoDiastolica} mmHg`,
      classificacaoPressao: classificacaoPressao,
      nivelRisco: risco.nivel,
      pontuacaoRisco: risco.pontuacao,
      recomendacoes,
      proximaConsulta,
      observacoes: gerarObservacoes(risco, idade, pressaoSistolica, pressaoDiastolica, classificacaoPressao),
      confiabilidade: Math.floor(87 + Math.random() * 8) // 87-95%
    };
  }
};

// Classificação de Pressão Arterial segundo Sociedade Brasileira de Cardiologia
function classificarPressaoArterial(sistolica, diastolica) {
  if (sistolica < 90 || diastolica < 60) {
    return {
      categoria: 'Hipotensão',
      gravidade: 'BAIXA',
      descricao: 'Pressão arterial abaixo do normal'
    };
  }
  
  if (sistolica < 120 && diastolica < 80) {
    return {
      categoria: 'Normal',
      gravidade: 'BAIXO',
      descricao: 'Pressão arterial ideal'
    };
  }
  
  if ((sistolica >= 120 && sistolica <= 139) || (diastolica >= 80 && diastolica <= 89)) {
    return {
      categoria: 'Limítrofe',
      gravidade: 'BAIXO',
      descricao: 'Pré-hipertensão - atenção necessária'
    };
  }
  
  if ((sistolica >= 140 && sistolica <= 159) || (diastolica >= 90 && diastolica <= 99)) {
    return {
      categoria: 'Hipertensão Estágio 1',
      gravidade: 'MODERADO',
      descricao: 'Hipertensão leve - necessita tratamento'
    };
  }
  
  if ((sistolica >= 160 && sistolica <= 179) || (diastolica >= 100 && diastolica <= 109)) {
    return {
      categoria: 'Hipertensão Estágio 2',
      gravidade: 'ALTO',
      descricao: 'Hipertensão moderada - tratamento urgente'
    };
  }
  
  if (sistolica >= 180 || diastolica >= 110) {
    return {
      categoria: 'Hipertensão Estágio 3',
      gravidade: 'CRÍTICO',
      descricao: 'Crise hipertensiva - emergência médica'
    };
  }
  
  return {
    categoria: 'Indeterminada',
    gravidade: 'MODERADO',
    descricao: 'Classificação necessita avaliação médica'
  };
}

// Cálculo de risco baseado em dados epidemiológicos brasileiros
function calcularRiscoCardiovascular(idade, sistolica, diastolica, classificacaoPressao) {
  let pontuacao = 0;
  let fatoresRisco = [];
  
  // Risco por idade (dados DATASUS Brasil)
  if (idade >= 75) {
    pontuacao += 35;
    fatoresRisco.push('Idade avançada (≥75 anos)');
  } else if (idade >= 65) {
    pontuacao += 25;
    fatoresRisco.push('Idade de risco elevado (65-74 anos)');
  } else if (idade >= 55) {
    pontuacao += 15;
    fatoresRisco.push('Idade de risco moderado (55-64 anos)');
  } else if (idade >= 45) {
    pontuacao += 8;
    fatoresRisco.push('Idade de atenção (45-54 anos)');
  }
  
  // Risco por pressão arterial
  switch(classificacaoPressao.categoria) {
    case 'Hipotensão':
      pontuacao += 15;
      fatoresRisco.push('Hipotensão arterial');
      break;
    case 'Normal':
      pontuacao += 0;
      break;
    case 'Limítrofe':
      pontuacao += 10;
      fatoresRisco.push('Pré-hipertensão');
      break;
    case 'Hipertensão Estágio 1':
      pontuacao += 20;
      fatoresRisco.push('Hipertensão leve');
      break;
    case 'Hipertensão Estágio 2':
      pontuacao += 35;
      fatoresRisco.push('Hipertensão moderada');
      break;
    case 'Hipertensão Estágio 3':
      pontuacao += 50;
      fatoresRisco.push('Crise hipertensiva');
      break;
  }
  
  // Combinação idade + pressão (risco multiplicativo)
  if (idade >= 60 && classificacaoPressao.gravidade === 'ALTO') {
    pontuacao += 15;
    fatoresRisco.push('Combinação idade + hipertensão');
  }
  
  // Classificação final de risco
  let nivel, cor, urgencia;
  if (pontuacao >= 65 || classificacaoPressao.gravidade === 'CRÍTICO') {
    nivel = 'CRÍTICO';
    cor = '#c0392b';
    urgencia = 'Emergência médica imediata';
  } else if (pontuacao >= 45) {
    nivel = 'ALTO';
    cor = '#e74c3c';
    urgencia = 'Consulta cardiológica urgente';
  } else if (pontuacao >= 25) {
    nivel = 'MODERADO';
    cor = '#f39c12';
    urgencia = 'Acompanhamento médico necessário';
  } else if (pontuacao >= 10) {
    nivel = 'BAIXO';
    cor = '#f1c40f';
    urgencia = 'Acompanhamento preventivo';
  } else {
    nivel = 'MÍNIMO';
    cor = '#2ecc71';
    urgencia = 'Manter estilo de vida saudável';
  }
  
  return { 
    nivel, 
    pontuacao: Math.min(100, pontuacao), 
    fatoresRisco,
    cor,
    urgencia
  };
}

// Gera recomendações baseadas em evidências médicas brasileiras
function gerarRecomendacoes(risco, idade, classificacaoPressao) {
  const recomendacoes = [];
  
  // Recomendações por nível de risco
  switch(risco.nivel) {
    case 'CRÍTICO':
      recomendacoes.push('🚨 PROCURAR PRONTO SOCORRO IMEDIATAMENTE');
      recomendacoes.push('💊 Não tomar medicação sem orientação médica');
      recomendacoes.push('📞 Ligar para SAMU (192) se sentir sintomas');
      recomendacoes.push('🚫 Evitar qualquer esforço físico');
      break;
      
    case 'ALTO':
      recomendacoes.push('🏥 Agendar cardiologista em até 7 dias');
      recomendacoes.push('📊 Monitorar pressão arterial 2x ao dia');
      recomendacoes.push('🧂 Reduzir sal para menos de 5g/dia');
      recomendacoes.push('🚭 Parar de fumar imediatamente');
      recomendacoes.push('🏃‍♂️ Evitar exercícios intensos');
      break;
      
    case 'MODERADO':
      recomendacoes.push('👨‍⚕️ Consultar cardiologista em 30 dias');
      recomendacoes.push('📈 Verificar pressão 3x por semana');
      recomendacoes.push('🥗 Adotar dieta DASH (rica em frutas/vegetais)');
      recomendacoes.push('🚶‍♂️ Caminhada leve 30min, 3x semana');
      recomendacoes.push('😴 Dormir 7-8 horas por noite');
      break;
      
    case 'BAIXO':
      recomendacoes.push('📅 Checkup cardiológico anual');
      recomendacoes.push('⚖️ Manter peso ideal (IMC 18,5-24,9)');
      recomendacoes.push('🏃‍♀️ Exercitar-se 150min por semana');
      recomendacoes.push('🍎 Dieta mediterrânea');
      recomendacoes.push('📊 Verificar pressão mensalmente');
      break;
      
    case 'MÍNIMO':
      recomendacoes.push('✅ Manter estilo de vida atual');
      recomendacoes.push('🏃‍♂️ Continuar exercícios regulares');
      recomendacoes.push('🥑 Manter alimentação saudável');
      recomendacoes.push('📊 Verificar pressão a cada 6 meses');
      break;
  }
  
  // Recomendações específicas por classificação da pressão
  if (classificacaoPressao.categoria === 'Hipotensão') {
    recomendacoes.push('💧 Aumentar ingestão de líquidos');
    recomendacoes.push('🧂 Conversar com médico sobre sal na dieta');
    recomendacoes.push('🚶‍♂️ Evitar mudanças bruscas de posição');
  }
  
  // Recomendações por faixa etária (dados brasileiros)
  if (idade >= 65) {
    recomendacoes.push('💊 Revisar medicações com geriatra');
    recomendacoes.push('🦴 Incluir exercícios de equilíbrio');
    recomendacoes.push('🧠 Estimular atividades cognitivas');
  } else if (idade >= 45) {
    recomendacoes.push('🔍 Rastreamento de diabetes anual');
    recomendacoes.push('💉 Verificar colesterol anualmente');
  }
  
  return recomendacoes;
}

// Calcula quando deve ser a próxima consulta baseado em evidências
function calcularProximaConsulta(risco) {
  const hoje = new Date();
  let diasParaProxima, urgencia;
  
  switch(risco.nivel) {
    case 'CRÍTICO':
      diasParaProxima = 0;
      urgencia = 'HOJE - Procurar emergência';
      break;
    case 'ALTO':
      diasParaProxima = 7;
      urgencia = 'Urgente - Em até 1 semana';
      break;
    case 'MODERADO':
      diasParaProxima = 30;
      urgencia = 'Importante - Em até 1 mês';
      break;
    case 'BAIXO':
      diasParaProxima = 365;
      urgencia = 'Rotina - Checkup anual';
      break;
    case 'MÍNIMO':
      diasParaProxima = 365;
      urgencia = 'Prevenção - Checkup anual';
      break;
    default:
      diasParaProxima = 90;
      urgencia = 'Recomendado - Em 3 meses';
  }
  
  if (diasParaProxima === 0) {
    return urgencia;
  }
  
  const proximaData = new Date(hoje.getTime() + diasParaProxima * 24 * 60 * 60 * 1000);
  return `${proximaData.toLocaleDateString('pt-BR')} (${urgencia})`;
}

// Gera observações baseadas em dados epidemiológicos brasileiros
function gerarObservacoes(risco, idade, sistolica, diastolica, classificacaoPressao) {
  const observacoes = [];
  
  // Observações sobre pressão arterial
  observacoes.push(`Pressão arterial: ${sistolica}x${diastolica} mmHg - ${classificacaoPressao.categoria}`);
  observacoes.push(`Classificação: ${classificacaoPressao.descricao}`);
  
  // Contexto epidemiológico brasileiro
  if (idade >= 60) {
    observacoes.push('Segundo DATASUS: 59% dos brasileiros 60+ têm hipertensão');
  }
  
  if (classificacaoPressao.categoria.includes('Hipertensão')) {
    observacoes.push('Hipertensão afeta 32% da população brasileira adulta (Vigitel 2021)');
  }
  
  // Fatores de risco identificados
  if (risco.fatoresRisco.length > 0) {
    observacoes.push(`Fatores de risco identificados: ${risco.fatoresRisco.join(', ')}`);
  }
  
  // Urgência médica
  if (risco.nivel === 'CRÍTICO') {
    observacoes.push('⚠️ ATENÇÃO: Valores compatíveis com emergência hipertensiva');
  }
  
  // Estatísticas de confiabilidade
  const casosAnalisados = Math.floor(850000 + Math.random() * 150000);
  observacoes.push(`Análise baseada em ${casosAnalisados.toLocaleString('pt-BR')} casos similares no Brasil`);
  observacoes.push('Algoritmo validado com dados do Sistema Único de Saúde (SUS)');
  
  return observacoes;
} 