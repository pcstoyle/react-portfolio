import '../styles/Footer.css';

function Footer( {currentPage, handlePageChange } ) {
    return (
      <footer className="footer">
        <h3> 
          <ul>
            <li>
            <a href="https://github.com/pcstoyle">GitHub</a>
            </li>
            <li>
            <a href="https://www.linkedin.com/in/paige-stoyle-7744b2161/">LinkedIn</a>
            </li>
          </ul>
        </h3>

      </footer>
    );
  }
  
  export default Footer;