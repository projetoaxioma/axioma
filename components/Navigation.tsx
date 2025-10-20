"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { IoClose, IoMenu } from "react-icons/io5";

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const dropDownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
      if (
        dropDownRef.current &&
        !dropDownRef.current.contains(event.target as Node)
      ) {
        setDropDown(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav
      ref={menuRef}
      className={`h-navigation bg-cyan-900 w-full flex max-[137px]:justify-center justify-between items-center px-6 py-4 fixed text-white shadow-md z-50 flex-wrap ${
        menuOpen ? "rounded-b-none" : "rounded-b-md"
      }`}
    >
      <Link href="/" className="text-2xl font-semibold tracking-wide">
        AXIOMA
      </Link>

      <button
        className="md:hidden"
        onClick={() => {
          setMenuOpen(!menuOpen);
          setDropDown(false);
        }}
        aria-label="Abrir menu"
      >
        {menuOpen ? (
          <IoClose className="text-2xl" />
        ) : (
          <IoMenu className="text-2xl" />
        )}
      </button>

      <div
        className={`absolute md:static top-16 left-0 w-full md:w-auto bg-cyan-900 md:bg-transparent flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8 pb-6 md:pb-0 px-6 md:px-0 transition-all duration-300 ease-in-out rounded-b-md md:rounded-b-none ${
          menuOpen
            ? "opacity-100 translate-y-0 translate-x-0 visible"
            : "opacity-0 -translate-y-5 translate-x-2 invisible md:visible md:opacity-100 md:translate-y-0"
        }`}
      >
        <a
          href="https://impatech.edu.br/institucional/conheca-o-impa-tech/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-cyan-200 transition-colors duration-300"
        >
          Sobre o IMPA Tech
        </a>

        <div className="relative">
          <button
            onClick={() => setDropDown(!dropDown)}
            className="hover:text-cyan-200 transition-colors duration-300 cursor-pointer"
          >
            Sobre o Axioma
          </button>

          {dropDown && (
            <div
              ref={dropDownRef}
              className="md:absolute -left-2 md:bg-cyan-800 md:rounded-lg md:shadow-lg md:w-40"
            >
              <ul className="flex flex-col p-2 text-sm">
                <li>
                  <Link
                    href="/regulamento"
                    className="block px-3 py-2 rounded-md hover:bg-cyan-700 transition-colors"
                  >
                    Regulamento
                  </Link>
                </li>
                <li>
                  <Link
                    href="#contato"
                    className="block px-3 py-2 rounded-md hover:bg-cyan-700 transition-colors"
                  >
                    Contato
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>

        <Link
          href="/inscricao"
          className="block px-6 md:px-4 py-2 bg-white text-cyan-900 rounded-md font-semibold hover:bg-cyan-100 transition-all duration-300"
        >
          Inscreva-se
        </Link>
      </div>
    </nav>
  );
}
