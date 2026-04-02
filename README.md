# 🫀 CardioIA - Sistema de Diagnóstico Cardiológico com IA

![React](https://img.shields.io/badge/React-19.1-blue)
![Vite](https://img.shields.io/badge/Vite-7.1-646CFF)
![License](https://img.shields.io/badge/license-MIT-green)

Aplicação web desenvolvida para análise de dados cardiológicos de pacientes utilizando inteligência artificial simulada. Projeto educacional da FIAP para demonstrar conceitos de desenvolvimento web moderno com React e Vite.

## 📋 Sobre o Projeto

O **CardioIA** é uma aplicação de demonstração que simula um sistema de diagnóstico cardiológico inteligente. A aplicação permite:

- 📝 Cadastro de dados de pacientes
- 🩺 Análise de pressão arterial
- 🤖 Diagnóstico simulado por IA
- 📊 Classificação de risco cardiovascular
- 💡 Recomendações médicas automatizadas
- 📱 Interface responsiva e moderna

## 🚀 Tecnologias

- **React 19.1** - Biblioteca JavaScript para interfaces
- **Vite 7.1** - Build tool e dev server
- **CSS3** - Estilização moderna
- **ESLint** - Linting e qualidade de código

## 📦 Instalação

### Pré-requisitos

- Node.js 18 ou superior
- npm ou yarn

### Passos

```bash
# Clone o repositório
git clone https://github.com/SEU_USUARIO/cardioia-app.git

# Entre na pasta do projeto
cd cardioia-app

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

A aplicação estará disponível em `http://localhost:5173`

## 🛠️ Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev          # Inicia servidor de desenvolvimento

# Build
npm run build        # Gera build de produção na pasta dist/

# Preview
npm run preview      # Visualiza build de produção localmente

# Linting
npm run lint         # Executa ESLint
```

## 🌐 Deploy

### Deploy na Vercel (Recomendado)

Para instruções detalhadas de deploy, consulte o arquivo **[TUTORIAL_DEPLOY_VERCEL.md](./TUTORIAL_DEPLOY_VERCEL.md)** que contém um guia completo passo a passo.

#### Quick Start:

1. Crie conta na [Vercel](https://vercel.com)
2. Conecte com GitHub
3. Importe o repositório
4. Deploy automático! 🚀

### Deploy Manual via CLI

```bash
# Instalar Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
vercel --prod
```

## 📁 Estrutura do Projeto

```
cardioia-app/
├── public/              # Arquivos estáticos
├── src/
│   ├── assets/          # Imagens e recursos
│   ├── components/      # Componentes React
│   │   ├── FormularioPaciente.jsx
│   │   ├── ListaPacientes.jsx
│   │   ├── LoadingIA.jsx
│   │   └── ResultadoDiagnostico.jsx
│   ├── services/        # Serviços e lógica de negócio
│   │   └── iaService.js
│   ├── App.jsx          # Componente principal
│   ├── main.jsx         # Entry point
│   └── *.css            # Estilos
├── index.html           # HTML base
├── vite.config.js       # Configuração Vite
├── package.json         # Dependências
└── vercel.json          # Configuração Vercel
```

## 🧪 Como Usar

1. **Preencha os dados do paciente:**
   - Nome completo
   - Idade (18-120 anos)
   - Pressão arterial (sistólica e diastólica)

2. **Clique em "Analisar Paciente"**
   - O sistema processará os dados
   - IA simulada gerará diagnóstico

3. **Visualize os resultados:**
   - Classificação da pressão arterial
   - Nível de risco cardiovascular
   - Recomendações personalizadas
   - Sugestão de próxima consulta

4. **Gerencie pacientes:**
   - Lista de pacientes analisados
   - Histórico de diagnósticos

## 📚 Recursos Educacionais

Este projeto foi desenvolvido como material didático para alunos EAD da FIAP. Inclui:

- ✅ Boas práticas de React
- ✅ Componentização adequada
- ✅ Gerenciamento de estado
- ✅ Responsividade
- ✅ Deploy em produção
- ✅ Documentação completa

## ⚠️ Disclaimer

**Este é um projeto educacional com fins demonstrativos.**

- ❌ NÃO substitui avaliação médica real
- ❌ NÃO deve ser usado para diagnósticos reais
- ❌ A IA é simulada, não há machine learning real
- ✅ Use apenas para aprendizado e demonstração

## 🤝 Contribuindo

Contribuições são bem-vindas! Para contribuir:

1. Faça um Fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona MinhaFeature'`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 👥 Autores

Desenvolvido por alunos da FIAP como projeto educacional do curso de Desenvolvimento Web.

## 📧 Suporte

Para dúvidas sobre o projeto:
- 📖 Consulte o [Tutorial de Deploy](./TUTORIAL_DEPLOY_VERCEL.md)
- 🐛 Abra uma issue no GitHub
- 💬 Entre em contato com o professor responsável

---

**FIAP** - Faculdade de Informática e Administração Paulista  
Projeto desenvolvido para fins educacionais - 2026
