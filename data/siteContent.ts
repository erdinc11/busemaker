export type MusicPlatform =
  | "spotify"
  | "soundcloud"
  | "appleMusic"
  | "beatport"
  | "youtube";

export type SocialPlatform =
  | "instagram"
  | "spotify"
  | "soundcloud"
  | "appleMusic"
  | "youtube"
  | "beatport";

export type Show = {
  date: string;
  venue: string;
  event: string;
  city: string;
  country: string;
  status: "upcoming" | "past";
  href?: string;
  image?: string;
};

export type Release = {
  title: string;
  subtitle: string;
  format: "single" | "ep" | "album";
  description: string;
  artwork: string;
  chapterArtworks?: string[];
  chapters?: string[];
  links: Partial<Record<MusicPlatform, string>>;
};

export type SiteContent = {
  artist: {
    name: "BUSEM AKER";
    role: string;
    shortBio: string;
    longBio: string[];
    aboutBody: string[];
    manifesto: string;
  };
  releases: Release[];
  shows: Show[];
  videos: Array<{
    title: string;
    eyebrow: string;
    thumbnail: string;
    href: string;
  }>;
  links: Partial<Record<SocialPlatform, string>>;
  booking: { email?: string };
  assets: {
    logos: {
      light: string;
      dark: string;
    };
    hero: string;
    intro: string;
    about: string;
    music: string;
    videos: string;
    shows: string[];
    prefooter: string;
    footer: string;
    press: string[];
  };
};

export const siteContent: SiteContent = {
  artist: {
    name: "BUSEM AKER",
    role: "Techno DJ & Producer",
    shortBio:
      "Busem Aker is a techno DJ and producer rooted in Turkey’s underground club culture, known for dark atmospheres, hypnotic repetition, driving rhythms and powerful low-end energy.",
    longBio: [
      "Busem Aker is a techno DJ and producer rooted in Turkey’s underground club culture, shaping a sound defined by dark atmospheres, hypnotic repetition, driving rhythms and powerful low-end energy. Her musical identity has developed through late-night club environments, with performances at Kastel, Pixel and Kite, international spaces including Khidi, and her collaboration with Spain-based Heb Sed.",
      "Her journey has also extended beyond the club circuit to festival stages, including Sonance Festival, Booze Series: Festival of Karma and the 2026 Ahoora Festival, where she is part of the Techno Stage lineup alongside an international roster of artists.",
      "At the core of Busem Aker’s approach is the intensity of the dancefloor. Her sets build gradually through relentless grooves, tension, acid-infused textures and stripped-back rhythmic structures. Moving between hypnotic, raw and peak-time techno, she creates dark, cohesive narratives shaped by the energy of the room.",
      "Alongside her work behind the decks, Busem Aker has translated this musical identity into original productions, releasing Sacred Path, the album The Journey Begins, and My Name Is Fearless. As her sound continues to evolve, her productions are moving further into darker and more uncompromising techno territory, with a focus on hypnotic structures, raw energy and club functionality.",
      "Her music is created for powerful sound systems, dark spaces and the collective energy of the dancefloor, not for algorithms or short-lived trends.",
    ],
    aboutBody: [
      "Busem Aker is a techno DJ rooted in Turkey’s underground club culture, known for her melodic touches, powerful bass lines, and modern rhythms. Shaped by late-night club environments rather than trends, her approach has evolved through performances at key underground venues such as Kastel, Pixel and Kite, as well as international spaces like Khidi, and through her collaboration with Spain-based Heb Sed. Long-form, immersive sets and a deep connection with the crowd remain at the core of her experience.",
      "Focusing on live-recorded performances, Busem Aker treats each set as a moment-specific journey — reading the room, stretching time, and allowing melody, bass, and rhythm to build gradually. Blending hypnotic techno with melodic movement, her sound unfolds patiently, creating evolving atmospheres that draw listeners into a collective flow on dancefloor. Alongside her work behind the decks, Busem Aker has translated her sound into original productions.",
      "She released her debut single “Sacred Path” on September 14, followed by her album “The Journey Begins” on September 30, and her single “My Name Is Fearless” on March 8. These releases reflect her focus on melodic structures, emotional depth, and modern techno aesthetics. As her presence within the underground scene grows, Busem Aker remains committed to authenticity and club culture. Her music is designed not for algorithms or playlists, but for powerful sound systems, dimly lit rooms, and the shared energy of dancefloor.",
    ],
    manifesto: "Not every wound asks to be healed. Some become art.",
  },
  releases: [
    {
      title: "Lacrimosa",
      subtitle: "A four-part story in sound",
      format: "ep",
      description:
        "An evolving techno narrative built through pain, defense, silence and transformation.",
      artwork: "/reference/lacrimosa-04.png",
      chapterArtworks: [
        "/reference/lacrimosa-04.png",
        "/reference/venom-05.png",
        "/reference/nocturne-06.png",
        "/reference/rebirth-07.png",
      ],
      chapters: [
        "I. Lacrimosa — Pain",
        "II. Venom — Defense",
        "III. Nocturne — Silence",
        "IV. Rebirth — Transformation",
      ],
      links: {},
    },
  ],
  shows: [
    {
      date: "2026.10.10",
      venue: "Kastel",
      event: "Kastel Sessions",
      city: "Istanbul",
      country: "Turkey",
      status: "upcoming",
      image: "/reference/shows-performance-9a.png",
    },
    {
      date: "2026.11.07",
      venue: "Khidi",
      event: "International Guest Set",
      city: "Tbilisi",
      country: "Georgia",
      status: "upcoming",
      image: "/reference/shows-venue-9b.png",
    },
  ],
  videos: [
    {
      title: "Live from the dark side",
      eyebrow: "DJ Set / Coming soon",
      thumbnail: "/reference/video-08.png",
      href: "/contact/",
    },
    {
      title: "Lacrimosa — visual world",
      eyebrow: "Project film / Coming soon",
      thumbnail: "/reference/lacrimosa-04.png",
      href: "/music",
    },
    {
      title: "Raw frequency",
      eyebrow: "Performance / Coming soon",
      thumbnail: "/reference/video-08.png",
      href: "/contact/",
    },
  ],
  links: {
    instagram: "https://www.instagram.com/busemaker_/",
    spotify: "https://open.spotify.com/intl-tr/artist/1GiCbC5kla9vUnMTRfoojJ?si=8df09AiuQcKlg091te3vCA",
    soundcloud: "https://soundcloud.com/busemaker",
    appleMusic: "https://music.apple.com/tr/artist/busem-aker/1839207488?l=tr",
    beatport: "https://www.beatport.com/artist/busem-aker/2366871",
  },
  booking: {},
  assets: {
    logos: {
      light: "/busem-aker-logo/busem-aker-white.svg",
      dark: "/busem-aker-logo/busem-aker-black.svg",
    },
    hero: "/reference/hero.jpeg",
    intro: "/reference/intro-02.png",
    about: "/reference/about.jpeg",
    music: "/reference/lacrimosa-04.png",
    videos: "/reference/video-08.png",
    shows: ["/reference/shows-venue-9b.png", "/reference/shows-performance-9a.png"],
    prefooter: "/reference/prefooter-10.png",
    footer: "/reference/footer-crop-16x9.png",
    press: [
      "/reference/press-12a.png",
      "/reference/press-12b.png",
      "/reference/press-12c.png",
    ],
  },
};

