import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useTheme } from "../../contexts/ThemeContext";

const NavBar = () => {
  const { theme } = useTheme();
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const navItems = [
    {
      id: 1,
      text: "Lista de presentes",
      to: "/",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3.75v16.5M2.25 12h19.5M6.375 17.25a4.875 4.875 0 0 0 4.875-4.875V12m6.375 5.25a4.875 4.875 0 0 1-4.875-4.875V12m-9 8.25h16.5a1.5 1.5 0 0 0 1.5-1.5V5.25a1.5 1.5 0 0 0-1.5-1.5H3.75a1.5 1.5 0 0 0-1.5 1.5v13.5a1.5 1.5 0 0 0 1.5 1.5Zm12.621-9.44c-1.409 1.41-4.242 1.061-4.242 1.061s-.349-2.833 1.06-4.242a2.25 2.25 0 0 1 3.182 3.182ZM10.773 7.63c1.409 1.409 1.06 4.242 1.06 4.242S9 12.22 7.592 10.811a2.25 2.25 0 1 1 3.182-3.182Z" />
        </svg>
      ),
    },
    {
      id: 2,
      text: "Minha Escolha",
      to: "/mychoice",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 1 0 9.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1 1 14.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
        </svg>
      ),
    },
    {
      id: 3,
      text: "Acessar",
      to: "/login",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        </svg>
      ),
    },
    {
      id: 4,
      text: "WhatsApp",
      to: "https://wa.me/+5511966021889",
      isExternal: true,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="size-6">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
        </svg>
      ),
    },
  ];

  return (
    <div className=" flex justify-between items-center px-8 md:px-20 drop-shadow-mdk shadow-md" style={{ color: theme.navButton, backgroundColor: theme.navbarBg }}>
      {/* Logo */}
      <Link to="/">
        <div className="flex items-center gap-4 py-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            className="w-20"
            style={{ stroke: theme.primary }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.871c1.355 0 2.697.056 4.024.166C17.155 8.51 18 9.473 18 10.608v2.513M15 8.25v-1.5m-6 1.5v-1.5m12 9.75-1.5.75a3.354 3.354 0 0 1-3 0 3.354 3.354 0 0 0-3 0 3.354 3.354 0 0 1-3 0 3.354 3.354 0 0 0-3 0 3.354 3.354 0 0 1-3 0L3 16.5m15-3.379a48.474 48.474 0 0 0-6-.371c-2.032 0-4.034.126-6 .371m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.169c0 .621-.504 1.125-1.125 1.125H4.125A1.125 1.125 0 0 1 3 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 0 1 6 13.12M12.265 3.11a.375.375 0 1 1-.53 0L12 2.845l.265.265Zm-3 0a.375.375 0 1 1-.53 0L9 2.845l.265.265Zm6 0a.375.375 0 1 1-.53 0L15 2.845l.265.265Z"
            />
          </svg>

          <h1 className="w-full text-3xl font-bold" style={{ color: theme.primary }}>
            Aniversário da Ale
          </h1>
        </div>
      </Link>
      {/* Desktop Navigation */}
      <ul className="hidden md:flex items-center gap-12 font-semibold text-xl">
        {navItems.map((item) => (
          <li key={item.id}>
            {item.isExternal ? (
              <a
                href={item.to}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl m-6 cursor-pointer duration-300 text-nowrap flex items-center gap-2"
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = theme.hover)}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '')}
              >
                {item.icon}
                {item.text}
              </a>
            ) : (
              <Link
                to={item.to}
                className="p-4 rounded-xl m-6 cursor-pointer duration-300 text-nowrap flex items-center gap-2"
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = theme.hover)}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '')}
              >
                {item.icon}
                {item.text}
              </Link>
            )}
          </li>
        ))}
      </ul>

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className=" block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? "fixed md:hidden left-0 top-0 w-[70%] h-full border-r border-r-gray-900 ease-in-out duration-500"
            : "ease-in-out w-[70%] duration-500 fixed top-0 bottom-0 left-[-100%]"
        }
        style={{ backgroundColor: nav ? theme.mobileMenuBg : 'transparent' }}
      >
        {/* Mobile Logo */}
        <h1 className="w-full text-3xl font-bold mt-4 mb-4 flex justify-center" style={{ color: theme.primary }}>
          Aniversário da Ale
        </h1>

        {/* Mobile Navigation Items */}
        {navItems.map((item) => (
          <li key={item.id}>
            {item.isExternal ? (
              <a
                href={item.to}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 border-b rounded-xl duration-300 cursor-pointer border-gray-600 block"
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = theme.hover)}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '')}
              >
                {item.text}
              </a>
            ) : (
              <Link
                to={item.to}
                className="p-4 border-b rounded-xl duration-300 cursor-pointer border-gray-600 block"
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = theme.hover)}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '')}
              >
                {item.text}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavBar;
