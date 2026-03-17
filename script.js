// ===== Products Data =====
// ===== Lista de 92 Produtos FixPrime (Re-categorizados) =====
const rawProducts = [
  { id: 1, name: "Serrote cabo emborrachado 22 polegadas", brand: "fixprime", category: "ferramentas", price: 35.90, image: "assets/produto-1.jpg" },
  { id: 2, name: "Kit broca de madeira 5 peças", brand: "fixprime", category: "ferramentas", price: 17.80, image: "assets/produto-2.jpg" },
  { id: 3, name: "Metálica alemã 6 unidades", brand: "fixprime", category: "ferramentas", price: 18.90, image: "assets/produto-3.jpg" },
  { id: 4, name: "Kit chaves de precisão 7 peças", brand: "fixprime", category: "ferramentas", price: 17.50, image: "assets/produto-4.jpg" },
  { id: 5, name: "Kit chave 6 peças estrela Ninja", brand: "fixprime", category: "ferramentas", price: 55.99, image: "assets/produto-5.jpg" },
  { id: 6, name: "Suporte guia para serra copo 32mm-210mm", brand: "fixprime", category: "ferramentas", price: 29.90, image: "assets/produto-6.jpg" },
  { id: 7, name: "Kit chave de fenda e Philips 6 peças", brand: "fixprime", category: "ferramentas", price: 45.99, image: "assets/produto-7.jpg" },
  { id: 8, name: "Rolo de pintura 4 polegadas", brand: "fixprime", category: "pintura", price: 14.59, image: "assets/produto-8.jpg" },
  { id: 9, name: "Conjunto de broca planas para madeira 6 peças", brand: "fixprime", category: "ferramentas", price: 29.89, image: "assets/produto-9.jpg" },
  { id: 10, name: "Jogo de chaves combinadas 8 peças", brand: "fixprime", category: "ferramentas", price: 80.99, image: "assets/produto-10.jpg" },
  { id: 11, name: "Kit chave de fenda e Philips 6 peças", brand: "fixprime", category: "ferramentas", price: 27.99, image: "assets/produto-11.jpg" },
  { id: 12, name: "Jogo de serra copos 11 peças", brand: "fixprime", category: "ferramentas", price: 44.89, image: "assets/produto-12.jpg" },
  { id: 13, name: "Marreta emborrachada 55mm", brand: "fixprime", category: "ferramentas", price: 23.99, image: "assets/produto-13.jpg" },
  { id: 14, name: "Alicate para anéis externo reto 7 polegadas", brand: "fixprime", category: "ferramentas", price: 22.99, image: "assets/produto-14.jpg" },
  { id: 15, name: "Pincel multiuso 18cm", brand: "fixprime", category: "pintura", price: 8.29, image: "assets/produto-15.jpg" },
  { id: 16, name: "Alicate de corte 8 polegadas", brand: "fixprime", category: "ferramentas", price: 22.99, image: "assets/produto-16.jpg" },
  { id: 17, name: "Kit chave Allen 1,5 a 10mm com 10 peças", brand: "fixprime", category: "ferramentas", price: 12.99, image: "assets/produto-17.jpg" },
  { id: 18, name: "Jogo de chaves combinadas 6 unidades", brand: "fixprime", category: "ferramentas", price: 45.90, image: "assets/produto-18.jpg" },
  { id: 19, name: "Kit chaves intercambiáveis 16 peças", brand: "fixprime", category: "ferramentas", price: 18.00, image: "assets/produto-19.jpg" },
  { id: 20, name: "Rolo para pintura 6 polegadas", brand: "fixprime", category: "pintura", price: 15.49, image: "assets/produto-20.jpg" },
  { id: 21, name: "Alicate de desencapar fio", brand: "fixprime", category: "ferramentas", price: 45.99, image: "assets/produto-21.jpg" },
  { id: 22, name: "Trena 3Mx16MM com trava", brand: "fixprime", category: "ferramentas", price: 14.90, image: "assets/produto-22.jpg" },
  { id: 23, name: "Alicate universal corte 6 polegadas", brand: "fixprime", category: "ferramentas", price: 21.90, image: "assets/produto-23.jpg" },
  { id: 24, name: "Ferramentas precisão 6 em 1", brand: "fixprime", category: "ferramentas", price: 12.49, image: "assets/produto-24.jpg" },
  { id: 25, name: "Martelo unha com cabo de madeira 32cm", brand: "fixprime", category: "ferramentas", price: 33.50, image: "assets/produto-25.jpg" },
  { id: 26, name: "Kit de chaves fenda Philips 6 peças", brand: "fixprime", category: "ferramentas", price: 42.29, image: "assets/produto-26.jpg" },
  { id: 27, name: "Alicate tesoura corta vergalhão 24 polegadas", brand: "fixprime", category: "ferramentas", price: 129.90, image: "assets/produto-27.jpg" },
  { id: 28, name: "Tesoura corta chapa aviação reta", brand: "fixprime", category: "ferramentas", price: 31.89, image: "assets/produto-28.jpg" },
  { id: 29, name: "Abraçadeira metálica 13x19mm 6 unidades", brand: "fixprime", category: "ferramentas", price: 16.59, image: "assets/produto-29.jpg" },
  { id: 30, name: "Alicate rebitador profissional 17 polegadas inox", brand: "fixprime", category: "ferramentas", price: 55.89, image: "assets/produto-30.jpg" },
  { id: 31, name: "Martelo unha com cabo de fibra", brand: "fixprime", category: "ferramentas", price: 34.89, image: "assets/produto-31.jpg" },
  { id: 32, name: "Serrote dobrável para jardim", brand: "fixprime", category: "ferramentas", price: 22.99, image: "assets/produto-32.jpg" },
  { id: 33, name: "Alicate para corte de tubos até 42mm", brand: "fixprime", category: "ferramentas", price: 31.39, image: "assets/produto-33.jpg" },
  { id: 34, name: "Parafusadeira e furadeira elétrica 21v sem fio + acessórios", brand: "fixprime", category: "eletricos", price: 239.99, image: "assets/produto-34.jpg" },
  { id: 35, name: "Alicate para rebite manual", brand: "fixprime", category: "ferramentas", price: 35.99, image: "assets/produto-35.jpg" },
  { id: 36, name: "Alicate de crimpar para RJ45/RJ12/RJ11 com catraca de pressão", brand: "fixprime", category: "ferramentas", price: 44.49, image: "assets/produto-36.jpg" },
  { id: 37, name: "Alicate de crimpar cabo de rede RJ45", brand: "fixprime", category: "ferramentas", price: 36.29, image: "assets/produto-37.jpg" },
  { id: 38, name: "Jogo de ferramentas precisão 31 em 1", brand: "fixprime", category: "ferramentas", price: 20.99, image: "assets/produto-38.jpg" },
  { id: 39, name: "Rolo para pintura 6 polegadas", brand: "fixprime", category: "pintura", price: 14.99, image: "assets/produto-39.jpg" },
  { id: 40, name: "Rolo para pintura 4 polegadas", brand: "fixprime", category: "pintura", price: 13.99, image: "assets/produto-40.jpg" },
  { id: 41, name: "Jogo de chave soquete", brand: "fixprime", category: "ferramentas", price: 109.79, image: "assets/produto-41.jpg" },
  { id: 42, name: "Alicate rebitador profissional 17 polegadas", brand: "fixprime", category: "ferramentas", price: 55.69, image: "assets/produto-42.jpg" },
  { id: 43, name: "Lima grossa para madeira 10 polegadas", brand: "fixprime", category: "ferramentas", price: 19.99, image: "assets/produto-43.jpg" },
  { id: 44, name: "Alicate de pressão mordente curvo modelo BT-537", brand: "fixprime", category: "ferramentas", price: 33.79, image: "assets/produto-44.jpg" },
  { id: 45, name: "Trena emborrachada com trava 5Mx25MM", brand: "fixprime", category: "ferramentas", price: 18.99, image: "assets/produto-45.jpg" },
  { id: 46, name: "Tesoura de poda", brand: "fixprime", category: "ferramentas", price: 55.99, image: "assets/produto-46.jpg" },
  { id: 47, name: "Marreta emborrachada 250g", brand: "fixprime", category: "ferramentas", price: 18.99, image: "assets/produto-47.jpg" },
  { id: 48, name: "Jogo de broca para ferro 5 peças", brand: "fixprime", category: "ferramentas", price: 20.39, image: "assets/produto-48.jpg" },
  { id: 49, name: "Alicate furador vazado 9 polegadas", brand: "fixprime", category: "ferramentas", price: 34.59, image: "assets/produto-49.jpg" },
  { id: 50, name: "Alicate tesoura de corte de PVC", brand: "fixprime", category: "ferramentas", price: 22.99, image: "assets/produto-50.jpg" },
  { id: 51, name: "Jogo chave Allen 9 peças aço carbono 1,5 até 10mm", brand: "fixprime", category: "ferramentas", price: 22.99, image: "assets/produto-51.jpg" },
  { id: 52, name: "Teste de tensão sonoro caneta voltagem com luz", brand: "fixprime", category: "ferramentas", price: 21.99, image: "assets/produto-52.jpg" },
  { id: 53, name: "Trena emborrachada com trava 3 metros", brand: "fixprime", category: "ferramentas", price: 13.89, image: "assets/produto-53.jpg" },
  { id: 54, name: "Kit ferramentas maleta 15 peças", brand: "fixprime", category: "ferramentas", price: 84.99, image: "assets/produto-54.jpg" },
  { id: 55, name: "Alicate para anéis externo reto 7 polegadas", brand: "fixprime", category: "ferramentas", price: 22.99, image: "assets/produto-55.jpg" },
  { id: 56, name: "Jogo de soquete 46 peças", brand: "fixprime", category: "ferramentas", price: 69.99, image: "assets/produto-56.jpg" },
  { id: 57, name: "Martelo pena cabo emborrachado", brand: "fixprime", category: "ferramentas", price: 28.29, image: "assets/produto-57.jpg" },
  { id: 58, name: "Kit de ferramentas 4 unidades", brand: "fixprime", category: "ferramentas", price: 21.79, image: "assets/produto-58.jpg" },
  { id: 59, name: "Kit de broca aço 5 unidades de 4-10", brand: "fixprime", category: "ferramentas", price: 18.99, image: "assets/produto-59.jpg" },
  { id: 60, name: "Rolo para pintura 2 polegadas", brand: "fixprime", category: "pintura", price: 12.59, image: "assets/produto-60.jpg" },
  { id: 61, name: "Kit maleta grampeador tapeceiro + trena", brand: "fixprime", category: "ferramentas", price: 68.69, image: "assets/produto-61.jpg" },
  { id: 62, name: "Trena emborrachada com trava 7,5 metros", brand: "fixprime", category: "ferramentas", price: 22.90, image: "assets/produto-62.jpg" },
  { id: 63, name: "Martelo marreta de borracha 31cm", brand: "fixprime", category: "ferramentas", price: 28.29, image: "assets/produto-63.jpg" },
  { id: 64, name: "Kit chave de catraca 1/4 polegadas 14 peças", brand: "fixprime", category: "ferramentas", price: 71.99, image: "assets/produto-64.jpg" },
  { id: 65, name: "Kit de ferramentas 4 peças Barcelona", brand: "fixprime", category: "ferramentas", price: 34.99, image: "assets/produto-65.jpg" },
  { id: 66, name: "Termômetro digital laser infravermelho Luatek", brand: "fixprime", category: "ferramentas", price: 81.29, image: "assets/produto-66.jpg" },
  { id: 67, name: "Kit chave de fenda e Philips 22 polegadas", brand: "fixprime", category: "ferramentas", price: 68.69, image: "assets/produto-67.jpg" },
  { id: 68, name: "Alicate descascador para cabo coaxial", brand: "fixprime", category: "ferramentas", price: 22.99, image: "assets/produto-68.jpg" },
  { id: 69, name: "Alicate para rebite manual 9,5 polegadas", brand: "fixprime", category: "ferramentas", price: 29.69, image: "assets/produto-69.jpg" },
  { id: 70, name: "Trena com trava 3Mx19mm", brand: "fixprime", category: "ferramentas", price: 12.79, image: "assets/produto-70.jpg" },
  { id: 71, name: "Chave de fenda magnética 5x125mm", brand: "fixprime", category: "ferramentas", price: 12.69, image: "assets/produto-71.jpg" },
  { id: 72, name: "Kit chave de catraca 1/2 polegadas 8 peças", brand: "fixprime", category: "ferramentas", price: 74.99, image: "assets/produto-72.jpg" },
  { id: 73, name: "Alicate de crimpar cabo de rede", brand: "fixprime", category: "ferramentas", price: 35.99, image: "assets/produto-73.jpg" },
  { id: 74, name: "Chave teste de tensão 3 níveis 110 a 500v", brand: "fixprime", category: "ferramentas", price: 26.99, image: "assets/produto-74.jpg" },
  { id: 75, name: "Kit de ferramentas precisão 50 peças", brand: "fixprime", category: "ferramentas", price: 136.99, image: "assets/produto-75.jpg" },
  { id: 76, name: "Grampeador tapeceiro profissional 4-8mm Barcelona", brand: "fixprime", category: "ferramentas", price: 43.49, image: "assets/produto-76.jpg" },
  { id: 77, name: "Chave de fenda B-Tek BT-567", brand: "fixprime", category: "ferramentas", price: 13.99, image: "assets/produto-77.jpg" },
  { id: 78, name: "Lupa 60 mm Top Util", brand: "fixprime", category: "diversos", price: 11.29, image: "assets/produto-78.jpg" },
  { id: 79, name: "Cortador de vidro com reservatório B-Tek BT-425", brand: "fixprime", category: "ferramentas", price: 17.89, image: "assets/produto-79.jpg" },
  { id: 80, name: "Jogo de chaves Philips intercambiáveis B-Tek BT-343", brand: "fixprime", category: "ferramentas", price: 46.19, image: "assets/produto-80.jpg" },
  { id: 81, name: "Alicate corta vergalhão 18 B-Tek BT-427", brand: "fixprime", category: "ferramentas", price: 84.99, image: "assets/produto-81.jpg" },
  { id: 82, name: "Veda rosca 18 mm x 6 m", brand: "fixprime", category: "ferramentas", price: 9.19, image: "assets/produto-82.jpg" },
  { id: 83, name: "Kit de pintura 4 peças", brand: "fixprime", category: "pintura", price: 49.49, image: "assets/produto-83.jpg" },
  { id: 84, name: "Trena fita métrica 30 m", brand: "fixprime", category: "ferramentas", price: 29.99, image: "assets/produto-84.jpg" },
  { id: 85, name: "Trena fita métrica 20 m", brand: "fixprime", category: "ferramentas", price: 22.90, image: "assets/produto-85.jpg" },
  { id: 86, name: "Serra tico-tico recarregável", brand: "fixprime", category: "eletricos", price: 334.89, image: "assets/produto-86.jpg" },
  { id: 87, name: "Trena fibra de vidro 30 m B-Tek", brand: "fixprime", category: "ferramentas", price: 42.19, image: "assets/produto-87.jpg" },
  { id: 88, name: "Trena fibra de vidro 50 m B-Tek", brand: "fixprime", category: "ferramentas", price: 55.99, image: "assets/produto-88.jpg" },
  { id: 89, name: "Kit de bits para parafusadeira 10 peças", brand: "fixprime", category: "ferramentas", price: 26.99, image: "assets/produto-89.jpg" },
  { id: 90, name: "Alicate para anel interno curvo 7", brand: "fixprime", category: "ferramentas", price: 22.99, image: "assets/produto-90.jpg" },
  { id: 91, name: "Kit chaves Allen 1,5–10 mm 9 peças", brand: "fixprime", category: "ferramentas", price: 28.39, image: "assets/produto-91.jpg" },
  { id: 92, name: "Alicate torquês armador 10", brand: "fixprime", category: "ferramentas", price: 45.69, image: "assets/produto-92.jpg" }
];

