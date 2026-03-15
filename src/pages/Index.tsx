import { ArrowRight, Shield, FileText, Scale, Users, BookOpen, Award, FolderOpen, Clock, HelpCircle, Receipt, XCircle, Upload, Search, FileCheck, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import Layout from "@/components/Layout";
import { useLanguage } from "@/contexts/LanguageContext";
import heroBg from "@/assets/hero-bg.png";
import americanFlag from "@/assets/american-flag.png";
import lawScale from "@/assets/law-scale.png";

const Index = () => {
  const { toast } = useToast();
  const { t } = useLanguage();
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const services = [
    { icon: BookOpen, titleKey: "services.translation.title", descKey: "services.translation.desc" },
    { icon: FileText, titleKey: "services.explanation.title", descKey: "services.explanation.desc" },
    { icon: FolderOpen, titleKey: "services.organization.title", descKey: "services.organization.desc" },
    { icon: Clock, titleKey: "services.timeline.title", descKey: "services.timeline.desc" },
    { icon: HelpCircle, titleKey: "services.questions.title", descKey: "services.questions.desc" },
    { icon: Receipt, titleKey: "services.billing.title", descKey: "services.billing.desc" },
  ];

  const notDo = ["notDo.1", "notDo.2", "notDo.3"];

  const steps = [
    { icon: Upload, num: "1", titleKey: "how.step1.title", descKey: "how.step1.desc" },
    { icon: Search, num: "2", titleKey: "how.step2.title", descKey: "how.step2.desc" },
    { icon: FileCheck, num: "3", titleKey: "how.step3.title", descKey: "how.step3.desc" },
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const data = new FormData(e.currentTarget);
      const res = await fetch("https://formspree.io/f/mojnygal", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (!res.ok) throw new Error("Form submission failed");
      toast({ title: t("toast.success.title"), description: t("toast.success.desc") });
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch (err) {
      console.error(err);
      toast({ title: t("toast.error.title"), description: t("toast.error.desc"), variant: "destructive" });
    }
  };

  return (
    <Layout>
      {/* Hero */}
      <section id="inicio" className="relative overflow-hidden bg-navy text-navy-foreground">
        <div className="absolute inset-0 opacity-20">
          <img src={heroBg} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative container mx-auto px-4 py-24 md:py-32">
          <div className="max-w-2xl animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight mb-6">
              {t("hero.title")}
            </h1>
            <p className="text-lg md:text-xl text-navy-foreground/80 mb-8 leading-relaxed">
              {t("hero.subtitle")}
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8">
                <a href="#contacto">{t("hero.cta1")} <ArrowRight className="ml-2 h-4 w-4" /></a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-navy-foreground/30 text-navy-foreground bg-navy-foreground/10 hover:bg-navy-foreground/10">
                <a href="#contacto">{t("hero.cta2")}</a>
              </Button>
            </div>
            <p className="text-sm text-navy-foreground/50 italic">
              {t("hero.disclaimer")}
            </p>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Shield, titleKey: "trust.confidence.title", descKey: "trust.confidence.desc" },
              { icon: FileText, titleKey: "trust.clarity.title", descKey: "trust.clarity.desc" },
              { icon: Scale, titleKey: "trust.transparency.title", descKey: "trust.transparency.desc" },
            ].map(({ icon: Icon, titleKey, descKey }) => (
              <div key={titleKey} className="text-center p-8 rounded-lg bg-card border border-border hover:shadow-lg transition-shadow">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-4">
                  <Icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-semibold mb-2 text-foreground">{t(titleKey)}</h3>
                <p className="text-muted-foreground leading-relaxed">{t(descKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="nosotros" className="py-16 bg-muted">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/3 flex gap-4">
            <img src={americanFlag} alt="American flag" className="rounded-lg shadow-md w-1/2 object-cover" />
            <img src={lawScale} alt="Scales of justice" className="rounded-lg shadow-md w-1/2 object-contain" />
          </div>
          <div className="md:w-2/3">
            <h2 className="text-3xl font-heading font-bold mb-4 text-foreground">{t("about.title")}</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">{t("about.p1")}</p>
            <p className="text-muted-foreground leading-relaxed mb-4">{t("about.p2")}</p>
            <p className="text-foreground font-medium leading-relaxed border-l-4 border-primary pl-6">
              {t("about.quote")}
            </p>
          </div>
        </div>
        <div className="container mx-auto px-4 mt-12">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Users, titleKey: "about.team.title", descKey: "about.team.desc" },
              { icon: BookOpen, titleKey: "about.review.title", descKey: "about.review.desc" },
              { icon: Award, titleKey: "about.commitment.title", descKey: "about.commitment.desc" },
            ].map(({ icon: Icon, titleKey, descKey }) => (
              <div key={titleKey} className="bg-card p-8 rounded-lg border border-border">
                <Icon className="h-8 w-8 text-primary mb-4" />
                <h3 className="font-heading text-xl font-semibold mb-2 text-foreground">{t(titleKey)}</h3>
                <p className="text-muted-foreground leading-relaxed">{t(descKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="servicios" className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-foreground">{t("services.title")}</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mb-10">{t("services.subtitle")}</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(({ icon: Icon, titleKey, descKey }) => (
              <div key={titleKey} className="bg-card p-6 rounded-lg border border-border hover:shadow-lg transition-shadow">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-heading text-lg font-semibold mb-2 text-foreground">{t(titleKey)}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{t(descKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Legal Areas */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-foreground">{t("areas.title")}</h2>
          <p className="text-muted-foreground text-lg max-w-3xl mb-10 leading-relaxed">{t("areas.subtitle")}</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Scale, titleKey: "areas.immigration.title", descKey: "areas.immigration.desc" },
              { icon: Users, titleKey: "areas.family.title", descKey: "areas.family.desc" },
              { icon: Award, titleKey: "areas.business.title", descKey: "areas.business.desc" },
              { icon: Shield, titleKey: "areas.criminal.title", descKey: "areas.criminal.desc" },
              { icon: FileText, titleKey: "areas.civil.title", descKey: "areas.civil.desc" },
            ].map(({ icon: Icon, titleKey, descKey }) => (
              <div key={titleKey} className="bg-card p-6 rounded-lg border border-border hover:shadow-lg transition-shadow">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-heading text-lg font-semibold mb-2 text-foreground">{t(titleKey)}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{t(descKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What we don't do */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-2xl font-heading font-bold mb-6 text-foreground">{t("notDo.title")}</h2>
          <div className="space-y-4">
            {notDo.map((key) => (
              <div key={key} className="flex items-center gap-3 bg-card p-4 rounded-lg border border-border">
                <XCircle className="h-5 w-5 text-destructive flex-shrink-0" />
                <span className="text-foreground">{t(key)}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="como-funciona" className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-foreground">{t("how.title")}</h2>
          <p className="text-muted-foreground text-lg mb-12">{t("how.subtitle")}</p>
          <div className="space-y-12">
            {steps.map(({ icon: Icon, num, titleKey, descKey }) => (
              <div key={num} className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-primary flex items-center justify-center">
                  <Icon className="h-7 w-7 text-primary-foreground" />
                </div>
                <div>
                  <span className="text-sm font-semibold text-primary uppercase tracking-wide">{t("how.step")} {num}</span>
                  <h3 className="font-heading text-xl font-bold text-foreground mt-1 mb-2">{t(titleKey)}</h3>
                  <p className="text-muted-foreground leading-relaxed">{t(descKey)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contacto" className="py-16 bg-navy text-navy-foreground">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">{t("contact.title")}</h2>
          <p className="text-navy-foreground/70 text-lg max-w-2xl mb-12">{t("contact.subtitle")}</p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <h3 className="text-2xl font-heading font-bold mb-6 text-foreground">{t("contact.form.title")}</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-1 block">{t("contact.form.name")}</label>
                  <Input name="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required placeholder={t("contact.form.namePlaceholder")} />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1 block">{t("contact.form.email")}</label>
                  <Input name="email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required placeholder={t("contact.form.emailPlaceholder")} />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1 block">{t("contact.form.phone")}</label>
                  <Input name="phone" type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder={t("contact.form.phonePlaceholder")} />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1 block">{t("contact.form.message")}</label>
                  <Textarea name="message" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} required rows={5} placeholder={t("contact.form.messagePlaceholder")} />
                </div>
                <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                  {t("contact.form.submit")}
                </Button>
              </form>
            </div>
            <div>
              <h3 className="text-2xl font-heading font-bold mb-6 text-foreground">{t("contact.info.title")}</h3>
              <div className="space-y-6">
                {[
                  { icon: Phone, labelKey: "contact.info.phone", value: "(385) 250-8214" },
                  { icon: Mail, labelKey: "contact.info.email", value: "info@secondlook.consulting" },
                  { icon: MapPin, labelKey: "contact.info.location", valueKey: "contact.info.locationValue" },
                ].map(({ icon: Icon, labelKey, value, valueKey }) => (
                  <div key={labelKey} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">{t(labelKey)}</p>
                      <p className="text-muted-foreground">{valueKey ? t(valueKey) : value}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-6 bg-muted rounded-lg border border-border">
                <h4 className="font-heading font-semibold text-foreground mb-2">{t("contact.hours.title")}</h4>
                <p className="text-sm text-muted-foreground">{t("contact.hours.weekdays")}</p>
                <p className="text-sm text-muted-foreground">{t("contact.hours.saturday")}</p>
                <p className="text-sm text-muted-foreground">{t("contact.hours.sunday")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-heading font-bold mb-4">{t("cta.title")}</h2>
          <p className="mb-8 text-primary-foreground/80 max-w-xl mx-auto">{t("cta.desc")}</p>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8">
            <a href="#contacto">{t("cta.button")} <ArrowRight className="ml-2 h-4 w-4" /></a>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
