# ✅ Checklist de Deploy - CardioIA na Vercel

Use este checklist durante o processo de deploy para garantir que todos os passos foram completados.

---

## 📋 PRÉ-DEPLOY

### Ambiente Local
- [ ] Node.js instalado (v18+)
- [ ] npm ou yarn funcionando
- [ ] Git instalado
- [ ] Projeto roda localmente (`npm run dev`)
- [ ] Build funciona sem erros (`npm run build`)

### Contas e Repositórios
- [ ] Conta no GitHub criada
- [ ] Repositório GitHub criado
- [ ] Código enviado para GitHub (`git push`)
- [ ] Conta na Vercel criada
- [ ] Vercel conectada ao GitHub

---

## 🚀 DURANTE O DEPLOY

### Configuração na Vercel
- [ ] Projeto importado da lista de repositórios
- [ ] Framework detectado como "Vite"
- [ ] Build command: `npm run build`
- [ ] Output directory: `dist`
- [ ] Install command: `npm install`

### Deploy
- [ ] Botão "Deploy" clicado
- [ ] Build iniciou sem erros
- [ ] Build completou (100%)
- [ ] URL de produção gerada
- [ ] Página de sucesso exibida

---

## ✅ PÓS-DEPLOY

### Testes Funcionais
- [ ] URL da aplicação abre corretamente
- [ ] Homepage carrega sem erro 404
- [ ] Formulário está visível
- [ ] Título "CardioIA" aparece
- [ ] CSS carregou corretamente (sem página sem estilo)

### Testes de Funcionalidade
- [ ] Preencher nome do paciente
- [ ] Inserir idade válida
- [ ] Inserir pressão arterial
- [ ] Clicar em "Analisar Paciente"
- [ ] Loading de IA aparece
- [ ] Resultado do diagnóstico é exibido
- [ ] Classificação de pressão está correta
- [ ] Recomendações aparecem
- [ ] Possível adicionar novo paciente

### Testes de Responsividade
- [ ] Desktop (Chrome)
- [ ] Desktop (Firefox ou Edge)
- [ ] Mobile (smartphone)
- [ ] Tablet

### Testes de Performance
- [ ] Página carrega em menos de 3 segundos
- [ ] Sem erros no console do navegador (F12)
- [ ] Imagens carregam corretamente
- [ ] Animações funcionam

---

## 📊 VALIDAÇÃO FINAL

### Documentação
- [ ] README.md atualizado
- [ ] URL de produção adicionada ao README
- [ ] Tutorial disponível para outros alunos
- [ ] Repositório público ou acessível

### Compartilhamento
- [ ] URL compartilhada com professor
- [ ] Link do GitHub compartilhado
- [ ] Print/screenshot da aplicação funcionando
- [ ] Build logs salvos (se solicitado)

---

## 🎯 CRITÉRIOS DE AVALIAÇÃO (Para Professores)

| Critério | Peso | ✅ |
|----------|------|---|
| Build sem erros | 15% | [ ] |
| Deploy bem-sucedido | 20% | [ ] |
| Aplicação funcional | 25% | [ ] |
| Responsividade | 15% | [ ] |
| Documentação completa | 15% | [ ] |
| Boas práticas Git | 10% | [ ] |

**Total:** ___/100

---

## 🐛 TROUBLESHOOTING RÁPIDO

### Problema: Build Failed
```bash
# Solução:
npm install
npm run build
# Se funcionar, push novamente
```

### Problema: Página em Branco
```json
// Verificar vite.config.js
{
  "base": "/"
}
```

### Problema: 404 nas Rotas
```json
// Adicionar no vercel.json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

### Problema: Vercel não vê repositório
1. GitHub Settings → Applications
2. Configure Vercel
3. Grant access ao repositório

---

## 📝 NOTAS DO ALUNO

**Nome:** _______________________________

**RM:** _______________________________

**Data do Deploy:** ___/___/______

**URL da Aplicação:**
```
https://________________________________
```

**Tempo Total:** _____ minutos

**Dificuldades Encontradas:**
- 
- 
- 

**Aprendizados:**
- 
- 
- 

---

## 🎓 Próximos Desafios

Após completar o deploy básico:

- [ ] **Desafio 1:** Adicionar domínio personalizado
- [ ] **Desafio 2:** Implementar variáveis de ambiente
- [ ] **Desafio 3:** Configurar preview deploys para branches
- [ ] **Desafio 4:** Adicionar analytics da Vercel
- [ ] **Desafio 5:** Configurar CI/CD com testes automatizados

---

**FIAP EAD - Deploy na Vercel**  
*Checklist v1.0 - Abril 2026*
