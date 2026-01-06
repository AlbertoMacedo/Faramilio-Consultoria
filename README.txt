Aqui tens a estrutura completa e profissional para o teu ficheiro README.txt. Este documento é essencial para que tu (ou qualquer outra pessoa no futuro) consiga entender como o site funciona e como fazer alterações rápidas.

Podes copiar e colar o conteúdo abaixo num bloco de notas e guardar com o nome README.txt.

🛠️ DOCUMENTAÇÃO TÉCNICA: FARAMILIO - CONSULTORIA TÉCNICA
1. VISÃO GERAL DO PROJETO
Site institucional desenvolvido com foco em Mobile-First, utilizando tecnologias nativas (HTML5, CSS3 e JavaScript Moderno). O projeto destaca a experiência de consultoria técnica em maquinaria industrial de salgados, com foco em conversão direta via WhatsApp.

2. ARQUITETURA DE FICHEIROS
O projeto segue uma estrutura modular para evitar repetição de código:

index.html: Home page com carrossel de máquinas e introdução.

sobre.html: História profissional e diferenciais (Experiência PepsiCo).

servicos.html: Detalhes técnicos sobre modeladoras, fritadeiras e preventiva.

contacto.html: Página com canais diretos de comunicação.

style.css: Estilização centralizada (Variáveis, Grid e Flexbox).

componentes.js: O Coração do Site. Gerencia a injeção automática da Navbar, Footer e Botão do WhatsApp em todas as páginas.

3. SISTEMA DE COMPONENTES (Herança de Código)
Para evitar copiar e colar o menu e o rodapé em todas as páginas, utilizamos a técnica de injeção via DOM no ficheiro componentes.js.

Como atualizar o Menu ou Footer:

Abre o ficheiro componentes.js.

Altera as variáveis navbarHTML ou footerHTML.

A alteração será refletida instantaneamente em todas as páginas do site.

4. GUIA DE ESTILO (CSS)
Cores Principais: * --cor-primaria: Azul Industrial (#002d5b)

--cor-acento: Laranja Destaque (#e67e22)

Tipografia: Unidades rem para garantir que o texto se adapta ao tamanho de fonte configurado no telemóvel do utilizador.

Layout: Utilização de CSS Grid com auto-fit na página de serviços, permitindo que os cartões se reorganizem sozinhos conforme a largura do ecrã.

5. MANUTENÇÃO DE IMAGENS
As imagens do carrossel (index.html) e da página sobre devem ser colocadas na raiz do projeto.

Padrões recomendados:

Nomes: maquina-modeladora.jpg, maquina-empanadora.jpg, maquina-fritadeira.jpg.

Resolução: 800px x 600px (proporção 4:3) para manter o alinhamento do carrossel.

Otimização: Passar as imagens por um compressor (como o TinyJPG) para garantir um carregamento rápido em redes móveis (3G/4G).

6. CONFIGURAÇÃO DE CONTACTOS
Para alterar o número de destino das mensagens:

Abre componentes.js.

Localiza o link https://wa.me/351900000000.

Substitui o número pelo do cliente (mantendo o código do país, ex: 351 para Portugal ou 55 para Brasil).

7. NOTAS DE DESENVOLVIMENTO
Logotipo: Implementado em SVG dentro do JS para garantir nitidez máxima e carregamento ultra-rápido.

SEO: Incluídas tags aria-label nos botões e estrutura semântica (header, main, footer) para melhor posicionamento no Google.