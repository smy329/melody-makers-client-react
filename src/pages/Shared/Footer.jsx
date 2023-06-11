import { IoLogoFacebook, IoLogoTwitter, IoLogoYoutube } from 'react-icons/io5';
import logo from '../../assets/images/logo.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="bg-blue-400 bg-opacity-20 mt-20">
      <div className="container mx-auto">
        <div className=" grid grid-cols-1 text-center md:text-left md:grid-cols-5 gap-5 py-20 px-5 ml-5">
          <div className="col-span-1 md:col-span-2 space-y-5">
            <div className="flex justify-center items-center">
              <img src={logo} alt="logo" className="h-16 w-16" />
              <div>
                <p className="font-bold text-xl">Melody</p>
                <p className="font-bold text-xl">Makers</p>
              </div>
            </div>
            <div className="my-5 leading-8">
              <p>Office: Nandan Kanan, Chittagong, Bangladesh</p>
              <p>Contact: +880-1833051312</p>
            </div>
            <div>
              <p className="leading-10 font-bold text-lg">Social</p>
              <div className="flex  gap-5 justify-center md:justify-start">
                <IoLogoFacebook className="h-7 w-7" />
                <IoLogoYoutube className="h-7 w-7" />
                <IoLogoTwitter className="h-7 w-7" />
              </div>
            </div>
            <div>
              <span className="text-base">
                © 2023&nbsp;
                <Link href="https://facebook.com/cyasir" className="hover:underline">
                  Melody Makers™ Camp
                </Link>
                . All Rights Reserved.
              </span>
            </div>
          </div>
          <div>
            <ul className=" leading-10 font-normal text-base">
              <li className="font-bold text-lg mb-5">About Us</li>
              <li className="hover:text-blue-700 hover:font-medium hover:translate-x-5 transition-all duration-200 ">
                Careers
              </li>
              <li className="hover:text-blue-700 hover:font-medium hover:translate-x-5 transition-all duration-200 ">
                News & Blog
              </li>
              <li className="hover:text-blue-700 hover:font-medium hover:translate-x-5 transition-all duration-200 ">
                Press Center
              </li>
              <li className="hover:text-blue-700 hover:font-medium hover:translate-x-5 transition-all duration-200 ">
                Affiliate & Partners
              </li>
              <li className="hover:text-blue-700 hover:font-medium hover:translate-x-5 transition-all duration-200 ">
                Idea & Guides
              </li>
            </ul>
          </div>
          <div>
            <ul className=" leading-10 font-normal text-base">
              <li className="font-bold text-lg mb-5">Services</li>
              <li className="hover:text-blue-700 hover:font-medium hover:translate-x-5 transition-all duration-200 ">
                DJ Song
              </li>
              <li className="hover:text-blue-700 hover:font-medium hover:translate-x-5 transition-all duration-200 ">
                Team Orchestra P
              </li>
              <li className="hover:text-blue-700 hover:font-medium hover:translate-x-5 transition-all duration-200 ">
                Pianist for Assemblies
              </li>
              <li className="hover:text-blue-700 hover:font-medium hover:translate-x-5 transition-all duration-200 ">
                Music Production in Schools
              </li>
              <li className="hover:text-blue-700 hover:font-medium hover:translate-x-5 transition-all duration-200 ">
                ReelMusic For Music Hubs
              </li>
            </ul>
          </div>
          <div>
            <ul className=" leading-10 font-normal text-base">
              <li className="font-bold text-lg mb-5">Help</li>

              <li className="hover:text-blue-700 hover:font-medium hover:translate-x-5 transition-all duration-200 ">
                Returns
              </li>
              <li className="hover:text-blue-700 hover:font-medium hover:translate-x-5 transition-all duration-200 ">
                Contact Us
              </li>
              <li className="hover:text-blue-700 hover:font-medium hover:translate-x-5 transition-all duration-200 ">
                Feedback
              </li>
              <li className="hover:text-blue-700 hover:font-medium hover:translate-x-5 transition-all duration-200 ">
                FAQs
              </li>
              <li className="hover:text-blue-700 hover:font-medium hover:translate-x-5 transition-all duration-200 ">
                Security & Fraud
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