// Dinamicamente aplicar as novas categorias aos produtos
const products = rawProducts.map(p => {
  let cat = 'manuais'; // Padrão
  const n = p.name.toLowerCase();
  
  if (n.includes('kit') || n.includes('jogo') || n.includes('conjunto')) {
    cat = 'kits';
  } else if (p.category === 'eletricos' || n.includes('parafusadeira') || n.includes('furadeira') || n.includes('tico-tico')) {
    cat = 'maquinas';
  }
  
  return { ...p, category: cat };
});

// Category names map atualizado
const categoryNames = {
  'manuais': 'Ferramentas Manuais',
  'kits': 'Kits para Casa',
  'maquinas': 'Máquinas'
};

// Keywords for improved search
const searchKeywords = {
  'parafusar': ['parafusadeira', 'maquina'],
  'furar': ['furadeira', 'broca', 'maquina'],
  'cortar': ['alicate', 'tesoura', 'serrote', 'serra', 'manual'],
  'medir': ['trena', 'termometro', 'manual'],
  'pintar': ['rolo', 'pincel'],
  'bater': ['martelo', 'marreta', 'manual'],
  'apertar': ['chave', 'soquete', 'catraca', 'manual'],
  'crimpar': ['alicate crimpar', 'rj45'],
  'rede': ['crimpar', 'rj45', 'coaxial'],
  'cabo': ['crimpar', 'descascador', 'desencapar'],
  'madeira': ['broca', 'lima', 'serrote'],
  'metal': ['broca ferro', 'lima'],
  'jardim': ['serrote', 'poda', 'tesoura'],
  'precisao': ['precisao', 'chaves'],
  'kit': ['kit', 'jogo', 'conjunto', 'maleta', 'casa'],
  'profissional': ['profissional', 'rebitador']
};

