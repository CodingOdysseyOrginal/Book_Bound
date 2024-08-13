import BookItem from "../../../Components/BookDesign/BookDesign";
import ClassicBooks from '../../../Components/Data/BestSellerBooks/ClassicBooks'


export const Classics = () => {
  return (
    <div>
      <div className="GenreTitles">
        <h1>Classics...</h1>
      </div>
      <div className="bookList">
        {ClassicBooks.map((book) => (
          <BookItem key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};
