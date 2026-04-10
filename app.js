const STORAGE_KEY = "resume-lang";

const content = {
  en: {
    ui: {
      languageSwitch: "Language switch"
    },
    hero: {
      name: "Dario Ballerini",
      role: "Tech Lead | Full Stack Developer"
    },
    sections: {
      profile: "Profile",
      experience: "Experience",
      skills: "Skills",
      languages: "Languages",
      education: "Education"
    },
    contact: {
      emailLabel: "Email",
      emailValue: "darballerini@gmail.com",
      phoneLabel: "Phone",
      phoneValue: "+54 2944 89-9950",
      webLabel: "Web",
      webValue: "linkedin.com/in/darballerini"
    },
    profile: [
      "Hello! I'm Dario, a Tech Lead and Full Stack Developer with over 6 years of experience. I focus on building great websites that are easy to use, look good, and perform fast.",
      "I have strong experience with frontend tools like Angular, HTML, CSS, and JavaScript, as well as building backend services, APIs, and databases using Node.js, TypeScript, MongoDB, and Redis. I am motivated to give users the best possible experience in every project I work on.",
      "Lately, I have been using an AI-focused workflow every day, utilizing tools like Cursor to code faster and adding Generative AI to our company products to make them better and more efficient."
    ],
    experience: [
      {
        company: "Cocha, Chile (Remote)",
        role: "Tech Lead",
        period: "JUL 2023 - PRESENT",
        bullets: [
          "Lead a development team, helping members grow, communicating openly, and working well together.",
          "Architect and build backend services and APIs using Node.js and TypeScript, working with databases like MongoDB and Redis to create complete features.",
          "Use Cursor every day to improve coding speed and quality, and integrate Generative AI features directly into company products.",
          "Help plan the project roadmap to meet business goals, check if new tasks are technically possible, and maintain high code quality.",
          "Support teammates consistently, offering guidance to maintain a positive work environment."
        ]
      },
      {
        company: "Cocha, Chile (Remote)",
        role: "Frontend Developer",
        period: "APR 2021 - JUL 2023",
        bullets: [
          "Led a project to add Server-Side Rendering (SSR) and prerendering to a complex Angular website, which made it load much faster and feel smoother for users.",
          "Created a useful Angular library shared and used across company websites."
        ]
      },
      {
        company: "Experta, Buenos Aires",
        role: "Frontend Developer",
        period: "SEP 2019 - APR 2021",
        bullets: [
          "Built and managed web apps using Angular and React.",
          "Created reusable UI components to keep design consistent across different projects.",
          "Worked closely with designers to make sure UI/UX ideas were technically possible to build.",
          "Collaborated actively with colleagues to share knowledge and improve workflows.",
          "Kept updated with the latest frontend development trends."
        ]
      },
      {
        company: "Softtek, La Plata",
        role: "Full Stack Developer",
        period: "NOV 2018 - SEP 2019",
        bullets: [
          "Built frontend applications using AngularJS and Angular 2+.",
          "Managed and created backend apps using Java.",
          "Worked with different teams to connect the backend and frontend parts of projects.",
          "Focused on learning new skills and improving technical knowledge."
        ]
      }
    ],
    skills: [
      { label: "Languages", value: "JavaScript, TypeScript" },
      { label: "Frontend", value: "Angular, Vue, React, RxJS, Angular Material, Bootstrap" },
      { label: "Backend & APIs", value: "Node.js + Express, REST APIs" },
      { label: "Databases", value: "MongoDB, SQL, NoSQL, Redis" },
      { label: "AI Tools", value: "Cursor, Generative AI integration" }
    ],
    languages: [
      { label: "Spanish", value: "Native" },
      { label: "English", value: "Proficient" }
    ],
    education: {
      degree: "Software Engineering",
      period: "2014 - 2017 UNLP",
      note: "Note: Completed three years of the program."
    }
  },
  es: {
    ui: {
      languageSwitch: "Selector de idioma"
    },
    hero: {
      name: "Dario Ballerini",
      role: "Tech Lead | Full Stack Developer"
    },
    sections: {
      profile: "Perfil",
      experience: "Experiencia laboral",
      skills: "Habilidades",
      languages: "Idiomas",
      education: "Educación"
    },
    contact: {
      emailLabel: "Email",
      emailValue: "darballerini@gmail.com",
      phoneLabel: "Teléfono",
      phoneValue: "+54 2944 89-9950",
      webLabel: "Web",
      webValue: "linkedin.com/in/darballerini"
    },
    profile: [
      "¡Hola! Soy Dario, Tech Lead y Full Stack Developer con más de 6 años de experiencia. Me enfoco en desarrollar sitios web de calidad que sean fáciles de usar, visualmente atractivos y rápidos.",
      "Cuento con sólida experiencia en herramientas frontend como Angular, HTML, CSS y JavaScript; como así también en el desarrollo de servicios backend, APIs y bases de datos utilizando Node.js, TypeScript, MongoDB y Redis. Mi motivación principal es brindar a los usuarios la mejor experiencia posible en cada proyecto en el que participo.",
      "Últimamente, incorporé un flujo de trabajo diario centrado en IA, utilizando herramientas como Cursor para programar con mayor agilidad e integrando Inteligencia Artificial Generativa en los productos de la empresa para hacerlos más eficientes."
    ],
    experience: [
      {
        company: "Cocha, Chile (Remoto)",
        role: "Tech Lead",
        period: "JUL 2023 - ACTUALIDAD",
        bullets: [
          "Lidero el equipo de desarrollo, fomentando el crecimiento de sus integrantes, la comunicación abierta y el trabajo colaborativo.",
          "Diseño y desarrollo servicios backend y APIs utilizando Node.js y TypeScript, trabajando con bases de datos como MongoDB y Redis para implementar funcionalidades completas.",
          "Utilizo Cursor a diario para mejorar la velocidad y calidad del código, e integro funciones de IA Generativa directamente en los productos de la compañía.",
          "Colaboro en la planificación del roadmap del proyecto para cumplir con los objetivos del negocio, analizando la viabilidad técnica de las tareas y manteniendo altos estándares de calidad de código.",
          "Brindo soporte constante a mis compañeros, ofreciendo guía técnica para mantener un ambiente de trabajo positivo."
        ]
      },
      {
        company: "Cocha, Chile (Remoto)",
        role: "Frontend Developer",
        period: "APR 2021 - JUL 2023",
        bullets: [
          "Lideré un proyecto para implementar Server-Side Rendering (SSR) y prerendering en un sitio complejo de Angular, logrando que cargue mucho más rápido y mejore la fluidez para el usuario.",
          "Desarrollé una librería de Angular compartida que es utilizada en diversos sitios de la empresa."
        ]
      },
      {
        company: "Experta, Buenos Aires",
        role: "Frontend Developer",
        period: "SEP 2019 - APR 2021",
        bullets: [
          "Desarrollé y gestioné aplicaciones web utilizando Angular y React.",
          "Creé componentes de UI reutilizables para mantener la consistencia visual entre diferentes proyectos.",
          "Trabajé codo a codo con diseñadores para asegurar que las propuestas de UI/UX fueran técnicamente viables.",
          "Colaboré activamente con colegas para compartir conocimientos y optimizar los flujos de trabajo.",
          "Me mantuve actualizado con las últimas tendencias en desarrollo frontend."
        ]
      },
      {
        company: "Softtek, La Plata",
        role: "Full Stack Developer",
        period: "NOV 2018 - SEP 2019",
        bullets: [
          "Desarrollé aplicaciones frontend utilizando AngularJS y Angular 2+.",
          "Creé y gestioné aplicaciones backend utilizando Java.",
          "Trabajé con equipos multidisciplinarios para conectar las capas de frontend y backend de los proyectos.",
          "Me enfoqué en el aprendizaje constante de nuevas habilidades y en mejorar mis conocimientos técnicos."
        ]
      }
    ],
    skills: [
      { label: "Lenguajes", value: "JavaScript, TypeScript" },
      { label: "Frontend", value: "Angular, Vue, React, RxJS, Angular Material, Bootstrap" },
      { label: "Backend & APIs", value: "Node.js + Express, REST APIs" },
      { label: "Bases de datos", value: "MongoDB, SQL, NoSQL, Redis" },
      { label: "Herramientas de IA", value: "Cursor, Integración de IA Generativa" }
    ],
    languages: [
      { label: "Español", value: "Nativo" },
      { label: "Inglés", value: "Profesional (Proficient)" }
    ],
    education: {
      degree: "Ingeniería en Sistemas",
      period: "2014 - 2017 UNLP",
      note: "Nota: Completé tres años de la carrera."
    }
  }
};

