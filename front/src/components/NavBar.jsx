import { useState } from "react";
import { Link } from "react-router-dom";
import { User, Send, LibraryBig, Menu, X } from "lucide-react";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);

  const linkClass =
    "inline-flex items-center gap-1 h-full text-sm font-semibold tracking-normal text-neutral-900 transition-colors hover:text-neutral-900/75 relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-black after:opacity-0 after:transition-opacity hover:after:opacity-25";

  return (
    <>
      <header className="fixed top-0 z-50 h-16 w-screen bg-white border-b border-neutral-100">
        <div className="flex h-full w-full max-w-[1200px] mx-auto items-center gap-8 px-8 xl:px-0">
          {/* Brand */}
          <Link
            to="/"
            onClick={closeMenu}
            className="font-bold tracking-widest text-sm mr-auto"
          >
            SURIYATHEP
          </Link>

          {/* Desktop links */}
          <nav className="hidden md:flex items-center h-full gap-8">
            {/* <Link to="/" className={linkClass} onClick={closeMenu}>
              <User size={14} /> About
            </Link>
            <Link to="/projects" className={linkClass} onClick={closeMenu}>
              <LibraryBig size={14} /> Projects
            </Link> */}
            <Link to="/contact" className={linkClass} onClick={closeMenu}>
              <Send size={14} /> Contact
            </Link>
          </nav>

          {/* Hamburger - mobile only */}
          <button
            className="md:hidden ml-auto"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile dropdown */}
      {isMenuOpen && (
        <div className="fixed top-16 left-0 z-40 w-full bg-white border-b border-neutral-100 md:hidden px-8 py-4 flex flex-col gap-4">
          <Link
            to="/"
            className="flex items-center gap-2 text-sm font-semibold"
            onClick={closeMenu}
          >
            <User size={14} /> About
          </Link>
          <Link
            to="/projects"
            className="flex items-center gap-2 text-sm font-semibold"
            onClick={closeMenu}
          >
            <LibraryBig size={14} /> Projects
          </Link>
          <Link
            to="/contact"
            className="flex items-center gap-2 text-sm font-semibold"
            onClick={closeMenu}
          >
            <Send size={14} /> Contact
          </Link>
        </div>
      )}

      {/* Spacer so content doesn't sit under the fixed bar */}
      {/* <div className="h-16" /> */}
    </>
  );
}

export default NavBar;
