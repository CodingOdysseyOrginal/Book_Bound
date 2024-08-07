import AssassinsApprentice from '../../Pages/Fiction/Adventure/Img/AssassinsApprentince.jpg';
import Mogworld from '../../Pages/Fiction/Adventure/Img/MogWorld.jpg';
import ThePoppyWar from '../../Pages/Fiction/Adventure/Img/PoppyWar.webp';
import TheWayOfKings from '../../Pages/Fiction/Adventure/Img/TheWayOfKings.jpg';

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

const AdventureBooks: Book[] = [
    {
        id: '11',
        title: 'Assassin\'s Apprentice',
        description: 'The first book in the Farseer Trilogy, featuring the story of FitzChivalry Farseer, a young boy with a mysterious past and a destiny as an assassin.',
        img: AssassinsApprentice,
        price: 14.99,
        format: 'Hardcover',
        author: 'Robin Hobb',
        published: '1995-09-01',
        pageNumber: 432,
    },
    {
        id: '12',
        title: 'Mogworld',
        description: 'A satirical fantasy novel that follows the story of a video game character who becomes self-aware and tries to escape the confines of his game world.',
        img: Mogworld,
        price: 11.99,
        format: 'Paperback',
        author: 'Yahtzee Croshaw',
        published: '2009-01-15',
        pageNumber: 416,
    },
    {
        id: '13',
        title: 'The Poppy War',
        description: 'A dark and epic fantasy novel inspired by Chinese history, following Rin, a war orphan who gets accepted into a prestigious military academy and discovers her hidden powers.',
        img: ThePoppyWar,
        price: 13.99,
        format: 'Paperback',
        author: 'R.F Kuang',
        published: '2018-05-01',
        pageNumber: 528,
    },
    {
        id: '14',
        title: 'The Way of Kings',
        description: 'The first volume in Brandon Sanderson’s epic fantasy series, The Stormlight Archive. It features a richly developed world and complex characters embroiled in a struggle for survival and power.',
        img: TheWayOfKings,
        price: 19.99,
        format: 'Hardcover',
        author: 'Brandon Sanderson',
        published: '2010-08-31',
        pageNumber: 1007,
    },
];

export default AdventureBooks;
