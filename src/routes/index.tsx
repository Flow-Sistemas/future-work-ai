import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import {
  Sparkles, Brain, Cpu, Rocket, ShieldCheck, GraduationCap,
  Briefcase, Users, Clock, ArrowRight, MessageCircle, Check,
  Zap, Target, TrendingUp, Lightbulb
} from "lucide-react";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";

import heroDesktop from "@/assets/hero-desktop.png.asset.json";
import heroMobile from "@/assets/hero-mobile.png.asset.json";
import logoClaude from "@/assets/logo-claude.png.asset.json";
import logoOpenai from "@/assets/logo-openai.png.asset.json";
import logoGemini from "@/assets/logo-gemini.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Palestra sobre Inteligência Artificial e Futuro do Trabalho" },
      { name: "description", content: "Landing page da palestra Inteligência Artificial e o Futuro do Trabalho. Saiba como a IA está transformando o mercado e como se preparar." },
      { property: "og:title", content: "IA e o Futuro do Trabalho — Palestra com Ruan de Araújo" },
      { property: "og:description", content: "Como usar IA para se destacar no mercado, aumentar produtividade e se preparar para as novas profissões." },
      { property: "og:image", content: heroDesktop.url },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: LandingPage,
});

const WHATSAPP_URL = "https://wa.me/?text=Tenho%20interesse%20na%20palestra%20IA%20e%20o%20Futuro%20do%20Trabalho";

function LandingPage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Toaster theme="dark" position="top-center" />
      <Nav />
      <Hero />
      <About />
      <Topics />
      <Benefits />
      <Audience />
      <Tools />
      <Speaker />
      <InterestForm />
      <FinalCTA />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 font-display font-bold text-lg">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-primary to-accent shadow-[var(--shadow-glow)]">
            <Sparkles className="h-4 w-4 text-primary-foreground" />
          </span>
          <span>IA<span className="text-primary">.</span>Futuro</span>
        </a>
        <nav className="hidden md:flex items-center gap-7 text-sm text-muted-foreground">
          <a href="#sobre" className="hover:text-foreground transition">Sobre</a>
          <a href="#conteudo" className="hover:text-foreground transition">Conteúdo</a>
          <a href="#palestrante" className="hover:text-foreground transition">Palestrante</a>
          <a href="#contato" className="hover:text-foreground transition">Contato</a>
        </nav>
        <a href="#contato" className="hidden sm:inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:opacity-90 transition shadow-[var(--shadow-glow)]">
          Levar palestra <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative min-h-screen pt-24 pb-16 grid-bg overflow-hidden">
      {/* Background image - desktop */}
      <div className="absolute inset-0 hidden md:block">
        <img src={heroDesktop.url} alt="" aria-hidden className="h-full w-full object-cover object-right opacity-70" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>
      {/* Background image - mobile */}
      <div className="absolute inset-0 md:hidden">
        <img src={heroMobile.url} alt="" aria-hidden className="h-full w-full object-cover object-center opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/85 to-background" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 flex flex-col justify-center min-h-[calc(100vh-6rem)]">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1.5 text-xs font-medium text-accent backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Palestra presencial · Duração 1h30
          </div>

          <h1 className="mt-6 font-display text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.05] tracking-tight glow-text">
            Inteligência Artificial e o{" "}
            <span className="bg-gradient-to-r from-[var(--cyan-glow)] to-[var(--neon)] bg-clip-text text-transparent">
              Futuro do Trabalho
            </span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-xl">
            Como usar IA para se destacar no mercado, aumentar produtividade e se preparar para as novas profissões.
          </p>

          <p className="mt-4 text-sm sm:text-base text-muted-foreground/80 max-w-xl">
            Uma palestra prática e acessível sobre como a IA está transformando o mercado, as profissões e a forma como estudantes e profissionais trabalham.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#contato" className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary to-[var(--cyan-glow)] px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] hover:scale-[1.02] transition">
              Quero levar esta palestra <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#contato" className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card/60 backdrop-blur px-6 py-3.5 text-sm font-semibold text-foreground hover:bg-card transition">
              Tenho interesse
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-6 text-xs text-muted-foreground">
            <div className="flex items-center gap-2"><Clock className="h-4 w-4 text-primary" /> 1h30 de conteúdo</div>
            <div className="flex items-center gap-2"><Users className="h-4 w-4 text-accent" /> Universidades · Cursos · Empresas</div>
            <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-primary" /> Prático e estratégico</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionTitle({ eyebrow, title, desc }: { eyebrow?: string; title: string; desc?: string }) {
  return (
    <div className="max-w-3xl">
      {eyebrow && <div className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">{eyebrow}</div>}
      <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">{title}</h2>
      {desc && <p className="mt-4 text-base sm:text-lg text-muted-foreground">{desc}</p>}
    </div>
  );
}

