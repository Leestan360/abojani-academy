import pic1 from "./images/image.png"
import data from "../data"
import news from "../news"


function Home() {

  return (
    <div className="w-full py-8 pl-8 pr-32">
        <img className="w-full rounded-md" src={pic1} alt="" />

        <div>
            <h2 className="text-2xl font-medium my-4">Explore courses</h2>
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
                <h3 className="text-[#575757] text-2xl font-medium mb-4">Trending News</h3>
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
                <h3 className="text-[#575757] text-2xl font-medium mb-4">Stock Recommendations</h3>
                <div className="" style={{}}>
                    {news.map((items) => (
                        <div className="flex border mb-4 p-4 rounded-md" key={items.id}>
                            <div style={{width: "75%"}} className="mr-2">
                                <p>{items.newsletter}</p>
                                <p className="font-bold text-lg">{items.header}</p>
                                <p>{items.time}</p>
                            </div>
                            <div style={{width: "25%"}}>
                                <img className="rounded-md float-right" src={items.image} alt="" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    </div>
  )
}

export default Home;