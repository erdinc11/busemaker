"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { navigation, platformLabels, siteContent, socialOrder, type SocialPlatform } from "../data/siteContent";
import { useLanguage } from "./language-provider";

gsap.registerPlugin(ScrollTrigger);

const siteBasePath = process.env.NODE_ENV === "production" ? "/busemaker" : "";

function assetPath(path: string) {
  return path.startsWith("/") ? `${siteBasePath}${path}` : path;
}

function useCinematicReveal(scope: React.RefObject<HTMLElement | null>) {
  useEffect(() => {
    if (!scope.current || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const context = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((element) => {
        gsap.fromTo(element, { y: 42, opacity: 0 }, {
          y: 0,
          opacity: 1,
          duration: 1.1,
          ease: "power3.out",
          scrollTrigger: { trigger: element, start: "top 88%", once: true },
        });
      });
      gsap.utils.toArray<HTMLElement>("[data-float]").forEach((element) => {
        gsap.to(element, { yPercent: -5, ease: "none", scrollTrigger: { trigger: element, scrub: 1.4 } });
      });
    }, scope);
    return () => context.revert();
  }, [scope]);
}

function useLocalizedNavigation() {
  const { copy } = useLanguage();
  return navigation.map((item, index) => ({ ...item, label: copy.ui.nav[index] }));
}

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { locale, copy, toggleLocale } = useLanguage();
  const navItems = useLocalizedNavigation();
  const { ui } = copy;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <Link className="wordmark" href="/#home" aria-label={`Busem Aker ${locale === "tr" ? "ana sayfa" : "home"}`}>
        <img className="brand-logo brand-logo--header" src={assetPath(siteContent.assets.logos.light)} alt="Busem Aker" />
      </Link>
      <nav className="header-nav" aria-label={ui.primaryNav}>
        {navItems.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
      </nav>
      <Link className="header-booking" href="/contact">{ui.headerBooking}</Link>
      <button className="language-switch" type="button" aria-label={`${ui.languageLabel}: ${ui.switchTo}`} title={`${ui.languageLabel}: ${ui.switchTo}`} onClick={toggleLocale}>
        <span className="language-switch-label">{ui.languageLabel}</span>
        <span className="language-switch-full">{ui.switchTo}</span>
        <span className="language-switch-short">{locale === "en" ? "TR" : "EN"}</span>
      </button>
      <button className="mobile-menu" type="button" aria-label={open ? ui.closeMenu : ui.openMenu} aria-expanded={open} onClick={() => setOpen((value) => !value)}>
        {open ? "×" : "☰"}
      </button>
      {open && <nav className="mobile-nav" aria-label={ui.mobileNav}>{navItems.map((item) => <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</Link>)}</nav>}
    </header>
  );
}

function Atmosphere({ src, className = "" }: { src: string; className?: string }) {
  return <div className={`atmosphere ${className}`} style={{ backgroundImage: `url("${assetPath(src)}")` }} aria-hidden="true" />;
}

function PillButton({ href, children, solid = false }: { href: string; children: React.ReactNode; solid?: boolean }) {
  return <Link className={`button ${solid ? "button--solid" : ""}`} href={href}><span className="button-icon">↗</span>{children}</Link>;
}

export function Hero() {
  const { copy } = useLanguage();
  const { artist, ui } = copy;
  return <section id="home" className="section-shell hero"><Atmosphere src={siteContent.assets.hero} className="atmosphere--hero" /><div className="hero-phrases" aria-label="Artist mission"><p className="hero-phrase hero-phrase--reach">{ui.heroPhraseReach[0]}<br />{ui.heroPhraseReach[1]}</p><p className="hero-phrase hero-phrase--career">{ui.heroPhraseCareer[0]}<br />{ui.heroPhraseCareer[1]}</p></div><div className="section-content"><p className="eyebrow">{ui.heroEyebrow}</p><h1 className="display display--hero accent">BUSEM AKER</h1><div className="hero-details"><p>{artist.shortBio} {ui.heroFollowup}</p><PillButton href="#music" solid>{ui.heroCta}</PillButton></div></div></section>;
}

