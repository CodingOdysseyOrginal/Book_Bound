import BookItem from '../../../Components/BookDesign/BookDesign';
import HorrorBooks from '../../../Components/Data/HorrorBook';


const Horror = () => {
  return (
    <div>
    <div className="GenreTitles">
      <h1>Horror...</h1>
    </div>
    <div className="bookList">
      {HorrorBooks.map((book) => (
        <BookItem key={book.id} book={book} />
      ))}
    </div>
  </div>
  )  
};

export default Horror