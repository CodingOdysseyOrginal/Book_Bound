// bookData.ts
interface Book {
    id: string;
    title: string;
    description: string;
    image: string;
    link: string;
  }
  
  const books: Book[] = [
    {
      id: '1',
      title: 'Cracking the Coding Interview',
      description: 'How to crack the coding quiz!',
      image: '../imgs/CrackTheInterview.webp',
      link: '/view/cracking-the-coding-interview',
    },
    {
      id: '2',
      title: 'Dune',
      description: 'Explore the world of Fiction',
      image: '../imgs/Dune.webp',
      link: '/view/dune',
    },
    {
      id: '3',
      title: 'Will Save the Galaxy for Cash',
      description: 'A thrilling adventure through the galaxy!',
      image: '../imgs/WillDestoryTheGalaxyForCash.jpg',
      link: '/view/will-save-the-galaxy-for-cash',
    },
  ];
  
  export default books;
  