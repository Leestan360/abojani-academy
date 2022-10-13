import pic1 from "./images/image.png"
import data from "../data"
import news from "../news"
import { HiOutlineStar } from "react-icons/hi";


function Home() {

  return (
    <div className="w-3/4 pt-24 ml-80">
        <img className="w-full rounded-md" src={pic1} alt="" />

        <div>
            <h2 className="text-2xl font-medium my-4">Explore courses <span className="float-right text-[20px] font-light underline">see all</span></h2>
            <div className="courses-images-div">
                {data.map((item)=> (
                    <div key={item.id} className="one-fetched-course-div">
                        <img className="rounded-md" src={item.img} alt="" />
                        <p className="font-medium">{item.title}</p>
                        <p className="font-light">{item.name}</p>
                        <p className="font-medium">{item.price}</p>
                    </div>
                ))}
            </div>
        </div>

        <h2 className="text-2xl font-medium my-4">Community topics</h2>

        <div className="community-topics-div">
            <div style={{width: "33%"}}>
                <h3 className="text-[#575757] text-xl font-medium mb-4">Trending News</h3>
                <div className="" style={{}}>
                    {news.map((items) => (
                        <div className="flex border mb-4 p-4 rounded-md fetched-div" key={items.id}>
                            <div style={{width: "75%"}}>
                                <p style={{color: "#f17425"}}>{items.newsletter}</p>
                                <p className="font-bold text-base">{items.header}</p>
                                <p className="text-sm">{items.time}</p>
                            </div>
                            <div style={{width: "25%"}}>
                                <img className="rounded-md float-right news-image" src={items.image} alt="" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div style={{width: "64%"}}>
                <h3 className="text-[#575757] text-xl font-medium mb-4">Stock Recommendations</h3>

                <div className="py-4 px-8 bg-[#fff] mb-8 rounded-md stock-recommendations">
                    <div className="flex justify-between items-center mb-4">
                        <img src="https://elvis-munene.github.io/Abojani-Academy-web-app/assets/images/Ellipse%20(1).png" alt="" />
                        <div className="w-5/6">
                            <h2 className="text-2xl font-medium">Cannabis Stocks</h2>
                            <p><span className="text-base font-bold text-[#40b551]">+2.90%</span> <span className="ml-8 font-bold">21 Symbols</span></p>
                        </div>
                        <div><HiOutlineStar className="text-2xl"/></div>
                    </div>
                    <p>The JSE has announced the deployment of an online trading analytics platform for listed firms and exchange traded funds(ETFs). This software has been provided</p>
                </div>
                
                <div className="py-4 px-8 bg-[#fff] mb-8 rounded-md stock-recommendations">
                    <div className="flex justify-between items-center mb-4">
                        <img src="https://elvis-munene.github.io/Abojani-Academy-web-app/assets/images/Ellipse%20(1).png" alt="" />
                        <div className="w-5/6">
                            <h2 className="text-2xl font-medium">Cannabis Stocks</h2>
                            <p><span className="text-base font-bold text-[#40b551]">+2.90%</span> <span className="ml-8 font-bold">21 Symbols</span></p>
                        </div>
                        <div><HiOutlineStar className="text-2xl"/></div>
                    </div>
                    <p>The JSE has announced the deployment of an online trading analytics platform for listed firms and exchange traded funds(ETFs). This software has been provided</p>
                </div>

                <div className="py-4 px-8 bg-[#fff] mb-8 rounded-md stock-recommendations">
                    <div className="flex justify-between items-center mb-4">
                        <img src="https://elvis-munene.github.io/Abojani-Academy-web-app/assets/images/Ellipse%20(1).png" alt="" />
                        <div className="w-5/6">
                            <h2 className="text-2xl font-medium">Cannabis Stocks</h2>
                            <p><span className="text-base font-bold text-[#40b551]">+2.90%</span> <span className="ml-8 font-bold">21 Symbols</span></p>
                        </div>
                        <div><HiOutlineStar className="text-2xl"/></div>
                    </div>
                    <p>The JSE has announced the deployment of an online trading analytics platform for listed firms and exchange traded funds(ETFs). This software has been provided</p>
                </div>
                
                <div className="py-4 px-8 bg-[#fff] mb-8 rounded-md stock-recommendations">
                    <div className="flex justify-between items-center mb-4">
                        <img src="https://elvis-munene.github.io/Abojani-Academy-web-app/assets/images/Ellipse%20(1).png" alt="" />
                        <div className="w-5/6">
                            <h2 className="text-2xl font-medium">Cannabis Stocks</h2>
                            <p><span className="text-base font-bold text-[#40b551]">+2.90%</span> <span className="ml-8 font-bold">21 Symbols</span></p>
                        </div>
                        <div><HiOutlineStar className="text-2xl"/></div>
                    </div>
                    <p>The JSE has announced the deployment of an online trading analytics platform for listed firms and exchange traded funds(ETFs). This software has been provided</p>
                </div>
                
            </div>

        </div>
    </div>
  )
}

export default Home;