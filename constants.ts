
import { Brand, Product } from './types';

export const APP_VERSION = '1.0.0';

// ID-ja e videos në TikTok për intro (psh. '7370395460515155205')
// Nëse nuk dëshironi ta shfaqni videon, lëreni stringun bosh.
export const TIKTOK_VIDEO_ID = '7370395460515155205';

// ==================================================================================
//  UDHËZIME PËR MENAXHIM (MANUAL DATABASE)
// ==================================================================================
// 1. Për të SHTUAR produkt: Kopjo një bllok {...} dhe ngjite poshtë, ndrysho ID dhe të dhënat.
// 2. Për të FSHIRË produkt: Thjesht fshije bllokun {...} të produktit që nuk e do.
// 3. Për FOTO: Përdor link direkt (psh. nga imgbb.com, unsplash, ose linku yt).
// ==================================================================================

export const INITIAL_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Bull Bar i Përparmë',
    description: 'Steel Bull Bar është një mbrojtëse e ndërtuar nga çelik i fortë dhe i përforcuar, e projektuar për përdorim serioz dhe kushte të rënda.',
    imageUrl: 'https://i.ibb.co/m5dqg47B/Untitled-design.jpg',
  },
  {
    id: '2',
    name: 'Bull Bar i Pasëm',
    description: 'Fotrolla e pasme prej çeliku, ultra-reale, e dizajnuar për qëndrueshmëri ekstreme dhe stil agresiv. Çelik i forcuar, shufra industriale të trasha, finish mat me pluhur të zi dhe nyje të dukshme të salduara.',
    imageUrl: 'https://i.ibb.co/mV12h2xD/Untitled-design-1.jpg',
  },
  {
    id: '3',
    name: 'Pedalë Anësorë prej Inoksi',
    description: 'Side Step Inox është i ndërtuar nga çelik inox i fortë dhe i qëndrueshëm. Siguron mbrojtje dhe akses më të lehtë në veturë. Veshja inox reziston ndaj ndryshkut dhe konsumimit. Dizajn premium dhe jetëgjatë. I përshtatshëm për vetura japoneze.',
    imageUrl: 'https://i.ibb.co/tGv3XNM/Untitled-design-2.jpg',
  },
  {
    id: '4',
    name: 'Roll Bar prej Çeliku Inoks',
    description: 'Stainless Steel Roll Bar 4x4 është i ndërtuar nga çelik inox cilësor, duke ofruar qëndrueshmëri të lartë, rezistencë ndaj ndryshkut dhe një pamje moderne e sportive. I përshtatshëm për automjete 4x4, ky roll bar rrit sigurinë, funksionalitetin dhe stilin e mjetit tuaj, si për përdorim urban ashtu edhe off-road.',
    imageUrl: 'https://i.ibb.co/Wp7qCnTS/H568a2b05377b41a9b0c6da2c691f5b0f-U.jpg',
  },
  {
    id: '5',
    name: 'Dritë e Pasme Ford Ranger T6',
    description: 'Rear Lamp Ford Ranger T6 ofron ndriçim të fuqishëm dhe të qartë për siguri maksimale gjatë drejtimit. E prodhuar nga materiale cilësore dhe rezistente, garanton jetëgjatësi dhe përputhshmëri të plotë me modelin Ford Ranger T6. Dizajn modern që ruan pamjen origjinale të automjetit dhe siguron dukshmëri optimale në çdo kusht.',
    imageUrl: 'https://gtconcepts.co.za/cdn/shop/files/website_84ba723f-7c9e-4eec-9a30-39f7dbb346b3.png?v=1716537821&width=1500',
  },
  {
    id: '6',
    name: 'Fletë Sustë (Spring Leaf) Mitsubishi L200 K77',
    description: 'Spring Leaf Mitsubishi L200 K77 është komponent thelbësor i sistemit të pezullimit, i projektuar për të ofruar qëndrueshmëri, kapacitet të lartë mbajtës dhe komoditet gjatë ngarkesës. I prodhuar nga çelik rezistent, siguron performancë të besueshme, jetëgjatësi dhe përshtatje të saktë për modelin Mitsubishi L200 K77, ideal për përdorim të përditshëm dhe kushte të vështira pune.',
    imageUrl: 'https://www.4x4parts.fi/40936-large_default/leaf-spring-rear-mitsubishi-l200.jpg',
  },
  {
    id: '7',
    name: 'Krah Drejtimi (Track Control Arm) Nissan Qashqai 2008',
    description: 'Track Control Arm Nissan Qashqai 2008 siguron stabilitet optimal, kontroll të saktë të drejtimit dhe përmirëson performancën e pezullimit. I ndërtuar nga materiale të forta dhe rezistente ndaj konsumit, garanton qëndrueshmëri dhe jetëgjatësi të lartë. I projektuar për përshtatje të përkryer me Nissan Qashqai 2008, ky komponent kontribuon në siguri dhe komoditet maksimal gjatë vozitjes.',
    imageUrl: 'https://scdn.autoteiledirekt.de/catalog/categories/500x500/200.png',
  },
   {
    id: '8',
    name: 'Parakolp i Përparmë Toyota 4Runner 1999–2002',
    description: 'Front Bumper Toyota 4Runner 1999–2002 është i projektuar për të ofruar mbrojtje të lartë dhe qëndrueshmëri maksimale në çdo terren. I ndërtuar nga materiale rezistente, garanton siguri, jetëgjatësi dhe përshtatje të saktë me modelin Toyota 4Runner. Dizajni i fortë dhe funksional përmirëson pamjen e automjetit dhe e bën ideal për përdorim off-road dhe të përditshëm.',
    imageUrl: 'https://i.ebayimg.com/images/g/06QAAOSwpp1cdJCI/s-l500.jpg',
  },
];

export const CAR_BRANDS: Brand[] = [
  { name: 'TOYOTA', category: 'CAR' },
  { name: 'NISSAN', category: 'CAR' },
  { name: 'HONDA', category: 'CAR' },
  { name: 'MITSUBISHI', category: 'CAR' },
  { name: 'MAZDA', category: 'CAR' },
  { name: 'SUBARU', category: 'CAR' },
  { name: 'SUZUKI', category: 'CAR' },
  { name: 'ISUZU', category: 'CAR' },
  { name: 'DAIHATSU', category: 'CAR' },
  { name: 'LEXUS', category: 'CAR' },
  { name: 'INFINITI', category: 'CAR' },
  { name: 'ACURA', category: 'CAR' },
];

export const PART_BRANDS: Brand[] = [
  { name: 'DENSO', category: 'PART' },
  { name: 'AISIN', category: 'PART' },
  { name: 'NGK', category: 'PART' },
  { name: 'KYB', category: 'PART' },
  { name: 'TOKICO', category: 'PART' },
  { name: 'EXEDY', category: 'PART' },
  { name: '555', category: 'PART' },
  { name: 'GMB', category: 'PART' },
  { name: 'Koyo', category: 'PART' },
  { name: 'NTN', category: 'PART' },
  { name: 'NSK', category: 'PART' },
  { name: 'Akebono', category: 'PART' },
];

export const CONTACT_INFO = {
  address: 'Rruga e Transitit, Pejë, Kosovë',
  phone1: '044 136 336',
  phone2: '048 136 336',
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46933.25055866179!2d20.25203714890666!3d42.6603099196627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1352fc6325086d51%3A0x629555239553757a!2sPeja!5e0!3m2!1sen!2s!4v1715694363248!5m2!1sen!2s"
};
