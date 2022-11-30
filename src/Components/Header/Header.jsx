import Title from "./Title/Title";
import Search from "./Search/Search";
import "./header.css";

function Header() {
  return (
    <div className="header_wrapper">
      <Title />
      <Search />
    </div>
  );
}

export default Header;
