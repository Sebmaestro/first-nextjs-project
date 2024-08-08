import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <div className="w-full h-10 bg-blue-500 sticky top-0">
        <div className="container px-4 h-full">
          <div className="flex justify-between items-center h-full">
            <ul className="hidden md:flex gap-x-6 text-white">
              <li>
                <Link href="/">
                  <p>Home</p>
                </Link>
              </li>
              <li>
                <Link href="/features">
                  <p>Features</p>
                </Link>
              </li>
              <li>
                <Link href="/button">
                  <p>Buttons</p>
                </Link>
              </li>
              <li>
                <Link href="/premade">
                    <p>Default</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;