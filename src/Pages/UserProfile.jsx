import React, { useState } from "react";
import Navbar from "../Component/Navbar";
import Header from "../Component/Header";

const UserProfile = () => {
  const [profileImage, setProfileImage] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setProfileImage(URL.createObjectURL(file));
    } else {
      alert("Please select a valid image file (PNG or JPG).");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here (e.g., send data to server)
    console.log("Form submitted:", {
      firstName,
      lastName,
      email,
      profileImage,
    });
  };

  return (
    <div>
      <div className=" ">
        <div className="mb-8">
          <Navbar />
        </div>
        {/* <Navbar /> */}

        <div className="h-[811px] p-6 shadow-xl flex-col  sm:mx-[10%] md:mx-[15%] lg:mx-[30%] justify-center items-start gap-10 inline-flex">
          <div className="self-stretch h-[92px] flex-col justify-start items-start gap-2 flex">
            <div className="self-stretch text-[#333333] text-2xl font-bold font-['Instrument Sans'] leading-9">
              Profile Details
            </div>
            <div className="self-stretch text-[#727272] text-base font-normal font-['Instrument Sans'] leading-normal">
              Add your details to create a personal <br /> touch to your
              profile.
            </div>
          </div>
          <div className="self-stretch h-[631px] flex-col justify-start items-start gap-2 flex">
            <div className="self-stretch flex-col justify-start items-start gap-6 flex">
              <div className="self-stretch h-[333px] p-5 rounded-xl  flex-col justify-center items-center gap-3 flex">
                <div className="self-stretch h-[293px] flex-col sha justify-center items-start gap-4 flex">
                  <div className="w-60 text-[#727272] text-base font-normal font-['Instrument Sans'] leading-normal">
                    Profile picture
                  </div>

                  <div className="self-stretch h-[253px] w-[200px] flex-row justify-around items-center flex">
                    <label
                      htmlFor="profileImage"
                      className="h-[100px] w-[250px] mr-10 text-center  bg-[#eeeaff] rounded-xl justify-center items-center  cursor-pointer"
                    >
                      <div className="self-stretch flex-col  justify-start items-start inline-flex">
                        <input
                          type="file"
                          id="profileImage"
                          name="profileImage"
                          accept="image/png,image/jpeg"
                          className="hidden"
                          onChange={handleImageUpload}
                        />
                        <div className="text-[#623bff] pr-6 pl-6 py-4 text-center   text-base font-semibold font-['Instrument Sans'] leading-normal">
                          {profileImage ? "+ Change Image" : "+ Upload Image"}
                        </div>
                      </div>
                    </label>
                    {profileImage && (
                      <img
                        src={profileImage}
                        alt="Profile preview"
                        className="w-[180px] h-[180px] object-cover rounded-xl"
                      />
                    )}
                  </div>

                  <p className="text-gray-500 text-sm mb-3 py-2">
                    Image must be below 1024x1024px. Use PNG or JPG format.{" "}
                  </p>
                </div>
              </div>
              <div className="sm:w-[70%] md:w-[90%] lg:w-[95%] sm:mr-12 md:mr-6 lg:mr-2">
                <div className="self-stretch h-[274px]  bg-neutral-50 rounded-xl flex-col justify-center items-center gap-3 flex">
                  <div className="self-stretch h-[70px] flex-col justify-center items-start gap-1 flex">
                    <div className="w-[396px] text-[#333333] text-xs font-normal font-['Instrument Sans'] leading-[18px]">
                      First name*
                    </div>
                    <div className="self-stretch px-4 py-3 bg-white rounded-lg border border-[#d9d9d9] justify-start items-center gap-3 inline-flex">
                      <input
                        type="text"
                        placeholder="Ben"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        className="grow shrink basis-0 text-[#333333] text-base font-normal font-['Instrument Sans'] leading-normal"
                        required
                      />
                    </div>
                  </div>

                  <div className="self-stretch h-[70px] flex-col justify-center items-start gap-1 flex">
                    <div className="w-[396px] text-[#333333] text-xs font-normal font-['Instrument Sans'] leading-[18px]">
                      Last name*
                    </div>
                    <div className="self-stretch px-4 py-3 bg-white rounded-lg border border-[#d9d9d9] justify-start items-center gap-3 inline-flex">
                      <input
                        type="text"
                        placeholder="Wright"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        className="grow shrink basis-0 text-[#333333] text-base font-normal font-['Instrument Sans'] leading-normal"
                        required
                      />
                    </div>
                  </div>
                  <div className="self-stretch h-[70px] flex-col justify-center items-start gap-1 flex">
                    <div className="w-[396px] text-[#333333] text-xs font-normal font-['Instrument Sans'] leading-[18px]">
                      Email
                    </div>
                    <div className="self-stretch px-4 py-3 rounded-lg border border-[#d9d9d9] justify-start items-center gap-3 inline-flex">
                      <input
                        type="email"
                        placeholder="ben@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="grow shrink basis-0 text-[#333333] text-base font-normal font-['Instrument Sans'] leading-normal"
                      />
                    </div>
                  </div>
                  <div className="self-stretch  bg-[#623bff] w-full mb-[100px] rounded-lg flex-col justify-center items-center  inline-flex">
                    <button
                      className="text-white h-10 w-full active:scale-110 active:rotate-4 font-bold text-base font-['Instrument Sans'] leading-normal"
                      onClick={handleSubmit}
                    >
                      Save
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