// ===== State =====
let currentSlide = 0;
let carouselInterval;
let selectedProduct = null;
const favorites = new Set();
let isMobileSearchOpen = false;

// ===== DOM Elements =====
const header = document.getElementById('header');
const menuBtn = document.getElementById('menuBtn');
const menuIcon = document.getElementById('menuIcon');
const mobileMenu = document.getElementById('mobileMenu');
const mobileMenuBackdrop = document.getElementById('mobileMenuBackdrop');
const carouselInner = document.getElementById('carouselInner');
const carouselPrev = document.getElementById('carouselPrev');
const carouselNext = document.getElementById('carouselNext');
const carouselDots = document.getElementById('carouselDots');
const categoryFilter = document.getElementById('categoryFilter');
const priceFilter = document.getElementById('priceFilter');
const clearFilters = document.getElementById('clearFilters');
const productModal = document.getElementById('productModal');
const modalBackdrop = document.getElementById('modalBackdrop');
const modalClose = document.getElementById('modalClose');
const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
const floatingSocial = document.getElementById('floatingSocial');

// Mobile Sheet Elements
const mobileSheet = document.getElementById('mobileSheet');
const mobileSheetBackdrop = document.getElementById('mobileSheetBackdrop');
const mobileSheetClose = document.getElementById('mobileSheetClose');

