
const MenuSection = () => {
  return (
    <div className="absolute z-10 ">
        <h1
            onClick={() => window.location.reload()}
            className="pb-5 text-6xl font-bold ml-8 mt-5 text-primary duration-500 hover:cursor-pointer active:scale-[0.98]"
          >
            orion
          </h1>
          <span>
          <span onClick=" " className="absolute block top-32 left-44 cursor-pointer">
            <svg
              width="20px"
              height="20px"
              viewBox="0 0 16 16"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fill="#D1D5DB" d="M0 1h16v3h-16v-3z"></path>
              <path fill="#D1D5DB" d="M0 6h16v3h-16v-3z"></path>
              <path fill="#D1D5DB" d="M0 11h16v3h-16v-3z"></path>
            </svg>
          </span>
          </span>
        </div>
      
  )
}

export default MenuSection