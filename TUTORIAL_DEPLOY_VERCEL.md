# 📘 Tutorial: Deploy do CardioIA na Vercel

## 📋 Índice
1. [Pré-requisitos](#pré-requisitos)
2. [Preparação do Projeto](#preparação-do-projeto)
3. [Criação de Conta na Vercel](#criação-de-conta-na-vercel)
4. [Deploy via GitHub (Recomendado)](#deploy-via-github-recomendado)
5. [Deploy via Vercel CLI (Alternativo)](#deploy-via-vercel-cli-alternativo)
6. [Verificação e Testes](#verificação-e-testes)
7. [Troubleshooting](#troubleshooting)

---

## 🎯 Pré-requisitos

Antes de iniciar o deploy, certifique-se de ter:

- ✅ **Node.js** instalado (versão 18 ou superior)
- ✅ **npm** ou **yarn** instalado
- ✅ **Conta no GitHub** (para deploy via GitHub)
- ✅ **Git** instalado no computador
- ✅ Projeto funcionando localmente

### Verificar instalações:
```bash
node --version
npm --version
git --version
```

---

## 🔧 Preparação do Projeto

### Passo 1: Testar o Build Local

Antes de fazer deploy, é importante garantir que o projeto compila corretamente:

```bash
# No diretório do projeto
npm install
npm run build
```

Se tudo estiver correto, você verá uma pasta `dist` criada com os arquivos de produção.

### Passo 2: Testar Preview Local

```bash
npm run preview
```

Acesse `http://localhost:4173` para ver como a aplicação funcionará em produção.

### Passo 3: Criar arquivo de configuração da Vercel (Opcional)

O projeto já está configurado, mas você pode criar um arquivo `vercel.json` para customizações:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite"
}
```

---

## 🌐 Criação de Conta na Vercel

### Passo 1: Acessar Vercel
Acesse [https://vercel.com](https://vercel.com)

### Passo 2: Criar Conta
- Clique em **"Sign Up"**
- Escolha **"Continue with GitHub"** (recomendado)
- Autorize a Vercel a acessar seus repositórios

![Vercel Sign Up](https://assets.vercel.com/image/upload/front/vercel/sign-up.png)

---

## 🚀 Deploy via GitHub (Recomendado)

### Passo 1: Criar Repositório no GitHub

1. Acesse [https://github.com](https://github.com)
2. Clique no ícone **"+"** → **"New repository"**
3. Preencha:
   - **Repository name:** `cardioia-app`
   - **Description:** "Aplicação de Diagnóstico Cardiológico com IA"
   - **Visibility:** Public ou Private
4. **NÃO** marque "Initialize with README" (já temos um)
5. Clique em **"Create repository"**

### Passo 2: Conectar Projeto Local ao GitHub

Abra o terminal na pasta do projeto e execute:

```bash
# Inicializar repositório Git (se ainda não foi feito)
git init

# Adicionar todos os arquivos
git add .

# Fazer commit inicial
git commit -m "Initial commit - CardioIA App"

# Adicionar remote do GitHub (substitua SEU_USUARIO)
git remote add origin https://github.com/SEU_USUARIO/cardioia-app.git

# Renomear branch para main (se necessário)
git branch -M main

# Enviar código para GitHub
git push -u origin main
```

### Passo 3: Importar Projeto na Vercel

1. Acesse [https://vercel.com/new](https://vercel.com/new)
2. Clique em **"Import Project"**
3. Selecione **"Import Git Repository"**
4. Escolha o repositório **`cardioia-app`**
5. Clique em **"Import"**

### Passo 4: Configurar Deploy

A Vercel detectará automaticamente que é um projeto Vite. Verifique as configurações:

```
Framework Preset: Vite
Build Command: npm run build
Output Directory: dist
Install Command: npm install
```

**Importante**: Não é necessário adicionar variáveis de ambiente para este projeto, pois ele usa apenas simulação de IA.

### Passo 5: Deploy!

1. Clique em **"Deploy"**
2. Aguarde o build (normalmente leva 1-3 minutos)
3. Quando aparecer **"Congratulations!"**, seu app está no ar! 🎉

### Passo 6: Acessar Aplicação

A Vercel gerará uma URL automática tipo:
```
https://cardioia-app.vercel.app
```

ou

```
https://cardioia-app-seu-usuario.vercel.app
```

---

## 💻 Deploy via Vercel CLI (Alternativo)

### Passo 1: Instalar Vercel CLI

```bash
npm install -g vercel
```

### Passo 2: Login

```bash
vercel login
```

Siga as instruções para autenticar via email ou GitHub.

### Passo 3: Deploy

No diretório do projeto, execute:

```bash
# Deploy de teste
vercel

# Deploy para produção
vercel --prod
```

### Responda às perguntas:

```
? Set up and deploy "~/cardioia-app"? [Y/n] Y
? Which scope do you want to deploy to? (Seu usuário)
? Link to existing project? [y/N] N
? What's your project's name? cardioia-app
? In which directory is your code located? ./
```

A CLI detectará automaticamente as configurações do Vite.

---

## ✅ Verificação e Testes

### Checklist Pós-Deploy:

- [ ] **Homepage carrega corretamente**
- [ ] **Formulário de paciente aparece**
- [ ] **É possível preencher dados do paciente**
- [ ] **Botão "Analisar Paciente" funciona**
- [ ] **Loading da IA aparece durante processamento**
- [ ] **Resultado do diagnóstico é exibido**
- [ ] **É possível adicionar novos pacientes**
- [ ] **Responsividade funciona em mobile**

### Testar Funcionalidades:

1. **Adicionar Paciente de Teste:**
   - Nome: João Silva
   - Idade: 45
   - Pressão: 130 x 85 mmHg

2. **Verificar Diagnóstico:**
   - Deve retornar classificação
   - Deve mostrar nível de risco
   - Deve apresentar recomendações

3. **Testar em Diferentes Dispositivos:**
   - Desktop (Chrome, Firefox, Safari)
   - Mobile (iOS e Android)
   - Tablet

---

## 🔄 Atualizações e Redeployments

### Fazer Atualizações:

```bash
# 1. Fazer alterações no código
# 2. Commit das mudanças
git add .
git commit -m "Descrição das alterações"

# 3. Push para GitHub
git push origin main
```

**A Vercel fará deploy automático!** 🚀

### Monitorar Deploy:

Acesse o dashboard da Vercel para acompanhar:
- Status do build
- Logs de erro
- Métricas de performance
- Analytics de uso

---

## 🐛 Troubleshooting

### Problema 1: Build Failed

**Erro**: `Build failed with exit code 1`

**Solução**:
1. Teste o build localmente: `npm run build`
2. Corrija erros de TypeScript/ESLint
3. Certifique-se que todas as dependências estão no `package.json`
4. Verifique se a versão do Node.js é compatível

### Problema 2: Página em Branco

**Erro**: Deploy bem-sucedido mas página aparece em branco

**Solução**:
1. Verifique o console do navegador (F12)
2. Confirme que o `base` está correto no `vite.config.js`
3. Verifique caminhos de assets:
   ```js
   // vite.config.js
   export default defineConfig({
     plugins: [react()],
     base: '/' // ou '/cardioia-app/' se for GitHub Pages
   })
   ```

### Problema 3: Erro 404 em Rotas

**Erro**: Navegação manual nas URLs retorna 404

**Solução**: Criar arquivo `vercel.json`:
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

### Problema 4: Falha no npm install

**Erro**: `npm ERR! code EINTEGRITY`

**Solução**:
```bash
rm -rf node_modules package-lock.json
npm install
```

Depois faça commit e push novamente.

### Problema 5: Permissões do GitHub

**Erro**: Vercel não encontra repositório

**Solução**:
1. Vá em: [GitHub Settings → Applications → Vercel](https://github.com/settings/installations)
2. Clique em **"Configure"** na Vercel
3. Em **"Repository access"**, selecione o repositório
4. Salve as alterações

---

## 🎓 Boas Práticas

### 1. Branches de Desenvolvimento

```bash
# Criar branch para desenvolvimento
git checkout -b develop

# Fazer alterações e testar
# ...

# Merge para main quando aprovado
git checkout main
git merge develop
git push origin main
```

### 2. Preview Deployments

A Vercel cria automaticamente URLs de preview para cada branch:
- `main` → Produção: `cardioia-app.vercel.app`
- `develop` → Preview: `cardioia-app-git-develop.vercel.app`

### 3. Variáveis de Ambiente

Para projetos com APIs reais, adicione variáveis de ambiente:
1. Dashboard Vercel → Settings → Environment Variables
2. Adicione `VITE_API_KEY=seu-valor`
3. Use no código: `import.meta.env.VITE_API_KEY`

### 4. Domínio Personalizado

Para usar domínio próprio:
1. Dashboard Vercel → Settings → Domains
2. Adicione seu domínio
3. Configure DNS conforme instruções

---

## 📊 Monitoramento

### Analytics da Vercel

A Vercel fornece analytics gratuitamente:
- Visitas únicas
- Page views
- Países de origem
- Dispositivos usados

Acesse em: Dashboard → Analytics

### Performance

Monitore métricas Core Web Vitals:
- **LCP** (Largest Contentful Paint): < 2.5s
- **FID** (First Input Delay): < 100ms
- **CLS** (Cumulative Layout Shift): < 0.1

---

## 🎉 Conclusão

Parabéns! Você completou o deploy da aplicação CardioIA na Vercel! 

### Próximos Passos:

- [ ] Compartilhe a URL com colegas para testes
- [ ] Configure domínio personalizado
- [ ] Implemente analytics mais avançado
- [ ] Adicione CI/CD para testes automatizados
- [ ] Explore features avançadas da Vercel

### Links Úteis:

- 📚 [Documentação Vercel](https://vercel.com/docs)
- 📚 [Documentação Vite](https://vitejs.dev/)
- 📚 [React Docs](https://react.dev/)
- 💬 [Vercel Community](https://github.com/vercel/vercel/discussions)

---

## 📝 Exercícios para Alunos

### Exercício 1: Deploy Básico
- Siga o tutorial e faça deploy da aplicação
- Compartilhe a URL com o professor

### Exercício 2: Personalização
- Adicione seu nome no footer da aplicação
- Faça commit e observe o automatic deployment

### Exercício 3: Branch Strategy
- Crie uma branch `feature/melhoria`
- Faça uma alteração visual
- Observe o preview deployment
- Faça merge para main

### Exercício 4: Troubleshooting
- Propositalmente quebre o build (remova um `;`)
- Observe o erro no Vercel
- Corrija e faça redeploy

---

**Desenvolvido para:** FIAP - Faculdade de Informática e Administração Paulista  
**Curso:** EAD - Desenvolvimento Web  
**Projeto:** CardioIA - Sistema de Diagnóstico Cardiológico com IA  

---

*Tutorial criado em 2026 - Atualizado para as últimas versões do Vite, React e Vercel*
