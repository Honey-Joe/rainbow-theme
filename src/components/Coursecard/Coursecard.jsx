import { Book, Bookmark, Star, Users } from "lucide-react";
import { card_img, rainbow_logo } from "../../assets/image";

const Coursecard = () => {
  return (
    <>
      <div className="2xl:container ">
        <div className="w-[70%] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-4">
          <div>
            <img src={card_img} alt="card img" />
          </div>
          <div>
            <div>
              <div className="flex gap-3">
                <div className="flex gap-1">
                  <Star className="  fill-[#FF9747] text-[#FF9747]" />
                  <Star className="  fill-[#FF9747] text-[#FF9747]" />
                  <Star className="  fill-[#FF9747] text-[#FF9747]" />
                  <Star className="  fill-[#FF9747] text-[#FF9747]" />
                  <Star className="  fill-[#FF9747] text-[#FF9747]" />
                </div>
                <div>
                  <p>(1 Reviews)</p>
                </div>
                <div>
                  <Bookmark />
                </div>
              </div>
              <div>
                <p>Basics of HiStydy Theme</p>
              </div>
              <div>
                <div>
                  <Book /> <p>14 Lessons</p>
                </div>
                <div>
                  <Users /> <p>3 Students</p>
                </div>
              </div>
              <div>
                <p>
                  HiStudy Education Theme by Rainbow-Themes is a user-friendly
                  WordPress tool…
                </p>
              </div>
              <div>
                <button>Core Functions</button>
                <button> IT</button>
              </div>
              <div className="flex gap-2 items-center">
                <div>
                  <img src={rainbow_logo} alt="rainbow logo" className="h-10 rounded-full" />
                </div>
                <div>
                  <p>
                    By <span>Rainbow Themes</span> In
                  </p>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <p>Free</p>
                </div>
                <div>
                  <div
                    className="flex items-center justify-center pt-1 pb-3  group relative duration-300 "
                    id="an"
                  >
                    <div className="">
                      <p className="font-[euclid]  text-slate-800 font-black text-[15px] group-hover:text-[#2f57ef]">
                        Learn More
                      </p>
                    </div>
                    <div className=" text-slate-600 group-hover:text-[#2f57ef]"></div>
                  </div>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Coursecard;
