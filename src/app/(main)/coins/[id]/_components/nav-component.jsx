import React from "react";

const NavComponent = ({ coin }) => {
  return (
    <>
      <nav
        aria-label="Breadcrumb"
        className="mb-6 mt-6 flex items-center text-xs font-normal"
      >
        <a
          className="text-violet-400 hover:text-violet-500 transition-colors capitalize"
          href="/"
        >
          home
        </a>
        <svg className="mx-1 mt-1 h-4 w-4">
          <use xlinkHref="#breadcrumb-arrow" />
        </svg>
        <a
          className="capitalize text-neutral-400 transition-colors hover:text-white"
          href={`/coin/${coin?.id}`} // Make sure this is correct
        >
          {coin?.name}
        </a>
      </nav>
    </>
  );
};

export default NavComponent;
