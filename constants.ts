
import { Brand, Product } from './types';

export const CAR_BRANDS: Brand[] = [
  { name: 'NISSAN', category: 'CAR' },
  { name: 'MITSUBISHI', category: 'CAR' },
  { name: 'TOYOTA', category: 'CAR' },
  { name: 'FORD', category: 'CAR' },
  { name: 'VOLVO', category: 'CAR' },
];

export const PART_BRANDS: Brand[] = [
  { name: 'AISIN', category: 'PART' },
  { name: '555', category: 'PART' },
];

export const INITIAL_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Set Pjesësh Frenimi Performance',
    description: 'Disqe dhe pllaka origjinale për qëndrueshmëri maksimale në rrugë të vështira.',
    imageUrl: 'https://images.unsplash.com/photo-1626543598506-694df62c5b9c?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '2',
    name: 'Kit Amortizimi Sportiv',
    description: 'Stabilitet i plotë për modelet SUV japoneze. Testuar për ngarkesa të rënda.',
    imageUrl: 'https://images.unsplash.com/photo-1486262715619-01b80250e0dc?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '3',
    name: 'Filtrimi & Vajra Premium',
    description: 'Mbrojtje totale për motorin tuaj me filtra origjinalë japonezë.',
    imageUrl: 'https://images.unsplash.com/photo-1635773172852-617838cb88f6?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '4',
    name: 'HKS Hi-Power Exhaust',
    description: 'Sistem shkarkimi komplet titani për tingull agresiv dhe shtim të kuaj-fuqive.',
    imageUrl: 'https://images.unsplash.com/photo-1552055620-cd4663c638f2?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '5',
    name: 'TEIN Flex Z Coilovers',
    description: 'Suspension i rregullueshëm për rrugë dhe pistë. Kontroll absolut në kthesa.',
    imageUrl: 'https://images.unsplash.com/photo-1622646671049-74d6c44243e8?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '6',
    name: 'GReddy Intercooler Kit',
    description: 'Ftohje superiore për motorët turbo të modifikuar (Supra, GTR, Evo).',
    imageUrl: 'https://images.unsplash.com/photo-1597686588975-2965383503b4?q=80&w=800&auto=format&fit=crop'
  }
];

export const CONTACT_INFO = {
  phone1: "044 136 336",
  phone2: "048 136 336",
  address: "Rr. Papa Klementi, Pejë",
  // Updated Map Embed URL using specific coordinates for AUTO JAPAN EROLLI
  mapEmbedUrl: "https://maps.google.com/maps?q=42.6625544,20.3035858&hl=sq&z=17&output=embed"
};
