export const translations = {
    en: {
      subtitle: "Porcelain Jewelry",
      manifesto: '"Sculptural objects for the skin"',
      date: "Coming Summer 2026",
      placeholder: "Join the waitlist",
      success: "Welcome to our universe.",
      footer: "Handcrafted in Spain"
    },
    es: {
      subtitle: "Joyería de Porcelana",
      manifesto: '"Objetos escultóricos para la piel"',
      date: "Verano 2026",
      placeholder: "Únete a la lista de espera",
      success: "Bienvenida a nuestro universo.",
      footer: "Hecho a mano en España"
    }
};

export type Language = keyof typeof translations;
export type Content = typeof translations[Language];
