import AmericanGods from '../../../Pages/Fiction/ScienceFiction/Img/AmericanGods.jpg';
import BraveNewWorld from '../../../Pages/Fiction/ScienceFiction/Img/BraveNewWorld.jpg';
import DoAndroidsDreamOfElectricSheep from '../../../Pages/Fiction/ScienceFiction/Img/DoAndroidsDreamOfElectricSheep.jpg';
import Fahrenheit from '../../../Pages/Fiction/ScienceFiction/Img/Fahrenheit451.webp';
import TheBookThatWouldntBurn from '../../../Pages/Fiction/ScienceFiction/Img/TheBookThatWouldntBurn.jpg';
import TheForeverWar from '../../../Pages/Fiction/ScienceFiction/Img/TheForeverWar.jpg';
import TheHitchHikersGuideToTheGalaxy from '../../../Pages/Fiction/ScienceFiction/Img/TheHitchHikersGuideToTheGalaxy.jpg';
import WarOfTheWorlds from '../../../Pages/Fiction/ScienceFiction/Img/WarOfTheWorlds.webp';



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
        id: "26",
        title: "American Gods",
        description: "Neil Gaiman's *American Gods* is a fascinating blend of Americana, fantasy, and mythology. The story follows Shadow Moon, a man who is released from prison only to find that his wife has died in a car crash. He is recruited by the enigmatic Mr. Wednesday, who is on a mission to rally the old gods of mythology to battle against the new gods of technology and consumerism. Gaiman masterfully explores themes of belief, cultural change, and identity in this epic tale.",
        img: AmericanGods,
        price: 12.99,
        author: "Neil Gaiman",
        format: "Paperback",
        published: "2001-06-19",
        pageNumber: 465,
        category: "Science Fiction"
    },
    {
        id: "27",
        title: "Brave New World",
        description: "Aldous Huxley's *Brave New World* is a dystopian novel that delves into a future society driven by technological advancements and controlled through pleasure and conditioning. In this world, the concept of family, individuality, and free will are nearly extinct. The story follows Bernard Marx, an outsider who questions the norms of this highly controlled society, and his journey through the complexities of freedom, happiness, and the cost of conformity.",
        img: BraveNewWorld,
        price: 10.99,
        author: "Aldous Huxley",
        format: "Paperback",
        published: "1932-08-30",
        pageNumber: 311,
        category: "Science Fiction"
    },
    {
        id: "28",
        title: "Do Androids Dream of Electric Sheep?",
        description: "Philip K. Dick's *Do Androids Dream of Electric Sheep?* is a seminal work of science fiction that inspired the iconic film *Blade Runner*. Set in a post-apocalyptic future, the novel follows Rick Deckard, a bounty hunter tasked with 'retiring' rogue androids that have escaped to Earth. As Deckard navigates a world blurred between reality and artificiality, he grapples with questions of empathy, humanity, and what it means to be truly alive.",
        img: DoAndroidsDreamOfElectricSheep,
        price: 9.99,
        author: "Philip K. Dick",
        format: "Paperback",
        published: "1968-03-02",
        pageNumber: 210,
        category: "Science Fiction"
    },
    {
        id: "29",
        title: "Fahrenheit 451",
        description: "Ray Bradbury's *Fahrenheit 451* is a powerful dystopian novel about a future society where books are banned and 'firemen' burn any that are found. The story centers on Guy Montag, a fireman who begins to see the value of preserved knowledge through books. As he becomes disillusioned with the anti-intellectualism and oppressive control of society, Montag struggles to find meaning and freedom in a world that discourages independent thought.",
        img: Fahrenheit,
        price: 11.99,
        author: "Ray Bradbury",
        format: "Paperback",
        published: "1953-10-19",
        pageNumber: 249,
        category: "Science Fiction"
    },
    {
        id: "30",
        title: "The Book That Wouldn't Burn",
        description: "*The Book That Wouldn't Burn* by Mark Lawrence is a compelling tale about the power of stories and their enduring nature. Set in a vast library, the book follows two protagonists who are separated by time but connected by their love of stories and a mysterious book that defies destruction. As they navigate through the library's secrets and challenges, the novel explores themes of memory, legacy, and the transformative nature of literature.",
        img: TheBookThatWouldntBurn,
        price: 14.99,
        author: "Mark Lawrence",
        format: "Hardcover",
        published: "2023-05-09",
        pageNumber: 368,
        category: "Science Fiction"
    },
    {
        id: "31",
        title: "The Forever War",
        description: "Joe Haldeman's *The Forever War* is a science fiction classic that examines the impact of time dilation and war on soldiers. The protagonist, William Mandella, is a soldier fighting an interstellar war against an alien species. As he travels through space and time, Mandella experiences the disconnection from Earth and its rapidly changing society. The novel is a profound commentary on the futility of war and the human struggle to find meaning amidst chaos.",
        img: TheForeverWar,
        price: 13.99,
        author: "Joe Haldeman",
        format: "Paperback",
        published: "1974-05-01",
        pageNumber: 278,
        category: "Science Fiction"
    },
    {
        id: "32",
        title: "The Hitchhiker's Guide to the Galaxy",
        description: "Douglas Adams' *The Hitchhiker's Guide to the Galaxy* is a comedic science fiction novel that follows the adventures of Arthur Dent, an unwitting human who is swept off Earth moments before its destruction. Accompanied by an eccentric group of characters, Arthur embarks on a humorous and absurd journey through the universe. The novel is celebrated for its wit, satire, and imaginative storytelling, offering a unique perspective on life, the universe, and everything.",
        img: TheHitchHikersGuideToTheGalaxy,
        price: 12.49,
        author: "Douglas Adams",
        format: "Paperback",
        published: "1979-10-12",
        pageNumber: 193,
        category: "Science Fiction"
    },
    {
        id: "33",
        title: "War of the Worlds",
        description: "H.G. Wells' *War of the Worlds* is a pioneering science fiction novel that depicts an alien invasion of Earth by Martians. Written in the late 19th century, the novel explores themes of imperialism, technological superiority, and human survival. As the Martians wreak havoc with their advanced weaponry, humanity's resilience and adaptability are put to the test. The story remains a timeless reflection on the potential consequences of unchecked technological advancement and the fragile nature of civilization.",
        img: WarOfTheWorlds,
        price: 9.49,
        author: "H.G. Wells",
        format: "Paperback",
        published: "1898-04-17",
        pageNumber: 192,
        category: "Science Fiction"
    }
];
export default books;
