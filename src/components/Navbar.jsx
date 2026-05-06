import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
 <header className="w-full h-20 flex justify-between items-center bg-deep-navy text-theme-white">
      <a href="">
        <img src="" alt="" />
        Selene Crochet
      </a>
      
      <div>
        {!isOpen ? (
          <div
            className="lg:hidden flex items-center h-12 cursor-pointer"
            onClick={() => setIsOpen(true)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="bi bi-list h-12"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
              />
            </svg>
          </div>
        ) : (
          <div className="lg:hidden fixed top-0 left-0 h-screen w-full bg-deep-navy/50 backdrop-blur-md z-50">
            <div className="w-full flex justify-end pt-5">
              <div
                className="flex h-12 items-center cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                <svg
                  className="h-12 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Navbar;