export const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Discography", href: "/music" },
  { label: "Shows", href: "/shows" },
  { label: "Videos", href: "/videos" },
  { label: "Press", href: "/press" },
  { label: "Contact", href: "/contact" },
] as const;

export const platformLabels: Record<SocialPlatform, string> = {
  instagram: "Instagram",
  spotify: "Spotify",
  soundcloud: "SoundCloud",
  appleMusic: "Apple Music",
  youtube: "YouTube",
  beatport: "Beatport",
};

export const socialOrder: SocialPlatform[] = [
  "instagram",
  "spotify",
  "youtube",
  "soundcloud",
  "appleMusic",
  "beatport",
];

export type Locale = "en" | "tr";

export const localizedArtist = {
  en: siteContent.artist,
  tr: {
    name: "BUSEM AKER",
    role: "Techno DJ & Prodüktör",
    shortBio:
      "Busem Aker, Türkiye’nin underground kulüp kültüründen beslenen; karanlık atmosferleri, hipnotik tekrarları, sürükleyici ritimleri ve güçlü low-end enerjisiyle tanınan bir techno DJ ve prodüktördür.",
    longBio: [
      "Busem Aker, Türkiye’nin underground kulüp kültüründen beslenen bir techno DJ ve prodüktördür. Sound’u karanlık atmosferler, hipnotik tekrarlar, sürükleyici ritimler ve güçlü low-end enerjisiyle şekillenir. Müzikal kimliği; Kastel, Pixel ve Kite gibi gece kulübü ortamlarındaki performansları, Khidi gibi uluslararası alanlar ve İspanya merkezli Heb Sed ile yaptığı iş birlikleriyle gelişmiştir.",
      "Yolculuğu kulüp sahnesinin ötesine, Sonance Festival, Booze Series: Festival of Karma ve uluslararası sanatçıların yer aldığı Techno Stage kadrosunda bulunduğu 2026 Ahoora Festival gibi festival sahnelerine de uzanmıştır.",
      "Busem Aker’in yaklaşımının merkezinde dancefloor’un yoğunluğu yer alır. Setleri; durmaksızın ilerleyen groove’lar, gerilim, acid dokuları ve yalın ritmik yapılar üzerinden kademeli olarak yükselir. Hipnotik, raw ve peak-time techno arasında hareket ederek odanın enerjisiyle şekillenen karanlık ve bütünlüklü anlatılar kurar.",
      "DJ kabininin arkasındaki çalışmalarının yanında bu müzikal kimliği özgün prodüksiyonlarına da taşımıştır. Sacred Path, The Journey Begins albümü ve My Name Is Fearless çalışmalarını yayımlayan Busem Aker, sound’unu daha karanlık ve tavizsiz techno yönünde geliştirmeye devam etmektedir. Prodüksiyonlarında hipnotik yapılar, raw enerji ve kulüp işlevselliği öne çıkar.",
      "Müziği algoritmalar veya kısa ömürlü trendler için değil; güçlü ses sistemleri, karanlık alanlar ve dancefloor’un kolektif enerjisi için üretilir.",
    ],
    aboutBody: siteContent.artist.aboutBody,
    manifesto: "Her yara iyileşmek istemez. Bazıları sanata dönüşür.",
  },
} as const;

