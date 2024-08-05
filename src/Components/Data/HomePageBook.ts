import CrackCode from '../../Pages/Homepage/imgs/CrackTheInterview.webp';
import Dune from '../../Pages/Homepage/imgs/Dune.webp';
import HarryPotterStone from '../../Pages/Homepage/imgs/HarryPotterStone.jpg';
import SaveTheGalaxy from '../../Pages/Homepage/imgs/WillDestoryTheGalaxyForCash.jpg';
import KingsOfTheWyld from '../../Pages/Homepage/imgs/KingsOfTheWyld.jpg';
import ACourtOfThronesAndRoses from '../../Pages/Homepage/imgs/ACourtOfThornsAndRoses.jpg';
import ManKind from '../../Pages/Homepage/imgs/ManKind.jpg';
import Metro from '../../Pages/Homepage/imgs/Metro2033.jpg';
import Neuromancer from '../../Pages/Homepage/imgs/Neuromancer.jpg';
import YellowFace from '../../Pages/Homepage/imgs/Yellowface.webp';

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
}

const books: Book[] = [
  {
    id: '1',
    title: 'Cracking the Coding Interview',
    description: 'A comprehensive guide that prepares candidates for technical interviews with 189 programming questions, \
    detailed solutions, and practical advice. It covers key concepts in data structures, algorithms, and software engineering, \
    offering strategies for problem-solving and navigating interviews with top tech companies.',
    img: CrackCode,
    price: 12.50,
    format: 'Paperback',
    author: 'Gayle Laakmann McDowell',
    published: '2015-07-01',
    pageNumber: 687,
  },
  {
    id: '2',
    title: 'Dune',
    description: 'Set on the desert planet of Arrakis, "Dune" follows the story of young Paul Atreides as he navigates a complex world \
    of political intrigue, prophecy, and ecological challenges. As the heir of House Atreides, Paul becomes embroiled in a struggle \
    for control over the spice melange, the most valuable substance in the universe. This epic tale explores themes of power, religion, \
    and the relationship between humanity and the environment.',
    img: Dune,
    price: 10.00,
    format: 'Paperback',
    author: 'Frank Herbert',
    published: '1965-08-01',
    pageNumber: 896,
  },
  {
    id: '3',
    title: 'Will Save the Galaxy for Cash',
    description: 'After saving the galaxy and becoming a hero, space rogue Jackson "Jack" Zapp finds himself broke and desperate for work. \
    With his trusty AI companion, Sasha, Jack takes on a dangerous job with a motley crew of adventurers. This satirical space opera blends \
    humor and action as Jack navigates a universe filled with odd jobs, bizarre characters, and unforeseen threats.',
    img: SaveTheGalaxy,
    price: 7.89,
    format: 'Paperback',
    author: 'Yahtzee Croshaw',
    published: '2017-11-15',
    pageNumber: 370,
  },
  {
    id: '4',
    title: 'Harry Potter and the Philosopher\'s Stone',
    description: 'Harry Potter discovers he is a wizard on his eleventh birthday when he receives an acceptance letter to Hogwarts School of \
    Witchcraft and Wizardry. At Hogwarts, he makes friends, learns magic, and uncovers secrets about his past. This enchanting story follows \
    Harry\'s first year at school as he battles dark forces, makes lifelong friendships, and learns about the magical world that awaits him.',
    img: HarryPotterStone,
    price: 12.99,
    format: 'Paperback',
    author: 'J.K. Rowling',
    published: '1997-06-26',
    pageNumber: 223,
  },
  {
    id: '5',
    title: 'Kings Of The Wyld',
    description: 'Once famous for their heroic deeds, the band of mercenaries known as Saga has long since disbanded. But when their former \
    leader, Clay Cooper, is called to rescue his bandmate\'s daughter from a city under siege, the band reunites for one last adventure. \
    Filled with humor, action, and nostalgia, this fantasy novel explores themes of friendship, loyalty, and the passage of time.',
    img: KingsOfTheWyld,
    price: 12.99,
    format: 'Paperback',
    author: 'Nicholas Eames',
    published: '2017-02-21',
    pageNumber: 544,
  },
  {
    id: '6',
    title: 'A Court Of Thorns and Roses',
    description: 'In this fantasy romance, Feyre Archeron, a young huntress, accidentally kills a faerie wolf. In retribution, she is taken \
    to the land of faeries by the masked and enigmatic Tamlin. As she learns to navigate this perilous world, Feyre discovers dark secrets \
    and ancient curses, leading her to fight for the freedom of her loved ones and her heart. A tale of love, danger, and transformation.',
    img: ACourtOfThronesAndRoses,
    price: 8.99,
    format: 'Paperback',
    author: 'Sarah J. Maas',
    published: '2015-05-05',
    pageNumber: 432,
  },
  {
    id: '7',
    title: 'A Tale of Blood and Sweatsocks',
    description: 'In his candid autobiography, Mick Foley, a legendary professional wrestler, recounts his journey from childhood fan to wrestling superstar. \
    Known for his unorthodox style and brutal matches, Foley shares personal anecdotes, behind-the-scenes stories, and insights into the wrestling industry. \
    With humor and authenticity, he reveals the challenges and triumphs of his career in the squared circle.',
    img: ManKind,
    price: 12.99,
    format: 'Hardback',
    author: 'Mick Foley',
    published: '1999-10-31',
    pageNumber: 768,
  },
  {
    id: '8',
    title: 'Metro 2033',
    description: 'In a post-apocalyptic Moscow, survivors live in the city\'s Metro system, where the remnants of humanity struggle against darkness and mutant creatures. \
    Artyom, a young man from the VDNKh station, embarks on a perilous journey to save his home station and find answers about the mysterious threats facing humanity. \
    This gripping novel explores themes of survival, isolation, and the human spirit.',
    img: Metro,
    price: 15.99,
    format: 'Hardback',
    author: 'Dmitry Glukhovsky',
    published: '2005-01-01',
    pageNumber: 458,
  },
  {
    id: '9',
    title: 'Neuromancer',
    description: 'In this groundbreaking cyberpunk novel, Case, a washed-up computer hacker, is hired for one last job: to hack into an unthinkably powerful AI. \
    With the help of Molly, a street samurai with razor-sharp reflexes, Case navigates a world of corporate espionage and virtual reality. \
    William Gibson\'s visionary work explores themes of technology, identity, and the blurred lines between human and machine.',
    img: Neuromancer,
    price: 12.99,
    format: 'Hardback',
    author: 'William Gibson',
    published: '1984-07-01',
    pageNumber: 271,
  },
  {
    id: '10',
    title: 'Yellowface',
    description: 'When June Hayward, a struggling author, witnesses the sudden death of her more successful friend, Athena Liu, she decides to steal Athena\'s \
    unpublished manuscript. Rebranding herself as a Chinese-American author, June skyrockets to fame, but her lies catch up with her. \
    This gripping novel by R.F. Kuang explores themes of cultural appropriation, identity, and the ethics of storytelling in the publishing industry.',
    img: YellowFace,
    price: 12.99,
    format: 'Hardback',
    author: 'R.F. Kuang',
    published: '2023-05-25',
    pageNumber: 336,
  },
];

export default books;
