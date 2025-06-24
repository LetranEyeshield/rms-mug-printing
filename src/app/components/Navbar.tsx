"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  // You can move this array outside the component
  // const menuItems = [
  //   { href: "/", label: "Home" },
  //   { href: "/about#about-h2", label: "About" },
  //   { href: "/gallery#gallery-h2", label: "Products" },
  //   { href: "/reviews#reviews-h2", label: "Reviews" },
  //   { href: "/contacts#contact-h2", label: "Contact Us" },
  // ];

  // You can move this array outside the component
  const menuItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/gallery", label: "Products" },
    { href: "/reviews", label: "Reviews" },
    { href: "/contacts", label: "Contact Us" },
  ];

  // // Update current path including hash on client side
  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     setCurrentPath(window.location.pathname + window.location.hash);
  //   }
  // }, [pathname]);

  // function handleToggle() {
  //   const navMenu = document.getElementById("navMenu") as HTMLElement;
  //   navMenu.classList.toggle("hidden");
  // }

  const handleToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLinkClick = () => {
    setMenuOpen(false); // Close menu on link click
  };

  return (
    <>
      <div className="nav-div relative z-[9999] self-end">
        {/* Hamburger Button */}
        <button
          onClick={handleToggle}
          className="menu-button p-2 bg-gray-800 text-white rounded-md md:hidden"
        >
          {menuOpen ? "Close ✕" : "Menu ☰"}
        </button>

        {/* Menu Overlay */}
        <nav
          className={`navbar fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 text-white flex flex-col items-center justify-center transition-transform duration-300 ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          } md:static md:bg-transparent md:flex md:flex-row md:justify-end md:translate-x-0 md:h-auto md:w-auto`}
        >
          <ul className="flex flex-col gap-8 md:flex-row md:gap-6">
            {menuItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  // className={`text-lg ${
                  //   currentPath === item.href ? "text-yellow-400" : ""
                  // }`}
                  className={pathname === item.href ? "active" : ""}
                  onClick={handleLinkClick}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}
