import AssassinsApprentice from '../../Pages/Fiction/Adventure/Img/AssassinsApprentince.jpg';
import Mogworld from '../../Pages/Fiction/Adventure/Img/MogWorld.jpg';
import ThePoppyWar from '../../Pages/Fiction/Adventure/Img/PoppyWar.webp';
import TheWayOfKings from '../../Pages/Fiction/Adventure/Img/TheWayOfKings.jpg';
import AGameOfThrones from '../../Pages/Fiction/Adventure/Img/AGameOfThrones.jpg';
import Babel from '../../Pages/Fiction/Adventure/Img/Babel.jpg';
import EmpireOfAVampire from '../../Pages/Fiction/Adventure/Img/EmpireOfTheVampire.jpg';
import LordOfTheRingPart1 from '../../Pages/Fiction/Adventure/Img/TheLordOfTheRingsPart1.jpg';
import TheWitcherTheLastWish from '../../Pages/Fiction/Adventure/Img/TheWitcherTheLastWish.webp';

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
        id: '11',
        title: 'Assassin\'s Apprentice',
        description: 'Robin Hobb\'s "Assassin\'s Apprentice" introduces readers to the rich and intricate world of the Six Duchies. The story follows young FitzChivalry Farseer, the illegitimate son of a prince, who is raised in the shadows of the royal family. Trained as an assassin by the enigmatic Chade, Fitz learns to navigate the dangerous politics of the court. As he hones his magical abilities, known as the Skill and the Wit, Fitz must confront his own identity and the heavy burden of his destiny to protect the realm. This tale of loyalty, sacrifice, and self-discovery is the beginning of an epic journey.',
        img: AssassinsApprentice,
        price: 14.99,
        format: 'Hardcover',
        author: 'Robin Hobb',
        published: '1995-09-01',
        pageNumber: 432,
        category: 'Adventure',
    },
    {
        id: '12',
        title: 'Mogworld',
        description: 'In "Mogworld," Yahtzee Croshaw crafts a hilarious and satirical fantasy that turns the traditional video game narrative on its head. The protagonist, Jim, is a cynical undead mage who is unexpectedly revived in a chaotic video game world. Unlike the typical hero, Jim desires nothing more than to return to the peace of the afterlife. However, trapped within the game’s endless respawns and quests, he must confront a rogue AI and an array of quirky characters. Croshaw’s clever humor and sharp wit offer a unique perspective on the absurdities of video games and the nature of existence.',
        img: Mogworld,
        price: 11.99,
        format: 'Paperback',
        author: 'Yahtzee Croshaw',
        published: '2009-01-15',
        pageNumber: 416,
        category: 'Adventure',
    },
    {
        id: '13',
        title: 'The Poppy War',
        description: 'R.F. Kuang\'s "The Poppy War" is a grimdark fantasy epic that draws inspiration from the brutal history of 20th-century China. The novel follows Rin, a poor war orphan from the rural Rooster Province, who earns her place at Sinegard, an elite military academy. Amidst the rivalries and power struggles, Rin discovers her shamanic abilities and her connection to the vengeful Phoenix god. As a war of devastating proportions looms, Rin must master her powers to save her people, while grappling with the moral complexities of warfare and her own inner demons.',
        img: ThePoppyWar,
        price: 13.99,
        format: 'Paperback',
        author: 'R.F Kuang',
        published: '2018-05-01',
        pageNumber: 528,
        category: 'Adventure',
    },
    {
        id: '14',
        title: 'The Way of Kings',
        description: 'Brandon Sanderson\'s "The Way of Kings" immerses readers in the storm-battered world of Roshar, where powerful tempests shape the landscape and influence society. The story is told through the perspectives of diverse and compelling characters, including Kaladin, a former soldier turned slave; Shallan, a scholarly noblewoman with a dangerous secret; and Dalinar, a warlord struggling with mysterious visions. As they navigate their paths, these characters uncover ancient secrets about the legendary Knights Radiant and face a looming threat that could change the world forever. This epic tale is a masterpiece of world-building and storytelling.',
        img: TheWayOfKings,
        price: 19.99,
        format: 'Hardcover',
        author: 'Brandon Sanderson',
        published: '2010-08-31',
        pageNumber: 1007,
        category: 'Adventure',
    },
    {
        id: '15',
        title: 'A Game of Thrones',
        description: 'George R.R. Martin\'s "A Game of Thrones" is the first book in the epic fantasy series "A Song of Ice and Fire." Set in the Seven Kingdoms of Westeros, this tale of power, betrayal, and intrigue weaves the lives of numerous characters, from the noble Stark family in the North to the cunning Lannisters in the South. As noble families vie for control of the Iron Throne, the story reveals a world where the line between good and evil is blurred, and the only certainty is uncertainty. With rich world-building and complex characters, this novel is a cornerstone of modern fantasy.',
        img: AGameOfThrones,
        price: 17.99,
        format: 'Hardcover',
        author: 'George R.R. Martin',
        published: '1996-08-06',
        pageNumber: 694,
        category: 'Adventure',
    },
    {
        id: '16',
        title: 'Babel',
        description: 'In "Babel," R.F. Kuang offers a sweeping narrative that merges historical fiction with elements of magic and dark academia. Set in an alternate 19th-century Oxford, the story follows Robin Swift, an orphaned boy from Canton, who is brought to England to study at the prestigious Babel Institute. As Robin delves into the study of translation and magic, he becomes entangled in a secret society that seeks to use language as a tool for colonial power. With its intricate exploration of language, identity, and resistance, "Babel" is a thought-provoking tale that challenges the boundaries of empire and academia.',
        img: Babel,
        price: 16.99,
        format: 'Paperback',
        author: 'R.F. Kuang',
        published: '2022-08-23',
        pageNumber: 560,
        category: 'Adventure',
    },
    {
        id: '17',
        title: 'Empire of the Vampire',
        description: 'Jay Kristoff\'s "Empire of the Vampire" plunges readers into a dark and immersive world where vampires reign supreme. After a long night that lasted nearly three decades, humanity’s hope rests on the shoulders of Gabriel de León, the last Silver Saint, a holy warrior dedicated to eradicating the vampire threat. Told through Gabriel’s reflections as he recounts his life’s journey, the narrative weaves together blood-soaked battles, forbidden love, and the eternal struggle between light and darkness. With lyrical prose and epic storytelling, Kristoff delivers a haunting and unforgettable tale of loss and redemption.',
        img: EmpireOfAVampire,
        price: 18.99,
        format: 'Hardcover',
        author: 'Jay Kristoff',
        published: '2021-09-14',
        pageNumber: 752,
        category: 'Adventure',
    },
    {
        id: '18',
        title:"The Lord of the Rings: The Fellowship of the Ring",
        description: 'J.R.R. Tolkien\'s "The Fellowship of the Ring" is the first volume of the legendary "The Lord of the Rings" trilogy. The story follows Frodo Baggins, a hobbit from the Shire, who is entrusted with the One Ring, a powerful artifact capable of unimaginable destruction. Along with a diverse fellowship of allies, Frodo embarks on a perilous journey to destroy the ring in the fires of Mount Doom. Tolkien’s epic adventure explores themes of friendship, courage, and the struggle between good and evil, laying the foundation for one of the greatest fantasy sagas of all time.',
        img: LordOfTheRingPart1,
        price: 15.99,
        format: 'Paperback',
        author: 'J.R.R. Tolkien',
        published: '1954-07-29',
        pageNumber: 423,
        category: 'Adventure',
    },
    {
        id: '19',
        title: 'The Witcher: The Last Wish',
        description: 'Andrzej Sapkowski\'s "The Last Wish" introduces readers to the world of Geralt of Rivia, a monster hunter known as a Witcher. This collection of interconnected short stories follows Geralt as he navigates a world teeming with fantastical creatures and complex moral dilemmas. With his sharp wit and unparalleled combat skills, Geralt faces challenges that test his humanity and ethics. Sapkowski\'s writing blends elements of Slavic mythology with rich character development and intricate storytelling, creating a captivating introduction to the critically acclaimed Witcher series.',
        img: TheWitcherTheLastWish,
        price: 12.99,
        format: 'Paperback',
        author: 'Andrzej Sapkowski',
        published: '1993-12-31',
        pageNumber: 280,
        category: 'Adventure',
    },
];

export const AdventureBooks = books.filter(product => product.category === "Adventure");

export default books;
