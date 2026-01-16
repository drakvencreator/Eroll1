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
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2934.349633842187!2d20.2926713!3d42.6540306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDLCsDM5JzE0LjUiTiAyMMKwMTcnMzMuNiJF!5e0!3m2!1sen!2s!4v1630000000000!5m2!1sen!2s"
};