"use client";
import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import { FaPen } from "react-icons/fa";
import UpdateScreen from "@/components/update-screen";

const initialDataSources = [
  {
    url: "https://batdongsan.com.vn/nha-dat-ban/p1",
    link: ".js__product-link-for-product-id",
    active: true,
  },
  {
    url: "https://alonhadat.com.vn/nha-dat/can-ban/trang--1.html",
    link: ".vip",
    active: false,
  },
  {
    url: "https://propzy.net/bat-dong-san/page/1/",
    link: ".content h3>a",
    active: true,
  },
  // Add more data sources as needed
];

function Setting() {
  const [dataSources, setDataSources] = useState(initialDataSources);
  const [showUpdatePopup, setShowUpdatePopup] = useState(false);
  const toggleActive = (index) => {
    const newDataSources = [...dataSources];
    newDataSources[index].active = !newDataSources[index].active;
    setDataSources(newDataSources);
  };

  return (
    <div className="p-4">
      <div className="flex justify-between m-2">
        <h1 className="text-2xl font-bold mb-4">Settings</h1>
        <div className=" flex gap-2">
          <button
            className="bg-black  text-white p-2 rounded"
            onClick={() => {
              setShowUpdatePopup(true);
            }}
          >
            Add New
          </button>
          <button className="bg-black  text-white p-2 rounded">
            Start Crawling
          </button>
        </div>
      </div>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">URL</th>
            <th className="py-2 px-4 border-b">Link</th>
            <th className="py-2 px-4 border-b">Active</th>
            <th className="py-2 px-4 border-b">Action</th>
          </tr>
        </thead>
        <tbody>
          {dataSources.map((source, index) => (
            <tr key={index}>
              <td className="py-2 px-4 border-b">
                <a href={source.url} className="text-blue-500 hover:underline">
                  {source.url}
                </a>
              </td>
              <td className="py-2 px-4 border-b">{source.link}</td>

              <td
                className="py-2 px-4 border-b cursor-pointer"
                onClick={() => toggleActive(index)}
              >
                {source.active ? (
                  <span className="text-green-500">Active</span>
                ) : (
                  <span className="text-red-500">Inactive</span>
                )}
              </td>
              <td className="py-2 px-4 border-b">
                <div className="flex gap-2 justify-center">
                  <MdDelete className=" cursor-pointer" />
                  <FaPen
                    className=" cursor-pointer"
                    onClick={() => {
                      setShowUpdatePopup(true);
                    }}
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {showUpdatePopup && (
        <UpdateScreen onClose={() => setShowUpdatePopup(false)}></UpdateScreen>
      )}
    </div>
  );
}

export default Setting;
