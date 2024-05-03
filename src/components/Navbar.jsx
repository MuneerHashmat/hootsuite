import hootsuite from "../assets/hootsuite2.png";

const Navbar=()=>{
    return (
        <nav className="flex flex-wrap items-center justify-between px-24 py-6">
           <div className="flex items-center gap-10">
              <img src={hootsuite} className="w-40 cursor-pointer"/>
              <div className="flex gap-7 text-base font-sans font-bold">
                <a href="#">Platform</a>
                <a href="#">Plans</a>
                <a href="#">Enterprise</a>
                <a href="#">Resources</a>
                <a href="#">Education</a>
              </div>
           </div>

           <div className="flex gap-8 text-gray-600 text-base font-semibold items-center">
                <a href="#">Contact Us</a>
                <a href="#">Login</a>
                <a href="#" className="block bg-green-600 px-5 py-2 font-bold text-white hover:scale-105 transition duration-100 ease-in-out">Sign Up</a>
           </div>

        </nav>
    )
}

export default Navbar;