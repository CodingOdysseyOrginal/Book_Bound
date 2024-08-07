import BookItem from "../../../Components/BookDesign/BookDesign";
import AdventureBooks from "../../../Components/Data/AdventureBooks";

const Adventure = () => {
  return (
    <div>
      <div className="bookList">
        {AdventureBooks.map((book) => (
          <BookItem key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Adventure;
