/**
 * Single source of truth for all website content.
 * Every user-facing string is bilingual: { mn: "Монгол", en: "English" }.
 *
 * Legend:
 *   // REAL          → taken from the client's Instagram (bio / posts)
 *   // TODO: confirm → realistic placeholder, must be confirmed with the client
 */

export type L = { mn: string; en: string };
export const l = (mn: string, en: string): L => ({ mn, en });

/* ------------------------------------------------------------------ */
/* Brand & contact                                                     */
/* ------------------------------------------------------------------ */

export const brand = {
  name: "Warrior Esports UB", // REAL
  short: "WARRIOR E-SPORTS", // REAL
  tagline: l(
    "Тав тух, мэдрэмж, хүртээмжийг бүрдүүлэв.", // REAL (Instagram bio)
    "Comfort, immersion and access — all in one arena.",
  ),
  heroTyped: [
    l("Тоглоомын шинэ түвшин.", "Next-level gaming."),
    l("Сорилтоо өөрөө сонго.", "Challenge yourself."),
    l("Мөрөөдлөө хөөцөл.", "Chase your dream."), // REAL slogan: "Chase your dream"
  ],
  instagram: "https://instagram.com/warrior_esports_ub", // REAL
  instagramHandle: "@warrior_esports_ub", // REAL
  youtube: "https://youtube.com/@warrior_e-sports", // REAL (from bio link, truncated) // TODO: confirm full URL
  phone: {
    display: "8057-5780", // REAL (main number in posts / bio)
    tel: "+97680575780",
    secondary: "9908-8997", // REAL (hiring / tournament number)
    secondaryTel: "+97699088997",
  },
  address: l(
    "СБД, Багшийн дээд, Төгөлдөр төвийн чанх хойно", // REAL
    "Sukhbaatar District, Bagshiin Deed — directly north of Tögöldör Center", // REAL (translated)
  ),
  city: l("Улаанбаатар, Монгол", "Ulaanbaatar, Mongolia"),
  // Map embed is a text search so it works without an API key.
  // TODO: confirm — replace with the exact Google Maps "Embed a map" URL for the venue.
  mapEmbed:
    "https://www.google.com/maps?q=%D0%A2%D3%A9%D0%B3%D3%A9%D0%BB%D0%B4%D3%A9%D1%80+%D1%82%D3%A9%D0%B2+%D0%A3%D0%BB%D0%B0%D0%B0%D0%BD%D0%B1%D0%B0%D0%B0%D1%82%D0%B0%D1%80&output=embed",
  mapLink:
    "https://www.google.com/maps/search/?api=1&query=%D0%A2%D3%A9%D0%B3%D3%A9%D0%BB%D0%B4%D3%A9%D1%80+%D1%82%D3%A9%D0%B2+%D0%A3%D0%BB%D0%B0%D0%B0%D0%BD%D0%B1%D0%B0%D0%B0%D1%82%D0%B0%D1%80",
  hours: {
    // TODO: confirm
    display: l("24/7", "24/7"),
    detail: l("Өдөр бүр, 24 цагийн турш", "Every day, around the clock"),
  },
  demoCredit: "Demo by Turuu",
};

/* ------------------------------------------------------------------ */
/* Navigation / UI strings                                             */
/* ------------------------------------------------------------------ */

export const nav = [
  { id: "zones", label: l("Бүс", "Zones") },
  { id: "specs", label: l("Тоног төхөөрөмж", "Specs") },
  { id: "pricing", label: l("Үнэ", "Prices") },
  { id: "games", label: l("Тоглоом", "Games") },
  { id: "gallery", label: l("Галерей", "Gallery") },
  { id: "events", label: l("Тэмцээн", "Events") },
  { id: "contact", label: l("Холбоо барих", "Contact") },
];

