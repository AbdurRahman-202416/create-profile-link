import React from "react";
import httpRequest from "../Axios";
import { notify, notifySuccess } from "./Toaster";

const LinkForm = ({ linkCount, item, index, key, setLinkCount }) => {

  const removeLink = async (currentLinkCount) => {
    const id = currentLinkCount.id;
    let type = currentLinkCount.type;
    console.log(id)
    let prevArr = linkCount.filter(
      (item, idX) => currentLinkCount.id !== item.id
    );

    setLinkCount(prevArr);
    if (type == "client") {
      notifySuccess("Remove Succesfull")
      return;
    }
    else {
      try {
        const respose = await httpRequest.delete(`links/${id}`)
        console.log(respose)
        if (respose.status == 200) {
          notifySuccess("Link Delete Succesfull");
        }
      } catch (error) {
        console.log(error)
      }
    }

    console.log(prevArr);
  };

  return (
    <div className="self-stretch w-full  my-2 rounded-md  p-0 m-0rounded-xl flex flex-col justify-center items-start gap-3">
      <div className="self-stretch w-full h-auto p-5 rounded-xl flex flex-col justify-center items-center gap-3">
        <div className="self-stretch flex justify-between items-center  ">
          <div className=" items-center">
            <button className="text-[#727272] btn mr-5 bg-orange-50 w-[80px] rounded-md font-bold ">
              Link {index + 1}
            </button>
          </div>
          <button
            onClick={() => removeLink(linkCount[index])}
            className="btn rounded-md w-[100px] ml-5 h-[30px] border active:border-cyan-600"
          >
            Remove
          </button>
        </div>

        <div className="w-[100%] ">
          <div className=" flex flex-col gap-1">
            <label className="text-[#333333] text-xs">Platform</label>
            <div className="flex items-center gap-3 px-3 py-3 bg-white rounded-lg border">
              <select
                value={item.platform}
                onChange={(e) => {
                  let arr = linkCount.map((singleValue) => {
                    if (singleValue.id === item.id) {
                      return {
                        ...singleValue,
                        platform: e.target.value,
                      };
                    }
                    return singleValue;
                  });
                  setLinkCount(arr);
                }}
                className="w-full text-sm text-gray-600 bg-transparent border-gray-200 rounded-lg focus:outline-none focus:ring-0 focus:border-gray-200 dark:text-gray-400 dark:border-gray-700"
              >
                <option selected>Choose a platform</option>
                <option value="github">GitHub</option>
                <option value="linkedin">LinkedIn</option>
                <option value="youtube">YouTube</option>
                <option value="dev.to">Dev.to</option>
                <option value="codewars">Codewars</option>
                <option value="freecodecamp">freeCodeCamp</option>
              </select>
            </div>
          </div>
        </div>

        <div className="w-full ">
          <div className="flex flex-col gap-1">
            <label className="text-[#333333] text-xs m-2">Link</label>
            <div className="relative flex items-center w-full">
              <input
                type="text"
                value={item.url}
                onChange={(e) => {
                  //step 1, modify the previous array to a new array
                  let newArray = linkCount.map((value, idex) => {
                    console.log(value.id, key, item.id);
                    if (value.id == item.id) {
                      let obj = {
                        ...value,
                        url: e.target.value,
                      };

                      return obj;
                    } else return value;
                  });
                  setLinkCount(newArray);

                  // step 2, set the new array
                }}
                placeholder="e.g. https://www.github.com/johnappleseed"
                className="h-12 pl-8 border border-gray-300 text-gray-900 text-sm rounded-lg w-full focus:ring-primary-600 focus:border-primary-600 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
              <div className="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="20"
                  fill="none"
                  viewBox="0 0 21 20"
                  className="p-1"
                >
                  <path
                    fill="#737373"
                    d="M11.154 14.65a.936.936 0 0 1 0 1.329l-.464.464a4.689 4.689 0 1 1-6.631-6.631l1.884-1.884a4.687 4.687 0 0 1 6.432-.194.941.941 0 0 1-1.25 1.407 2.813 2.813 0 0 0-3.857.114l-1.883 1.882a2.813 2.813 0 1 0 3.978 3.978l.464-.464a.936.936 0 0 1 1.327 0ZM16.94 3.558a4.695 4.695 0 0 0-6.63 0l-.465.464a.94.94 0 1 0 1.328 1.328l.464-.464a2.813 2.813 0 0 1 3.978 3.978l-1.883 1.885a2.813 2.813 0 0 1-3.858.111.942.942 0 0 0-1.25 1.407 4.688 4.688 0 0 0 6.43-.19l1.884-1.884a4.695 4.695 0 0 0 .002-6.633v-.002Z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinkForm;
