import AliceInWonderLand from '../../../Pages/BestSellers/Classics/Img/AliceInWonderland.jpg';
import Inferno from '../../../Pages/BestSellers/Classics/Img/Inferno.jpg'
import Metamorphosis from '../../../Pages/BestSellers/Classics/Img/Metamorphosis.webp';
import PostOffice from '../../../Pages/BestSellers/Classics/Img/AliceInWonderland.jpg';
import PrideAndPrejudice from '../../../Pages/BestSellers/Classics/Img/PrideAndPrejudice.webp'
import TheMasterAndMargarita from '../../../Pages/BestSellers/Classics/Img/TheMasterAndMargarita.jpg'
import TheOdssesy from '../../../Pages/BestSellers/Classics/Img/TheOdyssey.jpg';
import ThePictureOfDorianGray from '../../../Pages/BestSellers/Classics/Img/ThePictureOfDorianGray.jpg'
import WhiteNights from '../../../Pages/BestSellers/Classics/Img/WhiteNights.webp'
import WutherHeights from '../../../Pages/BestSellers/Classics/Img/WutheringHeights.jpg'






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
        id: "52",
        title: "Alice's Adventures in Wonderland",
        description: "*Alice's Adventures in Wonderland* by Lewis Carroll is a whimsical tale that follows a young girl named Alice as she falls down a rabbit hole into a fantastical world filled with eccentric characters and nonsensical adventures. As she navigates this curious land, Alice encounters the enigmatic Cheshire Cat, the eccentric Mad Hatter, and the formidable Queen of Hearts. This timeless classic explores themes of imagination, identity, and the absurdity of life.",
        img: AliceInWonderLand,
        price: 10.99,
        author: "Lewis Carroll",
        format: "Paperback",
        published: "1865-11-26",
        pageNumber: 200,
        category: "Classics"
    },
    {
        id: "53",
        title: "Inferno",
        description: "Dante Alighieri's *Inferno* is the first part of his epic poem, *The Divine Comedy*, where the author embarks on a journey through Hell, guided by the Roman poet Virgil. This allegorical work explores the consequences of sin and the pursuit of redemption, depicting vivid and imaginative descriptions of the nine circles of Hell. Through encounters with historical and mythological figures, Dante reflects on the moral and spiritual challenges of human existence.",
        img: Inferno,
        price: 11.99,
        author: "Dante Alighieri",
        format: "Paperback",
        published: "1314-01-01",
        pageNumber: 416,
        category: "Classics"
    },
    {
        id: "54",
        title: "Metamorphosis",
        description: "Franz Kafka's *Metamorphosis* is a haunting novella that tells the story of Gregor Samsa, a traveling salesman who wakes up one morning to find himself transformed into a giant insect. As he struggles to adapt to his new reality, Gregor becomes increasingly alienated from his family and society. This classic work explores themes of identity, isolation, and the absurdity of life, offering a profound commentary on the human condition.",
        img: Metamorphosis,
        price: 8.99,
        author: "Franz Kafka",
        format: "Paperback",
        published: "1915-01-01",
        pageNumber: 96,
        category: "Classics"
    },
    {
        id: "55",
        title: "Post Office",
        description: "In *Post Office*, Charles Bukowski offers a gritty and humorous depiction of his experiences working as a mail carrier in Los Angeles. This semi-autobiographical novel follows the protagonist, Henry Chinaski, as he navigates the monotony and absurdity of the postal service. With his raw and candid writing style, Bukowski provides a satirical and often darkly comedic exploration of the struggles and resilience of the working class.",
        img: PostOffice,
        price: 9.99,
        author: "Charles Bukowski",
        format: "Paperback",
        published: "1971-01-01",
        pageNumber: 208,
        category: "Classics"
    },
    {
        id: "56",
        title: "Pride and Prejudice",
        description: "*Pride and Prejudice* by Jane Austen is a beloved novel that follows the spirited Elizabeth Bennet as she navigates matters of love, family, and societal expectations in Regency-era England. The story centers around her evolving relationship with the enigmatic Mr. Darcy, exploring themes of class, marriage, and personal growth. Austen's wit and keen social observations make this classic a timeless exploration of human nature and relationships.",
        img: PrideAndPrejudice,
        price: 12.99,
        author: "Jane Austen",
        format: "Paperback",
        published: "1813-01-28",
        pageNumber: 279,
        category: "Classics"
    },
    {
        id: "57",
        title: "The Master and Margarita",
        description: "Mikhail Bulgakov's *The Master and Margarita* is a surreal and satirical novel that weaves together multiple narratives, including the story of a visit by the Devil to Soviet Moscow. The novel explores themes of good and evil, love, and the power of art, blending fantastical elements with biting social commentary. Bulgakov's masterpiece is celebrated for its complex structure and profound philosophical insights.",
        img: TheMasterAndMargarita,
        price: 14.99,
        author: "Mikhail Bulgakov",
        format: "Paperback",
        published: "1967-01-01",
        pageNumber: 384,
        category: "Classics"
    },
    {
        id: "58",
        title: "The Odyssey",
        description: "Homer's *The Odyssey* is an epic poem that follows the adventures of Odysseus as he journeys home to Ithaca after the fall of Troy. Encountering mythical creatures and divine beings, Odysseus faces numerous trials and tribulations. This timeless classic explores themes of heroism, loyalty, and the human struggle against fate, offering a rich tapestry of mythology and adventure that continues to captivate readers across generations.",
        img: TheOdssesy,
        price: 13.99,
        author: "Homer",
        format: "Paperback",
        published: "8th Century BC",
        pageNumber: 541,
        category: "Classics"
    },
    {
        id: "59",
        title: "The Picture of Dorian Gray",
        description: "*The Picture of Dorian Gray* by Oscar Wilde is a gothic novel that tells the story of Dorian Gray, a young man whose portrait ages and decays while he remains eternally youthful. As Dorian descends into a life of hedonism and moral corruption, the portrait becomes a reflection of his soul. Wilde's novel explores themes of beauty, vanity, and the duality of human nature, offering a critique of society's obsession with superficiality.",
        img: ThePictureOfDorianGray,
        price: 11.49,
        author: "Oscar Wilde",
        format: "Paperback",
        published: "1890-06-20",
        pageNumber: 254,
        category: "Classics"
    },
    {
        id: "60",
        title: "White Nights",
        description: "*White Nights* by Fyodor Dostoevsky is a poignant short story set in St. Petersburg, exploring the fleeting and bittersweet nature of love. The narrator, a lonely dreamer, encounters a mysterious young woman named Nastenka, and the two form an intense emotional connection over four nights. This beautifully written tale delves into themes of longing, hope, and the transformative power of human connection.",
        img: WhiteNights,
        price: 7.99,
        author: "Fyodor Dostoevsky",
        format: "Paperback",
        published: "1848-01-01",
        pageNumber: 74,
        category: "Classics"
    },
    {
        id: "61",
        title: "Wuthering Heights",
        description: "Emily Brontë's *Wuthering Heights* is a haunting tale of love, revenge, and obsession set on the desolate Yorkshire moors. The novel follows the tumultuous relationship between Heathcliff, an orphaned outsider, and Catherine Earnshaw, exploring the destructive power of passion and the consequences of unfulfilled desire. Through its dark and atmospheric narrative, Brontë's masterpiece remains a powerful exploration of human emotions and the complexities of the human heart.",
        img: WutherHeights,
        price: 10.49,
        author: "Emily Brontë",
        format: "Paperback",
        published: "1847-12-01",
        pageNumber: 416,
        category: "Classics"
    }
];

export default books;