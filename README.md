<div style="text-align: center">

# Dummy Code

</div>

## Proposta

Ser um local de envolvimento para desenvolvedores (Não importa se é Backend, Frontend, DevOps ou Designer. Se você está envolvido nessa área, serve).

# :pushpin: Tabela de Conteúdos

[:pushpin: Inicialização](#pushpin-tabela-de-conteúdos)

[:construction_worker: Instalação](#construction_worker-instalação)

[:runner: Primeiros passos](#runner-primeiros-passos)

[:building_construction: Estrutura](#building_construction-estrutura)

[:computer: Tecnologias](##computer-tecnologias)

[:thinking: Como contribuir](#thinking-como-contribuir)

# :construction_worker: Instalação

Inicialmente você deve ter em sua máquina [NodeJS](), [Yarn](), [Git]() e então use um dos comandos abaixo para clonar este repositório:

Se estiver usando HTTPS:

`git clone https://github.com/jeanmolossi/dummy-code.git`

Se estiver usando SSH:

`git clone git@github.com:jeanmolossi/dummy-code.git`

Ou então com a Github-cli:

`gh repo clone jeanmolossi/dummy-code`

# :runner: Primeiros passos

Após os passos de [instalação](#construction_worker-instalação) você deve acessar a pasta raiz do projeto e usar o comando:

`yarn start:dev`

# :building_construction: Estrutura

## :open_file_folder: Diretórios

```
src/
  assets/
    images/
    styles/
  components/
    layout/
    shared/
  pages/
  routes/
  store/
    modules/
  utils/
```

## :computer: Tecnologias

- styled-components;
- redux;
- redux-saga;
- framer-motion;

### :question: Questões ocasionais

- Por que há um `index.ts` dentro de algumas pastas?

R: Para exportação. Este index deve conter a exportação de componentes e afins das subpastas daquele modulo.

Exemplo:

```
pages/
  profile/
  courses/
  index.ts
```

Conteúdo `index.ts`:

```ts
export { default as Profile } from "./profile";
export { default as Courses } from "./courses";
```

---

- Por que usar Redux?

R: Redux é um excelente gerenciador de estados. Com o intuito de aprendizado de ferramenta usaremos Redux + Saga para tal neste projeto.

Para outras questões, fique a vontade para me chamar no discord `jeanmolossi#3153` ou no [telegram](https://t.me/jeanmolossi). Assista também às minhas Lives na [Twitch](https://twitch.tv/jeanmolossi).

# :thinking: Como contribuir

- Faça um fork desse repositório;
- Cria uma branch com a sua feature: `git checkout -b minha-feature`;
- Faça commit das suas alterações: `git commit -m 'Feat: Minha nova feature'`;
- Faça push para a sua branch: `git push origin minha-feature`.

Depois que o merge da sua pull request for feito, você pode deletar a sua branch.
