/* ==========================================================================
   DATOS EDITABLES (PROYECTOS Y STACK FINAL)
   ========================================================================== */

const PROJECTS = [
  {
    id: "robot-mcqueen-plus",
    title: "Robot Móvil Autónomo",
    category: "empotrados",
    summary: "Sistema autónomo con 4 modos operativos, gestión por microcontrolador y diseño a medida.",
    description: "Robot móvil autónomo construido sobre la plataforma DFRobot Maqueen Plus y gobernado por un microcontrolador MSP430FR2355 integrado en una PCB de control propia.\n\nEl sistema dispone de una interfaz física integrada formada por una pantalla LCD de 2×16 líneas y un joystick analógico para la navegación por menús, permitiendo seleccionar localmente entre cuatro modos de operación: control manual por joystick, seguimiento automático de líneas, orientación por luz mediante sensores LDR y mantenimiento de distancia/evasión de obstáculos por ultrasonidos. La tracción y la iluminación son gestionadas por el chasis mediante un bus I2C, mientras que un módulo WiFi ESP-01S conectado por UART permitiría la teleoperación remota desde una aplicación en PC.",
    features: [
      "Interfaz LCD 2×16 y joystick analógico",
      "4 modos operativos",
      "Comunicación maestro-esclavo I2C",
      "Sensórica ultrasónica, LDR e infrarrojos",
      "Módulo WiFi ESP-01S por UART",
      "PCB de control propia"
    ],
    tags: ["MSP430", "Embedded C", "PCB Design", "I2C/UART", "Sistemas Empotrados"],
    images: [
      "assets/projects/robot-portada.jpg",
      "assets/projects/robot-detalle-1.jpg",
      "assets/projects/robot-detalle-2.jpg"
    ]
  },
  {
    id: "potencia-convertidor",
    title: "Convertidor Buck DC/DC",
    category: "potencia",
    summary: "Convertidor reductor DC-DC de alta eficiencia con control PID digital, modelado en LTspice y bobina toroidal a medida.",
    description: "Diseño, simulación y caracterización de un convertidor reductor DC-DC (5 V / 5 W, entrada de 10–14 V y conmutación PWM a 32 kHz). El trabajo incluye el cálculo analítico de la etapa de potencia en modo de conducción continua (CCM): ciclo de trabajo, inductancia mínima, filtros de salida con un rizado inferior al 5%, selección de componentes y el circuito de disparo del MOSFET con driver high-side y bootstrap.\n\nEl sistema utiliza una bobina toroidal de ~5 mH fabricada y medida en el laboratorio con el Analog Discovery 2. En la parte de simulación, se preparó el modelo de la célula PWM en LTspice para obtener la respuesta en lazo abierto. La regulación en lazo cerrado se ejecuta en Arduino Uno mediante un PID digital con un proceso de autotune (relé con histéresis) comprobado físicamente en el banco de pruebas y un sistema anti-windup, manteniendo la salida estable a 5 V frente a cambios de carga y de entrada.",
    features: [
      "Topología reductora DC-DC operando en Modo de Conducción Continua (CCM).",
      "Rango de tensión de entrada de 10 V a 14 V con tensión de salida regulada a 5 V.",
      "Frecuencia de conmutación PWM fijada a 32 kHz.",
      "Lazo de control digital mediante compensación PID con limitación anti-windup."
    ],
    tags: ["MSP430", "Embedded C", "PCB Design", "I2C/UART", "Sistemas Empotrados"],
    images: [
      "assets/projects/project1-portada.jpg",
      "assets/projects/project1-1.jpg",
      "assets/projects/project1-2.jpg"
    ]
  },
  {
    id: "control-motor-dc-puente-h",
    title: "Control Motor DC (Puente H)",
    category: "potencia",
    summary: "Sistema de regulación de velocidad para motor DC con topología de puente en H, modos slow/fast decay y compensación PID.",
    description: "Sistema de control de velocidad para motores DC de escobillas basado en una topología de potencia en puente en H con cuatro MOSFETs de canal N. El conjunto combina la conmutación PWM a 32 kHz con modos de operación slow-decay y fast-decay, incorporando protección por tiempo muerto (dead-time) para impedir cortocircuitos por conducción cruzada (shoot-through).\n\nEl modelo del sistema integra la dinámica electromecánica del motor (constante de tiempo eléctrica de ~170 µs e inercia mecánica de ~100 ms) junto con una célula PWM de tres terminales promediada en LTspice. La regulación de velocidad se efectúa mediante un controlador PID sintetizado gráficamente en diagramas de Bode (cruce a 20 dB/déc y margen de fase de ~45°), garantizando estabilidad operacional frente a variaciones de consigna y fluctuaciones de carga.",
    features: [
      "Protección frente a conducción cruzada (shoot-through)",
      "Modos de operación slow-decay y fast-decay",
      "Control PID de velocidad en lazo cerrado"
    ],
    tags: ["Puente en H", "Electrónica de Potencia", "Control PID", "LTspice", "Motores DC"],
    images: [
      "assets/projects/hbridge-portada.jpg",
      "assets/projects/hbridge-1.jpg",
      "assets/projects/hbridge-2.jpg"
    ]
  },
  {
    id: "coprocesador-fifo-systemverilog",
    title: "Módulo FIFO en SystemVerilog",
    category: "digital",
    summary: "Diseño y síntesis de módulo FIFO con un ciclo de desarrollo ASIC completo, cubriendo desde la arquitectura RTL hasta el layout definitivo.",
    description: "Diseño, simulación y síntesis de un módulo de memoria FIFO (First-In, First-Out) síncrona parametrizable en SystemVerilog. La arquitectura integra una macrocélula de memoria RAM de doble puerto (XDPRAM_128X16_M8P), gestionando un direccionamiento circular mediante punteros con bits de extensión para la evaluación de las banderas de estado (Full y Empty).\n\nEl flujo de trabajo abarca la verificación funcional avanzada mediante modelos de referencia (scoreboard) y aserciones en SystemVerilog (SVA), la síntesis lógica con restricciones MMMC (Multi-Mode Multi-Corner) en Genus, la inserción de circuitería de testabilidad DFT con cadenas de escaneo (scan chains), y la implementación física completa en Innovus (incluyendo floorplanning, distribución de pines/pads de E/S, síntesis del árbol de reloj CTS y ruteo multiluminar).",
    features: [
      "Arquitectura síncrona parametrizable en SystemVerilog",
      "Integración de memoria RAM de doble puerto (XDPRAM_128X16_M8P)",
      "Punteros circulares con bit de extensión para banderas Full y Empty",
      "Estructura optimizada para síntesis lógica y física con soporte DFT"
    ],
    tags: ["SystemVerilog", "ASIC Design", "FPGA", "DFT", "Innovus", "Genus"],
    images: [
      "assets/projects/fifo-portada.jpg",
      "assets/projects/fifo-1.jpg",
      "assets/projects/fifo-2.jpg"
    ]
  }
];