export const ui = {
  book: l("Захиалах", "Book a seat"),
  prices: l("Үнэ", "Prices"),
  callNow: l("Одоо залгах", "Call now"),
  online: l("ОНЛАЙН", "ONLINE"),
  pcsAvailable: l("компьютер сул байна", "PCs available"),
  scroll: l("Доош гүйлгэх", "Scroll"),
  openMap: l("Газрын зураг дээр нээх", "Open in Maps"),
  close: l("Хаах", "Close"),
  prev: l("Өмнөх", "Previous"),
  next: l("Дараах", "Next"),
  demoTag: l("ДЕМО АГУУЛГА", "DEMO CONTENT"),
  mostPopular: l("Хамгийн их сонгогддог", "Most popular"),
  perHour: l("цаг", "hr"),
  skip: l("Үндсэн агуулга руу очих", "Skip to content"),
  langLabel: l("Хэл солих", "Switch language"),
  menu: l("Цэс", "Menu"),
  followUs: l("Биднийг дага", "Follow us"),
  rights: l("Бүх эрх хуулиар хамгаалагдсан.", "All rights reserved."),
  demoNote: l(
    "Энэ нь танилцуулга демо сайт юм. Үнэ, цаг, тоног төхөөрөмжийн мэдээлэл түр зуурынх.",
    "This is a pitch demo. Prices, hours and hardware details are placeholders.",
  ),
};

/* ------------------------------------------------------------------ */
/* Images (all files live in /public/images)                           */
/* ------------------------------------------------------------------ */

export type Img = { src: string; w: number; h: number; alt: L };

export const images = {
  // NOTE: these are crops from the client's Instagram. Swap in the original
  // high-res photos using the same filenames (or update the paths/sizes here).
  logo: { src: "/images/logo.png", w: 257, h: 257, alt: l("Warrior E-Sports лого", "Warrior E-Sports logo") },
  arena: { src: "/images/arena-floor.jpg", w: 386, h: 165, alt: l("Warrior Esports тоглоомын заал, мониторууд ба тоглоомын сандлууд", "Warrior Esports gaming floor with monitors and gaming chairs") },
  cap: { src: "/images/player-cap.jpg", w: 310, h: 295, alt: l("Warrior хувцастай тоглогч заалны дундуур зогсож байна", "Warrior-jersey player standing on the arena floor") },
  longHair: { src: "/images/player-long-hair.jpg", w: 300, h: 250, alt: l("Warrior E-Sport хувцастай тоглогч", "Player in a Warrior E-Sport jersey") },
  shades: { src: "/images/player-shades.jpg", w: 384, h: 205, alt: l("Нарийн шилтэй Warrior багийн гишүүн", "Warrior team member wearing sunglasses") },
  closeup: { src: "/images/player-closeup.jpg", w: 384, h: 310, alt: l("Тоглогч микрофонтой стриймийн өрөөнд", "Player with a clip-on mic in the stream room") },
  snack: { src: "/images/gamer-snack.jpg", w: 386, h: 420, alt: l("Тоглогч сандал дээр хоол идэж байна", "Gamer enjoying a meal at his seat") },
  food: { src: "/images/food-bowl.jpg", w: 384, h: 430, alt: l("Warrior-ын цэснээс шинэхэн бүлгэм хоол", "A freshly served bowl from the Warrior menu") },
} satisfies Record<string, Img>;

/* ------------------------------------------------------------------ */
/* Hero status + stats                                                 */
/* ------------------------------------------------------------------ */

export const status = {
  pcsAvailable: 23, // TODO: confirm (fake "live" number for the demo)
  pcsTotal: 60, // TODO: confirm
};

export const stats = [
  { value: 60, suffix: "", label: l("Тоглоомын компьютер", "Gaming PCs") }, // TODO: confirm
  { value: 240, suffix: "Hz", label: l("Мониторын давтамж", "Monitor refresh") }, // TODO: confirm
  { value: 24, suffix: "/7", label: l("Нээлттэй цаг", "Open hours") }, // TODO: confirm
  { value: 1, suffix: "ms", label: l("Хариу өгөх хугацаа", "Response time"), prefix: "≤" }, // TODO: confirm
];

/* ------------------------------------------------------------------ */
/* Zones                                                               */
/* ------------------------------------------------------------------ */

