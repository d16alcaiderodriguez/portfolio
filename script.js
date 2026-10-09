/* ==========================================================================
   DATOS EDITABLES (PROYECTOS Y STACK FINAL)
   ========================================================================== */

const PROJECTS = [
  {
    id: "potencia-convertidor",
    title: "Convertidor DC/DC de Alta Eficiencia",
    category: "potencia",
    summary: "Diseño y optimización de un convertidor Buck-Boost rectificado sincrónicamente para aplicaciones de alta densidad de potencia.",
    description: "Este proyecto abarca el diseño completo de un convertidor DC/DC de alta eficiencia (95%+), desde el cálculo de los componentes magnéticos pasivos hasta el diseño del PCB de 4 capas con restricciones strictly de EMI y gestión térmica. Incluye control en bucle cerrado implementado sobre un microcontrolador de señal mixta.",
    features: [
      "Eficiencia máxima del 96.2% a plena carga",
      "Rango de tensión de entrada de amplia gama: 9V a 36V",
      "Control de corriente en modo medio con compensación de bucle",
      "PCB diseñado en 4 capas con plano de masa optimizado para reducción de ruido"
    ],
    tags: ["Electrónica de Potencia", "KiCad", "LTspice", "Buck-Boost", "Control Bucle Cerrado"],
    images: [
      "assets/projects/project1-1.jpg",
      "assets/projects/project1-2.jpg"
    ]
  },
  {
    id: "embedded-rtos",
    title: "Sistema Empotrado de Monitorización Térmica",
    category: "embedded",
    summary: "Nodo de sensorización industrial en tiempo real basado en FreeRTOS y microcontrolador ARM Cortex-M4.",
    description: "Desarrollo de un nodo industrial para la lectura y procesamiento de sensores de temperatura de alta precisión (RTD/Termopar) en entornos industriales críticos. Implementado sobre FreeRTOS para garantizar latencias deterministas en la comunicación y el envío de datos vía bus CAN.",
    features: [
      "Arquitectura de tareas concurrentes sobre FreeRTOS",
      "Adquisición de datos multicanal mediante ADC de 24 bits vía SPI",
      "Stack de comunicaciones CAN 2.0B personalizado",
      "Modo Low-Power para funcionamiento con batería de respaldo"
    ],
    tags: ["Embedded C", "FreeRTOS", "ARM Cortex-M4", "Bus CAN", "SPI/I2C"],
    images: [
      "assets/projects/project2-1.jpg"
    ]
  },
  {
    id: "digital-coprocesador",
    title: "Coprocesador Digital de Filtros FIR en SystemVerilog",
    category: "digital",
    summary: "Arquitectura en FPGA para el procesamiento digital de señal en tiempo real de audio de alta fidelidad.",
    description: "Diseño, simulación y síntesis de un coprocesador de filtro digital FIR parametrizable (orden configurable) optimizado en pipeline para FPGAs. El sistema permite el filtrado de señales de audio en tiempo real reduciendo el uso de bloques DSP internos.",
    features: [
      "Arquitectura parametrizable en SystemVerilog",
      "Banco de pruebas (Testbench) completo con ModelSim/Questa",
      "Optimización en Pipeline para frecuencias de reloj superiores a 150 MHz",
      "Interfaz de control fácilmente integrable con bus AXI-Lite"
    ],
    tags: ["SystemVerilog", "FPGA", "DSP", "ModelSim", "Vivado"],
    images: [
      "assets/projects/project3-1.jpg"
    ]
  },
  {
    id: "instrumentacion-adquisicion",
    title: "Sistema de Adquisición de Datos de Alta Velocidad",
    category: "instrumentación",
    summary: "Acondicionamiento de señal analógica y digitalización en tiempo real para análisis en MATLAB.",
    description: "Diseño e implementación de una etapa analógica de amplificación y filtrado de bajo ruido acoplada a un ADC multicanal de alta velocidad. El sistema transmite tramas de datos estructuradas mediante protocolo propietario a una interfaz en Python/MATLAB para procesamiento en tiempo real.",
    features: [
      "Etapa analógica frontend de bajo ruido con amplificadores operacionales de precisión",
      "Filtro paso bajo activo anti-aliasing de orden elevado",
      "Protocolo de comunicación serie de alta velocidad optimizado",
      "Scripts de recepción y procesado espectral de señal en MATLAB/Python"
    ],
    tags: ["Acondicionamiento Analógico", "MATLAB", "Python", "KiCad", "ADC"],
    images: [
      "assets/projects/project4-1.jpg"
    ]
  }
];

// Stack exacto de 6 secciones
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
  renderProjects(PROJECTS);
  renderStack(STACK);
  initModal();
  initLightbox();
  initScrollReveal();
});

/* Renderizar proyectos en la lista */
function renderProjects(projectsToRender) {
  const container = document.getElementById('projects-list');
  container.innerHTML = '';

  if (projectsToRender.length === 0) {
    container.innerHTML = `<p class="tag-mono" style="padding: 2rem 0;">No se han encontrado proyectos.</p>`;
    return;
  }

  projectsToRender.forEach((project, index) => {
    const num = (index + 1).toString().padStart(2, '0');
    const projectEl = document.createElement('article');
    projectEl.className = 'project-item reveal-on-scroll visible';
    projectEl.setAttribute('data-id', project.id);

    const firstImage = project.images && project.images.length > 0 ? project.images[0] : '';

    projectEl.innerHTML = `
      <span class="project-num">${num}</span>
      <div class="project-title-box">
        <h3>${project.title}</h3>
        <span class="project-category">${project.category}</span>
      </div>
      <p class="project-summary">${project.summary}</p>
      <div>
        ${firstImage ? `<img src="${firstImage}" alt="${project.title}" class="project-thumb" loading="lazy">` : ''}
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
  const tagsHtml = project.tags.map(t => `<span class="tag-pill">${t}</span>`).join('');
  
  const imagesHtml = project.images.map(imgSrc => `
    <img src="${imgSrc}" alt="${project.title}" class="modal-img-thumb" loading="lazy">
  `).join('');

  modalContent.innerHTML = `
    <span class="modal-header-cat">${project.category}</span>
    <h2 class="modal-title">${project.title}</h2>
    
    <p class="modal-description">${project.description}</p>

    <h4 class="modal-subtitle">Características Clave</h4>
    <ul class="modal-features">
      ${featuresHtml}
    </ul>

    <h4 class="modal-subtitle">Tecnologías</h4>
    <div class="stack-tags" style="margin-bottom: 2rem;">
      ${tagsHtml}
    </div>

    ${project.images.length > 0 ? `
      <h4 class="modal-subtitle">Galería de imágenes</h4>
      <div class="modal-gallery">
        ${imagesHtml}
      </div>
    ` : ''}
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
   REVELADO EN SCROLL (INTERSECTION OBSERVER)
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