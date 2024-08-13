import AcourtOfMistAndFury from "../../Pages/Fiction/Romance/img/ACourtOfMistAndFury.jpg";
import FourthWing from "../../Pages//Fiction//Romance/img/FourthWing.jpg";
import OnceUponABrokenHeart from "../../Pages/Fiction/Romance/img/OnceUponABrokenHeart.jpg";
import OneDay from "../../Pages/Fiction/Romance/img/OneDay.webp";
import RomeoAndJuliet from "../../Pages/Fiction/Romance/img/RomeoAndJuliet.jpg";
import TheGreatGatsby from "../../Pages/Fiction/Romance/img/TheGreatGatsby.jpg";

export interface Book {
  id: string;
  title: string;
  description: string;
  img: string;
  price: number;
  author: string;
  format: string;
  published: string;
  pageNumber: number;
  category: string;
}

const books: Book[] = [
  {
    id: "20",
    title: "A Court of Mist and Fury",
    description:
      "Feyre returns to the Spring Court and faces new challenges in this thrilling sequel. Torn between her love for Tamlin and her growing attraction to Rhysand, she must decide where her loyalties lie while confronting new and dangerous enemies.",
    img: AcourtOfMistAndFury,
    price: 14.99,
    author: "Sarah J. Maas",
    format: "Hardcover",
    published: "2016-05-03",
    pageNumber: 624,
    category: "Romance",
  },
  {
    id: "21",
    title: "Fourth Wing",
    description:
      "In a world where dragon riders rule, Violet must navigate political intrigue and her own emerging powers to survive. As she rises through the ranks, she uncovers secrets that could change everything.",
    img: FourthWing,
    price: 16.99,
    author: "Rebecca Yarros",
    format: "Paperback",
    published: "2023-05-02",
    pageNumber: 528,
    category: "Romance",
  },
  {
    id: "22",
    title: "Once Upon a Broken Heart",
    description:
      "Evangeline Fox ventures to the magical North to stop her true love's wedding and make a deal with the charismatic Prince of Hearts, Jacks. A tale of love, curses, and unexpected twists unfolds.",
    img: OnceUponABrokenHeart,
    price: 18.99,
    author: "Stephanie Garber",
    format: "Hardcover",
    published: "2021-09-28",
    pageNumber: 416,
    category: "Romance",
  },
  {
    id: "23",
    title: "One Day",
    description:
      "Emma and Dexter meet on the day of their graduation, and their lives intertwine over the next two decades in this poignant and humorous tale of friendship, love, and life’s unpredictability.",
    img: OneDay,
    price: 12.99,
    author: "David Nicholls",
    format: "Paperback",
    published: "2009-06-11",
    pageNumber: 448,
    category: "Romance",
  },
  {
    id: "24",
    title: "Romeo and Juliet",
    description:
      "Shakespeare's timeless tragedy of star-crossed lovers from feuding families explores themes of love, fate, and the consequences of hate. A masterpiece of dramatic literature.",
    img: RomeoAndJuliet,
    price: 9.99,
    author: "William Shakespeare",
    format: "Paperback",
    published: "1597",
    pageNumber: 128,
    category: "Romance",
  },
  {
    id: "25",
    title: "The Great Gatsby",
    description:
      "F. Scott Fitzgerald's classic novel of the Jazz Age, exploring themes of decadence, idealism, and the American Dream. The mysterious Jay Gatsby's unrequited love for Daisy Buchanan unfolds in this timeless story.",
    img: TheGreatGatsby,
    price: 10.99,
    author: "F. Scott Fitzgerald",
    format: "Paperback",
    published: "1925-04-10",
    pageNumber: 180,
    category: "Romance",
  },
];

export default books;
