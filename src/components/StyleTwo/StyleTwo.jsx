import StyletwoCard from "../StyletwoCard/StyletwoCard"
import StyleTwoCardApi from "../../StyleTwoCardApi/StyleTwoCardApi"

const StyleTwo = () => {
  return (
    <>
        <div>
            <div className=" flex justify-center items-center w-[90%] mx-auto h-screen">
                <div>
                    <div className=" py-20">
                        <h1 className=" text-center text-[24px] text-[#192335] font-[euclid] font-bold">Style Two</h1>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:space-x-7  space-y-3 md:space-y-0 md:gap-y-2 md:gap-x-2">
                        {
                            StyleTwoCardApi.map((e,index)=>{
                                return(
                                    <>
                                        <div key={index}>
                                        <StyletwoCard image={e.imgage}
                                            icon={e.icon}
                                            coursename={e.coursename}
                                            courses={e.courses}
                                        />
                                        </div>
                                    </>
                                )
                            })
                        }

                        
                        
                    </div>
                </div>
                
            </div>
        </div>
    </>
  )
}

export default StyleTwo