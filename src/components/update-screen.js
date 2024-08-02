import React from "react";
import { IoMdClose } from "react-icons/io";
function UpdateScreen({ onClose }) {
  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 w-full h-full z-10 flex justify-between items-center bg-slate-200 bg-opacity-50 gap-4">
      <div className="mx-auto bg-white shadow-md p-4 w-full max-w-sm ">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Add Data Source</h2>
          <IoMdClose
            className="cursor-pointer"
            onClick={() => {
              onClose();
            }}
          ></IoMdClose>
        </div>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              URL
            </label>
            <input
              type="text"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 sm:text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Link
            </label>
            <input
              type="text"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 sm:text-sm"
            />
          </div>
          <div className="flex gap-2">
            <label className="block text-sm font-medium text-gray-700">
              Active
            </label>
            <input
              type="checkbox"
              className=" border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 sm:text-sm"
            />
          </div>
          <div>
            <button className="bg-black text-white p-2 rounded">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UpdateScreen;
