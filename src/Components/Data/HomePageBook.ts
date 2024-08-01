import CrackCode from '../../Pages/Homepage/imgs/CrackTheInterview.webp';
import Dune from '../../Pages/Homepage/imgs/Dune.webp';
import HarryPotterStone from '../../Pages/Homepage/imgs/HarryPotterStone.jpg';
import SaveTheGalaxy from '../../Pages/Homepage/imgs/WillDestoryTheGalaxyForCash.jpg';
import KingsOfTheWyld from '../../Pages/Homepage/imgs/KingsOfTheWyld.jpg';
import ACourtOfThronesAndRoses from '../../Pages/Homepage/imgs/ACourtOfThornsAndRoses.jpg'
import ManKind from '../../Pages/Homepage/imgs/ManKind.jpg'

export interface Book {
  id: string;
  title: string;
  description: string;
  img: string;
  price: number;
  author: string; 
  format: string;
}

const books: Book[] = [
  {
    id: '1',
    title: 'Cracking the Coding Interview',
    description: 'How to crack the coding quiz!',
    img: CrackCode,
    price: 12.50,
    format: 'Paperback',
    author: 'Gayle Laakmann McDowell', 
  },
  {
    id: '2',
    title: 'Dune',
    description: 'Explore the world of Fiction',
    img: Dune,
    price: 10.00,
    format: 'Paperback',
    author: 'Frank Herbert', 
  },
  {
    id: '3',
    title: 'Will Save the Galaxy for Cash',
    description: 'A thrilling adventure through the galaxy!',
    img: SaveTheGalaxy,
    price: 7.89,
    format: 'Paperback',
    author: 'Yazhee Crowshaw'
  },
  {
    id: '4',
    title: 'Harry Potter and the Philosopher\'s Stone',
    description: 'A young wizard\'s first year at Hogwarts School of Witchcraft and Wizardry.',
    img: HarryPotterStone,
    format: 'Paperback',
    price: 12.99,
    author: 'J.K. Rowling', 
  },
  {
    id: '5',
    title: 'Kings Of The Wyld',
    description: 'The band is getting back together! An old mercerancy group rejoin as one of their old comrades needs help resucing his daughter',
    img: KingsOfTheWyld,
    price: 12.99,
    format: 'Paperback',
    author: 'Nicholas Eames', 
  },
  {
    id: '6',
    title: 'A Court Of thorns and roses',
    description: 'A young wizard\'s first year at Hogwarts School of Witchcraft and Wizardry.',
    img: ACourtOfThronesAndRoses,
    price: 8.99,
    format: 'Paperback',
    author: 'Sarah J. Maas', 
  },
  {
    id: '7',
    title: 'Have a nice day! - A Tale of blood and sweatsocks',
    description: 'Mick Foley\'s legendary wresting carrer.',
    img: ManKind,
    price: 12.99,
    format: 'Hardback',
    author: 'Mick Foley', 
  },
  
];

export default books;
