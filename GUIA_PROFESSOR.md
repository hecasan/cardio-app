# 👨‍🏫 Guia do Professor - Deploy CardioIA na Vercel

## 📚 Sobre Este Material

Este pacote contém todos os recursos necessários para guiar seus alunos EAD no processo de deploy de uma aplicação React + Vite na plataforma Vercel.

---

## 📦 Conteúdo do Pacote

### 1. **TUTORIAL_DEPLOY_VERCEL.md**
   - Tutorial completo e detalhado
   - Passo a passo com explicações
   - Seção de troubleshooting
   - Exercícios práticos
   - **Uso:** Material principal para os alunos

### 2. **DEPLOY_RAPIDO.md**
   - Versão condensada (5 minutos)
   - Apenas os comandos essenciais
   - **Uso:** Referência rápida ou revisão

### 3. **CHECKLIST_DEPLOY.md**
   - Checklist interativo
   - Critérios de avaliação
   - Espaço para anotações dos alunos
   - **Uso:** Acompanhamento e avaliação

### 4. **README.md**
   - Documentação técnica do projeto
   - Estrutura da aplicação
   - **Uso:** Referência técnica

---

## 🎯 Objetivos de Aprendizagem

Ao completar este módulo, os alunos serão capazes de:

1. ✅ Entender o ciclo de build de uma aplicação React/Vite
2. ✅ Configurar repositórios Git e GitHub
3. ✅ Realizar deploy em plataforma PaaS (Vercel)
4. ✅ Configurar continuous deployment
5. ✅ Diagnosticar e resolver problemas de build
6. ✅ Testar aplicações em produção
7. ✅ Documentar processos técnicos

---

## 📖 Plano de Aula Sugerido

### **Aula 1: Preparação (30 minutos)**

**Tópicos:**
- Introdução ao deploy de aplicações web
- Diferença entre desenvolvimento e produção
- O que é a Vercel e por que usá-la

**Atividades:**
1. Verificar pré-requisitos nos computadores dos alunos
2. Criar contas no GitHub (se necessário)
3. Clonar o projeto CardioIA
4. Rodar localmente e testar

**Recursos:**
- Slides sobre PaaS vs IaaS vs SaaS
- Demo ao vivo do projeto funcionando

---

### **Aula 2: Git e GitHub (45 minutos)**

**Tópicos:**
- Conceitos de versionamento
- Git básico (add, commit, push)
- Criação de repositórios no GitHub

**Atividades:**
1. Criar repositório no GitHub
2. Conectar projeto local ao remoto
3. Fazer primeiro push
4. Explorar interface do GitHub

