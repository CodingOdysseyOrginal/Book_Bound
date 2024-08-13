import BookItem from "../../../Components/BookDesign/BookDesign";
import ScienceFictionBooks from "../../../Components/Data/FictionBooks/ScienceFictionBooks";


function ScienceFiction() {
    return (
        <div>
          <div className="GenreTitles">
            <h1>Science Fiction...</h1>
          </div>
          <div className="bookList">
            {ScienceFictionBooks.map((book) => (
              <BookItem key={book.id} book={book} />
            ))}
          </div>
        </div>
      );
}

export default ScienceFiction;
