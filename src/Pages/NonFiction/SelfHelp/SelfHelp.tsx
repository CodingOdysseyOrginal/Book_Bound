import BookItem from "../../../Components/BookDesign/BookDesign";
import SelfHelpBooks from "../../../Components/Data/NonFictionBooks/SelfHelpBooks";


export default function SelfHelp() {
  return <div>
  <div className="GenreTitles">
    <h1>Self Help..</h1>
  </div>
  <div className="bookList">
    {SelfHelpBooks.map((book) => (
      <BookItem key={book.id} book={book} />
    ))}
  </div>
</div>;
}
