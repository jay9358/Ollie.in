import React from 'react';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-stone-50/80 backdrop-blur-lg">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-3xl  tracking-tight text-black">
          Ollie
        </div>
        <button className="bg-[black] text-white font-semibold px-5 py-2 rounded-xl transition-all duration-300 ease-in-out  hover:scale-[1.02]">
          Book an Appointment
        </button>
      </nav>
    </header>
  );
};

export default Navbar;