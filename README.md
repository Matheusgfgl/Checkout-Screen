# UpperSoft Vue #

Template para os projetos em Vue.js da Upper

## Dados do projeto
#### Arquivos de ambientes

O projeto possui 2 arquivos de ambiente versionáveis e um local para desenvolvimento. **Não utilizar arquivo `.env` somente**, sempre utilizar o seguinte padrão:

- **.env.local**: Arquivo utilizado durante o processo de desenvolvimento local, nunca deverá ser versionado. Ele é uma cópia do .env.staging e **você sempre deve criar após clonar o projeto**.
- **.env.staging**: Utilizado para a versão de homologação do projeto.
- **.env.production**: Utilizado para a a versão de produção do projeto.

#### Arquivos de configuração/plugins/libs

Para organizar o projeto de uma forma melhor, e reduzir o número de linhas no `main.js`, foi criado o diretório `/src/config` para armazenar todos os arquivos de configuração, e fazer a instalação, dos plugins.

Todo plugin que precise ser instalado, ou configurado, possui uma pasta com o seu nome e dentro um arquivo `index.js`, que serve como entrada para as configurações. Sendo assim, sempre que o um novo plugin, que possui necessidade de configuração ou instalação no vue, for adicionado ao projeto é necessário criar uma pasta e fazer as configurações.

Depois de criado e configurado, o import final, para carregamento na instância do Vue, é feito no arquivo `main.js`, seguindo o exemplo dos imports que já foram feitos anteriormente.


### Estrutura de pastas

Considerando a pasta `src` como início da estrutura, o projeto tem o seguinte formado:

```
/src
│
├── main.js # Entry point js do projeto, inicialização do Vue e carregamento dos arquivos de configuração.
├── App.vue # Component inicial.
├── api
│   └── ... # Abstração da integração com as APIs, aqui devem ficar todas as  chamadas para API utilizando axios.
├── assets
│   └── sass 
│       └── ... # Todos os arquivos/pastas SASS globais.
├── components # Todas as pastas, e arquivos, de cada component do projeto.
│   ├── common
│   │   └── ... # Components globais, utilizados em qualquer view.
│   └── ...  # Components específicos de determinadas views. Dentro pasta, com o nome da view, os components são organizados em subpastas quando necessário
├── config
│   └── ... # Pastas para cada plugin com os arquivos de configuração, e subpastas quando necessário.
├── mixins
│   └── ... # Arquivos de mixins
├── router
│   └── index.js # Arquivos de rotas
├── store
│   ├── modules
│   │   └── ... # Arquivo de cada módulo
│   └── index.js # Import e configuração da store
└── views
    └── ... # Pasta com o nome do grupo de views e dentro o arquivo da view, ou subpastas no caso de childs.
```

