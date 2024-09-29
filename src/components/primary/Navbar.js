import Link from 'next/link';
import { navs } from '../../lib/navs';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between w-full px-4 py-3 bg-white shadow-sm">
      <div className="flex items-center space-x-4">
        {navs.map((nav) => (
          <Link
            key={nav.name}
            href={nav.href}
            className="text-gray-700 hover:text-black transition-colors duration-200"
          >
            {nav.name}
          </Link>
        ))}
      </div>
      <button className="px-4 py-2 text-white bg-gray-800 rounded hover:bg-gray-700 transition-colors duration-200">
        Sign In
      </button>
    </nav>
  );
};

export default Navbar;
