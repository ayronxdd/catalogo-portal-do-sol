export interface Comercio {
  id: string;
  nome: string;
  categoria: string;
  descricao: string;
  whatsapp: string;
  linkMapa: string;
  tags: string[];
  latitude: number;
  longitude: number;
  horario?: string;
  endereco?: string;
}

export const COMERCIOS: Comercio[] = [
  {
    id: '1',
    nome: 'Açaí do João',
    categoria: 'Alimentação',
    descricao: 'O melhor açaí da região!',
    whatsapp: '558488257815',
    linkMapa: 'https://www.google.com/maps/search/?api=1&query=Acai+do+Joao+Natal+RN',
    tags: ['frete gratis'],
    latitude: -5.8448,
    longitude: -35.2094,
    horario: '08:00 às 22:00', 
    endereco: 'Av. Engenheiro Roberto Freire, 100'
  },
  {
    id: '2',
    nome: 'Pet Shop Amigão',
    categoria: 'Saúde',
    descricao: 'Banho, tosa e consultas veterinárias.',
    whatsapp: '5584912345678',
    linkMapa: 'https://www.google.com/maps/search/?api=1&query=Pet+Shop+Amigao+Natal+RN',
    tags: [],
    latitude: -5.8448,
    longitude: -35.2094,
  },
  {
    id: '3',
    nome: 'Empório Prime Bebidas',
    categoria: 'Mercados',
    descricao: 'Bebidas geladas e conveniência.',
    whatsapp: '5584981947579', 
    linkMapa: 'https://maps.app.goo.gl/sjMrVRskfYKLxnY38',
    tags: ['cerveja', 'gelo'],
    latitude: -5.7065,
    longitude: -35.2339,
  },
  {
    id: '4',
    nome: 'Gabriel Celulares',
    categoria: 'Eletronicos',
    descricao: 'Oficina de reparos de celulares.',
    whatsapp: '5584921522653',
    linkMapa: 'https://www.google.com/maps/search/?api=1&query=Gabriel+Celulares+Natal+RN',
    tags: ['conserto', 'iphone', 'tela'],
    latitude: -5.706073784966196, 
    longitude: -35.234964840016296,
  },
  {
    id: '5',
    nome: 'Pet Shop Amigão (Unidade 2)',
    categoria: 'Saúde',
    descricao: 'Banho, tosa e consultas veterinárias.',
    whatsapp: '5584912345678',
    linkMapa: 'https://www.google.com/maps/search/?api=1&query=Pet+Shop+Amigao+Natal+RN',
    tags: [],
    latitude: -5.8448,
    longitude: -35.2094,
  },
  {
    id: '6',
    nome: 'Superbox Tropical',
    categoria: 'Mercados',
    descricao: 'Economia de verão a verão',
    whatsapp: '84994193373',
    linkMapa: 'https://maps.app.goo.gl/EMBSpkqaxuwUyn3q8',
    tags: [],
    latitude: -5.7056539,
    longitude: -35.2360144,
  },
  {
    id: '7',
    nome: 'Delipan',
    categoria: 'Mercados',
    descricao: 'Tudo fresco, todo dia',
    whatsapp: '84988948129',
    linkMapa: 'https://maps.app.goo.gl/LYsmXAb36u7NaGKm9',
    tags: ['padaria'],
    latitude: -5.7054982,
    longitude: -35.2360663,
  },
  {
    id: '8',
    nome: 'Padaria Erika Lima',
    categoria: 'Mercados',
    descricao: 'Melhor padaria da região',
    whatsapp: '8498488742223',
    linkMapa: 'https://maps.app.goo.gl/7ioBUWBGZQ1WW3YeA',
    tags: ['padaria'],
    latitude: -5.7051584,
    longitude: -35.2355977,
  },
  {
  id: '10',
  nome: 'Exemplo de Loja Natal',
  categoria: 'Saúde',
  descricao: 'Descrição que será resumida em 2 linhas quando o card estiver fechado.',
  whatsapp: '5584999999999',
  latitude: -5.8123, 
  longitude: -35.2045,
  linkMapa: 'https://maps.app.goo.gl/...',
  tags: ['saude', 'natal', 'farmacia'],
  horario: 'Seg a Sex: 08h às 18h', 
  endereco: 'Av. Engenheiro Roberto Freire, Natal/RN' 
},
];