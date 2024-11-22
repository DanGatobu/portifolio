import imageAssetsVar from "../assets/images/imageAssets";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { TbBrandFiverr } from "react-icons/tb";
import { FaSquareUpwork } from "react-icons/fa6";

const NavBar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 justify-center">
        <img src={imageAssetsVar.logoIcon} className="mx-2 w-10" alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        {/* GitHub */}
        <a href="https://github.com/DanGatobu" target="_blank" rel="noopener noreferrer">
          <FaGithub className="hover:text-gray-600" />
        </a>
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/dan-gatobu-012544214/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="hover:text-blue-600" />
        </a>
        {/* Fiverr */}
        <a
          href="https://www.fiverr.com/dan_new_ton?up_rollout=true"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TbBrandFiverr className="hover:text-green-500" />
        </a>
        {/* Upwork */}
        <a
          href="https://www.upwork.com/freelancers/~01128993ebc1bd665b?referrer_url_path=%2Fnx%2Fsearch%2Ftalent%2Fdetails%2F~01128993ebc1bd665b%2Fprofile"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaSquareUpwork className="hover:text-teal-500" />
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
