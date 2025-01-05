const Header = () => {
  const clearData = () => {
    localStorage.clear();
    window.location.reload();
  };
  return (
    <header className="mt-5 px-5">
      <span
        onClick={clearData}
        className="inline-block text-7xl font-bold text-primary duration-500 hover:cursor-pointer active:scale-[0.98]"
      >
        orion
      </span>
      <p className="font-bold">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
    </header>
  );
};

export default Header;