export function Intro() {
  const { copy } = useLanguage();
  const { artist, ui } = copy;
  return <section className="section-shell intro"><Atmosphere src={siteContent.assets.intro} className="atmosphere--light" /><div className="section-content intro-layout"><p className="section-kicker">{ui.introKicker}</p><h2 className="display display--section" data-reveal>{ui.introHeading[0]}<br /><span className="muted">{ui.introHeading[1]}</span><br />{ui.introHeading[2]}</h2><div className="intro-copy" data-reveal><p>{artist.shortBio} {ui.introFollowup}</p><PillButton href="#about">{ui.introCta}</PillButton></div></div></section>;
}

export function AboutManifesto() {
  const { copy } = useLanguage();
  const { artist, ui } = copy;
  return <section id="about" className="section-shell about-manifesto"><Atmosphere src={siteContent.assets.about} /><div className="about-manifesto-grain" aria-hidden="true" /><div className="section-content about-manifesto-grid"><div className="stepped-label" data-reveal>{ui.aboutLabel.map((label) => <span key={label}>{label}</span>)}</div><div className="manifesto-copy"><p className="eyebrow">{ui.aboutEyebrow}</p><h2 className="display" data-reveal>{ui.aboutHeading[0]}<br /><span className="muted">{ui.aboutHeading[1]}</span><br />{ui.aboutHeading[2]}<br /><span className="accent">{ui.aboutHeading[3]}</span></h2><p data-reveal>{artist.longBio[2]}</p><div className="manifesto-divider" /><div className="manifesto-meta"><span>{ui.aboutMeta[0]}</span><span>{ui.aboutMeta[1]}</span></div></div></div></section>;
}

export function Music() {
  const { copy } = useLanguage();
  const { artist, release: localizedRelease, ui } = copy;
  const release = siteContent.releases[0];
  const [activeChapter, setActiveChapter] = useState(0);
  const chapters = localizedRelease.chapters;
  const activeTitle = chapters[activeChapter]?.split(" — ")[0] ?? release.title;
  const activeArtwork = release.chapterArtworks?.[activeChapter] ?? release.artwork;
  return <section id="music" className="section-shell music"><Atmosphere src={siteContent.assets.music} /><div className="section-content"><div className="music-heading"><div><p className="section-kicker">{ui.featuredProject}</p><h2 className="display display--section" data-reveal>{release.title}</h2></div><span className="muted">{ui.releaseFormat}</span></div><div className="release-stage"><div className={`release-art release-art--${activeChapter}`} data-float><img className="release-art-image" src={assetPath(activeArtwork)} alt="" aria-hidden="true" /><span className="release-number">I — IV</span><span className="release-title">{activeTitle}</span></div><div className="release-copy" data-reveal><p className="eyebrow">{localizedRelease.subtitle}</p><h3>{release.title}</h3><p>{localizedRelease.description} <em>“{artist.manifesto}”</em></p><ol className="chapter-list">{chapters.map((chapter, index) => <li key={chapter}><button type="button" aria-pressed={activeChapter === index} onClick={() => setActiveChapter(index)}>{chapter}</button></li>)}</ol><PillButton href="/contact">{ui.releaseDetails}</PillButton></div></div></div></section>;
}

export function Videos() {
  const { copy } = useLanguage();
  const { ui } = copy;
  const track = useRef<HTMLDivElement>(null);
  const scroll = (direction: number) => track.current?.scrollBy({ left: direction * track.current.clientWidth * .72, behavior: "smooth" });
  return <section id="videos" className="section-shell carousel-section"><Atmosphere src={siteContent.assets.videos} /><div className="section-content"><div className="carousel-heading"><div><p className="section-kicker">{ui.videoKicker}</p><h2 className="display display--section" data-reveal>{ui.videos}</h2></div><div className="carousel-controls"><button className="circle-button" type="button" onClick={() => scroll(-1)} aria-label={ui.previousVideo}>←</button><button className="circle-button" type="button" onClick={() => scroll(1)} aria-label={ui.nextVideo}>→</button></div></div><div className="video-track" ref={track}>{siteContent.videos.map((video, index) => <Link className="video-card" key={video.title} href={video.href}><div className="video-image" style={{ backgroundImage: `url("${assetPath(video.thumbnail)}")` }} /><span className="play-button">▶</span><div className="video-card-content"><p className="eyebrow">{copy.videos[index][0]}</p><h3>{copy.videos[index][1]}</h3></div></Link>)}</div></div></section>;
}

