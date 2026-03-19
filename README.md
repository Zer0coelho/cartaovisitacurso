# Meus Certificados

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/pt-BR/docs/Web/HTML) 
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/pt-BR/docs/Web/CSS) 
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript) 
[![PDF](https://img.shields.io/badge/PDF-FC0000?style=for-the-badge&logo=adobeacrobat&logoColor=white)](#)


Este projeto é uma página web simples para exibir e organizar os **certificados acadêmicos e profissionais** de Guilherme Coelho Silva. A página carrega dinamicamente os certificados a partir de um arquivo JSON e os exibe em cartões responsivos.

---

## 🔗 Acesse o site
👉 [Cartão de Visita Curso](https://zer0coelho.github.io/cartaovisitacurso/)

---

---

## 🚀 Tecnologias Utilizadas

- **HTML5**: Estrutura da página web.  
- **CSS3**: Estilização e layout responsivo.  
- **JavaScript (ES6+)**: Carregamento dinâmico dos certificados.  
- **JSON**: Armazenamento dos dados dos certificados.  

---

## ✨ Funcionalidades

- Exibição de certificados em **formato de cartão**.  
- Informações detalhadas para cada certificado: **Título, Instituição e Ano**.  
- **Link direto** para visualizar o arquivo PDF de cada certificado.  
- **Design responsivo**, adaptável a diferentes tamanhos de tela.  
- Carregamento **dinâmico**, facilitando a adição de novos certificados.  

---

## 📂 Estrutura do Projeto
```
.
├── certificados/
│ ├── assistente-operacao-redes-computadores.pdf
│ ├── assistente-suporte--manutencao-computadores.pdf
│ ├── crie-um-site-simples-usando-html-css-e-javascript.pdf
│ ├── educacao-financeira.pdf
│ ├── fundamentos-de-ti-hardware-e-software.pdf
│ ├── habilitacao-profissional-tecnica-informatica.pdf
│ ├── introducao-analise-de-dados-powerBI.pdf
│ ├── microsoftExcel2016-Basico.pdf
│ ├── microsoftExcel2016-Intermediario.pdf
│ ├── pensamento-computacional.pdf
│ └── solucoes-de-IA-no-Github.pdf
├── certificados.json
├── index.html
├── script.js
└── style.css
```

---


- `index.html`: Página principal.  
- `style.css`: Regras de estilo da página.  
- `script.js`: Script para carregar e exibir os certificados.  
- `certificados.json`: Dados de cada certificado (título, instituição, ano e nome do PDF).  
- `certificados/`: Contém os arquivos PDF dos certificados.  

---

## ⚙️ Como Rodar o Projeto

1. **Clone o repositório** ou baixe os arquivos do projeto.  
2. **Abra o arquivo `index.html`** no navegador de sua preferência.  

> Não é necessário nenhum servidor web, pois o projeto é composto apenas por arquivos estáticos.

---

## 📝 Como Adicionar Novos Certificados

1. **Adicione o arquivo PDF** na pasta `certificados/`.  
2. **Edite `certificados.json`** adicionando um novo objeto JSON dentro do array:  

```json
{
    "titulo": "Nome do Novo Certificado",
    "instituicao": "Nome da Instituição",
    "ano": "Ano de Conclusão",
    "arquivo": "nome-do-arquivo-do-certificado.pdf"
}
```