Demais pastas, e arquivos, seguem a documentação oficial do [Vue](https://vuejs.org/).

### Components comuns

No diretório `/src/components/common` estão todos os components comuns, que podem ser utilizados em qualquer parte do projeto, sem estarem diretamente ligados a uma view específica.

Alguns estão disponíveis de forma global. Cada um deles pode possuir [propriedades](https://br.vuejs.org/v2/guide/components-props.html) e [slots](https://br.vuejs.org/v2/guide/components-slots.html). Antes de utilizar, abra o component para entender o seu funcionamento e realizar a implementação, **abaixo temos apenas um exemplo das configurações**.

**Tenha sempre cuidado ao alterar qualquer component, pois ele está sendo utilizado em diversos lugares e qualquer alteração pode trazer um impacto significativo em outros locais:**

#### SvgElement
Faz a exibição de um SVG informando como parâmetro/prop. O SVG deve ser configurado corretamente no 
arquivo `src/components/base/svg/SvgElement.vue`.

*Disponível globalmente, não é necessário importar no component*

**Mais informações na seção sobre [SVG desse arquivo](#svg).**
### SVG

O projeto possui um padrão de utilização de SVGs que consiste em um arquivo global que concentra todas as configuração e imports do SVG.

##### Tipos de SVGs

O seguintes tipos vem configurados no projeto: `icon` e `logo`. Você pode adicionar novos tipos, se for o caso.


##### Criar arquivo de novo SVG:

Você deverá criar um arquivo dentro da pasta do **tipo** de SVG, no diretório de SVGs (`src/components/base/svg/`).

**Sempre verificar se já não existe um SVG igual criado**

Para criar o arquivo de novo SVG você precisa seguir os passos:

1. Crie um arquivo `.vue` dentro do diretório de SVGs com a seguinte estrutura. Vamos chamar no exemplo de `LogoVue.vue` e colocar na pasta de `logo`:

```
<template>
  <!-- eslint-disable -->
	<g fill="currentColor">
	</g>
</template>
```

2. Acesse o site [SVGOMG](https://jakearchibald.github.io/svgomg/) e abra o SVG que você vai utilizar, utilizando a opção no menu lateral da esquerda.

3. Após o SVG carregar, você deverá clicar no botão de **copiar** que está no canto inferior direito.

4. Dentro do arquivo criado no passo 1 você vai colocar o que você copiou no passo 3 logo após a linha `<g fill="currentColor">`, ficando parecido com isso daqui:

```
<template>
  <!-- eslint-disable -->
	<g fill="currentColor">
		<svg viewBox="0 0 261.76 226.69" xmlns="http://www.w3.org/2000/svg">
			<path d="M161.096.001l-30.224 52.35L100.647.002H-.005L130.872 226.69 261.749 0z" fill="#41b883"/>
			<path d="M161.096.001l-30.224 52.35L100.647.002H52.346l78.526 136.01L209.398.001z" fill="#34495e"/>
		</svg>
	</g>
</template>
```

5. Agora você vai remover todas as linhas relacionadas a tag SVG. Seguindo o exemplo do passo 4, o resultado seria o seguinte:

```
<template>
  <!-- eslint-disable -->
	<g fill="currentColor">
		<path d="M161.096.001l-30.224 52.35L100.647.002H-.005L130.872 226.69 261.749 0z" fill="#41b883"/>
		<path d="M161.096.001l-30.224 52.35L100.647.002H52.346l78.526 136.01L209.398.001z" fill="#34495e"/>
	</g>
</template>
```

Sempre ao adicionar um SVG as cores devem ser alteradas para `currentColor`, caso seja possível. Para saber se é possível basta olhar se o SVG possui somente uma cor, e alterar o hexadecimal da cor pelo valor `currentColor`.

##### Registro do SVG

Para registrar um SVG basta apenas definir alguns valores default para ele, tudo isso no arquivo de configurações que fica em `src/components/base/svg/SvgElement.vue`.

Nesse arquivo você vai procurar a computed `iconData` e criar um novo `case` dentro do `switch`. O case deverá ser no padrão `tipo-nomeDoArquivo` e os valores do `defaultData` devem ser os padrões do SVG (largura, altura e viewbox).

Ex.:

```
case 'logo-LogoVue':
	return this.defaultData('50', '50', '0 0 261.76 226.69');
```

##### Utilizando o SVG

Para utilizar o SVG basta colocar a tag do component `<SvgElement>` com a prop `name` igual ao nome do arquivo do SVG criado e o `type` igual ao tipo do SVG.

É possível customizar as propriedades default definidas no momento do registro do SVG no component `SvgElement`.

Exemplo de utilização:

```
<SvgElement
	type="logo" // Tipo do SVG [Opcional quando o tipo é icon]
	name="LogoVue" // Nome do arquivo SVG [Obrigatório]
	title="Vue.js" // Nome utilizado como title para svg [Opcional]
	width="261.76" // Largura em número px [Opcional]
	height="226.69" // Altura em número px [Opcional]
	color="#000000" // Cor em Hex e depende do SVG ser compatível [Opcional]
	width="20px" // Largura [Opcional]
	height="20px" // Altura [Opcional]
	viewBox="0 0 261.76 226.69" // ViewBox [Opcional]
/>
```

### Estilo

#### Breakpoints

O projeto já possui diversos breakpoints definidos. As definições podem ser vistas em `/src/assets/sass/base/_breakpoints.scss`  

Sempre optar por utilizar os mixins para breakpoints já definidos

##### Tamanhos já definidos
```
phone-only: max-width: 575px
phone-up: min-width: 375px
phone-big-up: min-width: 576px
tablet-down: max-width: 767px
tablet-up: min-width: 768px
tablet-big-up: min-width: 1024px
desktop-up: min-width: 1200px
desktop-big-up: min-width: 1800px
```

##### Exemplo de utilização
```
.my-class {
	width: 50%;
	color: $red-300;

	@include screen(phone-big-up) {
		width: 100%;
		color: $red-500;
	}
}
```

#### Cores

Todas as cores do projeto ficam dentro de um único arquivo, sempre utilizar variáveis para tratar as cores, e evitar utilizar opacidade nelas.

##### Cadastrar uma cor

```
--NOME_DA_COR-PESO_NA_ESCALA: HEXADECIMAL;
```

Ex.: 

```
--red-500: #FF0000;
```

##### Utilizar uma cor

```
.title {
	color: var(--red-500);
}
```

#### Variáveis SASS

Existem diversas variáveis definidas no arquivo. Essas variáveis buscam manter um padrão dentro de todo o projeto, evitando *magic numbers* ou outras definições que possam dificultar o entendimento do código posteriormente. Para visualizar todas as variáveis basta acessar o arquivo `/src/assets/sass/base/_variables.scss`

Estão definidos nesse arquivo variáveis seguindo os padrões do Bootstrap e TailwindCSS para `font-weight`, `font-size`, `font-family`, `letter-spacing`, `line-height`, `border-radius`, `border-width` e outras.

##### Customização

Para criar novas variáveis ou customizar as existes basta adicionar ao arquivo e utilizar onde for necessário. Recomendo sempre utilizar o padrão adotado de proporcionalidade entre os valores.

##### Exemplo de utilização das variáveis

```
.title {
	font-size: $text-3xl;
	font-weight: $font-bold;
	letter-spacing: $tracking-wide;
	color: var(--red-500);
}
```
## Padrões

### Lint

Utilizamos Lint para JavaScript, HTML e CSS.

O lint para JavaScript e HTML são feitos através do ESLint com os padrões recomendados do próprio Vue e algunas regras específicas do projeto.

Para o CSS adotamos o StyleLint com as regras padrões e com a extesão para regras de SASS.

A documentação **GERAL** das regras de lint podem ser encontradas em:
- [Vue](https://eslint.vuejs.org/rules/)
- [ESLint](https://eslint.org/docs/rules/)

A documentação **GERAL** das regras de StyleLint podem ser encontradas em:
- [StyleLint](https://stylelint.io/user-guide/rules/list)
- [StyleLint SASS](https://github.com/kristerkari/stylelint-scss)

Para saber especificamente qual regra, ou grupo de regas, estão ativos basta olhar os arquivos de configuração do eslint e stylelint (`.eslintrc.js` e `.stylelintrc.js` respectivamente)

### GIT

Adotamos alguns padrões relacionados a git, além de utilizar um grupo de actions do GitHub para automatização de processos. Por meio das actions acontece o processo de builds, releases e sincronizações entre branches.

#### Branches

Adotamos o padrão de branch abaixo.

**Para o nome da branch você deve resumir o título da tarefa e utilizar o kebab-case.** Ex.: `Criar nova tela de login` vai virar `nova-tela-login`.

##### Feature
Para a criação de uma nova feature você deverá criar uma branch seguindo o padrão abaixo:

Nome da branch: `feature/{NOME_DA_FEATURE}`
Branch base: `develop`
Branch destino da PR: `develop`

Sua branch deve sempre corresponder a uma funcionalidade, ou grupo de funcionalidades, que podem ser finalizadas de forma independente, ou seja, sua branch **não pode depender diretamente de outras branchs para ser finalizada.** Isso quer dizer que você não deve começar uma funcionalidade em uma branch que tenha a necessidade da finalização de outras branchs.

##### Bugfix
O bugfix é um problema que não é urgente, portanto não existe a necessidade de subir a correção imediatamente. A finalização de um bugfix vai gerar um merge na develop

Nome da branch: `bugfix/{NOME_DA_FEATURE}`
Branch base: `develop`
Branch destino da PR: `develop`

##### Hotfix
O Hotfix é uma correção imediata, que deverá ir para produção logo após a finalização. Por conta disso esse tipo de branch é criada com base na master e o merge é feito direto nela.

Nome da branch: `hotfix/{NOME_DA_FEATURE}`
Branch base: `master`
Branch destino da PR: `master`

##### Informações importantes

- A branch `develop` deve conter somente código **pronto para deploy**.
- Nunca faça commit em branchs que não seja as especificadas acima.
- **Nunca reutilize** branches.

#### Commit

Para a realização dos commits adotamos o [Git Commitizen](https://github.com/commitizen/cz-cli) com a configuração do [Conventional Changelog](https://www.npmjs.com/package/cz-conventional-changelog). Uma explicação sobre o [Conventional Changelog pode ser encontrada aqui](https://www.conventionalcommits.org/en/v1.0.0/).

Utilizamos também o [Husky](https://typicode.github.io/husky/#/) para realização de tarefas pré-commit, como o lint do código que está sendo enviado para o git.

Devemos sempre realizar commits de forma constante, e sempre de forma a cada commit representar um determinado tipo de mudança (feature, fix, chore e etc).

Para realizar um commit no projeto basta seguir o seguinte processo:

1. `npx cz` ou `npm run cz`
2. *[Obrigatório]* Selecionar qual tipo de mudança na lista exibida
3. *[Obrigatório]* Descrever de forma breve o que foi realizado
4. *[Opcional]* Descrever de forma mais detalhada o que foi feito. Recomendamos a utilização desse campo para alterações que possuem um impacto maior, ou que representar grandes mudanças.
5. *[Opcional]* Informar se esse commit introduz alguma breaking change no projeto. Na maior parte das vezes a responsta será `n`
6. *[Obrigatório]* Marcar que está relacionado ao uma issue, sempre informar `y`
7. *[Opcinal]* Se esse commit representar a finalização de uma tarefa, informe aqui que a tarefa foi finalizada.
8. *[Obrigatório]* Informar o ID do story no ClubHouse, sempre no formato: `[ch12345]`, onde o `12345` é o ID do story. Se estiver relacionado a mais de um story, informar individualmente cada um nesse formato.

Após a realização desses passos o Husky irá entrar em ação analisando o código em busca de problemas relacionados ao ESLint e o StyleLine. **Caso encontre qualquer erro o commit será abortado e você precisará corrigir os problemas apontas e realizar o processo novamente.**

Ao final do commit realizado com sucesso você pode enviar o código para o git de forma normal.

Obs.: **Não utilizar o comando padrão do git para realizar commits, sempre utilizar os comandos do passo 1.**


#### Deploy

O projeto está configurado com o GitHub Actions, para a automatização do processo de deploy para os ambientes de homologação e produção.

Ao final de cada action de deploy será gerado um comentário na Pull Request com a URI da Amazon ECR, essa URI deverá ser atualizada no service do projeto no Rancher.

##### Labels para deploy
O projeto conta com alguns label configurados no git. Esses labels são importantes para definir como as actions de github deverão trabalhar.

###### Labels de homologação

- `#gerar-build`: Inicia o processo de gerar uma imagem com variáveis de ambiente para homologação. Só é necessário adicionar uma vez, e enquanto essa label estiver na PR a build será feita a cada novo commit enviado para o git.

###### Labels de produção

- `#novo-release`: Indica que essa PR deverá ser tratada como um novo release.
- `#major`: Indica que deverá ser gerada uma versão do tipo **major**. [Ver mais](#explicação-sobre-os-tipos-de-versão)
- `#minor`: Indica que deverá ser gerada uma versão do tipo **minor**. [Ver mais](#explicação-sobre-os-tipos-de-versão)
- `#patch`: Indica que deverá ser gerada uma versão do tipo **patch**. [Ver mais](#explicação-sobre-os-tipos-de-versão)

###### Explicação sobre os tipos de versão
Seguimos, em partes, o padrão [SemVer (Semantic Versioning)](https://semver.org/lang/pt-BR/):

- `major`: Quando são realizadas alterações que envolvem uma grande mudança no projeto, com a descontinuação de funcionalidades e módulos. Esse tipo de versão será raramente utilizada no front.
- `minor`: Quando são realizadas alterações que envolvem a inclusão de um novo módulo, melhorias, otimizações e tudo que não é relacionado a correção de bugs.
- `patch`: Quando são realizadas alterações que envolvem a correção de bugs. Utilizamos a versão patch quando estamos fazendo `hotfix`.

##### Ambiente de Homologação
O processo de build do ambiente de homologação pode correr de algumas maneiras. São elas:
###### Via pull Request
Criar uma *Pull Request* para a develop e depois adicionar o label `#gerar-build`.

No momento em que a `Pull Request` receber o label será iniciado o processo de build e push da imagem. Você deverá aguardar o fim do processo, e um comentário irá aparecer na PR com o URI da imagem que deverá ser utilizada no Rancher.

Essa URI terá a tag `:pr-XX`, e irá representar tudo o que tem até o momento nessa `Pull Request`.

Caso você atualize algum arquivo e faça push para a branch, *uma nova imagem será criada automáticamente, com a mesma tag, e você precisa fazer o upgrade no Rancher*.

Passos:
1. Criar uma Pull Request
2. Adicionar o label `#gerar-build`
3. Aguardar o comentário automático com a URL da imagem.

###### Manualmente
Caso você tenha a necessidade de gerar uma build em uma branch específica você poderá iniciar o processo de forma manual.

Passos:
1. Acesse a aba de *Actions* do repositório
2. Clique em *Staging Docker Build & ECR Upload*
3. Clique em *Run Workflow*
4. Selecione a branch que você deseja executar a build
5. Clique no botão verde *Run Workflow*
6. Aguarde o final do processo

Ao fim do processo a nova imagem terá a tag `:staging` e irá conter todas as alterações que estão branch especificada.

**A cada atualização é necessário fazer o upgrade no Rancher, e a imagem sempre irá utilizar o env de homologção* 

##### Ambiente de Produção
Para a disponibilização de código em produção adotamos o padrão de Pull Request. Após a finalização de cada feature, bugfix, ou hotfix você precisa:

1. Criar a Pull Request para a branch de destino, conforme [descrito aqui](#branches)
2. Avisar o responsável pelo projeto para realização do review

**O processo de deploy só irá ser executado através de Pull Request**.

###### Branch de feature/bugfix
Após a aprovação e merge de um `bugfix`, `feature`, o conteúdo será mesclado com a branch `develop`.

De forma automática uma Pull Request de nome `Próxima release` será criada. Nessa PR o responsável pelo projeto deverá:

1. Editar o comentário de criação da branch, incluindo informações sobre o que está indo para produção.
2. Adicionar os labels referentes ao deploy, [explicados aqui](#labels-para-deploy)
3. Fazer o merge
4. Aguardar a finalização do processo de build, que acontece quando é feito um comentário automático com o URL da nova imagem.
5. Copiar o URI informado no comentário e atualizar no rancher.


###### Hotfix
Para a aprovação, e deploy, de um `hotfix`, uma PR deverá ser criada para a branch `master`. Após a criação você deverá avisar ao responsável do projeto, que seguirá os passos abaixo:

1. Editar o comentário de criação da branch, incluindo informações sobre o que está indo para produção.
2. Adicionar os labels referentes ao deploy, [explicados aqui](#labels-para-deploy)
3. Fazer o merge
4. Aguardar a finalização do processo de build, que acontece quando é feito um comentário automático com o URL da nova imagem.
5. Copiar o URI informado no comentário e atualizar no rancher.

### Organização dos arquivos
A organização dos arquivos deve ser o padrão descrito na sessão [Estrutura de pastas](#estrutura-de-pastas).

Quando um arquivo for de uso comum, para qualquer módulo, você deve colocar na pasta `common`, e caso ele seja de um módulo específico você deve criar/colocar na pasta específica, que deve ser o nome do módulo.

### Novas dependências
Para adicionar uma nova dependência ao projeto devem ser analisados os seguintes pontos:
 
1. Verificar se não existe uma dependência que atenda a necessidade
2. Verificar o repositório da dependência, procurando por:
	- Foi atualizado nos últimos 6 meses?
	- Quantas *stars* possui?
	- Quantas Pull Requests estão abertas?
3. Verificar no npm, procurando por:
	- Quantas instalações na última semana?
	- Quando foi o último release?
4. Verificar qual o peso da dependência para o projeto. Isso pode ser feito no site [Bundlephobia](https://bundlephobia.com/)

Devemos sempre fazer uma análise de todos os pontos acima e ponderar a necessidade da inclusão de novas dependências ao projeto.

Sempre que adicionar algo novo, externo, não temos total controle sobre o funcionamento e a manutenção do código, por isso sempre devemos procurar pacotes atualizados frequentemente e bem mantidos.

Para saber como configurar uma nova dependência no vue leia [essa sessão](#arquivos-de-configuraçãopluginslibs).

## Instalação
### Executando o projeto localmente

#### Requisitos

É necessário ter o [Vue CLI](https://cli.vuejs.org/) para rodar o projeto.

#### Configuração do editor

Você precisará de alguns plugins para realizar o desenvolvimento do projeto. São eles:

- StyleLint
- ESLint

Normalmente na primeira vez que o projeto for aberto no VSCode você deverá ver uma lista de recomendações com esses plugins, caso ela não apareça você pode acessar o arquivo `.vscode/extensions.json` para ver a lista com os ids e fazer a busca manual.

Na mesma pasta dos plugins `.vscode` existe um arquivo `_settings.json` que contém algumas recomendações de configurações para o seu editor. Recomendo utilizar tudo o que está lá, para evitar problemas com o ESLint e StyleLint.

#### Utilização do projeto template

Para utilizar o projeto template você deve começar a criar um novo repositório normalmente, porém na tela de informações você deve selecionar o template na área **Repository template** da tela.

## Perguntas frequentes
Abaixo existem algumas perguntas frequentes relacionadas ao projeto.

### Posso versionar configurações do meu editor?
Não. Atualmente o `.gitignore` não faz o versionamento do arquivo `settings.json` que fica na pasta `.vscode`, mas independente disso nenhuma configuração do seu editor deve ser enviada para o git.

### Como adicionar um SVG?
Para adicionar um novo SVG você deve seguir os passos [descritos aqui](#svg)

### Sempre preciso alterar a cor de um SVG?
Não. Devemos somente alterar as cores de SVGs que possuem uma única cor, os que são mais complexose possuem multiplas cores podemos deixar as cores definidas no arquivo.

### Sempre preciso usar Vuex nas requisições?
Não. Devemos priorizar o uso do Vuex **quando a informações é necessária em mais de um local ao mesmo tempo** ou então quando queremos agilizar o carregamento da página.

Para agializar o carregamento podemos verificar no `mounted` do component se os dados existem no `getter`, se existirem mostramos as informações. Mas independente de existir ou não devemos sempre realizar a chamada para a `action`.

### Posso adicionar um eslint-disable?
Não. Somente em casos excepcionais.