// Search Elements
const searchInput = document.getElementById('searchInput');
const mobileSearchBtn = document.getElementById('mobileSearchBtn');

// ===== Initialize =====
document.addEventListener('DOMContentLoaded', () => {
  initHeader();
  initMobileMenu();
  initCarousel();
  initFilters();
  initProductCarousels(); // Inicializa o controle das setas das categorias
  renderProducts();
  initModal();
  initMobileSheet();
  initSearch();
  initOfferButtons();
  initCountdownTimer();
});

// ===== Countdown Timer =====
function initCountdownTimer() {
  const now = new Date();
  const endDate = new Date(now.getTime() + 3 * 24 * 60 * 60 * 1000); 
  
  let storedEndDate = localStorage.getItem('offerEndDate');
  let countdownEnd;
  
  if (storedEndDate) {
    countdownEnd = new Date(storedEndDate);
    if (countdownEnd <= now) {
      countdownEnd = endDate;
      localStorage.setItem('offerEndDate', endDate.toISOString());
    }
  } else {
    countdownEnd = endDate;
    localStorage.setItem('offerEndDate', endDate.toISOString());
  }
  
  function updateTimer() {
    const now = new Date();
    const diff = countdownEnd - now;
    
    if (diff <= 0) {
      countdownEnd = new Date(now.getTime() + 3 * 24 * 60 * 60 * 1000);
      localStorage.setItem('offerEndDate', countdownEnd.toISOString());
    }
    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    
    const timerDays = document.getElementById('timerDays');
    const timerHours = document.getElementById('timerHours');
    const timerMinutes = document.getElementById('timerMinutes');
    const timerSeconds = document.getElementById('timerSeconds');
    
    if (timerDays) timerDays.textContent = String(days).padStart(2, '0');
    if (timerHours) timerHours.textContent = String(hours).padStart(2, '0');
    if (timerMinutes) timerMinutes.textContent = String(minutes).padStart(2, '0');
    if (timerSeconds) timerSeconds.textContent = String(seconds).padStart(2, '0');
  }
  
  updateTimer();
  setInterval(updateTimer, 1000);
}

