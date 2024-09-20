import  imageAssetsVar  from "../assets/images/imageAssets";
// import linkedin,github,instagram from reacticons

import {FaGithub, FaLinkedin, FaInstagram} from 'react-icons/fa';




const NavBar = () => {

    
    


  return (
    <nav className= " mb-20 flex items-center justify-between py-6 ">
        <div className="flex flex-shrink-0  justify-center">
            <img src={imageAssetsVar.logoIcon} className="mx-2 w-10" alt="logo" />
            
            

        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
            <FaGithub/>
            <FaLinkedin/>
            <FaInstagram/>
        </div>

    </nav>
  );
};

export default NavBar;