export const zones = [
  {
    id: "standard",
    name: l("Стандарт заал", "Standard Floor"),
    desc: l(
      "Өдөр тутмын тоглолтод зориулсан өргөн заал. Эргономик сандал, 240Hz монитор.",
      "The main open arena for everyday play. Ergonomic chairs, 240Hz monitors.",
    ),
    specs: ["RTX 4060", "240Hz", "32GB"], // TODO: confirm
    seats: 40, // TODO: confirm
    image: images.arena,
    tag: l("ӨДӨР ТУТМЫН", "DAILY"),
  },
  {
    id: "vip",
    name: l("VIP өрөө", "VIP Room"),
    desc: l(
      "Хувийн өрөө, авто зогсоолын үнэгүй эрх. Найз нөхөдтэйгөө тав тухтай тогло.",
      "Private room with a free parking pass. Play with your squad in comfort.", // REAL: VIP room + free parking pass are advertised
    ),
    specs: ["RTX 4070 Super", "360Hz", "Private"], // TODO: confirm
    seats: 8, // TODO: confirm
    image: images.longHair,
    tag: l("ХУВИЙН", "PRIVATE"),
  },
  {
    id: "pro",
    name: l("Pro бүс", "Pro Zone"),
    desc: l(
      "Тэмцээн, дасгалын багуудад зориулсан дээд зэргийн тохиргоо, мэргэжлийн периферал.",
      "Tournament-grade setups with pro peripherals for teams and scrims.",
    ),
    specs: ["RTX 4070", "360Hz", "Pro gear"], // TODO: confirm
    seats: 12, // TODO: confirm
    image: images.cap,
    tag: l("ТЭМЦЭЭН", "COMPETE"),
  },
  {
    id: "stream",
    name: l("Стрим өрөө", "Stream Room"),
    desc: l(
      "Микрофон, гэрэлтүүлэг, камертай контент бүтээгчдийн студи.",
      "A creator studio with mic, lighting and camera ready to go.",
    ),
    specs: ["RTX 4070 Ti", "OBS ready", "XLR mic"], // TODO: confirm
    seats: 2, // TODO: confirm
    image: images.closeup,
    tag: l("СТРИМ", "STREAM"),
  },
  {
    id: "cafe",
    name: l("Хоолны булан", "Snack Bar"),
    desc: l(
      "Шинэхэн американо, гар тогоонос гар дээр хоол — сандлаасаа босолгүй.",
      "Fresh americano and hot bowls delivered to your seat. No need to pause.", // REAL: americano + food bowls are on the Instagram
    ),
    specs: ["Americano", "Karaage", "Grilled pork"], // REAL (menu items from posts)
    seats: 0,
    image: images.food,
    tag: l("ХООЛ", "FOOD"),
  },
];

/* ------------------------------------------------------------------ */
/* PC specs (HUD readout)                                              */
/* ------------------------------------------------------------------ */

export const specs = {
  title: l("СИСТЕМИЙН ТОДОРХОЙЛОЛТ", "SYSTEM READOUT"),
  build: "WRR-STD-01", // TODO: confirm
  rows: [
    { key: "GPU", value: "NVIDIA RTX 4060 8GB", pct: 78 }, // TODO: confirm
    { key: "CPU", value: "Intel Core i5-13400F", pct: 72 }, // TODO: confirm
    { key: "RAM", value: "32GB DDR5 5600MHz", pct: 88 }, // TODO: confirm
    { key: "SSD", value: "1TB NVMe Gen4", pct: 80 }, // TODO: confirm
    { key: "DISPLAY", value: '24.5" 240Hz IPS · 1ms', pct: 94 }, // TODO: confirm
    { key: "NET", value: "1 Gbps fibre · < 5ms ping", pct: 90 }, // TODO: confirm
  ],
  peripherals: [
    { k: l("Хулгана", "Mouse"), v: "Logitech PRO X Superlight 2" }, // REAL (promoted on Instagram) — confirm it's installed at every seat
    { k: l("Гар", "Keyboard"), v: "Mechanical 75% · HE" }, // TODO: confirm
    { k: l("Чихэвч", "Headset"), v: "7.1 Surround" }, // TODO: confirm
    { k: l("Сандал", "Chair"), v: "Ergonomic gaming chair" }, // TODO: confirm
  ],
};

/* ------------------------------------------------------------------ */
/* Pricing                                                             */
/* ------------------------------------------------------------------ */

export type Plan = {
  id: string;
  name: L;
  price: string;
  unit: L;
  perks: L[];
  popular?: boolean;
};

