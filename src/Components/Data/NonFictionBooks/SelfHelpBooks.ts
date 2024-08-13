import JP12RulesForLife from '../../../Pages/NonFiction/SelfHelp/Img/12RulesForLife.webp';
import Ikigai from '../../../Pages/NonFiction/SelfHelp/Img/Ikigai.webp';
import MansSearchForMeaning from '../../../Pages/NonFiction/SelfHelp/Img/MansSearchForMeaning.jpg';
import Meditations from '../../../Pages/NonFiction/SelfHelp/Img/Meditations.jpg';
import The48LawsOfPower from '../../../Pages/NonFiction/SelfHelp/Img/The48LawsOfPower.webp'
import TheSubtleArtOfNotGivingAfool from '../../../Pages/NonFiction/SelfHelp/Img/TheSubtleArtOfNotGivingAFuck.jpg';


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
        id: "46",
        title: "12 Rules for Life: An Antidote to Chaos",
        description: "In *12 Rules for Life: An Antidote to Chaos*, Jordan B. Peterson explores practical principles to bring order and stability to our lives. Drawing on psychology, philosophy, and mythology, Peterson offers insights on how to navigate the complexities of life, focusing on topics such as responsibility, meaning, and discipline. This book serves as a guide for those seeking to create a more meaningful and fulfilled existence by embracing life's challenges.",
        img: JP12RulesForLife,
        price: 15.99,
        author: "Jordan B. Peterson",
        format: "Paperback",
        published: "2018-01-16",
        pageNumber: 448,
        category: "Self-Help"
    },
    {
        id: "47",
        title: "Ikigai",
        description: "*Ikigai: The Japanese Secret to a Long and Happy Life* by Héctor García and Francesc Miralles explores the concept of 'ikigai,' the Japanese philosophy that encourages finding purpose and joy in life. Through interviews with residents of Okinawa, known for their longevity, the authors reveal how ikigai contributes to a fulfilling and balanced life. This book provides practical advice on how to discover one's own ikigai, leading to happiness and contentment.",
        img: Ikigai,
        price: 13.49,
        author: "Héctor García and Francesc Miralles",
        format: "Hardcover",
        published: "2016-11-15",
        pageNumber: 208,
        category: "Self-Help"
    },
    {
        id: "48",
        title: "Man's Search for Meaning",
        description: "In *Man's Search for Meaning*, Viktor E. Frankl chronicles his experiences as a Holocaust survivor and psychiatrist. Through his profound insights into human suffering, Frankl introduces the concept of 'logotherapy,' emphasizing the importance of finding meaning in life, even amidst adversity. This inspirational book offers a powerful testament to the resilience of the human spirit and the enduring quest for purpose and significance in the face of unimaginable challenges.",
        img: MansSearchForMeaning,
        price: 9.99,
        author: "Viktor E. Frankl",
        format: "Paperback",
        published: "1946-01-01",
        pageNumber: 184,
        category: "Self-Help"
    },
    {
        id: "49",
        title: "Meditations",
        description: "*Meditations* by Marcus Aurelius is a collection of personal writings from the Roman Emperor, reflecting on his Stoic philosophy and the pursuit of virtue. These timeless meditations provide profound insights into the nature of existence, self-discipline, and personal ethics. Through his reflections, Aurelius emphasizes the importance of self-control, rationality, and resilience, offering a guide for living a life of purpose and integrity in an ever-changing world.",
        img: Meditations,
        price: 11.99,
        author: "Marcus Aurelius",
        format: "Paperback",
        published: "180 AD",
        pageNumber: 256,
        category: "Self-Help"
    },
    {
        id: "50",
        title: "The 48 Laws of Power",
        description: "In *The 48 Laws of Power*, Robert Greene explores the dynamics of power and influence throughout history. Drawing on examples from historical figures and leaders, Greene presents 48 laws that outline strategies for gaining and maintaining power. This controversial yet insightful book delves into the psychology of power, offering practical advice for navigating social dynamics and achieving success in personal and professional relationships.",
        img: The48LawsOfPower,
        price: 16.99,
        author: "Robert Greene",
        format: "Paperback",
        published: "1998-09-01",
        pageNumber: 452,
        category: "Self-Help"
    },
    {
        id: "51",
        title: "The Subtle Art of Not Giving a F*ck",
        description: "Mark Manson's *The Subtle Art of Not Giving a F*ck* challenges conventional self-help wisdom by advocating for a realistic approach to personal growth. Manson emphasizes the importance of embracing limitations and choosing what truly matters in life. Through humor and candid insights, the book encourages readers to focus on the things they can control and to find strength in vulnerability, ultimately leading to a more authentic and fulfilling life.",
        img: TheSubtleArtOfNotGivingAfool,
        price: 14.99,
        author: "Mark Manson",
        format: "Paperback",
        published: "2016-09-13",
        pageNumber: 224,
        category: "Self-Help"
    }
];
export default books;
