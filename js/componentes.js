/**
 * Faramilio Consultoria - Sistema de Componentes Reutilizáveis
 * Este script carrega o Navbar e o Footer em todas as páginas.
 */

document.addEventListener("DOMContentLoaded", function() {
    loadNavbar();
    loadFooter();
    loadWhatsApp();
});

function loadNavbar() {
    const navbarHTML = `
    <nav class="navbar navbar-expand-lg bg-white navbar-light sticky-top py-lg-0 px-4 px-lg-5 wow fadeIn" data-wow-delay="0.1s">
        <a href="index.html" class="navbar-brand d-flex align-items-center">
            <img src="img/logo-azul.svg" alt="Faramilio Consultoria" style="height: 55px; width: auto;">
        </a>
        <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
            <div class="navbar-nav ms-auto">
                <a href="index.html" class="nav-item nav-link" id="nav-index">Início</a>
                <a href="empresa.html" class="nav-item nav-link" id="nav-empresa">A Empresa</a>
                <a href="servicos.html" class="nav-item nav-link" id="nav-servicos">Serviços</a>
                <a href="contato.html" class="nav-item nav-link" id="nav-contato">Contato</a>
            </div>
            <a href="https://wa.me/5511972599500" target="_blank" class="btn btn-primary rounded-pill px-3 d-none d-lg-block">Falar com Odair</a>
        </div>
    </nav>`;

    const navElement = document.getElementById('navbar-placeholder');
    if (navElement) {
        navElement.innerHTML = navbarHTML;
        // Marcar link ativo baseado na página atual
        const path = window.location.pathname.split("/").pop();
        if (path === "index.html" || path === "") document.getElementById('nav-index')?.classList.add('active');
        if (path === "empresa.html") document.getElementById('nav-empresa')?.classList.add('active');
        if (path === "servicos.html") document.getElementById('nav-servicos')?.classList.add('active');
        if (path === "contato.html") document.getElementById('nav-contato')?.classList.add('active');
    }
}

function loadFooter() {
    const footerHTML = `
    <div class="container-fluid bg-dark text-light footer mt-5 pt-5 wow fadeIn" data-wow-delay="0.1s">
        <div class="container py-5">
            <div class="row g-5">
                <div class="col-lg-4 col-md-6">
                    <img src="img/logo-branco.svg" alt="Faramilio" style="height: 45px; margin-bottom: 25px;">
                    <p>Soluções inteligentes para a indústria de alimentos. Especialistas em mecânica e manutenção preventiva.</p>
                </div>
                <div class="col-lg-4 col-md-6">
                    <h4 class="text-light mb-4">Links Rápidos</h4>
                    <a class="btn btn-link" href="empresa.html">Sobre Nós</a>
                    <a class="btn btn-link" href="servicos.html">Serviços</a>
                    <a class="btn btn-link" href="contato.html">Contato</a>
                </div>
                <div class="col-lg-4 col-md-6">
                    <h4 class="text-light mb-4">Atendimento</h4>
                    <p><i class="fa fa-phone-alt me-3"></i>+55 11 97259-9500</p>
                    <p><i class="fa fa-envelope me-3"></i>contato@faramilio.com.br</p>
                </div>
            </div>
        </div>
    </div>`;

    const footerElement = document.getElementById('footer-placeholder');
    if (footerElement) footerElement.innerHTML = footerHTML;
}

function loadWhatsApp() {
    const waHTML = `
    <a href="https://wa.me/5511972599500" class="whatsapp-fixed" target="_blank" aria-label="WhatsApp">
        <i class="fab fa-whatsapp"></i>
    </a>`;
    document.body.insertAdjacentHTML('beforeend', waHTML);
}