export const localizedRelease = {
  en: {
    subtitle: "A four-part story in sound",
    description: "An evolving techno narrative built through pain, defense, silence and transformation.",
    chapters: [
      "I. Lacrimosa — Pain",
      "II. Venom — Defense",
      "III. Nocturne — Silence",
      "IV. Rebirth — Transformation",
    ],
  },
  tr: {
    subtitle: "Seste dört bölümlü bir hikâye",
    description: "Acı, savunma, sessizlik ve dönüşüm üzerinden gelişen bir techno anlatısı.",
    chapters: [
      "I. Lacrimosa — Acı",
      "II. Venom — Savunma",
      "III. Nocturne — Sessizlik",
      "IV. Rebirth — Dönüşüm",
    ],
  },
} as const;

export const localizedVideos = {
  en: [
    ["DJ Set / Coming soon", "Live from the dark side"],
    ["Project film / Coming soon", "Lacrimosa — visual world"],
    ["Performance / Coming soon", "Raw frequency"],
  ],
  tr: [
    ["DJ Set / Yakında", "Karanlık taraftan canlı"],
    ["Proje filmi / Yakında", "Lacrimosa — görsel dünya"],
    ["Performans / Yakında", "Raw frekans"],
  ],
} as const;

export const uiCopy = {
  en: {
    nav: ["Home", "About", "Discography", "Shows", "Videos", "Press", "Contact"],
    primaryNav: "Primary navigation",
    mobileNav: "Mobile navigation",
    footerNav: "Footer navigation",
    openMenu: "Open navigation",
    closeMenu: "Close navigation",
    heroEyebrow: "Turkey / Europe · 2026",
    heroCta: "Enter the sound",
    introKicker: "The artist",
    introHeading: ["Dark rhythms", "hypnotic tension", "collective energy"],
    introCta: "About Busem",
    introFollowup: "Her sets move through tension, acid-infused textures and stripped-back rhythmic structures.",
    aboutHeading: ["Built for", "dark spaces", "and powerful", "systems."],
    featuredProject: "Featured project",
    releaseFormat: "EP / 04 chapters",
    releaseDetails: "Release details",
    videoKicker: "Sets / Live / Visuals",
    videos: "Videos",
    previousVideo: "Previous video",
    nextVideo: "Next video",
    showsKicker: "Next transmissions",
    shows: "Shows",
    allBooking: "All booking",
    emptyShows: "New dates are being shaped. Booking enquiries are open for clubs, festivals and international spaces.",
    bookingKicker: "For clubs, festivals and forward-thinking spaces",
    bookingHeading: ["Bring Busem", "on stage"],
    bookingBody: "Bring a dark, cohesive techno narrative to the room. Direct professional enquiries are welcome.",
    bookingCta: "Booking / Contact",
    prefooterKicker: "Busem Aker · Lacrimosa",
    prefooterHeading: ["See you", "in the dark."],
    pressKicker: "Electronic press kit",
    pressHeading: ["Press", "/ EPK"],
    epkKicker: "The essentials",
    epkBody: "Official biography, image direction and booking context in one place.",
    bookingContact: "Booking contact",
    bioHeadings: ["Profile", "Stages", "Sound", "Releases", "Positioning"],
    downloads: "Available for download",
    pending: "Pending",
    epkFiles: [["Official biography", "BIO / PDF"], ["High-resolution press photos", "PHOTOS / ZIP"], ["Artist wordmark", "LOGO / SVG"], ["Booking information", "CONTACT / TXT"]],
    pressImage: "PRESS IMAGE",
    contactKicker: "Professional enquiries",
    contactHeading: "Contact",
    contactBody: "For bookings, festivals, clubs, labels and international collaborations.",
    missingEmail: "Booking email will be published here once confirmed.",
    footerTagline: "Techno DJ & producer rooted in Turkey’s underground club culture.",
    footerLinksPending: "Music and social links will appear here as soon as the official profiles are confirmed.",
    footerBottom: ["© 2026 BUSEM AKER"],
    languageLabel: "Language",
    switchTo: "Türkçe",
  },
  tr: {
    nav: ["Ana Sayfa", "Hakkında", "Diskografi", "Etkinlikler", "Videolar", "Basın", "İletişim"],
    primaryNav: "Ana navigasyon",
    mobileNav: "Mobil navigasyon",
    footerNav: "Alt bilgi navigasyonu",
    openMenu: "Navigasyonu aç",
    closeMenu: "Navigasyonu kapat",
    heroEyebrow: "Türkiye / Avrupa · 2026",
    heroCta: "Sese gir",
    introKicker: "Artist",
    introHeading: ["Karanlık ritimler", "hipnotik gerilim", "kolektif enerji"],
    introCta: "Busem hakkında",
    introFollowup: "Setleri; gerilim, acid dokuları ve yalın ritmik yapılar arasında ilerler.",
    aboutHeading: ["Karanlık", "alanlar", "ve güçlü", "sistemler için."],
    featuredProject: "Öne çıkan proje",
    releaseFormat: "EP / 04 bölüm",
    releaseDetails: "Release detayları",
    videoKicker: "Setler / Canlı / Görseller",
    videos: "Videolar",
    previousVideo: "Önceki video",
    nextVideo: "Sonraki video",
    showsKicker: "Sıradaki performanslar",
    shows: "Etkinlikler",
    allBooking: "Tüm booking",
    emptyShows: "Yeni tarihler şekilleniyor. Kulüpler, festivaller ve uluslararası sahneler için booking taleplerine açığız.",
    bookingKicker: "Kulüpler, festivaller ve yeni seslere açık alanlar için",
    bookingHeading: ["Busem’i", "sahneye al"],
    bookingBody: "Mekâna karanlık ve bütünlüklü bir techno anlatısı taşıyın. Profesyonel booking talepleriniz için iletişime geçebilirsiniz.",
    bookingCta: "Booking / İletişim",
    prefooterKicker: "Busem Aker · Lacrimosa",
    prefooterHeading: ["Karanlıkta", "görüşürüz."],
    pressKicker: "Elektronik basın kiti",
    pressHeading: ["Basın", "/ EPK"],
    epkKicker: "Temel bilgiler",
    epkBody: "Resmî biyografi, görsel yön ve booking bilgileri tek bir yerde.",
    bookingContact: "Booking iletişimi",
    bioHeadings: ["Profil", "Sahneler", "Sound", "Release’ler", "Konumlandırma"],
    downloads: "İndirmeye hazır",
    pending: "Bekliyor",
    epkFiles: [["Resmî biyografi", "BIO / PDF"], ["Yüksek çözünürlüklü basın fotoğrafları", "FOTOĞRAF / ZIP"], ["Artist wordmark", "LOGO / SVG"], ["Booking bilgileri", "İLETİŞİM / TXT"]],
    pressImage: "BASIN GÖRSELİ",
    contactKicker: "Profesyonel iletişim",
    contactHeading: "İletişim",
    contactBody: "Booking, festival, kulüp, label ve uluslararası iş birlikleri için.",
    missingEmail: "Booking e-postası kesinleştiğinde burada yayımlanacaktır.",
    footerTagline: "Türkiye’nin underground kulüp kültüründen beslenen techno DJ ve prodüktör.",
    footerLinksPending: "Resmî profiller doğrulandığında müzik ve sosyal medya linkleri burada görünecek.",
    footerBottom: ["© 2026 BUSEM AKER"],
    languageLabel: "Dil",
    switchTo: "English",
  },
} as const;

export function getLocalizedCopy(locale: Locale) {
  return {
    artist: localizedArtist[locale],
    release: localizedRelease[locale],
    videos: localizedVideos[locale],
    ui: uiCopy[locale],
  };
}
