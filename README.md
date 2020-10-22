<div style="text-align: center; width: 100%;">

# Dummy Code

</div>

<div styles="text-align:center; margin: 0 auto; width: 100%;">

[![GitHub issues](https://img.shields.io/github/issues/jeanmolossi/dummy-code?style=flat-square)](https://github.com/jeanmolossi/dummy-code/issues)
[![GitHub forks](https://img.shields.io/github/forks/jeanmolossi/dummy-code?style=flat-square)](https://github.com/jeanmolossi/dummy-code/network)
[![GitHub stars](https://img.shields.io/github/stars/jeanmolossi/dummy-code?style=flat-square)](https://github.com/jeanmolossi/dummy-code/stargazers)
[![GitHub license](https://img.shields.io/github/license/jeanmolossi/dummy-code?style=flat-square)](https://github.com/jeanmolossi/dummy-code)

Este projeto está sendo desenvolvido em Live com o objetivo de aprender novas técnias e treinar outras.

</div>

## Proposta

Ser um local de envolvimento para desenvolvedores (Não importa se é Backend, Frontend, DevOps ou Designer. Se você está envolvido nessa área, serve).

# :pushpin: Tabela de Conteúdos

- [:pushpin: Inicialização](#pushpin-tabela-de-conteúdos)
- [:construction_worker: Instalação](#construction_worker-instalação)
- [:runner: Primeiros passos](#runner-primeiros-passos)
- [:building_construction: Estrutura](#building_construction-estrutura)
- [:computer: Tecnologias](##computer-tecnologias)
- [:thinking: Como contribuir](#thinking-como-contribuir)

# :construction_worker: Instalação

Inicialmente você deve ter em sua máquina [NodeJS](https://nodejs.org/en/), [Yarn](https://yarnpkg.com/), [Git](https://git-scm.com/) e então use um dos comandos abaixo para clonar este repositório:

Se estiver usando HTTPS:

`git clone https://github.com/jeanmolossi/dummy-code.git`

Se estiver usando SSH:

`git clone git@github.com:jeanmolossi/dummy-code.git`

Ou então com a Github-cli:

`gh repo clone jeanmolossi/dummy-code`

e após isso executar

`yarn`

# :runner: Primeiros passos

Após os passos de [instalação](#construction_worker-instalação) você deve acessar a pasta raiz do projeto e usar o comando:

`yarn start:api`

&&

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

## :pill: Redux + Redux Saga

Dentro de `store` há a seguinte estrutura de diretórios e arquivos:

```
store/
  modules/
    example/
      actions.ts
      index.ts
      reducer.ts
      saga.ts
      types.ts
    rootReducer.ts
    rootSaga.ts
    rootTypes.ts
  index.ts
```

- `store/index.ts` é responsável por criar e exportar o store;
- `store/modules/rootReducer.ts` é responsável por combinar os reducers dos modules subsequentes e exportar um único reducer central para o store;
- `store/modules/rootSaga.ts` é semelhante ao `rootReducer.ts` porém sua entidade é o saga de cada modulo;
- `store/modules/rootTypes` é responsável por qualquer tipo de tipagem compartilhada entre todos os módulos e pelos `Roots`;
- `store/modules/example`
  - `actions.ts` responsável pela declaração das actions do módulo;
  - `index.ts` responsável pela exportação centralizada do módulo;
  - `reducer.ts` responsável pelo controle de estado do módulo. Logo, mutações de estado devem ficar neste arquivo;
  - `saga.ts` responsável por side effects em estados. Qualquer tipo de mutação de estado assíncrono deve resgatar os dados para o payload dentro do saga antes de disparar (dispatch) uma action. Actions assíncronas devem ser compostas por uma estrutura de 3 actions:
    - `@module/ACTION_REQUEST`;
    - `@module/ACTION_SUCCESS`;
    - `@module/ACTION_FAILURE`;
  - `types.ts` responsável pela tipagem de `actions`, `reducer states` e `payloads`;
    - Toda action deve extender a `rootType ActionReturnType<A, T>`;

## :writing_hand: Escrita de tipagem

Em `store/modules/rootTypes.ts` há um tipo que deve ser extendido para cada action em cada módulo.

A estrutura de `ActionReturnType<A, T>` é a seguinte:

```ts
export type ActionReturnType<A = string, T = any> = {
  type: A;
  payload: T;
};
```

onde `A` é sua action type `@module/EXAMPLE` e `T` é o tipo do que virá através do payload:

```ts
export type PayloadExample = {
  any_object: {
    any_data: any;
    any_other_data: any[];
  };
  any_array: any[];
};
```

O resultado final da action dentro do módulo, seria algo como:

```ts
export type ExampleAction = ActionReturnType<'@module/EXAMPLE', PayloadExample>;
```

**Para cada novo módulo deve ser adicionado ao RootState o Tipo do Estado do novo módulo:**

`store/modules/newExample`

agora com o novo módulo `newExample`, `interface RootState` deve estar dessa forma:

```ts
export interface RootState {
  example: ExampleState;
  newExample: NewExampleState;
}
```

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
export { default as Profile } from './profile';
export { default as Courses } from './courses';
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