export const pricing: Plan[] = [
  // TODO: confirm — all prices below are placeholders
  {
    id: "1h",
    name: l("1 цаг", "1 Hour"),
    price: "6,000₮",
    unit: l("/ цаг", "/ hr"),
    perks: [l("Стандарт заал", "Standard floor"), l("240Hz монитор", "240Hz monitor"), l("Үнэгүй ус", "Free water")],
  },
  {
    id: "3h",
    name: l("3 цагийн багц", "3-Hour Pack"),
    price: "15,000₮",
    unit: l("/ 3 цаг", "/ 3 hrs"),
    popular: true,
    perks: [l("Стандарт эсвэл Pro бүс", "Standard or Pro zone"), l("17% хэмнэлт", "Save 17%"), l("Үнэгүй ундаа", "Free drink")],
  },
  {
    id: "night",
    name: l("Шөнийн пасс", "Night Pass"),
    price: "30,000₮",
    unit: l("/ шөнө (22:00–08:00)", "/ night (22:00–08:00)"),
    perks: [l("10 цагийн тоглолт", "10 hours of play"), l("Бүх стандарт суудал", "Any standard seat"), l("Кофе + зууш", "Coffee + snack")],
  },
  {
    id: "vip",
    name: l("VIP өрөө", "VIP Room"),
    price: "12,000₮",
    unit: l("/ цаг, хүн тус бүр", "/ hr per person"),
    perks: [l("Хувийн өрөө", "Private room"), l("Авто зогсоолын үнэгүй эрх", "Free parking pass"), l("360Hz монитор", "360Hz monitor")], // REAL: VIP parking pass is advertised
  },
];

export const pricingNote = l(
  "Цэнэглэлт бүрт бонус: 6 дугаар сарын урамшуулал шиг 50% хүртэл бонус.",
  "Top-up bonuses available, e.g. seasonal promos of up to 50% extra credit.", // REAL: Instagram shows "50% bonus on top-ups" promos
);

/* ------------------------------------------------------------------ */
/* Games                                                               */
/* ------------------------------------------------------------------ */

export const games: { name: string; hot?: boolean }[] = [
  // REAL: Counter-Strike 2 is the featured title (Warrior Challenge Cup). Others: TODO: confirm
  { name: "Counter-Strike 2", hot: true },
  { name: "Valorant", hot: true },
  { name: "Dota 2" },
  { name: "League of Legends" },
  { name: "Fortnite" },
  { name: "PUBG" },
  { name: "Apex Legends" },
  { name: "Overwatch 2" },
  { name: "Rocket League" },
  { name: "GTA V" },
  { name: "Minecraft" },
  { name: "EA FC 25" },
  { name: "Rainbow Six Siege" },
  { name: "Call of Duty" },
  { name: "Roblox" },
  { name: "Genshin Impact" },
];

/* ------------------------------------------------------------------ */
/* Gallery                                                             */
/* ------------------------------------------------------------------ */

export const gallery: Img[] = [
  images.arena,
  images.cap,
  images.food,
  images.shades,
  images.longHair,
  images.snack,
  images.closeup,
];

/* ------------------------------------------------------------------ */
/* Events                                                              */
/* ------------------------------------------------------------------ */

export const events = [
  {
    id: "cup",
    // REAL: Warrior Challenge Cup 2026, CS2, 10,000,000₮ prize pool (from Instagram). Dates are TODO: confirm
    title: l("Warrior Challenge Cup 2026", "Warrior Challenge Cup 2026"),
    game: "Counter-Strike 2",
    date: l("2026 оны 11-р сар · 8 баг", "Nov 2026 · 8 teams"), // TODO: confirm
    prize: l("10,000,000₮", "10,000,000₮"),
    desc: l(
      "Сорилтоо өөрөө сонго. 5v5 CS2 тэмцээн — шилдэг баг мөнгөн шагнал, цомын эзэн болно.",
      "Challenge yourself. A 5v5 CS2 cup where the best squad takes the prize pool and the trophy.",
    ),
  },
  {
    id: "night",
    title: l("Шөнийн лиг", "Night League"),
    game: "Valorant",
    date: l("Баасан бүр · 22:00", "Every Friday · 22:00"), // TODO: confirm
    prize: l("1,000,000₮", "1,000,000₮"), // TODO: confirm
    desc: l(
      "7 хоногийн шөнийн лиг. Ганц бие эсвэл багаар бүртгүүлнэ.",
      "Weekly late-night league. Sign up solo or with a squad.",
    ),
  },
  {
    id: "showmatch",
    title: l("Шоу матч", "Show Match"),
    game: "Counter-Strike 2",
    date: l("Сар бүрийн сүүлийн бямба", "Last Saturday monthly"), // TODO: confirm
    prize: l("Үзэгчдийн шагнал", "Crowd prizes"), // TODO: confirm
    desc: l(
      "Warrior багийнхантай шууд тоглох боломж. Нээлтийн шоу матчийн уур амьсгалтай.",
      "Face the Warrior squad live, in the spirit of the opening-day show match.", // REAL: opening-day show match happened
    ),
  },
];
