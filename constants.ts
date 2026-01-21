
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
  {
    id: '9',
    name: 'Radiator Motori për Nissan D40 (2007)',
    description: 'Radiator motori i dizajnuar posaçërisht për Nissan D40 të vitit 2007. Siguron ftohje efikase të motorit, mban temperaturën stabile dhe parandalon mbinxehjen edhe në kushte të rënda pune.',
    imageUrl: 'https://i.ebayimg.com/images/g/QQkAAeSw3~Vo1OQ3/s-l1600.webp',
  },
  {
    id: '10',
    name: 'Pompë Uji për Nissan Terrano 2 2.7D (2002)',
    description: 'Pompë uji për Nissan Terrano 2 2.7D, viti 2002, e projektuar për qarkullim të saktë të ftohësit në motor. Siguron ftohje të qëndrueshme, parandalon mbinxehjen dhe mbron komponentët e motorit nga konsumimi i parakohshëm.',
    imageUrl: 'https://www.euro4x4parts.com/cdn-cgi/image/format=webp,fit=cover,width=348/https://cdn.euro4x4parts.com/e4xmedia/prod/product/0/44242/id_33271_0/id_33271_0.png?q=aaffa76954f443aa3b2a0b591fa2f839',
  },
  {
    id: '11',
    name: 'Kokë Motori (Cylinder Head) për Nissan D40 (2007)',
    description: 'Kokë motori për Nissan D40 të vitit 2007, e prodhuar për funksionim të saktë dhe rezistencë maksimale ndaj temperaturave dhe presionit të lartë. Siguron mbyllje perfekte të dhomës së djegies, performancë të qëndrueshme të motorit dhe efikasitet optimal.',
    imageUrl: 'https://scdn.autodoc.de/catalog/categories/300x300/10480.png',
  },
  {
    id: '12',
    name: 'Shufër Qendrore Drejtimi (Central Rod) për Nissan Y61',
    description: 'Shufër qendrore drejtimi për Nissan Y61, e projektuar për stabilitet dhe kontroll të saktë të timonit. Siguron transmetim korrekt të lëvizjes së drejtimit, zvogëlon lojën në timon dhe rrit sigurinë gjatë vozitjes, sidomos në terrene të vështira.',
    imageUrl: 'https://scdn.autodoc.de/catalog/categories/300x300/15157.png',
  },
  {
    id: '13',
    name: 'Bllokues i Diferencialit të Përparmë 4x4 (Front 4x4 Lock)',
    description: 'Bllokues diferenciali i përparmë 4x4, i dizajnuar për të rritur maksimalisht kapjen dhe kontrollin në terrene të vështira. Mundëson shpërndarje të barabartë të fuqisë në rrotat e përparme, duke përmirësuar ndjeshëm performancën në baltë, borë, rërë dhe terren off-road.',
    imageUrl: 'https://i.ebayimg.com/images/g/7U4AAOSwR95hCnUJ/s-l1600.webp',
  },
  {
    id: '14',
    name: 'AVM (Free Wheel Hub) për Nissan Patrol Y61',
    description: 'AVM për Nissan Patrol Y61, i projektuar për kyçje dhe çkyçje efikase të sistemit 4x4 në boshtin e përparmë. Mundëson kalim të sigurt mes 2WD dhe 4WD, redukton konsumimin e komponentëve dhe përmirëson kontrollin në terrene off-road.',
    imageUrl: 'https://i.ebayimg.com/images/g/clsAAOSw~lpjNUZh/s-l1600.webp',
  },
   {
    id: '15',
    name: 'Set Kuplungu (Clutch Kit) për Nissan D40 2.5 dCi – AISIN',
    description: 'Set kuplungu origjinal AISIN për Nissan D40 2.5 dCi, i ndërtuar për transmetim të saktë të fuqisë dhe ndërrim të butë të shpejtësive. Ofron kapje të fortë, rezistencë të lartë ndaj konsumimit dhe jetëgjatësi të madhe edhe nën ngarkesë të rëndë.',
    imageUrl: 'https://a.allegroimg.com/s600/117d98/f18feb0a457bbb8ee9b6bea8ac6a/ZESTAW-SPRZEGLA-Z-KOLEM-NISSAN-NAVARA-D40-2-5-DCI-Typ-silnika-Diesel',
  },
   {
    id: '16',
    name: 'Nyje Universale (Universal Joint) për Mitsubishi Pajero (2001)',
    description: 'Nyje universale për Mitsubishi Pajero, viti 2001, e projektuar për transmetim të qetë dhe të sigurt të fuqisë nga boshti drejtues. Redukton dridhjet, zhurmën dhe konsumimin e komponentëve të transmisionit, duke përmirësuar stabilitetin dhe jetëgjatësinë e sistemit të lëvizjes.',
    imageUrl: 'https://tecdoc-s3.alpics.info/pics/201/DUJ-5501_3.JPG',
  },
   {
    id: '17',
    name: 'Parakolp i Pasëm për Nissan D40 – Krom',
    description: 'Parakolp i pasëm krom për Nissan D40, i dizajnuar për mbrojtje dhe pamje premium. Ndërtim i fortë me veshje kromi rezistente ndaj ndryshkut dhe konsumimit, që i jep automjetit stil të pastër dhe profesional.',
    imageUrl: 'https://i.ebayimg.com/images/g/9kUAAOSwykpknp~P/s-l1600.webp',
  },
   {
    id: '18',
    name: 'Set Rripi i Kohës (Timing Belt Set) për Ford Ranger 2.5 TDCi (2009)',
    description: 'Set rripi i kohës për Ford Ranger 2.5 TDCi, viti 2009, i projektuar për sinkronizim të saktë të motorit dhe funksionim të sigurt afatgjatë. Siguron punë të qetë të motorit, parandalon dëmtime serioze dhe ruan performancën optimale.',
    imageUrl: 'https://www.mpdonline.co.uk/userfiles/images/products/600x600/17a104ae654913e19f178d0e8c74df52.JPG',
  },
   {
    id: '19',
    name: 'Grilë e Përparme për Nissan Patrol Y60 – Krom',
    description: 'Grilë e përparme krom për Nissan Patrol Y60, e dizajnuar për pamje elegante dhe mbrojtje të radiatorit. Ndërtim i fortë, rezistent ndaj ndikimeve dhe ndryshkut, me përfundim estetik të lartë që i jep automjetit një stil premium.',
    imageUrl: 'https://scdn.autodoc.de/catalog/categories/300x300/11775.png',
  },
   {
    id: '20',
    name: 'Alternator për Mitsubishi L200 4D56 (2002)',
    description: 'Alternator për Mitsubishi L200 me motor 4D56, viti 2002, i dizajnuar për furnizim të qëndrueshëm të energjisë elektrike në të gjitha sistemet e automjetit. Siguron karikim efikas të baterisë, mbrojt motorin elektrik dhe komponentët elektrikë nga variacionet e tensionit.',
    imageUrl: 'https://i.ebayimg.com/images/g/jjwAAOSwXBNjnZkr/s-l1600.webp',
  },
   {
    id: '21',
    name: 'Motor Nisës (Starter) për Nissan D22 2.5 DI (2004)',
    description: 'Starter për Nissan D22 2.5 DI, viti 2004, i projektuar për të siguruar ndezje të shpejtë dhe të besueshme të motorit. Siguron performancë të qëndrueshme edhe në kushte të vështira, ndërtim i fortë dhe jetëgjatësi të madhe.',
    imageUrl: 'https://i.ebayimg.com/images/g/gKgAAOSwmjVfK3C6/s-l1600.webp',
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
