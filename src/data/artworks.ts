import type { ImageMetadata } from 'astro';

import imgTheWall from '../assets/oeuvres/THE-WALL.webp';
import imgCubaLibre from '../assets/oeuvres/CUBA-LIBRE.webp';
import imgSierraNevada from '../assets/oeuvres/SIERRA NEVADA 80X80.webp';
import imgStonedAgain from '../assets/oeuvres/STONED-AGAIN.webp';
import imgRomeoJuliette from '../assets/oeuvres/ROMEO-_-JULIETTE.webp';
import imgOnlyYou from '../assets/oeuvres/ONLY-YOU-.webp';
import img20Minutes from '../assets/oeuvres/20-MINUTES.webp';
import imgEntity from '../assets/oeuvres/ENTITY.webp';
import imgCampingCar from '../assets/oeuvres/THE CAMPING CAR 60X30.webp';
import imgVariousLetters from '../assets/oeuvres/VARIOUS LETTERS.webp';

export interface Artwork {
  id: string;
  fig: string;
  title: string;
  year: string;
  medium: string;
  dimensions: string;
  status: 'Disponible' | 'Collection Privée' | 'En Galerie';
  location?: string;
  image: ImageMetadata;
  aspectRatio: string;
  description: string;
}

export const artworksData: Artwork[] = [
  {
    id: 'the-wall',
    fig: '01',
    title: 'The Wall',
    year: '2024',
    medium: 'Technique mixte, spray aérosol & typographies sur lin',
    dimensions: '120 × 100 cm',
    status: 'Disponible',
    image: imgTheWall,
    aspectRatio: 'aspect-[4/3]',
    description: 'Une confrontation physique majeure entre la violence des couches typographiques urbaines et la subtilité des voiles de dripping.',
  },
  {
    id: 'cuba-libre',
    fig: '02',
    title: 'Cuba Libre',
    year: '2024',
    medium: 'Acrylique, spray & dripping monumental',
    dimensions: '100 × 100 cm',
    status: 'Collection Privée',
    location: 'Bruxelles',
    image: imgCubaLibre,
    aspectRatio: 'aspect-square',
    description: 'Saturation chromatique intemporelle où la matière projetée vient bousculer la lisibilité de la lettre.',
  },
  {
    id: 'sierra-nevada',
    fig: '03',
    title: 'Sierra Nevada',
    year: '2023',
    medium: 'Pigments minéraux & action painting',
    dimensions: '80 × 80 cm',
    status: 'Disponible',
    image: imgSierraNevada,
    aspectRatio: 'aspect-square',
    description: 'Une synthèse inspirée des paysages solaires et des pigments naturels ramenés des résidences méditerranéennes.',
  },
  {
    id: 'stoned-again',
    fig: '04',
    title: 'Stoned Again',
    year: '2024',
    medium: 'Dripping, huile & projections d’encre',
    dimensions: '100 × 80 cm',
    status: 'Disponible',
    image: imgStonedAgain,
    aspectRatio: 'aspect-[4/5]',
    description: 'Geste instinctif et coulures denses explorant le trop-plein d’un monde saturé de signes.',
  },
  {
    id: 'romeo-juliette',
    fig: '05',
    title: 'Roméo & Juliette',
    year: '2024',
    medium: 'Graffiti typographique & pigments sur lin',
    dimensions: '140 × 100 cm',
    status: 'Collection Privée',
    location: 'Paris',
    image: imgRomeoJuliette,
    aspectRatio: 'aspect-[3/4]',
    description: 'Diptyque visuel et tension romantique entre la rigueur de l’axe vertical et l’abandon de l’axe horizontal.',
  },
  {
    id: 'only-you',
    fig: '06',
    title: 'Only You',
    year: '2023',
    medium: 'Spray, marqueur & pigments en couches denses',
    dimensions: '90 × 90 cm',
    status: 'Disponible',
    image: imgOnlyYou,
    aspectRatio: 'aspect-square',
    description: 'L’écriture tagguée transformée en vibration pure, affranchie du verbe.',
  },
  {
    id: '20-minutes',
    fig: '07',
    title: '20 Minutes',
    year: '2023',
    medium: 'Impasto, spray & dripping sur châssis',
    dimensions: '80 × 60 cm',
    status: 'Disponible',
    image: img20Minutes,
    aspectRatio: 'aspect-[4/5]',
    description: 'Chrono-peinture capturant l’urgence brute du geste urbain originel.',
  },
  {
    id: 'entity',
    fig: '08',
    title: 'Entity',
    year: '2024',
    medium: 'Spray & pigments minéraux pulvérisés',
    dimensions: '110 × 90 cm',
    status: 'En Galerie',
    location: 'Galerie Paris',
    image: imgEntity,
    aspectRatio: 'aspect-[3/4]',
    description: 'Présence spectrale de formes et de coulures dialoguant avec la lumière de la toile.',
  },
  {
    id: 'the-camping-car',
    fig: '09',
    title: 'The Camping Car',
    year: '2023',
    medium: 'Technique mixte sur format panoramique',
    dimensions: '60 × 30 cm',
    status: 'Disponible',
    image: imgCampingCar,
    aspectRatio: 'aspect-[16/7]',
    description: 'Format horizontal rare offrant un défilé graphique de strates et de graffitis superposés.',
  },
  {
    id: 'various-letters',
    fig: '10',
    title: 'Various Letters',
    year: '2024',
    medium: 'Tag & collage typographique d’atelier',
    dimensions: '100 × 70 cm',
    status: 'En Galerie',
    location: 'Galerie Bruxelles',
    image: imgVariousLetters,
    aspectRatio: 'aspect-[4/5]',
    description: 'Étude typographique poussée à l’extrême, hommage aux pionniers du graffiti des années 80.',
  },
];