// ===== Header Scroll =====
function initHeader() {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

// ===== Floating Social Visibility =====
function hideFloatingSocial() {
  if (floatingSocial) {
    floatingSocial.classList.add('hidden');
  }
}

function showFloatingSocial() {
  if (floatingSocial) {
    floatingSocial.classList.remove('hidden');
  }
}

// ===== Mobile Menu =====
function initMobileMenu() {
  menuBtn.addEventListener('click', toggleMobileMenu);
  mobileMenuBackdrop.addEventListener('click', closeMobileMenu);
  mobileNavLinks.forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });
}

function toggleMobileMenu() {
  const isOpen = mobileMenu.classList.toggle('open');
  menuIcon.innerHTML = isOpen
    ? "<i class='bx bx-x' style='font-size: 28px;'></i>"
    : "<i class='bx bx-menu' style='font-size: 28px;'></i>";
  
  if (isOpen) {
    document.body.style.overflow = 'hidden';
    hideFloatingSocial();
  } else {
    document.body.style.overflow = '';
    showFloatingSocial();
  }
}

function closeMobileMenu() {
  mobileMenu.classList.remove('open');
  menuIcon.innerHTML = "<i class='bx bx-menu' style='font-size: 28px;'></i>";
  document.body.style.overflow = '';
  showFloatingSocial();
}

// ===== Carousel Home =====
function initCarousel() {
  carouselPrev.addEventListener('click', prevSlide);
  carouselNext.addEventListener('click', nextSlide);
  carouselDots.querySelectorAll('.carousel-dot').forEach(dot => {
    dot.addEventListener('click', () => goToSlide(parseInt(dot.dataset.index)));
  });
  startCarouselAutoplay();
}

function updateCarousel() {
  const slides = carouselInner.querySelectorAll('.carousel-slide');
  const dots = carouselDots.querySelectorAll('.carousel-dot');
  
  slides.forEach((slide, index) => {
    slide.classList.remove('active', 'prev');
    if (index === currentSlide) {
      slide.classList.add('active');
    } else if (index < currentSlide) {
      slide.classList.add('prev');
    }
  });
  
  dots.forEach((dot, index) => {
    dot.classList.toggle('active', index === currentSlide);
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % 3;
  updateCarousel();
  resetCarouselAutoplay();
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + 3) % 3;
  updateCarousel();
  resetCarouselAutoplay();
}

function goToSlide(index) {
  currentSlide = index;
  updateCarousel();
  resetCarouselAutoplay();
}

function startCarouselAutoplay() {
  carouselInterval = setInterval(nextSlide, 4000);
}

function resetCarouselAutoplay() {
  clearInterval(carouselInterval);
  startCarouselAutoplay();
}

// ===== Product Grid Navigation (Setas) =====
function initProductCarousels() {
  document.querySelectorAll('.carousel-container').forEach(container => {
    const grid = container.querySelector('.products-grid');
    const leftBtn = container.querySelector('.scroll-arrow.left');
    const rightBtn = container.querySelector('.scroll-arrow.right');

    if (grid && leftBtn && rightBtn) {
      leftBtn.addEventListener('click', () => {
        grid.scrollBy({ left: -300, behavior: 'smooth' });
      });
      rightBtn.addEventListener('click', () => {
        grid.scrollBy({ left: 300, behavior: 'smooth' });
      });
    }
  });
}

// ===== Offer Buttons =====
function initOfferButtons() {
  document.querySelectorAll('.offer-btn[data-category]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const category = btn.dataset.category;
      navigateToProductsWithFilter(category);
    });
  });
  
  document.querySelectorAll('.offer-card[data-category]').forEach(card => {
    card.addEventListener('click', () => {
      const category = card.dataset.category;
      navigateToProductsWithFilter(category);
    });
  });
}

