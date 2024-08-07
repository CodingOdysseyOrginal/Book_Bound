
import { Book } from "../../Components/Data/HomePageBook";
import homePageBooks from "../../Components/Data/HomePageBook";
import adventureBooks from "../../Components/Data/AdventureBooks";

const combineBooks = (): Book[] => {
  return [...homePageBooks, ...adventureBooks];
};

export default combineBooks;
