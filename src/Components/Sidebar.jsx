import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Sidebar = ({setSidebar,navMenus, activeMenu, setActiveMenu }) => {
  return (
    <div
      className={`fixed top-0 right-0 h-[100vh] w-64 bg-primary text-white flex flex-col items-center justify-center transition-transform duration-300 ease-in-out z-20 lg:hidden ${
        setSidebar ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <button
        className="absolute top-4 right-4 text-2xl"
        onClick={() => setSidebar(false)} aria-label="Close sidebar">
        <FaTimes />
      </button>

      <div className="text-center">
          <ul className="flex flex-col items-center gap-6 text-[17px] font-medium">
            {navMenus.map((menu)=>(
              <li key={menu.id} className="relative">
              <Link to={menu.url}
              onClick={()=>{
                setActiveMenu(menu.id);
                setSidebar(false);
              }}
               className="cursor-pointer">
                {menu.label}
              </Link>
              {menu.id === activeMenu &&(
                <div className="absolute w-[70%] h-[2px] bg-white transform-left-1/2 translate-x-1/2 mt-"></div>
              )}
              </li>
            ))}
          
          </ul>
      </div>
    </div>
  );
};

export default Sidebar;