export function Shows() {
  const { ui } = useLanguage().copy;
  const upcoming = siteContent.shows.filter((show) => show.status === "upcoming");
  return <section id="shows" className="section-shell shows"><Atmosphere src={siteContent.assets.shows[0]} /><div className="section-content"><div className="shows-heading"><div><p className="section-kicker">{ui.showsKicker}</p><h2 className="display display--section" data-reveal>{ui.shows}</h2></div><PillButton href="/contact">{ui.allBooking}</PillButton></div>{upcoming.length === 0 ? <div className="empty-state" data-reveal><p>{ui.emptyShows}</p></div> : <div className="shows-grid">{upcoming.map((show) => <article className="show-card" key={`${show.date}-${show.venue}`}><div className="show-image" style={{ backgroundImage: `url("${assetPath(show.image ?? siteContent.assets.shows[1])}")` }} /><div className="show-content"><div className="show-meta"><span>{show.date}</span><span>{show.city}, {show.country}</span></div><h3>{show.event}<br /><span className="muted">{show.venue}</span></h3></div></article>)}</div>}</div></section>;
}

export function BookingBand() {
  const { ui } = useLanguage().copy;
  return <section className="section-shell booking-band"><Atmosphere src={siteContent.assets.intro} className="atmosphere--light" /><div className="section-content booking-band-content"><p className="eyebrow">{ui.bookingKicker}</p><h2 data-reveal>{ui.bookingHeading[0]}<br />{ui.bookingHeading[1]}</h2><p data-reveal>{ui.bookingBody}</p><PillButton href="/contact" solid>{ui.bookingCta}</PillButton></div></section>;
}

export function Prefooter() {
  const { artist, ui } = useLanguage().copy;
  return <section className="section-shell prefooter"><Atmosphere src={siteContent.assets.prefooter} /><div className="section-content prefooter-content"><p className="eyebrow">{ui.prefooterKicker}</p><h2 className="display" data-reveal>{ui.prefooterHeading[0]}<br />{ui.prefooterHeading[1]}</h2><p>{artist.manifesto}</p></div></section>;
}

function SocialIcon({ platform }: { platform: SocialPlatform }) {
  const props = { viewBox: "0 0 24 24", width: 24, height: 24, "aria-hidden": true, focusable: false };

  switch (platform) {
    case "instagram":
      return <svg {...props} fill="none" stroke="currentColor" strokeWidth="1.7"><rect x="3.5" y="3.5" width="17" height="17" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.6" r=".8" fill="currentColor" stroke="none" /></svg>;
    case "spotify":
      return <svg {...props} fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.7"><circle cx="12" cy="12" r="8.75" /><path d="M7.2 9.6c3.4-1 6.8-.8 9.7.5M7.8 12.5c2.7-.7 5.5-.5 8 .5M8.7 15.2c2-.4 4-.2 5.9.5" /></svg>;
    case "soundcloud":
      return <svg {...props} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7"><path d="M4 17.5h15.1a2.9 2.9 0 0 0 .1-5.8 6.6 6.6 0 0 0-12.2-1.8A3.2 3.2 0 0 0 4 17.5Z" /><path d="M4 14v2.5M6.5 12.7v3.8M9 12v4.5M11.5 12.4v4.1" /></svg>;
    case "youtube":
      return <svg {...props} fill="none" stroke="currentColor" strokeWidth="1.7"><rect x="3" y="5.5" width="18" height="13" rx="4" /><path d="m10 9 5 3.1-5 3.1V9Z" fill="currentColor" stroke="none" /></svg>;
    case "beatport":
      return <svg {...props} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7"><path d="M7 5v14M7 5h5.4a3.2 3.2 0 0 1 0 6.4H7m0 0h6.2a3.8 3.8 0 0 1 0 7.6H7" /></svg>;
    case "tiktok":
      return <svg {...props} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7"><path d="M14 5v9.1a3.7 3.7 0 1 1-2.7-3.6" /><path d="M14 5c.6 2.2 2.1 3.5 4.5 3.7" /></svg>;
  }
}