function About() {
  return (
    <section id="sobre" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionTitle eyebrow="Sobre a palestra" title="Uma visão prática sobre IA e carreira" />
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2 rounded-2xl border border-border/60 bg-card/50 backdrop-blur p-8 sm:p-10">
            <p className="text-base sm:text-lg leading-relaxed text-foreground/90">
              A palestra apresenta, de forma prática e acessível, como a Inteligência Artificial está transformando o mercado, as profissões e a forma como estudantes e profissionais trabalham. O conteúdo mostra como usar ferramentas de IA no dia a dia, quais habilidades serão mais valorizadas, quais riscos devem ser evitados e como se preparar para as oportunidades da nova era profissional.
            </p>
          </div>
          <div className="rounded-2xl border border-accent/30 bg-gradient-to-br from-accent/10 to-primary/10 p-8 flex flex-col justify-between neon-border">
            <Brain className="h-10 w-10 text-accent" />
            <div className="mt-6">
              <div className="text-5xl font-display font-bold text-foreground">1h30</div>
              <div className="text-sm text-muted-foreground mt-1">de conteúdo denso, direto e aplicável</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const TOPICS = [
  { icon: Brain, text: "O que é Inteligência Artificial e por que ela está mudando o mercado" },
  { icon: Cpu, text: "Como a IA generativa funciona na prática" },
  { icon: Briefcase, text: "Impactos da IA nas profissões e nas empresas" },
  { icon: Target, text: "A IA vai substituir profissionais ou transformar tarefas?" },
  { icon: TrendingUp, text: "Habilidades mais valorizadas na nova era profissional" },
  { icon: Zap, text: "Como estudantes e profissionais podem usar IA no dia a dia" },
  { icon: ShieldCheck, text: "Riscos, ética, plágio, privacidade e responsabilidade" },
  { icon: Lightbulb, text: "Plano prático para aplicar IA na própria área" },
];

function Topics() {
  return (
    <section id="conteudo" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <SectionTitle eyebrow="Conteúdo" title="O que será abordado" desc="Oito blocos práticos conectando teoria, mercado e aplicação real." />
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {TOPICS.map((t, i) => (
            <div key={i} className="group relative rounded-2xl border border-border/60 bg-card/60 backdrop-blur p-6 hover:border-primary/60 hover:shadow-[var(--shadow-glow)] transition">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30">
                <t.icon className="h-5 w-5 text-primary" />
              </div>
              <div className="mt-4 text-xs font-mono text-muted-foreground">0{i + 1}</div>
              <p className="mt-1 text-sm font-medium text-foreground leading-snug">{t.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const BENEFITS = [
  "Entender como a IA já está sendo usada no mercado",
  "Identificar tarefas que podem ser automatizadas",
  "Aprender a usar IA para produtividade, currículo e entrevistas",
  "Aplicar IA com estratégia, ética e responsabilidade",
  "Ter mais clareza sobre oportunidades profissionais na nova era",
];

function Benefits() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <SectionTitle eyebrow="Resultado" title="O diferencial após a palestra" desc="O que o participante leva para a vida profissional." />
        </div>
        <ul className="space-y-3">
          {BENEFITS.map((b, i) => (
            <li key={i} className="flex items-start gap-4 rounded-xl border border-border/60 bg-card/60 backdrop-blur p-5 hover:border-accent/60 transition">
              <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-accent/20 border border-accent/40">
                <Check className="h-4 w-4 text-accent" />
              </span>
              <span className="text-sm sm:text-base text-foreground/90">{b}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

const AUDIENCE = [
  { icon: GraduationCap, label: "Universitários" },
  { icon: Briefcase, label: "Alunos de cursos técnicos" },
  { icon: Rocket, label: "Recém-formados" },
  { icon: TrendingUp, label: "Profissionais em início de carreira" },
  { icon: Users, label: "Quem quer entender o impacto da IA na sua profissão" },
];

function Audience() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionTitle eyebrow="Público" title="Para quem é esta palestra" />
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {AUDIENCE.map((a, i) => (
            <div key={i} className="rounded-2xl border border-border/60 bg-card/60 backdrop-blur p-6 text-center hover:border-primary/60 transition">
              <a.icon className="h-8 w-8 text-primary mx-auto" />
              <div className="mt-3 text-sm font-medium text-foreground">{a.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Tools() {
  const logos = [
    { src: logoClaude.url, name: "Claude" },
    { src: logoOpenai.url, name: "OpenAI / ChatGPT" },
    { src: logoGemini.url, name: "Gemini" },
  ];
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 text-center">
        <SectionTitle eyebrow="Ferramentas" title="Ferramentas e referências do universo da IA" />
        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
          A palestra conecta teoria, mercado e aplicações práticas com base nas principais tecnologias que estão moldando o futuro do trabalho.
        </p>
        <div className="mt-14 grid grid-cols-3 gap-6 sm:gap-12 max-w-3xl mx-auto items-center">
          {logos.map((l) => (
            <div key={l.name} className="group flex flex-col items-center gap-3">
              <div className="grid place-items-center h-24 w-24 sm:h-28 sm:w-28 rounded-2xl border border-border/60 bg-card/60 backdrop-blur p-4 hover:border-primary/60 hover:shadow-[var(--shadow-glow)] transition">
                <img src={l.src} alt={l.name} className="h-full w-full object-contain" />
              </div>
              <span className="text-xs sm:text-sm text-muted-foreground">{l.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Speaker() {
  return (
    <section id="palestrante" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionTitle eyebrow="Palestrante" title="Sobre o palestrante" />
        <div className="mt-12 rounded-3xl border border-border/60 bg-gradient-to-br from-card/80 to-primary/5 backdrop-blur p-8 sm:p-12 relative overflow-hidden">
          <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
          <div className="relative grid md:grid-cols-[auto_1fr] gap-8 items-start">
            <div className="grid h-32 w-32 place-items-center rounded-3xl bg-gradient-to-br from-primary to-accent text-5xl font-display font-bold text-primary-foreground shadow-[var(--shadow-glow)]">
              R
            </div>
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Especialista em IA aplicada</div>
              <h3 className="mt-2 font-display text-2xl sm:text-3xl font-bold">Ruan de Araújo Silva</h3>
              <p className="mt-4 text-base sm:text-lg text-foreground/85 leading-relaxed">
                Empreendedor e especialista em automação, inteligência artificial aplicada a negócios e desenvolvimento de sistemas. Iniciou sua trajetória no TCM-BA, atuando com automação de processos e produtividade no setor público. Atualmente, é sócio-proprietário da <span className="text-primary font-semibold">Flow Sistemas</span>, onde desenvolve soluções digitais.
              </p>
              <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
                Como mentor e criador de conteúdos, Ruan ajuda profissionais, estudantes e empreendedores a entenderem como usar a IA de forma prática, estratégica e responsável — para aumentar produtividade, melhorar processos e se preparar para o futuro do trabalho.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function InterestForm() {
  const [submitting, setSubmitting] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      (e.target as HTMLFormElement).reset();
      toast.success("Interesse enviado!", { description: "Entraremos em contato em breve." });
    }, 800);
  }

  const inputCls = "w-full rounded-xl border border-border bg-input/60 backdrop-blur px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition";

  return (
    <section id="contato" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6">
        <div className="text-center">
          <SectionTitle
            eyebrow="Contato"
            title="Leve esta palestra para sua instituição ou turma"
            desc="Preencha o formulário e entraremos em contato para alinhar detalhes, disponibilidade e formato."
          />
        </div>

        <form onSubmit={onSubmit} className="mt-12 rounded-3xl border border-border/60 bg-card/70 backdrop-blur-xl p-6 sm:p-10 space-y-5">
          <div className="grid sm:grid-cols-2 gap-4">
            <input required name="nome" placeholder="Nome completo" className={inputCls} />
            <input required name="whatsapp" placeholder="WhatsApp" className={inputCls} />
            <input required type="email" name="email" placeholder="E-mail" className={inputCls} />
            <input name="cidade" placeholder="Cidade / Estado" className={inputCls} />
            <input name="instituicao" placeholder="Instituição / Empresa" className={inputCls} />
            <input name="cargo" placeholder="Cargo / Função" className={inputCls} />
            <select name="tipo" required className={inputCls + " appearance-none"}>
              <option value="">Tipo de interesse</option>
              <option>Quero levar para universidade</option>
              <option>Quero organizar uma turma</option>
              <option>Quero palestra para curso técnico</option>
              <option>Quero palestra para empresa</option>
              <option>Quero participar / mais informações</option>
            </select>
            <input name="quantidade" placeholder="Quantidade estimada de participantes" className={inputCls} />
            <input type="date" name="data" className={inputCls} />
          </div>
          <textarea name="mensagem" rows={4} placeholder="Mensagem / observações" className={inputCls} />

          <label className="flex items-start gap-3 text-sm text-muted-foreground cursor-pointer">
            <input type="checkbox" required className="mt-1 h-4 w-4 rounded border-border bg-input accent-[var(--neon)]" />
            <span>Autorizo o contato para receber informações sobre a palestra.</span>
          </label>

          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <button type="submit" disabled={submitting} className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary to-[var(--cyan-glow)] px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] hover:scale-[1.01] transition disabled:opacity-60">
              {submitting ? "Enviando..." : "Enviar interesse"} <ArrowRight className="h-4 w-4" />
            </button>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border border-accent bg-accent/10 px-6 py-3.5 text-sm font-semibold text-accent hover:bg-accent/20 transition neon-border">
              <MessageCircle className="h-4 w-4" /> Falar pelo WhatsApp
            </a>
          </div>
        </form>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-3xl border border-primary/40 bg-gradient-to-br from-primary/20 via-background to-accent/15 p-10 sm:p-16 text-center">
          <div className="absolute inset-0 grid-bg opacity-50" />
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-64 w-[80%] bg-primary/30 blur-[120px] rounded-full" />
          <div className="relative">
            <h2 className="font-display text-3xl sm:text-5xl font-bold leading-tight glow-text">
              A IA já está mudando o mercado.<br />
              <span className="bg-gradient-to-r from-[var(--cyan-glow)] to-[var(--neon)] bg-clip-text text-transparent">Sua instituição está preparada?</span>
            </h2>
            <p className="mt-5 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Leve uma palestra atual, prática e estratégica para estudantes e profissionais que querem se destacar na nova era do trabalho.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <a href="#contato" className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary to-[var(--cyan-glow)] px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] hover:scale-[1.02] transition">
                Quero organizar esta palestra <ArrowRight className="h-4 w-4" />
              </a>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card/70 backdrop-blur px-7 py-3.5 text-sm font-semibold text-foreground hover:bg-card transition">
                Entrar em contato
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/40 py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
        <div className="flex items-center gap-2">
          <Sparkles className="h-4 w-4 text-primary" />
          <span>Inteligência Artificial e o Futuro do Trabalho · Ruan de Araújo Silva</span>
        </div>
        <div>© {new Date().getFullYear()} · Todos os direitos reservados</div>
      </div>
    </footer>
  );
}
