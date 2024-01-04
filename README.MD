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
    "surname": "Souza",
    "age": "6",
    "responsible-01": "João Souza",
    "responsible-02": "Carla Souza",
    "contact": "48987503077",
    "observation": "nenhuma",
    "allergies": "dipirona",
}
```

* exemplo de response
```json
{
    "id": "23",
    "data": {
        "name": "Tobias",
        "surname": "Souza",
        "age": "6",
        "responsible-01": "João Souza",
        "responsible-02": "Carla Souza",
        "contato": "48988703077",
        "observacao": "nenhuma",
        "alergias": "dipirona"
    },
    "date": "2024-01-04T21:28:31.122Z",
    "active": false
}
```
Obs.: statusCode: 201

### 2. Buscando formularios
**GET /admin/form**

### 2. Buscando por nome
**GET /admin/form/{fullName}**

### 3- check-in
**PATCH /admin/form/{fullName}/check**
* payload da requisição
```json
{
    "name": "Tobias%20Souza"
}
```

* exemplo de response 
```json 
{
    "id": "23",
    "name": "Tobias",
    "surname": "Souza",
    "age": "6",
    "date": "2024-01-04T21:28:31.122Z",
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