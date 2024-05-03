import logo1 from "../assets/logo1.png"
import logo2 from "../assets/logo2.png"
import logo3 from "../assets/logo3.png"

const Card=()=>{
    return (
        <div className=" mt-12 flex justify-evenly flex-wrap">
            <div className="flex flex-col items-center">
                <img src={logo1} className=" w-44"/>
                <p className="font-bold mt-2 text-xl">2,500</p>
                <p className="mt-4">enterprise organizations successfully launched</p>
            </div>
            <div className="flex flex-col items-center">
                <img src={logo2} className=" w-44"/>
                <p className="font-bold mt-2 text-xl">45,000</p>
                <p className="mt-4">enterprise users onboarded seamlessly</p>
            </div>
            <div className="flex flex-col items-center">
                <img src={logo3} className=" w-44"/>
                <p className="font-bold mt-2 text-xl">200,000+</p>
                <p className="mt-4">professionals trained on product strategy</p>
            </div>
        </div>
    )
}

export default Card;