// Here we are importing a CSS file as a dependency
import '../styles/Header.css';
import Navbar from './Navbar';

function Header( {currentPage, handlePageChange } ) {
  return (
    <header className="header">
      <h1>Paige Stoyle Portfolio</h1>
      <Navbar currentPage={currentPage} handlePageChange={handlePageChange}/>
    </header>
  );
}

export default Header;