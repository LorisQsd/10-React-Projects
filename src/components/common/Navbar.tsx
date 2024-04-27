import { Link } from 'react-router-dom';

export default function Navbar() {
  const navlinkStyle = 'duration-150 hover:scale-110 ';

  return (
    <header>
      <h1 className="py-4 text-4xl font-bold text-center">10 Projets React</h1>

      <nav>
        <ul className="flex justify-center gap-2 text-lg">
          <li className={navlinkStyle}>
            <Link to={'/slider'}>1. Slider</Link>
          </li>
          <li className={navlinkStyle}>
            <Link to={'/weather'}>2. Weather</Link>
          </li>
        </ul>
      </nav>

      <div
        className="h-[2px] rounded-full w-3/4 bg-white block mx-auto my-4"
        role="separator"
      />
    </header>
  );
}
