function inicializarComponentes() {
    // --- 1. NAVBAR ---
    const navbarHTML = `
    <nav class="navbar">
        <div class="logo">
            <a href="index.html">
                <svg width="180" height="55" viewBox="0 5 200 50" xmlns="http://www.w3.org/2000/svg">
                <text x="50%" y="30" text-anchor="middle" font-family="Arial, sans-serif" font-weight="900" font-size="28" fill="#FFFFFF" letter-spacing="0.2">FARAMILIO</text>
                <text x="50%" y="46" text-anchor="middle" font-family="Arial, sans-serif" font-weight="700" font-size="11.8" fill="#e67e22" letter-spacing="1.55">CONSULTORIA TÉCNICA</text>
                </svg>
            </a>
        </div>
        <button class="menu-toggle" id="mobile-menu">&#9776;</button>
        <ul class="nav-links" id="nav-list">
            <li><a href="index.html">Início</a></li>
            <li><a href="sobre.html">Sobre</a></li>
            <li><a href="servicos.html">Serviços</a></li>
            <li><a href="contacto.html">Contato</a></li>
        </ul>
    </nav>
    `;

    // --- 2. BOTÃO FLUTUANTE WHATSAPP ---
    const whatsappFlutuanteHTML = `
    <a href="https://wa.me/351900000000" class="whatsapp-float" target="_blank" aria-label="Falar no WhatsApp">
        <span style="font-size: 1.5rem;">💬</span>
    </a>
    `;

    // --- 3. FOOTER ---
    const footerHTML = `
    <footer class="main-footer">
        <div class="footer-content">
            <p>&copy; ${new Date().getFullYear()} FARAMILIO - Consultoria Técnica</p>
            <p>Especialista com padrão PepsiCo de Manutenção Industrial</p>
        </div>
    </footer>
    `;

    // Injeções no DOM
    document.body.insertAdjacentHTML('afterbegin', navbarHTML); // No topo
    document.body.insertAdjacentHTML('beforeend', whatsappFlutuanteHTML); // No fim, mas fixo via CSS
    document.body.insertAdjacentHTML('beforeend', footerHTML); // No fim

    // Lógica Menu Mobile
    const btnMobile = document.getElementById('mobile-menu');
    const listaLinks = document.getElementById('nav-list');
    if (btnMobile) {
        btnMobile.onclick = () => {
            listaLinks.classList.toggle('active');
            btnMobile.innerHTML = listaLinks.classList.contains('active') ? '&times;' : '&#9776;';
        };
    }
}

document.addEventListener('DOMContentLoaded', inicializarComponentes);