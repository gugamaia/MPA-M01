# Pokédex TypeScript

![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)
![PokeAPI](https://img.shields.io/badge/PokeAPI-FFCB05?style=for-the-badge)

---

## Sobre o Projeto

O **Pokédex TypeScript** é uma aplicação desenvolvida em **Node.js + TypeScript** que realiza consultas na **PokeAPI** e organiza Pokémon em um catálogo local persistido em arquivo JSON.

Projeto desenvolvido para praticar:

- TypeScript com tipagem forte
- Programação Orientada a Objetos
- Consumo de API REST com `fetch`
- Async/Await e Promises
- Tratamento de Erros com `try/catch`
- Persistência local com `fs/promises`
- Git e GitFlow

---

## Objetivo

Construir uma aplicação back-end capaz de:

- Buscar Pokémon por nome ou ID na PokeAPI
- Consumir e mapear dados externos para objetos TypeScript
- Armazenar Pokémon em um catálogo local (`pc_box.json`)
- Evitar duplicidades no catálogo
- Listar Pokémon cadastrados
- Remover Pokémon por ID
- Tratar erros sem interromper a execução

---

## Tecnologias Utilizadas

| Tecnologia | Uso                              |
|------------|----------------------------------|
| Git        | Controle de versão               |
| GitHub     | Hospedagem do repositório        |
| Node.js    | Ambiente de execução back-end    |
| TypeScript | Linguagem principal com tipagem  |
| TSX        | Execução dos arquivos TypeScript |
| PokeAPI    | API externa de dados de Pokémon  |

---

## Pré-requisitos

Antes de executar o projeto, é necessário ter instalado:

- [Node.js](https://nodejs.org/) (versão 18 ou superior)
- [npm](https://www.npmjs.com/)
- [Git](https://git-scm.com/)

---

## Estrutura do Projeto

```text
pokedex-typescript/
│
├── src/
│   ├── main.ts                      # Ponto de entrada da aplicação
│   ├── controllers/
│   │   └── TerminalController.ts    # Orquestra as ações do terminal
│   ├── models/
│   │   ├── Pokemon.ts               # Interfaces, types e classe CatalogoPokemon
│   │   └── CustomErrors.ts          # Classes de erro customizadas
│   ├── services/
│   │   ├── PokeApiService.ts        # Integração com a PokeAPI via fetch
│   │   └── BoxService.ts            # Persistência local com fs/promises
│   └── utils/
│       └── textFormatters.ts        # Funções utilitárias de formatação
│
├── pc_box.json      # Banco de dados local em JSON
├── package.json     # Dependências e scripts
├── tsconfig.json    # Configuração do compilador TypeScript
├── .gitignore
└── README.md
```

---

## Instalação

### Clonar o repositório

```bash
git clone https://github.com/gugamaia/MPA-M01.git
```

### Entrar na pasta do projeto

```bash
cd MPA-M01/pokedex-typescript
```

### Instalar as dependências

```bash
npm install
```

---

## Executando o Projeto

### Ambiente de Desenvolvimento

```bash
npm run dev
```

### Compilar o projeto

```bash
npm run build
```

### Executar após compilação

```bash
npm run start
```

---

## Funcionalidades

### Buscar Pokémon
Consulta Pokémon por nome ou ID diretamente na PokeAPI e mapeia os dados para um objeto simplificado.

### Adicionar ao Catálogo
Armazena o Pokémon encontrado no catálogo local em memória.

### Evitar Duplicidade
Impede o cadastro de Pokémon já existentes verificando o ID.

### Listar Catálogo
Exibe todos os Pokémon cadastrados com ID, nome, tipos, altura e peso.

### Remover Pokémon
Remove um Pokémon do catálogo pelo seu ID numérico.

### Persistência Local
Salva o catálogo no arquivo `pc_box.json` usando `fs/promises`.

### Tratamento de Erros
Evita falhas do sistema quando um Pokémon não existe ou a API retorna erro.

---

## Conceitos Aplicados

### Interfaces TypeScript
- `PokemonResumo` — representa o Pokémon simplificado usado internamente
- `PokemonApiResponse` — mapeia os campos relevantes do retorno da PokeAPI

### Classe
- `CatalogoPokemon` — gerencia o catálogo com atributo `private`, construtor e métodos tipados (`adicionar`, `listar`, `remover`)

### Erros Customizados
- `APIError` — lançado quando a PokeAPI não encontra o Pokémon
- `LocalBoxError` — lançado quando há falha na leitura/escrita do `pc_box.json`

### Métodos de Array

| Método      | Onde é usado                                       |
|-------------|----------------------------------------------------|
| `every()`   | Valida se todos os Pokémon possuem nome            |
| `filter()`  | Remove Pokémon pelo ID                             |
| `find()`    | Localiza HP, Ataque e Defesa nos stats da API      |
| `forEach()` | Itera e exibe cada Pokémon na listagem             |
| `map()`     | Transforma os tipos retornados pela API em strings |
| `reduce()`  | Calcula o peso total do catálogo                   |
| `some()`    | Verifica duplicidade antes de adicionar            |


### Async/Await
Utilizado para realizar chamadas assíncronas à PokeAPI e operações de leitura/escrita no sistema de arquivos.

### Try/Catch
Responsável pelo tratamento de erros nas consultas à API e na persistência local.

### fs/promises
Utilizado no `BoxService` para leitura e escrita assíncrona do arquivo `pc_box.json`.

---

## Exemplos de Execução

### Busca Válida

**Entrada testada:**
```
pikachu
```
**Saída obtida:**
```
[OK] Pokémon encontrado: pikachu
[OK] pikachu adicionado ao catálogo.
#25 - pikachu | Tipos: electric | Altura: 4 | Peso: 60
```

---

### Busca Inválida

**Entrada testada:**
```
pokemon-inexistente
```
**Saída obtida:**
```
[ERRO] Pokémon não encontrado: pokemon-inexistente
```

---

### Duplicidade

**Entrada testada:**
```
adicionar pikachu duas vezes
```
**Saída obtida:**
```
[AVISO] pikachu já está no catálogo.
```

---

### Remoção

**Entrada testada:**
```
remover ID 25
```
**Saída obtida:**
```
[OK] Pokémon removido do catálogo.
```

---

### Listagem do Catálogo

**Saída obtida:**
```
===== CATÁLOGO ATUAL =====

#4 - charmander | Tipos: fire | Altura: 6 | Peso: 85
#1 - bulbasaur  | Tipos: grass, poison | Altura: 7 | Peso: 69
```

---

### Persistência em Arquivo

**Saída obtida:**
```
[OK] Catálogo salvo em pc_box.json
```

---

## GitFlow

Branches utilizadas:

- `main` — código final estável
- `develop` — integração das features
- `feat/pokedex` — desenvolvimento da aplicação
- `docs/readme` — documentação

---

## Organização Trello

🔗 **Link do Trello:** `https://trello.com/invite/b/6a25fdb85fd3f37caa6245e6/ATTI8f6efbf3ef8e148b6deba5311420b2b52D745AA0/meu-quadro-do-trello`

---

## Repositório

```
https://github.com/gugamaia/MPA-M01
```

---

## Potenciais incrementos no projeto

- Criar menu interativo no terminal com `readline`
- Filtrar Pokémon por tipo no catálogo
- Exibir ranking por ataque ou defesa
- Adicionar testes automatizados

---

## Autor

**Gustavo Maia**

Projeto desenvolvido para fins acadêmicos — Módulo 01, Curso SCTEC Desenvolvedor Back End Node.
