 # kids-checkIn-api(provisonal name)
 
 ## Descrição
 
Sistema para realizar cadastro das crianças que vem aos nossos cultos e após o cadastro realizar apenas o check-in e check-out das mesmas.

## Instalação
Siga estas etapas para configurar e rodar o projeto:
1. Clone o repositório:
```bash
git clone https://github.com/LucasRe1s/kids-api
```
2. Acesse o diretório do projeto:
```bash
cd nome-do-repositorio
```
3.  Instale as dependências:
```bash
npm install
```
4. Inicie o servidor
```bash
npm start
```

## Padrões

### Branch
1 — type ou categoria do branch. Os types podem ser os seguintes:
- docs: apenas mudanças de documentação;
- feat: uma nova funcionalidade;
- fix: a correção de um bug;
- perf: mudança de código focada em melhorar performance;
- refactor: mudança de código que não adiciona uma funcionalidade e também não corrigi um bug;
- style: mudanças no código que não afetam seu significado (espaço em branco, formatação, ponto e vírgula, etc);
- test: adicionar ou corrigir testes.

Exemplo:
> docs/add-voting

### Commits
[Convenção de Commit](https://www.conventionalcommits.org/en/v1.0.0/)
Convenção de versionamento do sistema: [Semver](https://semver.org/lang/pt-BR/)

## Repositório

[pv-kids-api](https://github.com/LucasRe1s/kids-api/)

[pv-kids-client](https://github.com/LucasRe1s/)
 
## Casos de Usos

## Definição de APIs

url base local: `http://localhost:3000`

### 1. Cadastro crianças

/form

**POST /form**
* payload da requisição
```json
{
    "name": "Tobias",
    "age": "6",
    "responsible-01": "João",
    "responsible-02": "Carla",
    "contact": "48987503077",
    "observation": "nenhuma",
    "allergies": "dipirona",
}
```

* exemplo de response
```json
{
    "id": "23",
    "child-name": "Tobias",
    "age": "6",
    "responsible-01": "Lucas",
    "responsible-02": "Mary",
    "contato": "48988703077",
    "observacao": "nenhuma",
    "alergias": "dipirona",
    "date": "02/01/2024",
    "active": false
}
```
Obs.: statusCode: 201

### 2. Buscando formularios
**GET /admin/form**

### 3- check-in
**PATCH /admin/form/{name}**
* payload da requisição
```json
{
    "id": "23",
    "child-name": "Tobias Silva"
}
```

* exemplo de response 
```json 
{
    "id": "23",
    "child-name": "Tobias Reis",
    "age": "6",
    "data": "02/01/2023",
    "check-in": true
}
```
### 3- check-out
* Check-out automatico apos 3 horas.

- OBJ.: 
 
 
 
## Stack de Desenvolvimento

- Linguagem: Javascript

### BackEnd
- NodeJS
- Express
- Jest

### FrontEnd a definir


### Banco de dados a definir