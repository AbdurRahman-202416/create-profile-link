import React, { useEffect, useState } from "react";
import Navbar from "../Component/Navbar";
import NavbarPC from "../Component/NavbarPC";
import httpRequest from "../Axios";
import { notifyError, notifySuccess } from "../Component/Toaster";
import { ClipLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";
import Preview from "./Preview";

const UserProfile = () => {
  // State variables
  const [profileImage, setProfileImage] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [loader, setLoader] = useState(false);
  const [userDetail, setUserDetail] = useState();
  const [profile, setProfile] = useState([]);
  const [AllLink, setAllLink] = useState();

  const navigate = useNavigate();

  // Handle image upload
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setProfileImage(URL.createObjectURL(file));
    } else {
      alert("Please select a valid image file (PNG or JPG).");
    }
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoader(true);

    const data = {
      email,
      first_name: firstName,
      last_name: lastName,
      bio: "null",
      isPublished: false,
      profile_picture_url: profileImage || "", // Use profileImage as the URL
    };

    try {
      const response = await httpRequest.patch("auth/profile/update", data);
      if (response.status === 200) {
        setEmail("");
        setFirstName("");
        setLastName("");
        setProfileImage(null);
        notifySuccess("Profile Information Updated Successfully");
        navigate("/preview");
      }
    } catch (error) {
      console.error(error);
      notifyError(error.response?.data?.message || "An error occurred");
    } finally {
      setLoader(false);
    }
  };

  // Fetch user profile
  const getProfile = async () => {
    setLoader(true);
    try {
      const response = await httpRequest.get("auth/profile");
      if (response.status === 200) {
        const data = response.data;
        setUserDetail(data);
        setProfile(data)
        setEmail(data.email);
        setFirstName(data.first_name);
        setLastName(data.last_name);
        setProfileImage(data.profile_picture_url);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoader(false);
    }
  };
  const getLink = async () => {
    try {
      const response = await httpRequest.get("/links");
      if (response.status == 200) {
        setAllLink(response.data);
        console.log(response.data);
      }
    } catch (err) {
      console.log(err);
    }

  }

  useEffect(() => {
    getProfile();
    getLink()
  }, []);

  if (!AllLink) {
    return <div className="flex justify-center items-center text-center h-[100vh] bg-gray-100 text-2xl w-[100%] text-indigo-400" >Loading...</div>;
  }
  return (
    <div>

      {loader && (
        <div className="fade-loader">
          <ClipLoader color="green" size={80} />
        </div>
      )}


      <div className="mb-8 block lg:hidden">
        <Navbar />
      </div>
      <div className="hidden lg:block">
        <NavbarPC />
      </div>

      <div className="flex justify-center lg:mx-[20%] sm:mx-[10%] md:mx-[15%] ">
        {/* Sidebar */}
        <div className="w-[400px] hidden mt-10 sm:block md:block lg:block h-[700px] m-2 flex ">
          <div className=" rounded-lg  ForBgImage flex flex-col h-[800px] sm:w-[400px] md:w-[400px] lg:w[90%]  ">
            {/* Header */}
            <h1 className="h-8 w-full"></h1>

            {/* Main Content */}
            <div className="bg-gray-50  mx-[25px] rounded-lg mt-3  sm:w-[65%] lg:w-[65%] h-[70%] flex flex-col items-center">
              {/* Profile Section */}
              <div className="h-[177px] flex flex-col justify-center items-center gap-6 mt-6">
                <img
                  className="w-24 h-24 rounded-full border-4 border-[#623bff]"
                  src={profile.profile_picture_url}
                  alt="Profile"
                />
                <div className="flex flex-col justify-center items-center gap-2">
                  <div className="text-[#333333] text-lg font-semibold  leading-[27px]">
                    {profile.first_name + " " + profile.last_name}
                  </div>
                  <div className="text-[#727272] text-sm font-normal  leading-[21px]">
                    {profile.email}
                  </div>
                </div>
              </div>


              <div className="flex flex-col w-[90%] justify-start items-center gap-2 mt-8">
                {
                  AllLink.map((item, index) => {
                    return (
                      <div key={index} className={`self-stretch h-11 px-4  bg-[#191919] text-lg color-${item.platform} rounded-lg flex items-center gap-2`}>
                        <div className="text-white text-xs font-normal  justify-between flex  ">
                          <img src={item.iconUrl} className="w-10 p-2 h-10" alt="" />
                          {item.platform}
                        </div>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </div>
        </div>



        <div className="w-[100%] sm:w-[60%] md:w-[60%] lg:w-[60%] h-screen p-4">
          <div className="max-w-xl mx-auto bg-white p-2 shadow-xl rounded-lg">
            {/* Header */}
            <div className="mb-6">
              <h1 className="text-2xl font-bold text-gray-800">Profile Details</h1>
              <p className="text-gray-600">
                Add your details to create a personal touch to your profile.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="m-2">
              {/* Profile Picture */}
              <div className="mb-6">
                <label className="block text-gray-600 mb-2">Profile Picture</label>
                <div className="flex items-center gap-4">
                  <label
                    htmlFor="profileImage"
                    className="px-4 py-2 bg-indigo-100 text-indigo-600 rounded-lg cursor-pointer"
                  >
                    {profileImage ? "+ Change Image" : "+ Upload Image"}
                  </label>
                  <input
                    type="file"
                    id="profileImage"
                    className="hidden"
                    accept="image/png,image/jpeg"
                    onChange={handleImageUpload}
                  />
                  {profileImage && (
                    <img
                      src={profileImage}
                      alt="Profile preview"
                      className="w-20 h-20 rounded-full object-cover"
                    />
                  )}
                </div>
                <p className="text-sm text-gray-500 mt-2">
                  Image must be below 1024x1024px. Use PNG or JPG format.
                </p>
              </div>


              <div className="mb-6">
                <label className="block text-gray-600 mb-2">First Name*</label>
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  placeholder="Enter first name"
                  required
                />
              </div>

              {/* Last Name */}
              <div className="mb-6">
                <label className="block text-gray-600 mb-2">Last Name*</label>
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  placeholder="Enter last name"
                  required
                />
              </div>


              <div className="mb-6">
                <label className="block text-gray-600 mb-2">Email*</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  placeholder="Enter email"
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3 bg-indigo-600 text-white rounded-lg font-bold hover:bg-indigo-700 transition"
              >
                Save
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
