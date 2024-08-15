"use client";
import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import { FaPen } from "react-icons/fa";
import UpdateScreen from "@/components/update-screen";
import { FloatButton } from "antd";
import { PlusOutlined, VerticalAlignBottomOutlined } from "@ant-design/icons";

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
      <FloatButton
        icon={<PlusOutlined />}
        type="primary"
        style={{
          insetInlineEnd: 84,
        }}
        onClick={() => {
          setShowUpdatePopup(true);
        }}
      />
      <FloatButton
        icon={<VerticalAlignBottomOutlined />}
        type="primary"
        style={{
          insetInlineEnd: 24,
        }}
      />

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b text-sm sm:text-xs md:text-base lg:text-lg">
                URL
              </th>
              <th className="py-2 px-4 border-b text-sm sm:text-xs md:text-base lg:text-lg">
                Link
              </th>
              <th className="py-2 px-4 border-b text-sm sm:text-xs md:text-base lg:text-lg">
                Active
              </th>
              <th className="py-2 px-4 border-b text-sm sm:text-xs md:text-base lg:text-lg">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {dataSources.map((source, index) => (
              <tr key={index}>
                <td className="py-2 px-4 border-b text-xs sm:text-sm md:text-base lg:text-lg">
                  <a
                    href={source.url}
                    className="text-blue-500 hover:underline break-all"
                  >
                    {source.url}
                  </a>
                </td>
                <td className="py-2 px-4 border-b text-xs sm:text-sm md:text-base lg:text-lg">
                  {source.link}
                </td>
                <td
                  className="py-2 px-4 border-b cursor-pointer text-xs sm:text-sm md:text-base lg:text-lg"
                  onClick={() => toggleActive(index)}
                >
                  {source.active ? (
                    <span className="text-green-500">Active</span>
                  ) : (
                    <span className="text-red-500">Inactive</span>
                  )}
                </td>
                <td className="py-2 px-4 border-b text-xs sm:text-sm md:text-base lg:text-lg">
                  <div className="flex gap-2 justify-center">
                    <MdDelete className=" cursor-pointer" aria-label="Delete" />
                    <FaPen
                      className=" cursor-pointer"
                      onClick={() => {
                        setShowUpdatePopup(true);
                      }}
                      aria-label="Edit"
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {showUpdatePopup && (
        <UpdateScreen onClose={() => setShowUpdatePopup(false)} />
      )}
    </div>
  );
}

export default Setting;