// Stack técnico
const STACK = [
  {
    category: "LENGUAJES Y HDL",
    items: ["C", "Python", "Verilog", "SystemVerilog"]
  },
  {
    category: "ELECTRÓNICA DE POTENCIA",
    items: ["Convertidores DC-DC", "Puente en H", "Control PID", "Gestión Térmica y EMI"]
  },
  {
    category: "DISEÑO PCB Y SIMULACIÓN",
    items: ["KiCad", "LTspice", "Acondicionamiento Analógico", "Selección de Componentes"]
  },
  {
    category: "FLUJO ASIC / EDA",
    items: ["Cadence Xcelium", "Genus", "Innovus", "Modus"]
  },
  {
    category: "MICROCONTROLADORES",
    items: ["MSP430", "Arduino", "ESP-01S", "STM32"]
  },
  {
    category: "LABORATORIO",
    items: ["Osciloscopio", "Multímetro", "Analog Discovery 2", "Soldadura THT/SMD"]
  }
];

/* ==========================================================================
   INICIALIZACIÓN Y RENDERIZADO
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initProjectFilters();
  renderProjects(PROJECTS);
  renderStack(STACK);
  initModal();
  initLightbox();
  initScrollReveal();
});

/* Inicializar barra de filtros */
function initProjectFilters() {
  const projectsSection = document.getElementById('proyectos');
  if (!projectsSection) return;

  const filterBarHtml = `
    <div class="projects-filter-bar">
      <button class="filter-btn active" data-filter="all">Todos</button>
      <button class="filter-btn" data-filter="potencia">Potencia</button>
      <button class="filter-btn" data-filter="empotrados">Empotrados</button>
      <button class="filter-btn" data-filter="digital">Digital</button>
    </div>
  `;

  const listContainer = document.getElementById('projects-list');
  if (listContainer) {
    listContainer.insertAdjacentHTML('beforebegin', filterBarHtml);
  }

  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');

      const filter = e.target.getAttribute('data-filter');
      if (filter === 'all') {
        renderProjects(PROJECTS);
      } else {
        const filtered = PROJECTS.filter(p => p.category.toLowerCase() === filter.toLowerCase());
        renderProjects(filtered);
      }
    });
  });
}

