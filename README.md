# Ionic + APIs

Simples projeto utilizando o Ionic para consumo de APIs de terceiros.

## Primeiros Passos

Siga as instruções a seguir para informações sobre download, configuração e teste da aplicação em um ambiente local.

### Pré-requisitos

[Node.js + NPM](https://nodejs.org/en/) instalado
[Ionic](https://ionicframework.com/getting-started) instalado

### Instalação

Para instalar as dependências, execute o seguinte comando:

```
npm install
```

### Configuração

São necessárias configurações de chaves públicas e privadas para consumir as APIs nos seguintes arquivos:

#### /src/providers/hero-service/hero-service.ts
Alterar as informações **PRIVATE_KEY** e **PUBLIC_KEY**.

#### /src/index.html
Alterar a informação **PUBLIC_KEY**.

## Iniciar a aplicação

Para iniciar a aplicação, execute o comando:

```
ionic serve
```

## Autor

**Guilherme Dimas** - *Trabalho inicial* - [GuiDimas](https://github.com/GuiDimas)
**Fábio Barbosa** - *Trabalho inicial* - [Orbtz](https://github.com/orbtz)

## Notas

Trabalho voltado 100% para o ambiente acadêmico, com intuito de testar APIs de terceiros, utilizando o Ionic (opcional) como plataforma de desenvolvimento.