function navigateToProductsWithFilter(category) {
  if(categoryFilter) categoryFilter.value = category;
  if(priceFilter) priceFilter.value = 'all';
  renderProducts();
  document.getElementById('produtos').scrollIntoView({ behavior: 'smooth' });
}

// ===== Filters =====
function initFilters() {
  if(categoryFilter) categoryFilter.addEventListener('change', () => renderProducts());
  if(priceFilter) priceFilter.addEventListener('change', () => renderProducts());
  if(clearFilters) {
    clearFilters.addEventListener('click', () => {
      categoryFilter.value = 'all';
      priceFilter.value = 'all';
      renderProducts();
    });
  }
}

function filterProducts(onlySale = false) {
  const category = categoryFilter ? categoryFilter.value : 'all';
  const price = priceFilter ? priceFilter.value : 'all';
  
  return products.filter(product => {
    const matchCategory = category === 'all' || product.category === category;
    let matchPrice = true;
    if (price === 'low') matchPrice = product.price < 100;
    else if (price === 'mid') matchPrice = product.price >= 100 && product.price <= 500;
    else if (price === 'high') matchPrice = product.price > 500;
    
    const matchSale = !onlySale || product.badge === 'sale';
    
    return matchCategory && matchPrice && matchSale;
  });
}

// ===== Search =====
function initSearch() {
  const searchBar = document.querySelector('.search-bar');
  if (searchBar) {
    searchBar.style.position = 'relative';
    const dropdown = document.createElement('div');
    dropdown.className = 'search-dropdown';
    dropdown.id = 'searchDropdown';
    searchBar.appendChild(dropdown);
  }
  
  if (searchInput) {
    searchInput.addEventListener('input', handleDesktopSearch);
    searchInput.addEventListener('focus', handleDesktopSearch);
    
    document.addEventListener('click', (e) => {
      const dropdown = document.getElementById('searchDropdown');
      if (dropdown && !e.target.closest('.search-bar')) {
        dropdown.classList.remove('open');
      }
    });
  }
  
  if (mobileSearchBtn) {
    mobileSearchBtn.addEventListener('click', openMobileSearch);
  }
  
  createMobileSearchModal();
}

function searchProducts(query) {
  const normalizedQuery = normalizeText(query);
  const queryWords = normalizedQuery.split(/\s+/).filter(w => w.length > 1);
  
  let expandedTerms = [...queryWords];
  for (const [key, values] of Object.entries(searchKeywords)) {
    if (queryWords.some(word => key.includes(word) || word.includes(key))) {
      expandedTerms = [...expandedTerms, ...values];
    }
  }
  
  return products.filter(product => {
    const productText = normalizeText(`${product.name} ${product.brand} ${product.category}`);
    return expandedTerms.some(term => productText.includes(term)) ||
           queryWords.every(word => productText.includes(word));
  }).sort((a, b) => {
    const aExact = normalizeText(a.name).includes(normalizedQuery);
    const bExact = normalizeText(b.name).includes(normalizedQuery);
    if (aExact && !bExact) return -1;
    if (!aExact && bExact) return 1;
    return 0;
  });
}

