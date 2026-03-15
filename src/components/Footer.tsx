import logo from "@/assets/logo.svg";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  const links = [
    { to: "#inicio", label: t("nav.home") },
    { to: "#nosotros", label: t("nav.about") },
    { to: "#servicios", label: t("nav.services") },
    { to: "#como-funciona", label: t("nav.howItWorks") },
    { to: "#contacto", label: t("nav.contact") },
  ];

  return (
    <footer className="bg-navy text-navy-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <img src={logo} alt="Second Look" className="h-14 mb-4" />
            <p className="text-sm text-navy-foreground/70 leading-relaxed">
              {t("footer.desc")}
            </p>
          </div>
          <div>
            <h4 className="font-heading text-lg mb-3">{t("footer.nav")}</h4>
            <div className="flex flex-col gap-2">
              {links.map((l) => (
                <a
                  key={l.to}
                  href={l.to}
                  className="text-sm text-navy-foreground/70 hover:text-highlight transition-colors"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-heading text-lg mb-3">{t("footer.contact")}</h4>
            <p className="text-sm text-navy-foreground/70">info@secondlook.consulting</p>
            <p className="text-sm text-navy-foreground/70">(385) 250-8214</p>
          </div>
        </div>
        <div className="border-t border-navy-foreground/10 mt-8 pt-6">
          <p className="text-xs text-navy-foreground/50 text-center leading-relaxed max-w-3xl mx-auto">
            {t("footer.disclaimer").replace("{year}", new Date().getFullYear().toString())}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
