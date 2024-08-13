import AliAlife from '../../../Pages/NonFiction/Biographies/Img/AliAlife.jpg';
import ALionsTale from '../../../Pages/NonFiction/Biographies/Img/ALionsTale.jpg';
import CantHurtMe from '../../../Pages/NonFiction/Biographies/Img/CantHurtMe.webp';
import DaveGrohlTaleOfLifeAndMusic from '../../../Pages/NonFiction/Biographies/Img/DaveGrohlTaleOfLifeAndMusic.jpg';
import IAmOzzy from '../../../Pages/NonFiction/Biographies/Img/IAmOzzy.jpg'
import MikeTypsonUndusputedTruth from '../../../Pages/NonFiction/Biographies/Img/MikeTysonUndisputedTruth.jpg';
import QuittersNeverWin from '../../../Pages/NonFiction/Biographies/Img/QuittersNeverWin.jpg';
import RamblingManMyLifeOnTheRoad from '../../../Pages/NonFiction/Biographies/Img/RamblingManMyLifeOnTheRoad.jpg';
import ScarTissue from '../../../Pages/NonFiction/Biographies/Img/ScarTissue.webp';
import WhiteLineFever from '../../../Pages/NonFiction/Biographies/Img/WhiteLineFever.jpg';




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
        id: "36",
        title: "Ali: A Life",
        description: "*Ali: A Life* by Jonathan Eig is a comprehensive biography that delves into the life of Muhammad Ali, one of the most iconic figures in sports history. Through meticulous research and interviews, Eig paints a vivid portrait of Ali's rise to fame, his legendary boxing career, and his impact on civil rights and global culture. This book captures the complexities of Ali's personality, exploring his triumphs and struggles both inside and outside the ring.",
        img: AliAlife,
        price: 14.99,
        author: "Jonathan Eig",
        format: "Hardcover",
        published: "2017-10-03",
        pageNumber: 640,
        category: "Biographies"
    },
    {
        id: "37",
        title: "A Lion's Tale: Around the World in Spandex",
        description: "Chris Jericho's *A Lion's Tale: Around the World in Spandex* is an entertaining memoir that chronicles his journey from a wrestling fan to becoming a world-renowned professional wrestler. Jericho shares his experiences in wrestling circuits across the globe, offering a candid look at the challenges, triumphs, and hilarious moments in his career. With his unique blend of humor and insight, Jericho provides readers with an inside look at the wrestling industry.",
        img: ALionsTale,
        price: 13.99,
        author: "Chris Jericho",
        format: "Paperback",
        published: "2007-10-25",
        pageNumber: 432,
        category: "Biographies"
    },
    {
        id: "38",
        title: "Can't Hurt Me: Master Your Mind and Defy the Odds",
        description: "In *Can't Hurt Me: Master Your Mind and Defy the Odds*, David Goggins shares his incredible life story, from a troubled childhood to becoming a Navy SEAL and ultra-endurance athlete. Through his experiences, Goggins illustrates how he overcame obstacles by mastering his mind and pushing beyond perceived limits. This motivational memoir is a testament to the power of resilience and mental toughness, inspiring readers to take control of their own lives.",
        img: CantHurtMe,
        price: 18.99,
        author: "David Goggins",
        format: "Paperback",
        published: "2018-11-15",
        pageNumber: 364,
        category: "Biographies"
    },
    {
        id: "39",
        title: "The Storyteller: Tales of Life and Music",
        description: "In *The Storyteller: Tales of Life and Music*, Dave Grohl shares stories from his remarkable journey in the music industry. From his early days in Nirvana to fronting the Foo Fighters, Grohl offers a candid and engaging account of his life as a musician. Filled with anecdotes about his friendships, family, and experiences on the road, this memoir provides an intimate look at the highs and lows of his legendary career.",
        img: DaveGrohlTaleOfLifeAndMusic,
        price: 19.99,
        author: "Dave Grohl",
        format: "Hardcover",
        published: "2021-10-05",
        pageNumber: 384,
        category: "Biographies"
    },
    {
        id: "40",
        title: "I Am Ozzy",
        description: "In *I Am Ozzy*, Ozzy Osbourne narrates his wild and tumultuous life story. Known as the Prince of Darkness, Osbourne recounts his rise to fame as the frontman of Black Sabbath, his solo career, and his notorious antics. This memoir offers a candid and often humorous glimpse into the rock star's life, detailing his battles with addiction, his family life, and his enduring legacy in the world of music.",
        img: IAmOzzy,
        price: 15.99,
        author: "Ozzy Osbourne",
        format: "Paperback",
        published: "2009-10-01",
        pageNumber: 416,
        category: "Biographies"
    },
    {
        id: "41",
        title: "Undisputed Truth",
        description: "Mike Tyson's *Undisputed Truth* is a raw and unflinching autobiography that delves into the life of one of boxing's most controversial figures. Tyson chronicles his rise from the streets of Brooklyn to become the youngest heavyweight champion in history. He candidly discusses his struggles with addiction, legal battles, and personal demons. This memoir offers a compelling look at Tyson's tumultuous journey, exploring themes of redemption and resilience.",
        img: MikeTypsonUndusputedTruth,
        price: 16.99,
        author: "Mike Tyson",
        format: "Paperback",
        published: "2013-11-12",
        pageNumber: 592,
        category: "Biographies"
    },
    {
        id: "42",
        title: "Quitters Never Win",
        description: "In *Quitters Never Win*, Michael Bisping shares his inspirational story of perseverance and determination. From his humble beginnings in England to becoming a UFC champion, Bisping's memoir highlights the grit and resilience required to succeed in the world of mixed martial arts. With candid humor and honesty, Bisping recounts the challenges he faced and the triumphs he achieved, offering an inspiring message about never giving up on one's dreams.",
        img: QuittersNeverWin,
        price: 14.99,
        author: "Michael Bisping",
        format: "Paperback",
        published: "2019-07-25",
        pageNumber: 320,
        category: "Biographies"
    },
    {
        id: "43",
        title: "Rambling Man: My Life on the Road",
        description: "*Rambling Man: My Life on the Road* by Chris Difford is a memoir that explores the life and career of the co-founder of the band Squeeze. Difford reflects on his experiences touring the world, his creative partnership with Glenn Tilbrook, and the ups and downs of the music industry. With wit and insight, Difford provides a captivating look at the life of a musician and the enduring power of music.",
        img: RamblingManMyLifeOnTheRoad,
        price: 17.99,
        author: "Chris Difford",
        format: "Hardcover",
        published: "2022-06-01",
        pageNumber: 288,
        category: "Biographies"
    },
    {
        id: "44",
        title: "Scar Tissue",
        description: "Anthony Kiedis' *Scar Tissue* is a candid autobiography that chronicles his life as the lead singer of the Red Hot Chili Peppers. Kiedis offers an unfiltered look at his journey through fame, addiction, and recovery. Filled with stories of his wild experiences in the music world, the memoir explores themes of love, loss, and redemption, providing a raw and honest portrayal of the rock star's life.",
        img: ScarTissue,
        price: 12.99,
        author: "Anthony Kiedis",
        format: "Paperback",
        published: "2004-10-06",
        pageNumber: 480,
        category: "Biographies"
    },
    {
        id: "45",
        title: "White Line Fever",
        description: "In *White Line Fever*, Lemmy Kilmister, the legendary frontman of Motörhead, shares his life story with characteristic humor and bluntness. The memoir covers his early days in rock and roll, his rise to fame, and his adventures on and off the stage. Lemmy offers insights into his philosophy on life, music, and the rock and roll lifestyle, making this an essential read for fans and anyone interested in the history of rock music.",
        img: WhiteLineFever,
        price: 13.99,
        author: "Lemmy Kilmister",
        format: "Paperback",
        published: "2002-11-06",
        pageNumber: 336,
        category: "Biographies"
    }
];
export default books;
