import BookItem from "../../../Components/BookDesign/BookDesign";
import RomanceBooks from "../../../Components/Data/RomanceBooks";
const Romance = () => {
  return (
    <div>
      <div className="GenreTitles">
        <h1>Romance...</h1>
      </div>
      <div className="bookList">
        {RomanceBooks.map((book) => (
          <BookItem key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Romance;