function normalizeText(text) {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function handleDesktopSearch(e) {
  const query = e.target.value.toLowerCase().trim();
  const dropdown = document.getElementById('searchDropdown');
  
  if (!dropdown) return;
  
  if (query.length < 2) {
    dropdown.classList.remove('open');
    return;
  }
  
  const results = searchProducts(query);
  
  if (results.length === 0) {
    dropdown.innerHTML = '<div class="search-no-results">Nenhum produto encontrado</div>';
  } else {
    dropdown.innerHTML = results.slice(0, 8).map(product => `
      <div class="search-result-item" data-id="${product.id}">
        <div class="search-result-image">
          <img src="${product.image || ''}" alt="${product.name}" style="width:100%;height:100%;object-fit:cover;">
        </div>
        <div class="search-result-info">
          <p class="search-result-name">${product.name}</p>
          <p class="search-result-price">R$ ${product.price.toFixed(2).replace('.', ',')}</p>
        </div>
      </div>
    `).join('');
    
    dropdown.querySelectorAll('.search-result-item').forEach(item => {
      item.addEventListener('click', () => {
        const productId = parseInt(item.dataset.id);
        openModal(productId);
        dropdown.classList.remove('open');
        searchInput.value = '';
      });
    });
  }
  
  dropdown.classList.add('open');
}

function createMobileSearchModal() {
  const modal = document.createElement('div');
  modal.className = 'mobile-search-modal';
  modal.id = 'mobileSearchModal';
  modal.innerHTML = `
    <div class="mobile-search-modal-header">
      <div class="mobile-search-modal-input">
        <i class='bx bx-search' style="font-size: 20px; color: rgba(255, 255, 255, 0.6);"></i>
        <input type="text" placeholder="Buscar produtos..." id="mobileSearchInput">
      </div>
      <button class="mobile-search-modal-close" id="mobileSearchClose">
        <i class='bx bx-x' style="font-size: 24px;"></i>
      </button>
    </div>
    <div class="mobile-search-modal-results" id="mobileSearchResults"></div>
  `;
  document.body.appendChild(modal);
  
  const closeBtn = document.getElementById('mobileSearchClose');
  closeBtn.addEventListener('click', closeMobileSearch);
  
  const input = document.getElementById('mobileSearchInput');
  input.addEventListener('input', handleMobileSearch);
}

function openMobileSearch() {
  const modal = document.getElementById('mobileSearchModal');
  if (modal) {
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
    hideFloatingSocial();
    setTimeout(() => {
      document.getElementById('mobileSearchInput').focus();
    }, 300);
  }
}

function closeMobileSearch() {
  const modal = document.getElementById('mobileSearchModal');
  if (modal) {
    modal.classList.remove('open');
    document.body.style.overflow = '';
    showFloatingSocial();
    document.getElementById('mobileSearchInput').value = '';
    document.getElementById('mobileSearchResults').innerHTML = '';
  }
}

function handleMobileSearch(e) {
  const query = e.target.value.toLowerCase().trim();
  const resultsContainer = document.getElementById('mobileSearchResults');
  
  if (query.length < 2) {
    resultsContainer.innerHTML = '';
    return;
  }
  
  const results = searchProducts(query);
  
  if (results.length === 0) {
    resultsContainer.innerHTML = '<div class="search-no-results">Nenhum produto encontrado</div>';
  } else {
    resultsContainer.innerHTML = results.map(product => `
      <div class="search-result-item" data-id="${product.id}">
        <div class="search-result-image">
          <img src="${product.image || ''}" alt="${product.name}" style="width:100%;height:100%;object-fit:cover;">
        </div>
        <div class="search-result-info">
          <p class="search-result-name">${product.name}</p>
          <p class="search-result-price">R$ ${product.price.toFixed(2).replace('.', ',')}</p>
        </div>
      </div>
    `).join('');
    
    resultsContainer.querySelectorAll('.search-result-item').forEach(item => {
      item.addEventListener('click', () => {
        const productId = parseInt(item.dataset.id);
        closeMobileSearch();
        openModal(productId);
      });
    });
  }
}

// ===== Create Product Card HTML =====
function generateProductCardHTML(product) {
  const isFavorite = favorites.has(product.id);
  
  let badgeHTML = '';
  if (product.badge === 'sale') {
    badgeHTML = '<span class="product-badge sale">Oferta</span>';
  } else if (product.badge === 'new') {
    badgeHTML = '<span class="product-badge new">Novo</span>';
  } else if (product.badge === 'bestseller') {
    badgeHTML = '<span class="product-badge bestseller">Mais Vendido</span>';
  }
  
  return `
    <div class="product-card" data-id="${product.id}">
      <div class="product-image">
        <img src="${product.image || ''}" alt="${product.name}" class="product-img" loading="lazy">
        ${badgeHTML}
        <button class="product-favorite ${isFavorite ? 'active' : ''}" data-id="${product.id}" aria-label="Favoritar">
          <i class='bx ${isFavorite ? 'bxs-heart' : 'bx-heart'}'></i>
        </button>
      </div>
      <div class="product-info">
        <p class="product-brand">${product.brand}</p>
        <h3 class="product-name">${product.name}</h3>
        <div class="product-price">
          <span class="product-price-current">R$ ${product.price.toFixed(2).replace('.', ',')}</span>
          ${product.originalPrice ? `<span class="product-price-original">R$ ${product.originalPrice.toFixed(2).replace('.', ',')}</span>` : ''}
        </div>
        <p class="product-installments">ou 12x de R$ ${(product.price / 12).toFixed(2).replace('.', ',')} sem juros</p>
        <div class="product-actions">
          <button class="product-view-btn" data-id="${product.id}">
            <i class='bx bx-show' style="font-size: 16px;"></i> Ver Detalhes
          </button>
        </div>
      </div>
    </div>
  `;
}

// ===== Render Products Separados por Seção =====
function renderProducts(onlySale = false) {
  const filtered = filterProducts(onlySale);
  
  const gridManuais = document.getElementById('grid-manuais');
  const gridKits = document.getElementById('grid-kits');
  const gridMaquinas = document.getElementById('grid-maquinas');
  
  const secManuais = document.getElementById('sec-manuais');
  const secKits = document.getElementById('sec-kits');
  const secMaquinas = document.getElementById('sec-maquinas');
  
  const msgVazia = document.getElementById('no-products-msg');
  
  if (filtered.length === 0) {
    if(secManuais) secManuais.style.display = 'none';
    if(secKits) secKits.style.display = 'none';
    if(secMaquinas) secMaquinas.style.display = 'none';
    if(msgVazia) msgVazia.style.display = 'block';
    return;
  }
  
  if(msgVazia) msgVazia.style.display = 'none';

  const renderToGrid = (grid, section, categoryName) => {
    if(!grid || !section) return;
    const items = filtered.filter(p => p.category === categoryName);
    
    if (items.length === 0) {
      section.style.display = 'none';
    } else {
      section.style.display = 'block';
      grid.innerHTML = items.map(p => generateProductCardHTML(p)).join('');
    }
  };

  renderToGrid(gridManuais, secManuais, 'manuais');
  renderToGrid(gridKits, secKits, 'kits');
  renderToGrid(gridMaquinas, secMaquinas, 'maquinas');
  
  // Re-atachar eventos aos novos cards gerados
  document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('click', (e) => {
      if (!e.target.closest('.product-favorite')) {
        openModal(parseInt(card.dataset.id));
      }
    });
  });
  
  document.querySelectorAll('.product-favorite').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleFavorite(parseInt(btn.dataset.id));
    });
  });
}

