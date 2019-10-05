import utilities from '../../helpers/utilities';
import './navbar.scss';

// when you're doing an import and it's a javascript file you don't need the extension. Everything else you need the extension.

const loadNavbar = () => {
  // create all the elements that go to the top of the page

  const domString = `
  <nav>
  <a href="#"class="brand">Hogwarts</a>
    <ul>
    <li>
    </li>
    <a href="#">Home</a>
  </nav>
  `;
  utilities.printToDom('nav-container', domString);
};

export default { loadNavbar };
