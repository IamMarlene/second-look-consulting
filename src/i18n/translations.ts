export type Lang = "es" | "en";

export const translations: Record<Lang, Record<string, string>> = {
  es: {
    // Navbar
    "nav.home": "Inicio",
    "nav.about": "Quiénes Somos",
    "nav.services": "Servicios",
    "nav.howItWorks": "Cómo Funciona",
    "nav.contact": "Contacto",

    // Hero
    "hero.title": "Una Segunda Mirada a Tu Caso Legal",
    "hero.subtitle": "Te ayudamos a entender tus documentos de la corte y lo que pasó en tu caso — en español y sin complicaciones.",
    "hero.cta1": "Solicita una Revisión",
    "hero.cta2": "Agenda una Consulta",
    "hero.disclaimer": "Second Look no es un bufete de abogados. No ofrecemos representación legal.",

    // Trust
    "trust.confidence.title": "Confianza",
    "trust.confidence.desc": "Abogados retirados con décadas de experiencia a tu servicio.",
    "trust.clarity.title": "Claridad",
    "trust.clarity.desc": "Explicamos tus documentos legales en español y de forma sencilla.",
    "trust.transparency.title": "Transparencia",
    "trust.transparency.desc": "Revisión independiente y honesta de tu caso.",

    // About
    "about.title": "Quiénes Somos",
    "about.p1": "Somos un equipo de abogados retirados con décadas de experiencia en el sistema legal de los Estados Unidos. Entendemos los retos que enfrenta la comunidad latina al navegar el sistema legal.",
    "about.p2": "Ahora nos enfocamos en revisar y explicar casos legales para que nuestros clientes se sientan informados y seguros al tomar decisiones importantes.",
    "about.quote": "\"Nos dedicamos a ayudarte a entender tu situación para que tomes decisiones con mayor seguridad.\"",
    "about.team.title": "Equipo Experimentado",
    "about.team.desc": "Abogados retirados con amplia experiencia en diversas áreas del derecho.",
    "about.review.title": "Revisión Detallada",
    "about.review.desc": "Analizamos cada documento con cuidado para darte respuestas claras.",
    "about.commitment.title": "Compromiso Contigo",
    "about.commitment.desc": "Tu tranquilidad y comprensión son nuestra prioridad número uno.",

    // Services
    "services.title": "Nuestros Servicios",
    "services.subtitle": "Servicios diseñados para darte claridad y confianza sobre tu situación legal.",
    "services.translation.title": "Traducción de Documentos Legales",
    "services.translation.desc": "Órdenes del juez, sentencias, mociones, citatorios y notificaciones de audiencia. Reportes policiales, declaraciones juradas. Notificaciones de inmigración, cartas del gobierno, documentos de seguro y más.",
    "services.explanation.title": "Explicaciones de Documentos",
    "services.explanation.desc": "Explicaciones claras y sencillas de documentos de la corte, traducidas a un lenguaje que puedas entender.",
    "services.organization.title": "Organización de Expediente",
    "services.organization.desc": "Organización completa de tu expediente para que tengas todo en orden.",
    "services.timeline.title": "Línea de Tiempo",
    "services.timeline.desc": "Creamos una línea de tiempo de tu caso — qué pasó y cuándo — para que veas el panorama completo.",
    "services.questions.title": "Preparación de Preguntas",
    "services.questions.desc": "Te ayudamos a preparar preguntas inteligentes para tu abogado antes de tu próxima reunión.",
    "services.billing.title": "Revisión de Facturas",
    "services.billing.desc": "Si tienes dudas sobre lo que te están cobrando, revisamos tus facturas legales.",

    // Legal areas
    "areas.title": "Áreas de Enfoque Legal",
    "areas.subtitle": "En Second Look trabajamos con documentación y materiales de casos en diversas áreas del derecho. Nuestro enfoque es ayudarte a comprender tus documentos con claridad, organizar la información de tu caso y ofrecer traducción precisa de documentos legales del inglés al español.",
    "areas.immigration.title": "Derecho de Inmigración",
    "areas.immigration.desc": "Revisión, explicación y traducción de notificaciones migratorias, documentos de la corte de inmigración, solicitudes, decisiones y correspondencia oficial.",
    "areas.family.title": "Derecho Familiar",
    "areas.family.desc": "Documentos relacionados con divorcio, custodia, manutención, órdenes de protección y procesos de la corte familiar.",
    "areas.business.title": "Derecho Comercial / Empresarial",
    "areas.business.desc": "Contratos comerciales, acuerdos entre socios, documentos corporativos y disputas contractuales.",
    "areas.criminal.title": "Derecho Penal",
    "areas.criminal.desc": "Órdenes judiciales, sentencias, acuerdos, reportes policiales y documentos procesales.",
    "areas.civil.title": "Asuntos Civiles y Otros Procesos Legales",
    "areas.civil.desc": "Demandas civiles, reclamaciones de seguros, disputas contractuales y notificaciones gubernamentales.",

    // Not do
    "notDo.title": "Lo que NO Hacemos",
    "notDo.1": "No damos asesoría legal",
    "notDo.2": "No representamos en corte",
    "notDo.3": "No sustituimos a tu abogado",

    // How it works
    "how.title": "Cómo Funciona",
    "how.subtitle": "Un proceso simple y transparente para darte tranquilidad.",
    "how.step1.title": "Envíanos tus documentos",
    "how.step1.desc": "Comparte los documentos de tu caso de forma segura. Aceptamos copias físicas o digitales.",
    "how.step2.title": "Revisamos tu caso cuidadosamente",
    "how.step2.desc": "Nuestro equipo de abogados retirados analiza cada detalle de tu expediente con atención.",
    "how.step3.title": "Te entregamos un resumen claro",
    "how.step3.desc": "Recibes un informe organizado y fácil de entender, con una línea de tiempo y puntos clave.",
    "how.step": "Paso",

    // Contact
    "contact.title": "Contacto",
    "contact.subtitle": "Obtén claridad sobre tu caso hoy. Estamos aquí para ayudarte.",
    "contact.form.title": "Envíanos un Mensaje",
    "contact.form.name": "Nombre",
    "contact.form.namePlaceholder": "Tu nombre completo",
    "contact.form.email": "Correo Electrónico",
    "contact.form.emailPlaceholder": "tu@email.com",
    "contact.form.phone": "Teléfono",
    "contact.form.phonePlaceholder": "(555) 123-4567",
    "contact.form.message": "Mensaje",
    "contact.form.messagePlaceholder": "Cuéntanos sobre tu caso...",
    "contact.form.submit": "Enviar Mensaje",
    "contact.info.title": "Información de Contacto",
    "contact.info.phone": "Teléfono",
    "contact.info.email": "Correo Electrónico",
    "contact.info.location": "Ubicación",
    "contact.info.locationValue": "Sirviendo a la comunidad latina en todo Estados Unidos",
    "contact.hours.title": "Horario de Atención",
    "contact.hours.weekdays": "Lunes a Viernes: 9:00 AM – 5:00 PM",
    "contact.hours.saturday": "Sábado: 10:00 AM – 2:00 PM",
    "contact.hours.sunday": "Domingo: Cerrado",

    // CTA
    "cta.title": "Obtén Claridad Sobre Tu Caso Hoy",
    "cta.desc": "No tienes que entender todo solo. Déjanos ayudarte a ver tu caso con claridad.",
    "cta.button": "Contáctanos",

    // Toast
    "toast.success.title": "Mensaje enviado",
    "toast.success.desc": "Nos pondremos en contacto contigo pronto.",
    "toast.error.title": "No se pudo enviar",
    "toast.error.desc": "Intenta de nuevo en unos minutos.",

    // Footer
    "footer.desc": "Te ayudamos a entender tus documentos legales y lo que pasó en tu caso.",
    "footer.nav": "Navegación",
    "footer.contact": "Contacto",
    "footer.disclaimer": "Second Look Legal Consulting provides independent case review and legal information services. We are not a law firm and do not provide legal advice or legal representation. © {year} Second Look. Todos los derechos reservados.",
  },
  en: {
    // Navbar
    "nav.home": "Home",
    "nav.about": "About Us",
    "nav.services": "Services",
    "nav.howItWorks": "How It Works",
    "nav.contact": "Contact",

    // Hero
    "hero.title": "A Second Look at Your Legal Case",
    "hero.subtitle": "We help you understand your court documents and what happened in your case — in plain language.",
    "hero.cta1": "Request a Review",
    "hero.cta2": "Schedule a Consultation",
    "hero.disclaimer": "Second Look is not a law firm. We do not provide legal representation.",

    // Trust
    "trust.confidence.title": "Trust",
    "trust.confidence.desc": "Retired attorneys with decades of experience at your service.",
    "trust.clarity.title": "Clarity",
    "trust.clarity.desc": "We explain your legal documents in simple, easy-to-understand language.",
    "trust.transparency.title": "Transparency",
    "trust.transparency.desc": "Independent and honest review of your case.",

    // About
    "about.title": "About Us",
    "about.p1": "We are a team of retired attorneys with decades of experience in the United States legal system. We understand the challenges the Latino community faces when navigating the legal system.",
    "about.p2": "We now focus on reviewing and explaining legal cases so our clients feel informed and confident when making important decisions.",
    "about.quote": "\"We are dedicated to helping you understand your situation so you can make decisions with greater confidence.\"",
    "about.team.title": "Experienced Team",
    "about.team.desc": "Retired attorneys with extensive experience in various areas of law.",
    "about.review.title": "Detailed Review",
    "about.review.desc": "We analyze every document carefully to give you clear answers.",
    "about.commitment.title": "Committed to You",
    "about.commitment.desc": "Your peace of mind and understanding are our number one priority.",

    // Services
    "services.title": "Our Services",
    "services.subtitle": "Services designed to give you clarity and confidence about your legal situation.",
    "services.translation.title": "Legal Document Translation",
    "services.translation.desc": "Court orders, sentences, motions, subpoenas and hearing notices. Police reports, sworn statements. Immigration notices, government letters, insurance documents and more.",
    "services.explanation.title": "Document Explanations",
    "services.explanation.desc": "Clear and simple explanations of court documents, translated into language you can understand.",
    "services.organization.title": "Case File Organization",
    "services.organization.desc": "Complete organization of your case file so everything is in order.",
    "services.timeline.title": "Timeline",
    "services.timeline.desc": "We create a timeline of your case — what happened and when — so you can see the full picture.",
    "services.questions.title": "Question Preparation",
    "services.questions.desc": "We help you prepare smart questions for your attorney before your next meeting.",
    "services.billing.title": "Billing Review",
    "services.billing.desc": "If you have doubts about what you're being charged, we review your legal bills.",

    // Legal areas
    "areas.title": "Legal Focus Areas",
    "areas.subtitle": "At Second Look we work with case documentation and materials across various areas of law. Our focus is to help you understand your documents clearly, organize your case information, and provide accurate legal document translation.",
    "areas.immigration.title": "Immigration Law",
    "areas.immigration.desc": "Review, explanation, and translation of immigration notices, immigration court documents, applications, decisions, and official correspondence.",
    "areas.family.title": "Family Law",
    "areas.family.desc": "Documents related to divorce, custody, child support, protection orders, and family court proceedings.",
    "areas.business.title": "Business / Commercial Law",
    "areas.business.desc": "Commercial contracts, partnership agreements, corporate documents, and contractual disputes.",
    "areas.criminal.title": "Criminal Law",
    "areas.criminal.desc": "Court orders, sentences, plea agreements, police reports, and procedural documents.",
    "areas.civil.title": "Civil Matters & Other Legal Proceedings",
    "areas.civil.desc": "Civil lawsuits, insurance claims, contractual disputes, and government notices.",

    // Not do
    "notDo.title": "What We Do NOT Do",
    "notDo.1": "We do not provide legal advice",
    "notDo.2": "We do not represent in court",
    "notDo.3": "We do not replace your attorney",

    // How it works
    "how.title": "How It Works",
    "how.subtitle": "A simple and transparent process to give you peace of mind.",
    "how.step1.title": "Send us your documents",
    "how.step1.desc": "Share your case documents securely. We accept physical or digital copies.",
    "how.step2.title": "We carefully review your case",
    "how.step2.desc": "Our team of retired attorneys analyzes every detail of your file with care.",
    "how.step3.title": "We deliver a clear summary",
    "how.step3.desc": "You receive an organized, easy-to-understand report with a timeline and key points.",
    "how.step": "Step",

    // Contact
    "contact.title": "Contact",
    "contact.subtitle": "Get clarity on your case today. We're here to help.",
    "contact.form.title": "Send Us a Message",
    "contact.form.name": "Name",
    "contact.form.namePlaceholder": "Your full name",
    "contact.form.email": "Email",
    "contact.form.emailPlaceholder": "you@email.com",
    "contact.form.phone": "Phone",
    "contact.form.phonePlaceholder": "(555) 123-4567",
    "contact.form.message": "Message",
    "contact.form.messagePlaceholder": "Tell us about your case...",
    "contact.form.submit": "Send Message",
    "contact.info.title": "Contact Information",
    "contact.info.phone": "Phone",
    "contact.info.email": "Email",
    "contact.info.location": "Location",
    "contact.info.locationValue": "Serving the Latino community across the United States",
    "contact.hours.title": "Business Hours",
    "contact.hours.weekdays": "Monday to Friday: 9:00 AM – 5:00 PM",
    "contact.hours.saturday": "Saturday: 10:00 AM – 2:00 PM",
    "contact.hours.sunday": "Sunday: Closed",

    // CTA
    "cta.title": "Get Clarity on Your Case Today",
    "cta.desc": "You don't have to understand everything alone. Let us help you see your case clearly.",
    "cta.button": "Contact Us",

    // Toast
    "toast.success.title": "Message sent",
    "toast.success.desc": "We'll get in touch with you soon.",
    "toast.error.title": "Could not send",
    "toast.error.desc": "Please try again in a few minutes.",

    // Footer
    "footer.desc": "We help you understand your legal documents and what happened in your case.",
    "footer.nav": "Navigation",
    "footer.contact": "Contact",
    "footer.disclaimer": "Second Look Legal Consulting provides independent case review and legal information services. We are not a law firm and do not provide legal advice or legal representation. © {year} Second Look. All rights reserved.",
  },
};
