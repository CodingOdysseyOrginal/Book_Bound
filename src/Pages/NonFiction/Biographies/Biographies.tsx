import BookItem from "../../../Components/BookDesign/BookDesign";
import BiographieBooks from "../../../Components/Data/NonFictionBooks/BiographieBooks";
type Props = {};

function Biographies({}: Props) {
  return (
    <div>
      <div className="GenreTitles">
        <h1>Biographies..</h1>
      </div>
      <div className="bookList">
        {BiographieBooks.map((book) => (
          <BookItem key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
}

export default Biographies;