// ===== Favorites =====
function toggleFavorite(productId) {
  if (favorites.has(productId)) {
    favorites.delete(productId);
  } else {
    favorites.add(productId);
  }
  renderProducts(); // Re-renderiza para atualizar visualmente
}

// ===== Modal (Desktop/Mobile) =====
function initModal() {
  if (modalClose) modalClose.addEventListener('click', closeModal);
  if (modalBackdrop) modalBackdrop.addEventListener('click', closeModal);
  
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && productModal && productModal.classList.contains('open')) {
      closeModal();
    }
  });
}

function openModal(productId) {
  selectedProduct = products.find(p => p.id === productId);
  if (!selectedProduct) return;
  
  openMobileSheet(selectedProduct);
}

function closeModal() {
  if (productModal) {
    productModal.classList.remove('open');
    document.body.style.overflow = '';
    selectedProduct = null;
    showFloatingSocial();
  }
}

// ===== Mobile Bottom Sheet =====
function initMobileSheet() {
  if (mobileSheetBackdrop) {
    mobileSheetBackdrop.addEventListener('click', closeMobileSheet);
  }
  if (mobileSheetClose) {
    mobileSheetClose.addEventListener('click', closeMobileSheet);
  }
  
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileSheet && mobileSheet.classList.contains('open')) {
      closeMobileSheet();
    }
  });
}

function openMobileSheet(product) {
  if (!mobileSheet) return;
  
  document.getElementById('mobileSheetBrand').textContent = product.brand.toUpperCase();
  document.getElementById('mobileSheetName').textContent = product.name;
  document.getElementById('mobileSheetPrice').textContent = `R$ ${product.price.toFixed(2).replace('.', ',')}`;
  
  const originalPriceEl = document.getElementById('mobileSheetOriginalPrice');
  if (product.originalPrice) {
    originalPriceEl.textContent = `R$ ${product.originalPrice.toFixed(2).replace('.', ',')}`;
    originalPriceEl.style.display = 'inline';
  } else {
    originalPriceEl.style.display = 'none';
  }
  
  document.getElementById('mobileSheetDescription').textContent = `Produto de alta qualidade da marca ${product.brand}. Ideal para profissionais e entusiastas.`;
  
  document.getElementById('mobileSheetSpecBrand').textContent = product.brand.charAt(0).toUpperCase() + product.brand.slice(1);
  document.getElementById('mobileSheetSpecCategory').textContent = categoryNames[product.category] || product.category;
  
  // Imagem
  document.getElementById('mobileSheetImage').innerHTML = `<img src="${product.image || ''}" alt="${product.name}" style="width:100%;height:100%;object-fit:cover;">`;
  
  // Configurar Link da Shopee Dinâmico
  const shopeeLink = "https://shopee.com.br/search?keyword=" + encodeURIComponent(product.name);
  const buyBtn = document.getElementById('mobileSheetBuyBtn');
  if (buyBtn) {
    buyBtn.href = shopeeLink;
  }
  
  mobileSheet.classList.add('open');
  document.body.style.overflow = 'hidden';
  hideFloatingSocial();
}

function closeMobileSheet() {
  if (mobileSheet) {
    mobileSheet.classList.remove('open');
    document.body.style.overflow = '';
    selectedProduct = null;
    showFloatingSocial();
  }
}

// ===== Função de Filtrar pelo Footer =====
window.filtrarPeloRodape = function(categoria) {
  if (categoryFilter) {
    categoryFilter.value = categoria;
    if(priceFilter) priceFilter.value = 'all';
    
    renderProducts();
    
    const produtosSecao = document.getElementById('produtos');
    if(produtosSecao) {
      produtosSecao.scrollIntoView({ behavior: 'smooth' });
    }
  }
};