/* Renderizar proyectos en la lista */
function renderProjects(projectsToRender) {
  const container = document.getElementById('projects-list');
  container.innerHTML = '';

  if (projectsToRender.length === 0) {
    container.innerHTML = `<p class="tag-mono" style="padding: 2rem 0;">No se han encontrado proyectos en esta categoría.</p>`;
    return;
  }

  projectsToRender.forEach((project, index) => {
    const num = (index + 1).toString().padStart(2, '0');
    const projectEl = document.createElement('article');
    projectEl.className = 'project-item reveal-on-scroll visible';
    projectEl.setAttribute('data-id', project.id);

    const portadaImg = project.images && project.images.length > 0 ? project.images[0] : '';

    projectEl.innerHTML = `
      <span class="project-num">${num}</span>
      <div class="project-title-box">
        <h3>${project.title}</h3>
        <span class="project-category">${project.category}</span>
      </div>
      <p class="project-summary">${project.summary}</p>
      <div>
        ${portadaImg ? `<img src="${portadaImg}" alt="${project.title}" class="project-thumb" loading="lazy">` : ''}
      </div>
      <div class="project-arrow-box">
        <div class="project-circle-btn">
          <span>↗</span>
        </div>
      </div>
    `;

    projectEl.addEventListener('click', () => openModal(project));
    container.appendChild(projectEl);
  });
}

/* Renderizar Stack */
function renderStack(stackData) {
  const container = document.getElementById('stack-grid');
  container.innerHTML = '';

  stackData.forEach(group => {
    const boxEl = document.createElement('div');
    boxEl.className = 'stack-board-box reveal-on-scroll';

    const itemsHtml = group.items.map(item => `
      <li><span class="arrow-icon">→</span> ${item}</li>
    `).join('');

    boxEl.innerHTML = `
      <h3 class="stack-board-title">${group.category}</h3>
      <ul class="stack-board-list">
        ${itemsHtml}
      </ul>
    `;

    container.appendChild(boxEl);
  });
}

/* ==========================================================================
   MODAL DE DETALLE
   ========================================================================== */
const modal = document.getElementById('project-modal');
const modalContent = document.getElementById('modal-content');

function initModal() {
  document.querySelectorAll('[data-close]').forEach(el => {
    el.addEventListener('click', closeModal);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });
}

function openModal(project) {
  const featuresHtml = project.features.map(f => `<li>${f}</li>`).join('');
  
  const modalImages = project.images && project.images.length > 1 ? project.images.slice(1) : [];
  const imagesHtml = modalImages.map(imgSrc => `
    <img src="${imgSrc}" alt="${project.title}" class="modal-img-thumb" loading="lazy">
  `).join('');

  modalContent.innerHTML = `
    <span class="modal-header-cat">${project.category}</span>
    <h2 class="modal-title">${project.title}</h2>
    
    ${modalImages.length > 0 ? `
      <div class="modal-gallery" style="margin-bottom: 2rem;">
        ${imagesHtml}
      </div>
    ` : ''}

    <p class="modal-description">${project.description}</p>

    <h4 class="modal-subtitle">Características</h4>
    <ul class="modal-features" style="margin-bottom: 1rem;">
      ${featuresHtml}
    </ul>
  `;

  modalContent.querySelectorAll('.modal-img-thumb').forEach(img => {
    img.addEventListener('click', () => openLightbox(img.src));
  });

  modal.classList.add('active');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modal.classList.remove('active');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

/* ==========================================================================
   LIGHTBOX
   ========================================================================== */
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

function initLightbox() {
  document.querySelectorAll('[data-close-lightbox]').forEach(el => {
    el.addEventListener('click', closeLightbox);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.classList.contains('active')) {
      closeLightbox();
    }
  });
}

function openLightbox(src) {
  lightboxImg.src = src;
  lightbox.classList.add('active');
  lightbox.setAttribute('aria-hidden', 'false');
}

function closeLightbox() {
  lightbox.classList.remove('active');
  lightbox.setAttribute('aria-hidden', 'true');
}

/* ==========================================================================
   REVELADO EN SCROLL
   ========================================================================== */
function initScrollReveal() {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.1
  });

  document.querySelectorAll('.reveal-on-scroll').forEach(el => {
    observer.observe(el);
  });
}