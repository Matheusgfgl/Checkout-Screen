# Projeto base utilizando Vue.js

Projeto base utilizando Vue.js sem a utilização de frameworks para style.

O projeto já possuí algumas definições próprias de style, incluindo arquivos base e normalize. Também já vem configurado com:

- ESLint Airbnb
- Vuex
- Vue Router
- PWA
- SASS

## Passos iniciais

 1. Criar um novo projeto com base nesse template
	 - Clicar no botão "Use this template"
 2. Alterar `name` no `package.json`

## Configurações & Explicações

### Básico
O projeto vem com algumas cores e páginas de exemplo, as cores podem/devem ser substituídas e as páginas removidas.

Existe uma variável, acessível em todo o projeto, que mostra a tag do commit atual. Para utilizar basta chamar `APP_VERSION` dentro do JavaScript.

### Progressive Web App
Arquivo: `vue.config.js`  

As configurações referentes ao PWA devem ser feitas dentro desse arquivo. 

### PurgeCSS
Arquivo: `vue.config.js`  

O projeto conta com o PurgeCSS para todos os arquivos. Caso após a build o style de uma dependência não apareça corretamente, será necessário adicionar a class dessa dependência no `whitelistPatternsChildren` que está dentro do arquivo. Mas [informações aqui](https://github.com/FullHuman/purgecss-docs/blob/master/whitelisting.md).

### Breakpoints:

Arquivo: `/src/assets/sass/base/_breakpoints.scss`  

Sempre optar por utilizar os mixins para breakpoints já definidos

##### Tamanhos já definidos:
```
phone-only: max-width: 575px
phone-up: min-width: 576px
tablet-up: min-width: 768px
tablet-big-up: min-width: 1024px
desktop-up: min-width: 1200px
desktop-big-up: min-width: 1800px
```

##### Exemplo:
```
@include screen(phone-up) {
	width: 100%;
	color: $red-500;
}
```


### Cores:

Arquivo: `/src/assets/sass/base/_colors.scss`

Todas as cores do projeto ficam dentro de um único arquivo, sempre utilizar variáveis para tratar as cores, e evitar utilizar opacidade nelas.

Manter o padrão de nomenclatura das cores: `$NOME_DA_COR-PESO_NA_ESCALA: HEXADECIMAL;`

##### Exemplo:
```
// Blue
$blue-500: #00a3da;
$blue-700: #0b8bd5;
$blue-900: #0d2338;
```

### Fontes:

Arquivo: `/src/assets/sass/base/_fonts.scss`.
Diretório os arquivos de fonte devem ser colocados: `/public/fonts/`.

Definir as fontes que serão utilizadas no projeto, optando sempre pela conversão da fonte em formatos otimizados para a web (**WOFF** e **WOFF2**).

##### Como definir um fonte-face:
```
@font-face {
	font-family: {NAME}; // Mudar {NOME} para o nome da fonte
	font-display: swap; // Sempre manter o swap
	src: url({PATH}) format("woff2"), // Mudar {PATH} para o caminho da woff2
		url({PATH}) format("woff");  // Mudar {PATH} para o caminho da woff
	font-weight: {WEIGHT}; // Mudar {WEIGHT} para o peso da fonte
	font-style: normal;
}
```

##### Exemplo:
```
@font-face {
	font-family: 'Lato';
	font-display: swap;
	src: url('/fonts/Lato-Hairline.woff2') format('woff2'),
		url('/fonts/Lato-Hairline.woff') format('woff');
	font-weight: 100;
	font-style: normal;
}
```

### Variáveis

Arquivo: `/src/assets/sass/base/_variables.scss`

Existem diversas variáveis definidas no arquivo. Essas variáveis buscam manter um padrão dentro de todo o projeto, evitando *magic numbers* ou outras definições que possam dificultar o entendimento do código posteriormente.

Estão definidos nesse arquivo variáveis seguindo os padrões do Bootstrap e TailwindCSS para `font-weight`, `font-size`, `font-family`, `letter-spacing`, `line-height`, `border-radius`, `border-width`.

##### Customização:
Para criar novas variáveis ou customizar as existes basta adicionar ao arquivo e utilizar onde for necessário. Recomendo sempre utilizar o padrão adotado de proporcionalidade entre os valores.

##### Configuração:
É necessário configurar a variável `$font-sans` com o nome da `font-face` utilizada como font sans-serif.
Configurar também o pesos das fontes importadas nas linhas correspondentes.

##### Exemplo:

```
.title {
	font-family: $font-sans;
	font-size: $text-3xl;
	font-weight: $font-bold;
	letter-spacing: $tracking-wide;
}
```

### SVGs
Arquivo: `/src/components/base/svg/SvgElement.vue`
Diretório para SVGs: `/src/components/base/svg/elements/`

O projeto vem configurado com um padrão de utilização de SVGs próximo ao que a documentação oficial recomenda. A logo do Vue.js que está no components `Home.vue` está dentro desse padrão. Abaixo tem detalhado como adicionar a mesma logo ao projeto:

 1. Criar um arquivo `.vue` dentro do diretório de SVGs com o conteúdo do SVG, removendo a tag `<svg>`, deixando apenas o conteúdo. Utilize o [SVGOMG](https://github.com/UpperSoft/upmarket-web/tree/develop/components/svg) para "limpar" o arquivo. Exemplo com a logo do Vue.js:
 
Arquivo SVG original:

```
<?xml version="1.0" encoding="UTF-8"?>
<svg version="1.1" viewBox="0 0 261.76 226.69"
	xmlns="http://www.w3.org/2000/svg">
	<g transform="matrix(1.3333 0 0 -1.3333 -76.311 313.34)">
		<g transform="translate(178.06 235.01)">
			<path d="m0 0-22.669-39.264-22.669 39.264h-75.491l98.16-170.02 98.16 170.02z" fill="#41b883"/>
		</g>
		<g transform="translate(178.06 235.01)">
			<path d="m0 0-22.669-39.264-22.669 39.264h-36.227l58.896-102.01 58.896 102.01z" fill="#34495e"/>
		</g>
	</g>
</svg>
```

Depois de remover a tag **svg** e **xml**:
```
<g transform="matrix(1.3333 0 0 -1.3333 -76.311 313.34)">
	<g transform="translate(178.06 235.01)">
		<path d="m0 0-22.669-39.264-22.669 39.264h-75.491l98.16-170.02 98.16 170.02z" fill="#41b883"/>
	</g>
	<g transform="translate(178.06 235.01)">
		<path d="m0 0-22.669-39.264-22.669 39.264h-36.227l58.896-102.01 58.896 102.01z" fill="#34495e"/>
	</g>
</g>
```

Arquivo final **LogoVue.vue** que vai ficar dentro do diretório de SVGs:
```
<template>
	<g  transform="matrix(1.3333 0 0 -1.3333 -76.311 313.34)">
		<g  transform="translate(178.06 235.01)">
			<path  d="m0 0-22.669-39.264-22.669 39.264h-75.491l98.16-170.02 98.16 170.02z" fill="#41b883"/>
		</g>
		<g  transform="translate(178.06 235.01)">
			<path  d="m0 0-22.669-39.264-22.669 39.264h-36.227l58.896-102.01 58.896 102.01z"
	fill="#34495e"/>
		</g>
	</g>
</template>
```

 2. Fazer o import do novo svg (LogoVue.vue) no arquivo base de SVG `SVG.vue`: `const LogoVue = () => import('@/components/base/svg/elements/LogoVue.vue');`
 3. Adicionar o LogoVue nos components: `components: { LogoVue, },`
 4. Colocar no switch de informações default do svg na `computed` `iconData`as informações default (largura, altura, viewbox)::
```
case 'LogoVue':
	return this.defaultData('261.76', '226.69', '0 0 261.76 226.69');
```
 5. Para utilizar o SVG basta colocar a tag do component `<SvgElement>` com a prop icon igual ao nome utilizado no import do passo 2. Caso queira customizar as definições do SVG, alterando o default definido no passo 4, é só passar as props::

```
// Utilização no <template>
<SvgElement
	icon="logo" // Nome do SVG definido no switch do passo 4 [Obrigatório]
	name="Vue.js" // Nome utilizado como title para svg [Opcional]
	width="261.76" // Largura em número px [Opcional]
	height="226.69" // Altura em número px [Opcional]
	color="#000000" // Cor em Hex e depende do SVG ser compatível [Opcional]
	viewBox="0 0 261.76 226.69" // ViewBox [Opcional]
/>
```

## Padrões do GIT
O projeto conta com um grupo de actions do GitHub. Por meio das actions acontece o processo de builds, releases e sincronizações entre branches.

#### Branches

##### Branches básicas
Obrigatoriamente o projeto deve possuir as branches `master` e `develop`.

##### Feature
Para cada nova funcionalidade deve ser criada uma branch a partir da `develop` com o padrão de nome `feature/*`.
Nessa branch todo o processo de desenvolvimento da funcionalidade deve ser executado. Você pode agrupar a branch por entrega, funcionalidade ou outro formato que achar melhor, mas a recomendação é sempre agrupar na branch tudo o que é necessário para a funcionalidade.

##### Bugfix
Para a resolução de um bug que não é urgente, e que não precisa ir imediatamente para produção, deve ser criada um bugfix a partir da `develop` com o padrão de nome `bugfix/*`.

##### Hotfix
Caso exista a necessidade de um Hotfix, deve ser criada uma branch a partir da `master` com o padrão de nome `hotfix/*`.


#### Commit
Adotamos o padrão de commit com o número da tarefa do ClubHouse.
Ex: `git commit -m '[ch1234] criação da tela de login'`

#### Ambiente de Desenvolvimento
Para executar o projeto é recomendado a utilização do Vue UI, através do comando `vue ui` no terminal.

#### Ambiente de Homologação
Como o projeto conta com as funcionalidades do GitHub Actions, o processo de build do ambiente de homologação ocorre de algumas maneiras. Em ambas, será gerado uma URI da Amazon ECR, essa URI deverá ser inserida no respectivo service do Rancher.

A criação da imagem de homologação pode ocorrer:

##### Via pull Request
Ao criar qualquer `Pull Request` com o label `#gerar-build` para a branch `develop`.

No momento em que a `Pull Request` receber o label será iniciado o processo de build e push da imagem. Você deverá aguardar o fim do processo, e um comentário irá aparecer na PR com o URI da imagem que deverá ser utilizada no Rancher.

Essa URI terá a tag `:pr-XX`, e irá representar tudo o que tem até o momento nessa `Pull Request`.

Caso você atualize algum arquivo e faça push para a branch, uma nova imagem será criada automáticamente, com a mesma tag, e você precisa fazer o upgrade no Rancher.

##### Manualmente
Caso você tenha a necessidade de gerar uma build em uma branch específica você poderá iniciar o processo de forma manual.

Acesse a aba de `Actions` do repositório, clique em `Staging Docker Build & ECR Upload` no menu lateral, clique em `Run Workflow`, selecione a branch que você deseja executar a build, e por fim clique no botão verde `Run Workflow`. Aguarde o final do processo.

Ao fim do processo a nova imagem terá a tag `:staging` e irá conter todas as alterações que estão branch especificada.

A cada atualização é necessário fazer o upgrade no Rancher.

#### Ambiente de Produção
Existem duas formas de iniciar uma build de produção:

- `Pull Request` da `develop` para a `master`: deverá conter os labels `#novo-release` e do tipo de versão (`#patch`, `#minor`, `#major`). A criação dessa PR geralmente ocorre de forma automática.
- `Pull Request` de um `hotfix` para a `master`.

Para a disponibilização da nova versão será necessário que o código passe por um review, e que seja feita a atualização da imagem no Rancher ao final do processo. 

##### Feature/Bugfix
Para a disponibilização de funcionalidades em produção adotamos o padrão de Pull Request. Com isso, após a finalização de cada feature, ou de um bugfix, que deverá ir para produção na próxima versão, você precisa apenas fazer o merge na `develop`.

No momento que o primeiro merge na `develop` for finalizado uma `Pull Request` de nova release será criada para a master. Essa `Pull Request` vai conter todos os novos commits da develop, então é importar que **só seja feito o merge na develop das funcionalidades prontas para uma próxima versão**. Nessa `Pull Request`, criada automaticamente, você deverá editar a descrição informando o que foi alterado, e comunicar a pessoa responsável pelo code review, para que seja feita a aprovação e a criação do novo release de produção.

Ao final do processo será feito um comentário, automático, na PR com a URI da imagem.


##### Hotfix
Para a disponibilização de um hotfix em produção você deverá criar uma `Pull Request` da branch `hotfix/*` para a `master`, especificando as alterações.

Após a aprovação da `Pull Request` o código irá para a `master` e uma nova `Pull Request` da `master` para a `develop` será criada, com a finalidade de atualizar a `develop` com as correções feitas.

Ao final do processo será feito um comentário, automático, na PR com a URI da imagem.