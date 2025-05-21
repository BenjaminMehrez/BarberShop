import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="bg-black w-full top-0 px-10">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <picture>
          <img src="/logo.png" alt="logo" className="w-20"/>
        </picture>
        <nav>
          <ul className="flex gap-5 font-semibold text-lg text-white">
            <li className="hover:underline">
              <Link to="">Turnos</Link>
            </li>
            <li className="hover:underline">
              <Link to="">Contacto</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
