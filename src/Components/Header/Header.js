import Title from './Title/Title';
import Logo from './Title/Logo/Logo';
import AddMovie from './Title/AddMovie/AddMovie';
import Search from './Search/Search';
import SearchLayout from './Search/SearchLayout';
import './header.css';

function Header() {
    return(
        <div className="header_wrapper">
            <Title>
                <Logo />
                <AddMovie />
            </Title>
            <SearchLayout>
                <Search />
            </SearchLayout>
        </div>);
}

export default Header;
