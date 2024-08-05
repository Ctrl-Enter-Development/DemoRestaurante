
---

# Restaurante Delícia

Bem-vindo ao repositório do **Restaurante Delícia**, um projeto de site para um restaurante fictício. Este projeto foi desenvolvido para demonstrar habilidades em HTML, CSS, JavaScript, e integração de bibliotecas externas como Bootstrap, jQuery, GSAP e Barba.js. O site inclui páginas de contato, cardápio e reservas, com componentes reutilizáveis e transições animadas.

## Índice

- [Visão Geral](#visão-geral)
- [Funcionalidades](#funcionalidades)
- [Estrutura de Pastas](#estrutura-de-pastas)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Instalação e Configuração](#instalação-e-configuração)
- [Uso](#uso)
- [Contribuição](#contribuição)
- [Licença](#licença)

## Visão Geral

Este projeto é uma aplicação web simples para um restaurante, projetado com um design limpo e moderno. Ele inclui páginas básicas para exibir o cardápio, facilitar o contato e permitir que os usuários façam reservas online.

## Funcionalidades

- **Página Inicial**: Uma introdução ao restaurante, com uma breve descrição e uma imagem do local.
- **Página de Contato**: Um formulário de contato para que os usuários possam enviar perguntas ou sugestões.
- **Página de Cardápio**: Lista dos pratos disponíveis, com descrições detalhadas e imagens.
- **Página de Reservas**: Um formulário de reserva para que os usuários possam reservar mesas online.
- **Componentes Reutilizáveis**: Navbar carregado dinamicamente em todas as páginas.
- **Animações e Transições**: Uso de Barba.js e GSAP para transições suaves entre páginas.

## Estrutura de Pastas

```plaintext
.
├── README.md
├── componentes
│   └── navbar
│       ├── navbar.css
│       └── navbar.html
├── index.html
├── index.js
├── page-transitions.js
├── pages
│   ├── contato
│   │   ├── contact.css
│   │   ├── contact.html
│   │   └── contact.js
│   ├── menu
│   │   ├── menu.css
│   │   ├── menu.html
│   │   └── menu.js
│   └── reservas
│       ├── reservation.css
│       ├── reservation.html
│       └── reservation.js
└── style.css
```

- **componentes/navbar**: Contém o HTML e CSS para a barra de navegação reutilizável.
- **pages**: Contém as diferentes páginas do site, cada uma com seus próprios arquivos HTML, CSS e JS.
- **index.html**: Página inicial do site.
- **style.css**: Estilos globais para o site.
- **page-transitions.js**: Script responsável pelas transições entre páginas.

## Tecnologias Utilizadas

- **HTML5**: Estrutura básica do site.
- **CSS3**: Estilização e layout responsivo.
- **Bootstrap 4**: Framework CSS para design responsivo e componentes.
- **JavaScript (jQuery)**: Manipulação de DOM e funcionalidades interativas.
- **GSAP**: Animações suaves e complexas.
- **Barba.js**: Gerenciamento de transições entre páginas.
- **SweetAlert2**: Alertas bonitos e interativos para feedback de formulários.

## Instalação e Configuração

1. **Clone o Repositório**:
    ```bash
    git clone https://github.com/seu-usuario/restaurante-delicia.git
    cd restaurante-delicia
    ```

2. **Abra o Projeto**:
    - Basta abrir o arquivo `index.html` no navegador para visualizar o site localmente.

## Uso

- **Página Inicial**: Navegue para a página inicial (`index.html`) para ter uma visão geral do restaurante.
- **Navegação**: Use a navbar para navegar entre as páginas de Contato, Cardápio e Reservas.
- **Formulários**: Preencha os formulários de contato e reserva para testar as funcionalidades.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e enviar pull requests.

1. **Fork o repositório**
2. **Crie uma branch para sua feature**: `git checkout -b minha-nova-feature`
3. **Commit suas mudanças**: `git commit -m 'Adicionei nova feature'`
4. **Push para a branch**: `git push origin minha-nova-feature`
5. **Abra um Pull Request**

## Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