const getByPath = (obj, path) => {
  return path.split(".").reduce((acc, part) => (acc ? acc[part] : undefined), obj);
};

const detectInitialLocale = () => {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved === "en" || saved === "es") {
    return saved;
  }

  const browserLang = navigator.language.toLowerCase();
  if (browserLang.startsWith("es")) {
    return "es";
  }

  return "en";
};

const renderProfile = (locale) => {
  const target = document.getElementById("profile-content");
  target.innerHTML = "";

  content[locale].profile.forEach((paragraph) => {
    const p = document.createElement("p");
    p.textContent = paragraph;
    target.appendChild(p);
  });
};

const renderExperience = (locale) => {
  const target = document.getElementById("experience-content");
  target.innerHTML = "";

  content[locale].experience.forEach((job) => {
    const article = document.createElement("article");
    article.className = "job";

    const header = document.createElement("div");
    header.className = "job-header";

    const title = document.createElement("p");
    title.className = "job-title";
    title.textContent = `${job.role} - ${job.company}`;

    const meta = document.createElement("p");
    meta.className = "job-meta";
    meta.textContent = job.period;

    const bullets = document.createElement("ul");
    job.bullets.forEach((line) => {
      const li = document.createElement("li");
      li.textContent = line;
      bullets.appendChild(li);
    });

    header.appendChild(title);
    header.appendChild(meta);
    article.appendChild(header);
    article.appendChild(bullets);
    target.appendChild(article);
  });
};

