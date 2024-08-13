import BookItem from "../../../Components/BookDesign/BookDesign";
import { AdventureBooks } from "../../../Components/Data/AdventureBooks";
import "./Adventure.css";

const Adventure = () => {
  return (
    <div>
      <div className="GenreTitles">
        <h1>Adventure...</h1>
      </div>
      <div className="bookList">
        {AdventureBooks.map((book) => (
          <BookItem key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Adventure;
