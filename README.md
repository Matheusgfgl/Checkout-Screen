# Projeto base utilizando Vue.js

Projeto base utilizando Vue.js sem a utilização de frameworks para style.

O projeto já possuí algumas definições próprias de style, incluindo arquivos base e normalize. Também já vem configurado com:

- ESLint Airbnb
- Vuex
- Vue Router
- PWA
- SASS

## Passos iniciais

 1. Clonar repositório alterando o `NOME_PROJETO` para o nome do projeto
	 - `git clone git@bitbucket.org:primelantecnologia/frontend-base-vue.git NOME_PROJETO`
 2. Altear `name` no `package.json`

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
Arquivo: `/src/components/base/svg/SVG.vue`
Diretório para SVGs: `/src/components/base/svg/elements/`

O projeto vem configurado com um padrão de utilização de SVGs próximo ao que a documentação oficial recomenda. A logo do Vue.js que está no components `Home.vue` está dentro desse padrão. Abaixo tem detalhado como adicionar a mesma logo ao projeto:

 1. Criar um arquivo `.vue` dentro do diretório de SVGs com o conteúdo do SVG, removendo a tag `<svg>`, deixando apenas o conteúdo. Exemplo com a logo do Vue.js:
 
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

Arquivo final **Logo.vue** que vai ficar dentro do diretório de SVGs:
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

 2. Fazer o import do novo svg (Logo.vue) no arquivo base de SVG `SVG.vue`: `import  LogoVue  from  '@/components/base/svg/elements/Logo.vue';`
 3. Adicionar o LogoVue nos components: `components: { LogoVue, },`
 4. Colocar no switch de ícones na `computed` `SVGElement` o nome que vai ser usado para acessar esse SVG e qual elemento esse nome corresponde:
```
case  'logo': // Quando for passado 'logo' como parâmetro será carregado o SVG definido no data abaixo 
	data = 'LogoVue'; // Component importado no passo 2 e adicionado no passo 3
	break;
```
 5. Para utilizar o SVG basta fazer o import do SVG.vue no component, uma única vez independente da quantidade de SVGs do component, e depois colocar o component no template passando os parâmetros:

```
// Import JS
import  icon  from  '@/components/base/svg/SVG.vue';

// Load do Components
components: {
	icon,
},

// Utilização no <template>
<icon
	icon="logo" // Nome do SVG definido no switch do passo 4 [Obrigatório]
	name="Vue.js" // Nome utilizado como title para svg [Obrigatório]
	width="261.76" // Largura em número px [Obrigatório]
	height="226.69" // Altura em número px [Obrigatório]
	color="#000000" // Cor em Hex e depende do SVG ser compatível [Opcional]
	viewBox="0 0 261.76 226.69" // ViewBox [Opcional]
/>
```

## Executando o projeto
Para executar o projeto é recomendado a utilização do Vue UI, através do comando `vue ui`.

Para utilizar direto do terminal:

#### Project setup
```
yarn install
```

##### Compiles and hot-reloads for development
```
yarn serve
```

##### Compiles and minifies for production
```
yarn build
```
  
##### Lints and fixes files
```
yarn lint
```

##### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).