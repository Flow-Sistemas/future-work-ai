import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect, useRef, type FormEvent } from "react";
import {
  Sparkles, Brain, Cpu, Rocket, ShieldCheck, GraduationCap,
  Briefcase, Users, Clock, ArrowRight, MessageCircle, Check,
  Zap, Target, TrendingUp, Lightbulb, ChevronRight, ChevronLeft,
  Building2, User2, Info, Settings2, Command, Plus
} from "lucide-react";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";

import heroDesktopImg from "@/assets/Gemini_Generated_Image_47e13047e13047e1.png";
import heroMobileImg from "@/assets/Banner Hero Mobile - IA e Futuro do Trabalho (1).png";
import heroVideo from "@/assets/hero-video.mp4";
import logoClaudeImg from "@/assets/image (23).png";
import logoOpenaiImg from "@/assets/image (24).png";
import logoGeminiImg from "@/assets/image (25).png";
import lectureImg from "@/assets/fotopalestra.jpg";
import { SplineSceneBasic } from "@/components/ui/spline-scene-basic";
import { BentoGridShowcase } from "@/components/ui/bento-product-features";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";

// Adapters so the rest of the code keeps using .url notation
const heroDesktop = { url: heroDesktopImg };
const heroMobile = { url: heroMobileImg };
const logoClaude = { url: logoClaudeImg };
const logoOpenai = { url: logoOpenaiImg };
const logoGemini = { url: logoGeminiImg };

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Palestra sobre Inteligência Artificial e Futuro do Trabalho" },
      { name: "description", content: "Landing page da palestra Inteligência Artificial e o Futuro do Trabalho. Saiba como a IA está transformando o mercado e como se preparar." },
      { property: "og:title", content: "IA e o Futuro do Trabalho — Palestra com Ruan de Araújo" },
      { property: "og:description", content: "Como usar IA para se destacar no mercado, aumentar produtividade e se preparar para as novas profissões." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: LandingPage,
});

const WHATSAPP_URL = "https://wa.me/?text=Tenho%20interesse%20na%20palestra%20IA%20e%20o%20Futuro%20do%20Trabalho";

// ─── Intersection Observer Hook ───────────────────────────────────────────────
function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return { ref, inView };
}

