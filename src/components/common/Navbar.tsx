import { Link } from 'react-router-dom';

export default function Navbar() {
  const navlinkStyle = 'duration-150 hover:scale-110 ';

  return (
    <header>
      <h1 className="font-bold text-4xl text-center py-4">10 Projets React</h1>

      <nav>
        <ul className="flex justify-center text-lg">
          <li className={`${navlinkStyle}`}>
            <Link to={'/slider'}>1. Slider</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
