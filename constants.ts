import { Brand, Product } from './types';

export const APP_VERSION = '1.0.0';

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
    name: 'Front Bull Bear',
    description: 'Steel Bull Bar është një mbrojtëse e ndërtuar nga çelik i fortë dhe i përforcuar, e projektuar për përdorim serioz dhe kushte të rënda.',
    imageUrl: 'https://i.ibb.co/m5dqg47B/Untitled-design.jpg',
  },
  {
    id: '2',
    name: 'Brembo Brake System',
    description: 'Set frenash qeramikë për Nissan GTR R35. Ndalim i menjëhershëm dhe rezistencë ndaj nxehtësisë.',
    imageUrl: 'https://images.unsplash.com/photo-1610453363321-3652c64b6339?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '3',
    name: 'KW Suspension V3',
    description: 'Amortizerë të rregullueshëm (Coilovers) për Honda Civic Type R. Stabilitet perfekt në kthesa.',
    imageUrl: 'https://images.unsplash.com/photo-1552655307-8e697a23c720?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '4',
    name: 'HKS Hi-Power Exhaust',
    description: 'Sistem shkarkimi titanium për Toyota Supra MK4. Tingull agresiv dhe rritje kuaj-fuqie.',
    imageUrl: 'https://images.unsplash.com/photo-1606577924004-6cb0b7e28b84?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '5',
    name: 'Volk Racing TE37 (19")',
    description: 'Fellne legjendare japoneze. Të lehta dhe jashtëzakonisht të forta. Bronze finish.',
    imageUrl: 'https://images.unsplash.com/photo-1578844251758-2f71da645217?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '6',
    name: 'Mishimoto Intercooler',
    description: 'Ftohës ajri me kapacitet të lartë për Mitsubishi Lancer Evo X. Mban temperaturat e motorit të ulëta.',
    imageUrl: 'https://images.unsplash.com/photo-1517524008697-592031913d56?auto=format&fit=crop&q=80&w=800',
  },
  // SHTO PRODUKTE TE REJA POSHTE KETIJ RRESHTI
  // {
  //   id: '7',
  //   name: 'Emri i Produktit',
  //   description: 'Pershkrimi ketu...',
  //   imageUrl: 'Linku i fotos ketu...',
  // },
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