// ─── Animated Section Wrapper ─────────────────────────────────────────────────
function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const { ref, inView } = useInView();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(32px)",
        transition: `opacity 0.65s ease ${delay}ms, transform 0.65s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

// ─── Landing Page ─────────────────────────────────────────────────────────────
function LandingPage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Toaster theme="dark" position="top-center" />
      <Nav />
      <Hero />
      <AboutAndTopics />
      <Benefits />
      <Speaker />
      <InterestForm />
      <FinalCTA />
      <Footer />
    </div>
  );
}

// ─── Nav ──────────────────────────────────────────────────────────────────────
function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border/40 hidden md:block">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 font-display font-bold text-lg">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-primary to-accent shadow-[var(--shadow-glow)]">
            <Sparkles className="h-4 w-4 text-primary-foreground" />
          </span>
          <span>Ruan <span className="text-primary">Araújo</span></span>
        </a>
        <nav className="hidden md:flex items-center gap-7 text-sm text-muted-foreground">
          <a href="#sobre" className="hover:text-foreground transition">Sobre</a>
          <a href="#conteudo" className="hover:text-foreground transition">Conteúdo</a>
          <a href="#palestrante" className="hover:text-foreground transition">Palestrante</a>
          <a href="#contato" className="hover:text-foreground transition">Contato</a>
        </nav>
        <a href="#contato" className="hidden sm:inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:opacity-90 transition shadow-[var(--shadow-glow)]">
          Participar <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </header>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden">

      {/* ── DESKTOP layout ── */}
      <div className="hidden md:block absolute inset-0">
        <video
          src={heroVideo}
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover object-center"
        />
        {/* gradiente da direita para o texto ficar legível */}
        <div className="absolute inset-0 bg-gradient-to-l from-background via-background/60 to-transparent" />
        {/* gradiente de baixo para cima — reforça a parte inferior */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/30 to-transparent" />
      </div>

      {/* ── MOBILE layout ── */}
      <div className="md:hidden absolute inset-0">
        <video
          src={heroVideo}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover object-[15%_10%]"
        />
        {/* gradiente pesado na parte inferior — texto fica no fundo */}
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to top, oklch(0.14 0.03 250) 38%, oklch(0.14 0.03 250 / 70%) 60%, transparent 100%)" }}
        />
      </div>

      {/* ── DESKTOP: texto centralizado na vertical e mais para a direita ── */}
      <div className="hidden md:flex absolute inset-0 items-center justify-center md:justify-end md:pr-[8vw] lg:pr-[10vw]">
        <div
          className="w-full max-w-xl px-6"
          style={{ animation: "heroSlideIn 0.8s ease both" }}
        >
          <HeroContent />
        </div>
      </div>

      {/* ── MOBILE: texto bem na parte INFERIOR ── */}
      <div className="md:hidden flex absolute inset-0 items-end pb-10">
        <div className="w-full px-5" style={{ animation: "heroSlideUp 0.8s ease both" }}>
          <HeroContent mobile />
        </div>
      </div>
    </section>
  );
}

function HeroContent({ mobile = false }: { mobile?: boolean }) {
  return (
    <>
      <h1 className={`mt-0 font-display font-bold leading-[1.05] tracking-tight glow-text ${
        mobile ? "text-3xl" : "text-5xl md:text-6xl lg:text-7xl"
      }`}>
        IA e o{" "}
        <span className="bg-gradient-to-r from-[var(--cyan-glow)] to-[var(--neon)] bg-clip-text text-transparent">
          Futuro do Trabalho
        </span>
      </h1>

      {!mobile && (
        <p className="mt-6 text-base md:text-lg text-muted-foreground max-w-lg">
          Como usar IA para se destacar, aumentar produtividade e se preparar para as novas profissões.
        </p>
      )}

      <div className={`flex gap-3 ${mobile ? "mt-5 flex-col" : "mt-6 flex-col sm:flex-row"}`}>
        <a
          href="#contato"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary to-[var(--cyan-glow)] px-5 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] hover:scale-[1.02] transition"
        >
          Participar <ArrowRight className="h-4 w-4" />
        </a>
        <a
          href="#contato"
          className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card/60 backdrop-blur px-5 py-3 text-sm font-semibold text-foreground hover:bg-card transition"
        >
          Tenho interesse
        </a>
      </div>

      {!mobile && (
        <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5 text-primary" /> 1h30</div>
          <div className="flex items-center gap-1.5"><Users className="h-3.5 w-3.5 text-accent" /> Universidades · Empresas</div>
          <div className="flex items-center gap-1.5"><Zap className="h-3.5 w-3.5 text-primary" /> Prático e estratégico</div>
        </div>
      )}
    </>
  );
}

// ─── Section Title ────────────────────────────────────────────────────────────
function SectionTitle({ eyebrow, title, desc }: { eyebrow?: string; title: string; desc?: string }) {
  return (
    <div className="max-w-3xl">
      {eyebrow && <div className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">{eyebrow}</div>}
      <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">{title}</h2>
      {desc && <p className="mt-4 text-base sm:text-lg text-muted-foreground">{desc}</p>}
    </div>
  );
}

// ─── About & Topics (Bento Grid Layout) ────────────────────────────────────────
const TOPICS = [
  { icon: Brain, text: "O que é Inteligência Artificial e por que ela está mudando o mercado", textShort: "IA & Mercado" },
  { icon: Cpu, text: "Como a IA generativa funciona na prática", textShort: "IA Generativa" },
  { icon: Briefcase, text: "Impactos da IA nas profissões e nas empresas", textShort: "Impacto Profissional" },
  { icon: Target, text: "A IA vai substituir profissionais ou transformar tarefas?", textShort: "Humanos + IA" },
  { icon: TrendingUp, text: "Habilidades mais valorizadas na nova era profissional", textShort: "Novas Habilidades" },
  { icon: Zap, text: "Como estudantes e profissionais podem usar IA no dia a dia", textShort: "IA no Cotidiano" },
  { icon: ShieldCheck, text: "Riscos, ética, plágio, privacidade e responsabilidade", textShort: "Ética & Privacidade" },
  { icon: Lightbulb, text: "Plano prático para aplicar IA na própria área", textShort: "Plano Prático" },
];

const IntegrationCard = () => (
  <Card className="flex h-full flex-col border-border/60 bg-card/40 backdrop-blur hover:border-primary/50 transition-all duration-300">
    <CardHeader>
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 border border-primary/20">
        <Sparkles className="h-6 w-6 text-primary shadow-[var(--shadow-glow)]" />
      </div>
      <CardTitle className="text-xl sm:text-2xl font-bold">Sobre a Palestra</CardTitle>
      <CardDescription className="mt-2 text-sm sm:text-base leading-relaxed text-foreground/80 text-justify">
        A palestra apresenta, de forma prática e acessível, como a Inteligência Artificial está transformando o mercado, as profissões e a forma como estudantes e profissionais trabalham.
        <br /><br />
        O conteúdo mostra como usar ferramentas de IA no dia a dia, quais habilidades serão mais valorizadas, quais riscos devem ser evitados e como se preparar para as oportunidades da nova era profissional.
      </CardDescription>
    </CardHeader>
    <CardFooter className="mt-auto pt-6 flex flex-wrap gap-2">
      <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
        1h30 de Conteúdo
      </Badge>
      <Badge variant="outline" className="border-accent/30 text-accent bg-accent/5">
        Presencial
      </Badge>
      <Badge variant="outline" className="border-border text-muted-foreground">
        Prático & Estratégico
      </Badge>
    </CardFooter>
  </Card>
);

const TrackersCard = () => (
  <Card className="h-full border-border/60 bg-card/40 backdrop-blur hover:border-primary/50 transition-all duration-300">
    <CardContent className="flex h-full flex-col justify-between p-6">
      <div>
        <CardTitle className="text-base font-semibold">Público-Alvo</CardTitle>
        <CardDescription className="text-xs text-muted-foreground">Para quem é a palestra</CardDescription>
      </div>
      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mt-2">
        Estudantes universitários, profissionais em início de carreira, empresas e equipes que buscam se destacar na era digital.
      </p>
      <div className="flex -space-x-2 overflow-hidden mt-4">
        <img
          className="inline-block h-8 w-8 rounded-full ring-2 ring-card"
          src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?w=100&q=80"
          alt="User 1"
        />
        <img
          className="inline-block h-8 w-8 rounded-full ring-2 ring-card"
          src="https://images.unsplash.com/photo-1550525811-e5869dd03032?w=100&q=80"
          alt="User 2"
        />
        <img
          className="inline-block h-8 w-8 rounded-full ring-2 ring-card"
          src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80"
          alt="User 3"
        />
      </div>
    </CardContent>
  </Card>
);

const FocusCard = () => (
  <Card className="h-full border-border/60 bg-card/40 backdrop-blur hover:border-primary/50 transition-all duration-300">
    <CardContent className="flex h-full flex-col justify-between p-6">
      <div className="flex items-start justify-between">
        <div>
          <CardTitle className="text-base font-semibold">Foco Prático</CardTitle>
          <CardDescription className="text-xs text-muted-foreground">Aplicabilidade no dia a dia</CardDescription>
        </div>
        <Badge variant="outline" className="border-accent/30 text-accent bg-accent/5">
          Prompting & IAs
        </Badge>
      </div>
      <div className="mt-4">
        <span className="text-5xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">100%</span>
      </div>
      <div className="flex justify-between text-[10px] text-muted-foreground mt-2">
        <span>Conteúdo aplicável</span>
        <span>Sem enrolação</span>
      </div>
    </CardContent>
  </Card>
);

const StatisticCard = () => (
  <Card className="relative h-full w-full overflow-hidden border-border/60 bg-card/40 backdrop-blur hover:border-primary/50 transition-all duration-300 flex items-center justify-center">
    <div
      className="absolute inset-0 opacity-10"
      style={{
        backgroundImage: "radial-gradient(hsl(var(--foreground)) 1px, transparent 1px)",
        backgroundSize: "16px 16px",
      }}
    />
    <CardContent className="relative z-10 flex h-full flex-col items-center justify-center p-6 text-center">
      <span className="text-6xl sm:text-7xl font-bold font-display bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-transparent">1h30</span>
      <span className="text-[10px] uppercase tracking-wider text-muted-foreground mt-2 font-semibold">Duração da Palestra</span>
    </CardContent>
  </Card>
);

const ProductivityCard = () => (
  <Card className="h-full border-border/60 bg-card/40 backdrop-blur hover:border-primary/50 transition-all duration-300">
    <CardContent className="flex h-full flex-col justify-between p-6 font-display">
      <div>
        <CardTitle className="text-base font-semibold">IA & Produtividade</CardTitle>
        <CardDescription className="text-xs text-muted-foreground">Metodologias inteligentes</CardDescription>
      </div>
      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mt-2">
        Como utilizar ferramentas de Inteligência Artificial para otimizar tarefas cotidianas, economizar tempo e focar em estratégia.
      </p>
      <div className="flex gap-4 mt-3 items-center">
        <img src={logoOpenai.url} alt="OpenAI" className="h-4 sm:h-5 w-auto object-contain opacity-75 hover:opacity-100 transition-opacity" />
        <img src={logoClaude.url} alt="Claude" className="h-4 sm:h-5 w-auto object-contain opacity-75 hover:opacity-100 transition-opacity" />
        <img src={logoGemini.url} alt="Gemini" className="h-4 sm:h-5 w-auto object-contain opacity-75 hover:opacity-100 transition-opacity" />
      </div>
    </CardContent>
  </Card>
);

const ShortcutsCard = () => (
  <Card className="h-full border-border/60 bg-card/40 backdrop-blur hover:border-primary/50 transition-all duration-300">
    <CardContent className="flex h-full flex-col justify-between p-6">
      <div>
        <CardTitle className="text-base font-semibold">Conteúdo Programático</CardTitle>
        <CardDescription className="text-xs text-muted-foreground">
          Oito blocos práticos divididos por temas:
        </CardDescription>
      </div>
      <div className="flex flex-wrap gap-2 mt-4">
        {TOPICS.map((t, idx) => (
          <div
            key={idx}
            className="flex items-center gap-2 rounded-lg border border-border/40 bg-background/50 px-2.5 py-1.5 text-xs text-foreground/90 hover:border-primary/30 transition-colors animate-pulse-subtle"
            title={t.text}
          >
            <div className="flex h-5 w-5 items-center justify-center rounded bg-muted text-[10px] font-mono font-bold text-muted-foreground border border-border/60">
              {idx + 1}
            </div>
            <span className="font-semibold text-xs text-foreground">{t.textShort}</span>
          </div>
        ))}
      </div>
    </CardContent>
  </Card>
);

function AboutAndTopics() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div id="sobre" className="absolute top-0" />
      <div id="conteudo" className="absolute top-1/2" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">

        <BentoGridShowcase
          integration={<IntegrationCard />}
          trackers={<TrackersCard />}
          statistic={<StatisticCard />}
          focus={<FocusCard />}
          productivity={<ProductivityCard />}
          shortcuts={<ShortcutsCard />}
        />
      </div>
    </section>
  );
}

// ─── Benefits ─────────────────────────────────────────────────────────────────
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
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <FadeIn>
            <SectionTitle eyebrow="Resultado" title="O diferencial após a palestra" desc="O que o participante leva para a vida profissional." />
          </FadeIn>
          <ul className="space-y-3">
            {BENEFITS.map((b, i) => (
              <FadeIn key={i} delay={i * 80}>
                <li className="flex items-start gap-4 rounded-xl border border-border/60 bg-card/60 backdrop-blur p-5 hover:border-accent/60 transition-all duration-300">
                  <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-accent/20 border border-accent/40">
                    <Check className="h-4 w-4 text-accent" />
                  </span>
                  <span className="text-sm sm:text-base text-foreground/90">{b}</span>
                </li>
              </FadeIn>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}


// ─── Speaker ──────────────────────────────────────────────────────────────────
function Speaker() {
  return (
    <section id="palestrante" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <FadeIn>
          <SectionTitle eyebrow="Palestrante" title="Sobre o palestrante" />
        </FadeIn>
        <FadeIn delay={150}>
          <div className="mt-12 rounded-3xl border border-border/60 bg-gradient-to-br from-card/80 to-primary/5 backdrop-blur p-8 sm:p-12 relative overflow-hidden">
            <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
            <div className="relative grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-5 w-full rounded-2xl overflow-hidden border border-border/40 shadow-[var(--shadow-glow)] group/speaker-img">
                <img
                  src={lectureImg}
                  alt="Ruan Araújo Silva"
                  className="w-full h-auto object-contain transition-all duration-500 group-hover/speaker-img:scale-105"
                />
              </div>
              <div className="lg:col-span-7 flex flex-col items-center md:items-start text-center md:text-left">
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Especialista em IA aplicada</div>
                <h3 className="mt-2 font-display text-2xl sm:text-3xl font-bold">Ruan de Araújo Silva</h3>
                <p className="mt-4 text-base sm:text-lg text-foreground/85 leading-relaxed text-justify">
                  Empreendedor e especialista em automação, inteligência artificial aplicada a negócios e desenvolvimento de sistemas. Iniciou sua trajetória no TCM-BA, atuando com automação de processos e produtividade no setor público. Atualmente, é sócio-proprietário da <span className="text-primary font-semibold">Flow Sistemas</span>, onde desenvolve soluções digitais.
                </p>
                <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed text-justify">
                  Como mentor e criador de conteúdos, Ruan ajuda profissionais, estudantes e empreendedores a entenderem como usar a IA de forma prática, estratégica e responsável — para aumentar produtividade, melhorar processos e se preparar para o futuro do trabalho.
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

// ─── Multi-Step Form ──────────────────────────────────────────────────────────
type FormData = {
  nome: string;
  whatsapp: string;
  email: string;
  cidade: string;
  instituicao: string;
  cargo: string;
  tipo: string;
  quantidade: string;
  data: string;
  mensagem: string;
  aceite: boolean;
};

const INITIAL_FORM: FormData = {
  nome: "", whatsapp: "", email: "", cidade: "",
  instituicao: "", cargo: "", tipo: "", quantidade: "",
  data: "", mensagem: "", aceite: false,
};

const STEPS = [
  { label: "Identificação", icon: User2 },
  { label: "Instituição", icon: Building2 },
  { label: "Detalhes", icon: MessageCircle },
];

function InterestForm() {
  const [step, setStep] = useState(0);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const [animating, setAnimating] = useState(false);
  const [form, setForm] = useState<FormData>(INITIAL_FORM);
  const [submitting, setSubmitting] = useState(false);

  const inputCls = "w-full rounded-xl border border-border bg-input/60 backdrop-blur px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition";

  function update(field: keyof FormData, value: string | boolean) {
    setForm(prev => ({ ...prev, [field]: value }));
  }

  function changeStep(next: number) {
    if (animating) return;
    setDirection(next > step ? "next" : "prev");
    setAnimating(true);
    setTimeout(() => {
      setStep(next);
      setAnimating(false);
    }, 280);
  }

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setForm(INITIAL_FORM);
      setStep(0);
      toast.success("Interesse enviado!", { description: "Entraremos em contato em breve." });
    }, 900);
  }

  // Slide animation styles
  const slideStyle: React.CSSProperties = animating
    ? {
        opacity: 0,
        transform: direction === "next" ? "translateX(40px)" : "translateX(-40px)",
        transition: "opacity 0.28s ease, transform 0.28s ease",
      }
    : {
        opacity: 1,
        transform: "translateX(0)",
        transition: "opacity 0.32s ease 0.05s, transform 0.32s ease 0.05s",
      };

  return (
    <section id="contato" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="relative mx-auto max-w-3xl px-4 sm:px-6">
        <FadeIn>
          <div className="text-center">
            <SectionTitle
              eyebrow="Contato"
              title="Leve esta palestra para sua instituição ou turma"
              desc="Preencha o formulário e entraremos em contato para alinhar detalhes, disponibilidade e formato."
            />
          </div>
        </FadeIn>

        <FadeIn delay={120}>
          <div className="mt-12 rounded-3xl border border-accent/60 bg-card/70 backdrop-blur-xl p-6 sm:p-10 shadow-[0_0_30px_oklch(0.85_0.22_145_/_25%)]">
            {/* Step progress */}
            <div className="mb-8">
              <div className="flex items-center justify-between relative">
                <div className="absolute top-5 left-0 right-0 h-0.5 bg-border/60 mx-12" />
                <div
                  className="absolute top-5 left-0 h-0.5 bg-primary mx-12 transition-all duration-500"
                  style={{ width: `calc(${(step / (STEPS.length - 1)) * 100}% - 0px)` }}
                />
                {STEPS.map((s, i) => {
                  const Icon = s.icon;
                  const done = i < step;
                  const active = i === step;
                  return (
                    <button
                      key={i}
                      type="button"
                      onClick={() => i < step && changeStep(i)}
                      className="relative flex flex-col items-center gap-2 z-10 group"
                      disabled={i > step}
                    >
                      <span
                        className={`grid h-10 w-10 place-items-center rounded-full border-2 transition-all duration-300 ${
                          done
                            ? "border-primary bg-primary text-primary-foreground"
                            : active
                            ? "border-primary bg-primary/20 text-primary shadow-[var(--shadow-glow)]"
                            : "border-border bg-card text-muted-foreground"
                        }`}
                      >
                        {done ? <Check className="h-4 w-4" /> : <Icon className="h-4 w-4" />}
                      </span>
                      <span className={`text-xs font-medium whitespace-nowrap ${active ? "text-primary" : done ? "text-foreground" : "text-muted-foreground"}`}>
                        {s.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            <form onSubmit={onSubmit}>
              <div style={slideStyle}>
                {step === 0 && (
                  <div className="space-y-4">
                    <h3 className="text-base font-semibold text-foreground mb-4">Seus dados de contato</h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <input
                        required
                        name="nome"
                        placeholder="Nome completo"
                        className={inputCls}
                        value={form.nome}
                        onChange={e => update("nome", e.target.value)}
                      />
                      <input
                        required
                        name="whatsapp"
                        placeholder="WhatsApp"
                        className={inputCls}
                        value={form.whatsapp}
                        onChange={e => update("whatsapp", e.target.value)}
                      />
                    </div>
                    <input
                      required
                      type="email"
                      name="email"
                      placeholder="E-mail"
                      className={inputCls}
                      value={form.email}
                      onChange={e => update("email", e.target.value)}
                    />
                    <input
                      name="cidade"
                      placeholder="Cidade / Estado"
                      className={inputCls}
                      value={form.cidade}
                      onChange={e => update("cidade", e.target.value)}
                    />
                  </div>
                )}

                {step === 1 && (
                  <div className="space-y-4">
                    <h3 className="text-base font-semibold text-foreground mb-4">Sobre a sua instituição</h3>

                    {/* Campo Empresa com info discreta */}
                    <div className="space-y-1.5">
                      <input
                        name="instituicao"
                        placeholder="Instituição / Empresa"
                        className={inputCls}
                        value={form.instituicao}
                        onChange={e => update("instituicao", e.target.value)}
                      />
                      <p className="flex items-center gap-1.5 text-[11px] text-muted-foreground/60 px-1">
                        <Info className="h-3 w-3 shrink-0" />
                        Usamos este dado para personalizar o conteúdo da palestra ao contexto da sua organização.
                      </p>
                    </div>

                    {/* Campo Cargo com info discreta */}
                    <div className="space-y-1.5">
                      <input
                        name="cargo"
                        placeholder="Cargo / Função"
                        className={inputCls}
                        value={form.cargo}
                        onChange={e => update("cargo", e.target.value)}
                      />
                      <p className="flex items-center gap-1.5 text-[11px] text-muted-foreground/60 px-1">
                        <Info className="h-3 w-3 shrink-0" />
                        Conhecer seu cargo nos ajuda a melhorar a qualidade e relevância da palestra com base nos profissionais presentes.
                      </p>
                    </div>

                    <select
                      name="tipo"
                      required
                      className={inputCls + " appearance-none"}
                      value={form.tipo}
                      onChange={e => update("tipo", e.target.value)}
                    >
                      <option value="">Tipo de interesse</option>
                      <option>Quero levar para universidade</option>
                      <option>Quero organizar uma turma</option>
                      <option>Quero palestra para curso técnico</option>
                      <option>Quero palestra para empresa</option>
                      <option>Quero participar / mais informações</option>
                    </select>
                  </div>
                )}

                {step === 2 && (
                  <div className="space-y-4">
                    <h3 className="text-base font-semibold text-foreground mb-4">Detalhes do evento</h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <input
                        name="quantidade"
                        placeholder="Quantidade estimada de participantes"
                        className={inputCls}
                        value={form.quantidade}
                        onChange={e => update("quantidade", e.target.value)}
                      />
                      <input
                        type="date"
                        name="data"
                        className={inputCls}
                        value={form.data}
                        onChange={e => update("data", e.target.value)}
                      />
                    </div>
                    <textarea
                      name="mensagem"
                      rows={4}
                      placeholder="Mensagem / observações"
                      className={inputCls}
                      value={form.mensagem}
                      onChange={e => update("mensagem", e.target.value)}
                    />
                    <label className="flex items-start gap-3 text-sm text-muted-foreground cursor-pointer">
                      <input
                        type="checkbox"
                        required
                        className="mt-1 h-4 w-4 rounded border-border bg-input accent-[var(--neon)]"
                        checked={form.aceite}
                        onChange={e => update("aceite", e.target.checked)}
                      />
                      <span>Autorizo o contato para receber informações sobre a palestra.</span>
                    </label>
                  </div>
                )}
              </div>

              {/* Navigation */}
              <div className="mt-8 flex flex-col sm:flex-row gap-3 pt-2">
                {step > 0 && (
                  <button
                    type="button"
                    onClick={() => changeStep(step - 1)}
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card/60 px-5 py-3 text-sm font-medium text-foreground hover:bg-card transition"
                  >
                    <ChevronLeft className="h-4 w-4" /> Anterior
                  </button>
                )}

                {step < STEPS.length - 1 ? (
                  <button
                    type="button"
                    onClick={() => changeStep(step + 1)}
                    className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary to-[var(--cyan-glow)] px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] hover:scale-[1.01] transition"
                  >
                    Próximo <ChevronRight className="h-4 w-4" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={submitting}
                    className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary to-[var(--cyan-glow)] px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] hover:scale-[1.01] transition disabled:opacity-60"
                  >
                    {submitting ? "Enviando..." : "Enviar interesse"} <ArrowRight className="h-4 w-4" />
                  </button>
                )}

                {step === STEPS.length - 1 && (
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-accent bg-accent/10 px-6 py-3.5 text-sm font-semibold text-accent hover:bg-accent/20 transition neon-border"
                  >
                    <MessageCircle className="h-4 w-4" /> WhatsApp
                  </a>
                )}
              </div>
            </form>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

// ─── Final CTA ────────────────────────────────────────────────────────────────
function FinalCTA() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <FadeIn>
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
                <a
                  href="#contato"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary to-[var(--cyan-glow)] px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] hover:scale-[1.02] transition"
                >
                  Quero organizar esta palestra <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card/70 backdrop-blur px-7 py-3.5 text-sm font-semibold text-foreground hover:bg-card transition"
                >
                  Entrar em contato
                </a>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────
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
