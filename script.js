/* ==========================================================================
   DADES EDITABLES (PROJECTES I STACK)
   ========================================================================== */

const PROJECTS = [
  {
    id: "potencia-convertidor",
    title: "Convertidor DC/DC d'Alta Eficiència",
    category: "potencia",
    summary: "Disseny i optimització d'un convertidor Buck-Boost synchronously rectified per a aplicacions d'alta densitat de potència.",
    description: "Aquest projecte abasta el disseny complet d'un convertidor DC/DC d'alta eficiència (95%+), des del càlcul dels components magnètics passius fins al disseny del PCB de 4 capes amb restriccions estrictes d'EMI i gestió tèrmica. Inclou control en bucle tancat implementat sobre un microcontrolador de senyal mixta.",
    features: [
      "Eficiència màxima del 96.2% a plena càrrega",
      "Rangel de tensió d'entrada d'ampla gamma: 9V a 36V",
      "Control de corrent en mode mitjà amb compensació de bucle",
      "PCB dissenyat en 4 capes amb pla de massa optimitzat per a reducció de soroll"
    ],
    tags: ["Electrònica de Potència", "KiCad", "LTspice", "Buck-Boost", "Control Bucle Tancat"],
    images: [
      "assets/projects/project1-1.jpg",
      "assets/projects/project1-2.jpg"
    ]
  },
  {
    id: "embedded-rtos",
    title: "Sistema Encastat de Monitorització Tèrmica",
    category: "embedded",
    summary: "Node de sensorització industrial en temps real basat en FreeRTOS i microcontrolador ARM Cortex-M4.",
    description: "Desenvolupament d'un node industrial per a la lectura i processament de sensors de temperatura d'alta precisió (RTD/Termocuple) en entorns industrials crítics. Implementat sobre FreeRTOS per a garantir latències deterministes en la comunicació i l'enviament de dades via bus CAN.",
    features: [
      "Arquitectura de tasques concurrents sobre FreeRTOS",
      "Adquisició de dades multicanal mitjançant ADC de 24 bits via SPI",
      "Stack de comunicacions CAN 2.0B personalitzat",
      "Mode Low-Power per a funcionament amb bateria de suport"
    ],
    tags: ["Embedded C", "FreeRTOS", "ARM Cortex-M4", "Bus CAN", "SPI/I2C"],
    images: [
      "assets/projects/project2-1.jpg"
    ]
  },
  {
    id: "digital-coprocessador",
    title: "Coprocessador Digital de Filtres FIR en SystemVerilog",
    category: "digital",
    summary: "Arquitectura en FPGA per al processament digital de senyal en temps real d'àudio d'alta fidelitat.",
    description: "Disseny, simulació i síntesi d'un coprocessador de filtre digital FIR parametritzable (ordre configurable) optimitzat en pipeline per a FPGAs. El sistema permet el filtratge de senyals d'àudio en temps real reduint l'ús de blocs DSP interns.",
    features: [
      "Arquitectura parametritzable en SystemVerilog",
      "Banc de proves (Testbench) complet amb ModelSim/Questa",
      "Optimització en Pipeline per a freqüències de rellotge superiors a 150 MHz",
      "Interfície de control fàcilment integrable amb bus AXI-Lite"
    ],
    tags: ["SystemVerilog", "FPGA", "DSP", "ModelSim", "Vivado"],
    images: [
      "assets/projects/project3-1.jpg"
    ]
  }
];

const STACK = [
  {
    category: "Electrònica de Potència",
    items: ["Convertidors DC/DC & AC/DC", "LTspice / PSpice", "Dimensionament Magnètic", "Disseny Tèrmic & EMI"]
  },
  {
    category: "Sistemes Encastats",
    items: ["Embedded C / C++", "ARM Cortex-M", "FreeRTOS", "Busos: CAN, SPI, I2C, UART", "MSP430 / STM32"]
  },
  {
    category: "Disseny Digital & PCB",
    items: ["KiCad / Altium", "SystemVerilog / VHDL", "FPGAs (Xilinx / Altera)", "MATLAB & Simulink", "Lab Equipment (Oscil·loscopi, LCR)"]
  }
];

/* ==========================================================================
   INICIALITZACIÓ I RENDERITZAT
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  renderProjects(PROJECTS);
  renderStack(STACK);
  initFilters();
  initModal();
  initLightbox();
  initScrollReveal();
});

/* Renderitzar projectes a la llista */
function renderProjects(projectsToRender) {
  const container = document.getElementById('projects-list');
  container.innerHTML = '';

  if (projectsToRender.length === 0) {
    container.innerHTML = `<p class="tag-mono" style="padding: 2rem 0;">No s'han trobat projectes en aquesta categoria.</p>`;
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

/* Renderitzar Stack Tècnic */
function renderStack(stackData) {
  const container = document.getElementById('stack-grid');
  container.innerHTML = '';

  stackData.forEach(group => {
    const groupEl = document.createElement('div');
    groupEl.className = 'stack-group reveal-on-scroll';

    const tagsHtml = group.items.map(item => `<span class="tag-pill">${item}</span>`).join('');

    groupEl.innerHTML = `
      <h3 class="stack-group-title">${group.category}</h3>
      <div class="stack-tags">
        ${tagsHtml}
      </div>
    `;

    container.appendChild(groupEl);
  });
}

/* ==========================================================================
   FILTRES
   ========================================================================== */
function initFilters() {
  const buttons = document.querySelectorAll('.filter-btn');

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');
      if (filter === 'all') {
        renderProjects(PROJECTS);
      } else {
        const filtered = PROJECTS.filter(p => p.category.toLowerCase() === filter.toLowerCase());
        renderProjects(filtered);
      }
    });
  });
}

/* ==========================================================================
   MODAL DE DETALL
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

    <h4 class="modal-subtitle">Característiques Clau</h4>
    <ul class="modal-features">
      ${featuresHtml}
    </ul>

    <h4 class="modal-subtitle">Tecnologies</h4>
    <div class="stack-tags" style="margin-bottom: 2rem;">
      ${tagsHtml}
    </div>

    ${project.images.length > 0 ? `
      <h4 class="modal-subtitle">Galeria d'imatges</h4>
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
   REVELAT EN SCROLL (INTERSECTION OBSERVER)
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