import { Facebook, Instagram, Linkedin, Star, Twitter } from "lucide-react"
import { rainbow_logo } from "../../assets/image"


const Card_intro = () => {
  return (
    <>
     <div className="2xl:container py-10">
        <div className="w-[50%] grid grid-cols-1 mx-auto items-center justify-center">
            <div className="flex flex-col justify-center px-5 shadow-2xl py-6">
                <div className="flex justify-start">
                    <p>Instructor</p>
                </div>
                <div className="w-full h-[1px] bg-gray-300"></div>
                <div className="flex gap-10 items-center">
                    <div className="py-5 ">
                        <img src={rainbow_logo} alt="" className="w-[550px] h-[200px] rounded-full" />
                    </div>
                    <div className="flex flex-col justify-center gap-2 py-4">
                        <p className="font-[euclid] text-[20px]  font-bold hover:text-[#2f57ef]">Rainbow themes</p>
                        <p className="font-[euclid] text-base text-[#6b7385]">Word press Developer</p>
                        <div className="flex gap-1">
                        <Star className="  fill-[#FF9747] text-[#FF9747]" />
                        <Star className="  fill-[#FF9747] text-[#FF9747]" />
                        <Star className="  fill-[#FF9747] text-[#FF9747]" />
                        <Star className="  fill-[#FF9747] text-[#FF9747]" />
                        <Star className="  fill-[#FF9747] text-[#FF9747]" />
                        <div className="flex gap-4">
                            <p>4.86</p>
                            <p>7 ratings</p>
                        </div>
                        </div>
                        <div>
                            <p>I'm the Front-End Developer for #Rainbow IT in Bangladesh, OR. I have serious passion for UI effects, animations and creating intuitive, dynamic user experiences.</p>
                        </div>
                        <div className="flex gap-4 ">
                        <Facebook />
                        <Twitter></Twitter>
                        <Instagram></Instagram>
                        <Linkedin></Linkedin>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div> 
    </>
  )
}

export default Card_intro