**Comandos Principais:**
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin URL
git push -u origin main
```

---

### **Aula 3: Deploy na Vercel (60 minutos)**

**Tópicos:**
- Plataformas de deploy (Vercel, Netlify, etc)
- Processo de build
- Continuous deployment

**Atividades:**
1. Seguir **TUTORIAL_DEPLOY_VERCEL.md** completo
2. Criar conta na Vercel
3. Conectar GitHub com Vercel
4. Realizar primeiro deploy
5. Testar aplicação em produção

**Pontos de Atenção:**
- Verificar que todos conseguiram autorizar a Vercel
- Acompanhar o build process
- Resolver problemas em tempo real

---

### **Aula 4: Práticas Avançadas (45 minutos)**

**Tópicos:**
- Variáveis de ambiente
- Preview deployments
- Analytics e monitoring
- Domínios personalizados

**Atividades:**
1. Fazer uma alteração no código
2. Observar automatic deployment
3. Explorar dashboard da Vercel
4. Discutir boas práticas

---

## 🎓 Sugestões de Avaliação

### Avaliação Individual (Peso: 100 pontos)

#### **Parte 1: Deploy Básico (40 pontos)**
- Aplicação deployada e funcional: 25 pontos
- URL acessível publicamente: 15 pontos

#### **Parte 2: Documentação (30 pontos)**
- Checklist preenchido: 10 pontos
- README com URL do deploy: 10 pontos
- Prints/screenshots: 10 pontos

#### **Parte 3: Funcionalidade (20 pontos)**
- Todas as features funcionando: 15 pontos
- Responsividade: 5 pontos

#### **Parte 4: Processo (10 pontos)**
- Commits com mensagens adequadas: 5 pontos
- Estrutura de pastas mantida: 5 pontos

---

## 🛠️ Setup para o Professor

### Preparar Ambiente de Demonstração:

1. **Clone o projeto:**
   ```bash
   git clone https://github.com/hecasan/cardio-app.git
   cd cardio-app
   npm install
   ```

2. **Teste localmente:**
   ```bash
   npm run dev
   ```

3. **Prepare conta de demonstração na Vercel:**
   - Crie uma conta de teste
   - Mantenha login pronto para demo

4. **Grave screenshots:**
   - Dashboard da Vercel
   - Processo de import
   - Build logs
   - Aplicação funcionando

---

## 💡 Dicas Pedagógicas

### Para Alunos Iniciantes:

✅ **Simplifique:** Use o DEPLOY_RAPIDO.md  
✅ **Demonstre primeiro:** Faça o deploy ao vivo  
✅ **Trabalhe em duplas:** Um aluno ajuda o outro  
✅ **Paciência:** Primeira vez sempre demora mais

### Para Alunos Avançados:

🚀 **Desafie:** CLI deployment  
🚀 **Explore:** Environment variables  
🚀 **Expanda:** Deploy de outras branches  
🚀 **Aprofunde:** Configurações customizadas

---

## 🎬 Script de Demonstração

### Introdução (5 min)
```
"Hoje vamos colocar nossa aplicação React no ar para que 
qualquer pessoa no mundo possa acessá-la. Vamos usar a 
Vercel, uma plataforma especializada em aplicações front-end."
```

### Demo ao Vivo (15 min)
1. Mostrar aplicação rodando localmente
2. Fazer build (`npm run build`)
3. Explicar o que aconteceu
4. Acessar Vercel
5. Importar projeto
6. Acompanhar build
7. Acessar URL gerada
8. Testar funcionalidades

### Hands-on (30 min)
- Alunos seguem o tutorial
- Professor circula ajudando
- Monitor está disponível no chat

### Closure (10 min)
- Alunos compartilham suas URLs
- Discussão sobre o processo
- Q&A

---

## ❓ FAQs dos Alunos

### "Preciso pagar pela Vercel?"
**R:** Não! A Vercel oferece plano gratuito (Hobby) com:
- Deploys ilimitados
- 100 GB bandwidth/mês
- Subdomínio vercel.app grátis

### "Posso usar meu próprio domínio?"
**R:** Sim! Adicione em Settings → Domains na Vercel.

### "E se eu não tiver GitHub?"
**R:** Pode usar GitLab ou Bitbucket, ou deploy via CLI.

### "Os dados dos pacientes ficam salvos?"
**R:** Não, esta aplicação não tem backend. Dados são apenas no navegador (sessionStorage).

### "Posso adicionar um backend depois?"
**R:** Sim! Vercel suporta Serverless Functions para APIs.

### "Quanto tempo demora o deploy?"
**R:** Primeiro deploy: 2-3 minutos. Próximos: 1-2 minutos.

---

## 🔗 Links Úteis para a Aula

### Documentações Oficiais:
- 📘 [Vercel Docs](https://vercel.com/docs)
- 📘 [Vite Guide](https://vitejs.dev/guide/)
- 📘 [React Docs](https://react.dev/)

### Vídeos Tutoriais:
- 🎥 [Vercel Deploy Tutorial](https://www.youtube.com/watch?v=ZlKIFW5PcXY)
- 🎥 [Git & GitHub Crash Course](https://www.youtube.com/watch?v=RGOj5yH7evk)

### Comunidades:
- 💬 [Vercel Community](https://github.com/vercel/vercel/discussions)
- 💬 [React Brasil](https://react.dev/community)

---

## 📊 Métricas de Sucesso

### Para a Turma:
- **Meta:** 80% dos alunos com deploy bem-sucedido
- **Tempo médio esperado:** 15-25 minutos
- **Taxa de erro aceitável:** < 20%

### Red Flags:
- ⚠️ Mais de 50% com erros de build
- ⚠️ Alunos sem conta GitHub
- ⚠️ Problemas de conexão/internet

---

## 🔄 Atualizações Este Material

### Versão 1.0 (Abril 2026)
- Tutorial inicial
- Deploy via GitHub
- Deploy via CLI
- Checklist e exercícios

### Próximas Versões (Planejado):
- [ ] Vídeos tutoriais em português
- [ ] Slides PowerPoint para aula
- [ ] Quiz de verificação de aprendizado
- [ ] Projeto com backend (Vercel Functions)

---

## 📧 Suporte ao Professor

**Dúvidas sobre este material?**

- 📩 Entre em contato com o coordenador do curso
- 💬 Use o fórum de professores FIAP
- 🐛 Problema no tutorial? Abra issue no GitHub

---

## 📝 Feedback dos Alunos

Após a aula, colete feedback:

1. **Dificuldade geral:** (1-5 estrelas)
2. **Clareza do tutorial:** (1-5 estrelas)
3. **Tempo necessário:** _____ minutos
4. **Sugestões de melhoria:**

---

## 🎁 Material Complementar

### Arquivos Inclusos:
```
cardioia-app/
├── TUTORIAL_DEPLOY_VERCEL.md    ← Tutorial completo
├── DEPLOY_RAPIDO.md              ← Quick start
├── CHECKLIST_DEPLOY.md           ← Este checklist
├── GUIA_PROFESSOR.md             ← Este documento
├── README.md                     ← Documentação técnica
├── vercel.json                   ← Configuração Vercel
└── .vercelignore                 ← Arquivos ignorados no deploy
```

### Para Distribuir aos Alunos:
- ✅ TUTORIAL_DEPLOY_VERCEL.md (obrigatório)
- ✅ CHECKLIST_DEPLOY.md (obrigatório)
- ✅ DEPLOY_RAPIDO.md (opcional, para consulta)

---

## 🌟 Sucesso!

Com este material, seus alunos terão uma experiência completa e profissional de deploy de aplicações web modernas.

**Boa aula!** 🚀

---

**FIAP** - Faculdade de Informática e Administração Paulista  
**Departamento:** EAD - Desenvolvimento Web  
**Autor:** Material preparado com GitHub Copilot  
**Versão:** 1.0 - Abril 2026
