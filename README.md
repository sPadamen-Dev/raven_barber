# Raven Barber

Website institucional para a Raven Barber, uma barbearia premium com identidade visual dark, masculina e sofisticada. O projeto foi desenvolvido em React + Vite, com foco em responsividade, performance, SEO e organização por componentes para facilitar futuras atualizações.

## Tecnologias

- React
- Vite
- CSS puro
- ESLint

## Como Rodar

Instale as dependências:

```bash
npm install
```

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

Gere a versão de produção:

```bash
npm run build
```

Rode a verificação de código:

```bash
npm run lint
```

## Estrutura

```text
src/
  assets/
    raven/
      brand-logo.png
      brand-logo.webp
      hero-scene.webp
      about-shop.webp
      clipper.webp
      icon-*.png
  components/
    About.jsx
    Button.jsx
    ContactBanner.jsx
    Footer.jsx
    Header.jsx
    Hero.jsx
    Icon.jsx
    Plans.jsx
    SectionTitle.jsx
    Services.jsx
  data/
    siteData.js
  App.jsx
  App.css
  index.css
```

## Componentes

- `Header`: navegação principal, logo e menu mobile.
- `Hero`: primeira seção com imagem principal, chamada e CTAs.
- `Services`: cards dos serviços oferecidos.
- `Plans`: cards horizontais de planos mensais com CTA para WhatsApp.
- `About`: apresentação da barbearia, diferenciais e informações de contato.
- `ContactBanner`: banner de agendamento com imagem, botão e telefone.
- `Footer`: logo, navegação, contato e redes sociais.

## Dados Editáveis

As informações principais ficam centralizadas em:

```text
src/data/siteData.js
```

Nesse arquivo é possível alterar:

- Endereço
- Telefone
- Horário de funcionamento
- Link do WhatsApp
- Links de redes sociais
- Serviços
- Planos
- Destaques da seção sobre

## Identidade Visual

O site segue a identidade visual anexada ao projeto:

- Fundo preto e grafite
- Alto contraste em branco e prata
- Tipografia forte e moderna
- Cards com bordas finas
- Estética premium, masculina e dark
- Imagens otimizadas em WebP e PNG

## SEO

O arquivo `index.html` contém:

- Idioma `pt-BR`
- Meta description
- Keywords
- Open Graph
- Twitter Card
- Favicon
- Imagem social `og-image.jpg`
- JSON-LD com schema `BarberShop`

## Performance

Os assets principais foram recortados e otimizados para reduzir peso:

- Hero em WebP
- Imagens de apoio em WebP
- Ícones compactos em PNG
- Build final gerado pelo Vite com assets versionados

## Observações

O site foi criado para ser responsivo em desktop, tablet e mobile. No mobile, o header fica sobreposto ao hero, a imagem principal ocupa o topo e os cards de planos podem ser arrastados horizontalmente.