export function SiteFooter() {
  const { copy } = useLanguage();
  const { ui } = copy;
  const navItems = useLocalizedNavigation();
  const [toastVisible, setToastVisible] = useState(false);
  const toastTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => () => {
    if (toastTimer.current) clearTimeout(toastTimer.current);
  }, []);

  const showComingSoon = () => {
    setToastVisible(true);
    if (toastTimer.current) clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToastVisible(false), 2500);
  };

  return <><footer className="site-footer"><Atmosphere src={siteContent.assets.footer} /><div className="footer-grid"><div className="footer-column"><Link className="footer-logo" href="/#home" aria-label="Busem Aker ana sayfa"><img className="brand-logo brand-logo--footer" src={assetPath(siteContent.assets.logos.light)} alt="Busem Aker" /></Link><p className="footer-tagline">{ui.footerTagline}</p></div><div className="footer-column"><nav className="footer-nav" aria-label={ui.footerNav}>{navItems.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}</nav></div><div className="footer-column"><nav className="social-list" aria-label="Social media">{socialOrder.map((platform) => <button className="social-link" key={platform} type="button" onClick={showComingSoon} aria-label={`${platformLabels[platform]} — çok yakında`}><span className="social-name"><SocialIcon platform={platform} />{platformLabels[platform]}</span><span className="social-arrow" aria-hidden="true">↗</span></button>)}</nav></div></div><div className="footer-bottom">{ui.footerBottom.map((item) => <span key={item}>{item}</span>)}</div></footer>{toastVisible && <div className="site-toast" role="status" aria-live="polite">Çok yakında</div>}</>;
}

function EpkFiles() {
  const { ui } = useLanguage().copy;
  return <div className="epk-files"><p className="section-kicker">{ui.downloads}</p>{ui.epkFiles.map(([label, type]) => <div className="epk-file" key={label}><span>{label}</span><span className="epk-file-status">{type} · {ui.pending}</span></div>)}</div>;
}

export function HomePage() {
  const scope = useRef<HTMLDivElement>(null);
  useCinematicReveal(scope);
  return <div className="site-shell" ref={scope}><SiteHeader /><main><Hero /><Intro /><AboutManifesto /><Music /><Videos /><Shows /><BookingBand /><Prefooter /></main><SiteFooter /></div>;
}

export function PressPage() {
  const scope = useRef<HTMLDivElement>(null);
  useCinematicReveal(scope);
  const { artist, ui } = useLanguage().copy;
  return <div className="site-shell" ref={scope}><SiteHeader /><main><section className="page-hero section-shell"><Atmosphere src={siteContent.assets.press[0]} /><div className="section-content"><p className="eyebrow">{ui.pressKicker}</p><h1 className="display">{ui.pressHeading[0]}<br /><span className="accent">{ui.pressHeading[1]}</span></h1></div></section><section className="page-body"><div className="epk-grid"><aside className="epk-side"><img className="brand-logo brand-logo--epk" src={assetPath(siteContent.assets.logos.light)} alt="Busem Aker" /><p className="section-kicker">{ui.epkKicker}</p><h2 className="display">Busem<br />Aker</h2><p>{ui.epkBody}</p><PillButton href="/contact">{ui.bookingContact}</PillButton></aside><div className="bio-stack">{artist.longBio.map((paragraph, index) => <article className="bio-block" key={paragraph}><h2>{ui.bioHeadings[index]}</h2><p>{paragraph}</p></article>)}<EpkFiles /><div className="press-assets">{siteContent.assets.press.map((asset) => <div className="press-asset" key={asset}><div className="asset-image" style={{ backgroundImage: `url("${assetPath(asset)}")` }} /><span className="press-asset-label">{ui.pressImage}</span></div>)}</div></div></div></section><Prefooter /></main><SiteFooter /></div>;
}

export function ContactPage() {
  const scope = useRef<HTMLDivElement>(null);
  useCinematicReveal(scope);
  const { ui } = useLanguage().copy;
  const email = siteContent.booking.email;
  return <div className="site-shell" ref={scope}><SiteHeader /><main><section className="section-shell contact-page"><Atmosphere src={siteContent.assets.prefooter} /><div className="section-content contact-content"><p className="eyebrow">{ui.contactKicker}</p><h1 className="display" data-reveal>{ui.contactHeading}</h1><p>{ui.contactBody}</p>{email ? <a className="booking-email" href={`mailto:${email}`}>{email}</a> : <p className="muted">{ui.missingEmail}</p>}</div></section></main><SiteFooter /></div>;
}
