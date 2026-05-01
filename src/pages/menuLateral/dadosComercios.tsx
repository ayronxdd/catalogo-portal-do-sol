// 1. Definimos o "molde" (Interface) - ISSO É OBRIGATÓRIO
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
}

// 2. Criamos a lista seguindo o molde
export const COMERCIOS: Comercio[] = [
  {
    id: '1',
    nome: 'Açaí do João',
    categoria: 'Alimentação',
    descricao: 'O melhor açaí da região!',
    whatsapp: '558488257815',
    linkMapa: 'https://www.google.com/maps/search/?api=1&query=Acai+do+Joao+Natal+RN',
    tags: ['frete gratis'], // Adicionei a vírgula aqui!
    latitude: -5.8448,
    longitude: -35.2094,
  },
  {
    id: '2',
    nome: 'Pet Shop Amigão',
    categoria: 'Saúde',
    descricao: 'Banho, tosa e consultas veterinárias.',
    whatsapp: '5584912345678',
    linkMapa: 'https://www.google.com/maps/search/?api=1&query=Pet+Shop+Amigao+Natal+RN',
    tags: [],
    latitude: -5.8448, // Adicionei para não dar erro
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
    latitude: -5.7065, // Coordenada real do link que você mandou
    longitude: -35.2339,
  },
  {
    id: '4',
    nome: 'Gabriel Celulares',
    categoria: 'Serviços',
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
];