const renderSkills = (locale) => {
  const target = document.getElementById("skills-content");
  target.innerHTML = "";

  content[locale].skills.forEach((entry) => {
    const p = document.createElement("p");
    p.innerHTML = `<strong>${entry.label}:</strong> ${entry.value}`;
    target.appendChild(p);
  });
};

const renderLanguages = (locale) => {
  const target = document.getElementById("languages-content");
  target.innerHTML = "";

  content[locale].languages.forEach((entry) => {
    const p = document.createElement("p");
    p.innerHTML = `<strong>${entry.label}:</strong> ${entry.value}`;
    target.appendChild(p);
  });
};

const renderEducation = (locale) => {
  const target = document.getElementById("education-content");
  target.innerHTML = "";

  const degree = document.createElement("p");
  degree.innerHTML = `<strong>${content[locale].education.degree}</strong>`;

  const period = document.createElement("p");
  period.textContent = content[locale].education.period;

  const note = document.createElement("p");
  note.textContent = content[locale].education.note;

  target.appendChild(degree);
  target.appendChild(period);
  target.appendChild(note);
};

const applyStaticText = (locale) => {
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.getAttribute("data-i18n");
    const value = getByPath(content[locale], key);
    if (typeof value === "string") {
      node.textContent = value;
    }
  });

  document.querySelectorAll("[data-i18n-aria-label]").forEach((node) => {
    const key = node.getAttribute("data-i18n-aria-label");
    const value = getByPath(content[locale], key);
    if (typeof value === "string") {
      node.setAttribute("aria-label", value);
    }
  });
};

const applyLocale = (locale) => {
  const safeLocale = locale === "es" ? "es" : "en";

  document.documentElement.lang = safeLocale;
  document.title =
    safeLocale === "es"
      ? "Dario Ballerini - Currículum"
      : "Dario Ballerini - Resume";

  applyStaticText(safeLocale);
  renderProfile(safeLocale);
  renderExperience(safeLocale);
  renderSkills(safeLocale);
  renderLanguages(safeLocale);
  renderEducation(safeLocale);

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.setAttribute("aria-pressed", String(btn.dataset.lang === safeLocale));
  });

  localStorage.setItem(STORAGE_KEY, safeLocale);
};

document.querySelectorAll(".lang-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    applyLocale(btn.dataset.lang);
  });
});

applyLocale(detectInitialLocale());
