import GeorgeOrwell1984 from '../../../Pages/Fiction/Horror/Img/GeorgeOrwell1984.jpg';
import AtTheMountainsOfMadness from '../../../Pages/Fiction/Horror/Img/AtTheMountainsOfMadness.jpg';
import Dracula from '../../../Pages/Fiction/Horror/Img/Dracula.webp';
import Frankenstein from '../../../Pages/Fiction/Horror/Img/Frankenstein.jpg';
import GreatestHitsHarlahEllisan from '../../../Pages/Fiction/Horror/Img/GreatestHitsHarlahEllisan.jpg';
import IT from '../../../Pages/Fiction/Horror/Img/IT.jpg';
import TheEyesAreTheBestPart from '../../../Pages/Fiction/Horror/Img/TheEyesAreTheBestPart.webp';
import ThePictureOfDorianGray from '../../../Pages/Fiction/Horror/Img/ThePictureOfDorianGray.jpg';
import TheShining from '../../../Pages/Fiction/Horror/Img/AtTheMountainsOfMadness.jpg';
import InterviewWithTheVampire from '../../../Pages/Fiction/Horror/Img/InterviewWithTheVampire.jpg';

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
        title: "1984",
        description: "George Orwell's dystopian masterpiece '1984' explores a future under a totalitarian regime where the government wields total power over citizens through surveillance and control. In a world of perpetual war, omnipresent government surveillance, and public manipulation, Winston Smith, a low-ranking member of the ruling Party in London, secretly rebels against the oppressive regime. His struggle with the Party's ideology is both a harrowing and insightful examination of truth and freedom.",
        img: GeorgeOrwell1984,
        price: 9.99,
        author: "George Orwell",
        format: "Paperback",
        published: "1949-06-08",
        pageNumber: 328,
        category: "Dystopian Fiction",
    },
    {
        id: "27",
        title: "At The Mountains Of Madness",
        description: "'At the Mountains of Madness' by H.P. Lovecraft is a chilling tale of an Antarctic expedition that uncovers ancient and mysterious horrors lurking beneath the ice. As the scientific team delves deeper into the uncharted territory, they unearth secrets that challenge their sanity and threaten to unravel the very fabric of reality. Lovecraft's narrative blends cosmic horror with elements of science fiction, creating a suspenseful and thought-provoking read.",
        img: AtTheMountainsOfMadness,
        price: 12.99,
        author: "H.P. Lovecraft",
        format: "Paperback",
        published: "1936-02-01",
        pageNumber: 110,
        category: "Horror",
    },
    {
        id: "28",
        title: "Dracula",
        description: "'Dracula' by Bram Stoker is a Gothic horror novel that introduces the legendary vampire Count Dracula. The story follows Jonathan Harker, a solicitor, who visits Dracula's castle in Transylvania only to discover the Count's sinister intentions. As Dracula makes his way to England, a group of people led by Professor Van Helsing unite to stop the vampire's reign of terror. Stoker's novel is a timeless classic that has defined the vampire genre for generations.",
        img: Dracula,
        price: 10.99,
        author: "Bram Stoker",
        format: "Hardcover",
        published: "1897-05-26",
        pageNumber: 418,
        category: "Gothic Horror",
    },
    {
        id: "29",
        title: "Frankenstein",
        description: "'Frankenstein' by Mary Shelley is a seminal work of science fiction and horror that tells the story of Victor Frankenstein, a scientist who creates life through unorthodox experiments. His creation, a grotesque creature, seeks acceptance but faces rejection and isolation, leading to tragic consequences. Shelley's novel explores themes of ambition, humanity, and the ethical limits of scientific exploration, leaving readers questioning the nature of humanity and the consequences of playing God.",
        img: Frankenstein,
        price: 18.99,
        author: "Mary Shelley",
        format: "Hardcover",
        published: "1818-01-01",
        pageNumber: 280,
        category: "Science Fiction",
    },
    {
        id: "30",
        title: "Greatest Hits: Harlan Ellison",
        description: "A collection of short stories and novellas by the legendary writer Harlan Ellison, 'Greatest Hits' showcases Ellison's unique voice and genre-bending style. Known for his influential works in speculative fiction, Ellison's stories challenge societal norms and push the boundaries of imagination. This anthology features some of his most famous works, providing a glimpse into the mind of a literary icon who has inspired countless readers and writers alike.",
        img: GreatestHitsHarlahEllisan,
        price: 14.99,
        author: "Harlan Ellison",
        format: "Paperback",
        published: "2012-09-04",
        pageNumber: 450,
        category: "Speculative Fiction",
    },
    {
        id: "31",
        title: "IT",
        description: "Stephen King's 'IT' is a horror epic that delves into the lives of seven children in Derry, Maine, who are terrorized by an evil entity that exploits their fears. Known as Pennywise the Dancing Clown, this shape-shifting monster emerges every 27 years to prey on the town's children. As the group reunites as adults to confront their worst nightmare, King's masterful storytelling combines elements of horror, friendship, and the power of memory.",
        img: IT,
        price: 11.99,
        author: "Stephen King",
        format: "Hardcover",
        published: "1986-09-15",
        pageNumber: 1138,
        category: "Horror",
    },
    {
        id: "32",
        title: "The Eyes Are the Best Part",
        description: "'The Eyes Are the Best Part' is a chilling collection of horror stories that delve into the darkest corners of the human psyche. Each tale explores themes of fear, obsession, and the supernatural, capturing the reader's imagination with vivid and haunting imagery. The stories weave together elements of traditional horror with modern psychological twists, creating an unforgettable reading experience.",
        img: TheEyesAreTheBestPart,
        price: 9.49,
        author: "Anonymous",
        format: "Paperback",
        published: "2020-03-01",
        pageNumber: 256,
        category: "Horror Anthology",
    },
    {
        id: "33",
        title: "The Picture of Dorian Gray",
        description: "Oscar Wilde's 'The Picture of Dorian Gray' is a philosophical novel that examines themes of aestheticism, moral corruption, and the nature of beauty. Dorian Gray, a handsome young man, wishes to remain forever youthful, a wish granted at the expense of his soul. As he descends into a life of hedonism and depravity, his portrait ages and bears the marks of his sins, reflecting the corruption hidden beneath his outward beauty.",
        img: ThePictureOfDorianGray,
        price: 7.99,
        author: "Oscar Wilde",
        format: "Hardcover",
        published: "1890-06-20",
        pageNumber: 254,
        category: "Gothic Fiction",
    },
    {
        id: "34",
        title: "The Shining",
        description: "Stephen King's 'The Shining' is a gripping horror novel about Jack Torrance, an aspiring writer and recovering alcoholic, who becomes the winter caretaker of the isolated Overlook Hotel. As the snowbound hotel reveals its sinister secrets, Jack's sanity deteriorates under the influence of supernatural forces. The story masterfully intertwines themes of isolation, madness, and family dynamics, culminating in a suspenseful and terrifying climax.",
        img: TheShining,
        price: 10.99,
        author: "Stephen King",
        format: "Paperback",
        published: "1977-01-28",
        pageNumber: 447,
        category: "Horror",
    },
    {
        id: "35",
        title: "Interview with the Vampire",
        description: "Anne Rice's 'Interview with the Vampire' is the first installment in The Vampire Chronicles, recounting the story of Louis de Pointe du Lac, a vampire who shares his life story with a reporter. From his transformation in the 18th century to his tumultuous relationship with his maker, Lestat, Louis' narrative explores themes of immortality, love, and the existential dilemmas faced by those who walk the night. Rice's novel reinvigorated the vampire genre with its lush prose and complex characters.",
        img: InterviewWithTheVampire,
        price: 9.99,
        author: "Anne Rice",
        format: "Hardcover",
        published: "1976-04-12",
        pageNumber: 352,
        category: "Vampire Fiction",
    }
];
export default books;

