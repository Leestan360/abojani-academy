import pic3 from "./images/Screenshot.png"

function Profile(){
    return(
        <div className="flex justify-center items-center mt-16">
            <div className="w-1/2 bg-[#e7e7e7] h-[600px] rounded-lg profile-div">
                <img className="w-1/4 rounded-full my-8" src={pic3} alt="" />
                <div className="flex flex-col justify-center items-center">
                    <p className="mb-4 text-2xl font-bold">Omar Mahat</p>
                    <p className="mb-4">omar@gmail.co.uk</p>
                    <button className="center mt-32 px-6 py-3 bg-[#f17425] rounded-md text-[#fff]">Logout</button>
                </div>
            </div>
        </div>
    )
}

export default Profile