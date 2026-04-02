# 📋 Comandos Prontos - Deploy CardioIA

## 🎯 Para Copiar e Colar

Este documento contém todos os comandos necessários prontos para uso.

---

## 1️⃣ CONFIGURAÇÃO INICIAL

### Verificar versões instaladas
```bash
node --version
npm --version
git --version
```

---

## 2️⃣ PREPARAR PROJETO

### Instalar dependências
```bash
cd cardioia-app
npm install
```

### Testar localmente
```bash
npm run dev
```
Acesse: http://localhost:5173

### Testar build
```bash
npm run build
```

### Testar preview
```bash
npm run preview
```
Acesse: http://localhost:4173

---

## 3️⃣ CONFIGURAR GIT (Se ainda não configurado)

### Configurar usuário Git (primeira vez)
```bash
git config --global user.name "Seu Nome"
git config --global user.email "seu.email@exemplo.com"
```

### Verificar configuração
```bash
git config --list
```

---

## 4️⃣ ENVIAR PARA GITHUB

### A) Se o repositório já existe:

```bash
# Adicionar todos os arquivos
git add .

# Commit
git commit -m "feat: prepara projeto para deploy na Vercel"

# Push
git push origin main
```

### B) Se precisa criar repositório do zero:

**1. Crie no GitHub primeiro (via navegador)**
   - Acesse: https://github.com/new
   - Nome: `cardioia-app`
   - Não inicialize com README

**2. Execute no terminal:**
```bash
# Inicializar Git
git init

# Adicionar arquivos
git add .

# Primeiro commit
git commit -m "Initial commit - CardioIA App"

# Adicionar remote (ALTERE SEU_USUARIO)
git remote add origin https://github.com/SEU_USUARIO/cardioia-app.git

# Renomear branch
git branch -M main

# Push
git push -u origin main
```

---

## 5️⃣ DEPLOY NA VERCEL (Via Interface)

### Não há comandos aqui - use a interface web:

1. Acesse: **https://vercel.com/new**
2. Sign up com GitHub
3. Import projeto
4. Deploy!

---

## 6️⃣ DEPLOY VIA CLI (Alternativa)

### Instalar Vercel CLI
```bash
npm install -g vercel
```

### Login na Vercel
```bash
vercel login
```

### Deploy de desenvolvimento
```bash
vercel
```

### Deploy de produção
```bash
vercel --prod
```

### Listar projetos
```bash
vercel list
```

### Ver informações do projeto
```bash
vercel inspect
```

---

## 7️⃣ FAZER ATUALIZAÇÕES

### Fluxo completo de atualização:

```bash
# 1. Fazer alterações no código (use seu editor)

# 2. Verificar mudanças
git status

# 3. Adicionar mudanças
git add .

# 4. Commit com mensagem descritiva
git commit -m "feat: adiciona nova funcionalidade"

# 5. Push (deploy automático!)
git push origin main
```

---

## 8️⃣ TROUBLESHOOTING

### Limpar cache e reinstalar
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Ver logs detalhados
```bash
npm run build --verbose
```

### Verificar problemas de lint
```bash
npm run lint
```

### Desfazer último commit (se necessário)
```bash
git reset --soft HEAD^
```

### Ver histórico de commits
```bash
git log --oneline
```

### Criar nova branch para testar
```bash
git checkout -b feature/teste
```

### Voltar para main
```bash
git checkout main
```

---

## 9️⃣ VERCEL CLI - COMANDOS EXTRAS

### Ver logs da aplicação
```bash
vercel logs
```

### Remover projeto
```bash
vercel remove cardioia-app
```

### Ver domínios
```bash
vercel domains ls
```

### Adicionar domínio personalizado
```bash
vercel domains add seudominio.com.br
```

### Ver variáveis de ambiente
```bash
vercel env ls
```

---

## 🔟 ÚTEIS PARA DEBUG

### Verificar se porta está em uso
```bash
# Windows
netstat -ano | findstr :5173

# Linux/Mac
lsof -i :5173
```

### Ver estrutura da pasta dist
```bash
# Windows
dir dist /s

# Linux/Mac
ls -la dist/
```

### Testar se build está OK
```bash
npm run build && echo "Build OK!" || echo "Build FAILED!"
```

---

## 📱 TESTAR RESPONSIVIDADE

### Usando Chrome DevTools:

1. Abra a aplicação
2. Pressione **F12**
3. Clique no ícone de dispositivos móveis
4. Teste diferentes tamanhos:
   - iPhone SE (375x667)
   - iPhone 12 Pro (390x844)
   - iPad (768x1024)
   - Desktop (1920x1080)

---

## 🎨 CUSTOMIZAÇÕES OPCIONAIS

### Adicionar favicon personalizado:
```bash
# Coloque seu favicon.ico em public/
# O Vite incluirá automaticamente no build
```

### Mudar título da página:
Edite `index.html`:
```html
<title>CardioIA - Diagnóstico Cardiológico</title>
```

### Adicionar meta tags:
```html
<meta name="description" content="Sistema de diagnóstico cardiológico com IA">
<meta name="keywords" content="cardiologia, IA, saúde, diagnóstico">
```

---

## 📚 REFERÊNCIAS RÁPIDAS

### Estrutura de Commit Messages:
```
feat: nova funcionalidade
fix: correção de bug
docs: alteração em documentação
style: formatação, ponto e vírgula
refactor: refatoração de código
test: adição de testes
chore: atualização de dependências
```

### Status Codes HTTP:
```
200 - OK
404 - Not Found
500 - Internal Server Error
```

### Comandos Git Essenciais:
```bash
git status          # Ver estado atual
git add .           # Adicionar tudo
git commit -m ""    # Fazer commit
git push            # Enviar para remoto
git pull            # Puxar do remoto
git log             # Ver histórico
```

---

## ✅ CHECKLIST DO PROFESSOR

Antes da aula:
- [ ] Projeto clonado e testado
- [ ] Conta Vercel de demonstração pronta
- [ ] Screenshots preparados
- [ ] Links dos tutoriais verificados
- [ ] Ambiente de teste funcionando

Durante a aula:
- [ ] Demo ao vivo funcionou
- [ ] Alunos conseguiram acessar Vercel
- [ ] Maioria completou o deploy
- [ ] Dúvidas foram esclarecidas

Após a aula:
- [ ] Coletar feedback dos alunos
- [ ] Verificar URLs dos alunos
- [ ] Avaliar conforme critérios
- [ ] Atualizar material se necessário

---

## 🎉 CELEBRAÇÃO

Quando os alunos completarem:
- 🌟 Peça para compartilharem as URLs no chat
- 📸 Tire screenshot da turma com todas as URLs
- 🏆 Reconheça os primeiros a completar
- 🎊 Celebre cada deploy bem-sucedido!

---

**Material preparado para FIAP EAD - 2026**  
*Todos os comandos testados e validados*

---

## 💾 Salvar Esta Página

Para ter acesso offline:

**Ctrl + P** → **Salvar como PDF**

Ou mantenha este arquivo no projeto para referência futura!
