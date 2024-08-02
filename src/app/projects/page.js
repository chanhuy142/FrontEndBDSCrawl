"use client";
import ImageShow from "@/components/image-show";
import UpdateScreen from "@/components/update-screen";
import React, { useState, useEffect } from "react";

function page() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  // Fetch data from external API
  useEffect(() => {
    fetch("http://localhost:9000/api/get?page=1&itemperpage=20")
      .then((res) => res.json())
      .then((data) => {
        //filter data by search
        if (search) {
          data = data.filter((item) => {
            return item.name.toLowerCase().includes(search.toLowerCase());
          });
        }
        setData(data);
      });
  }, [search]);
  return (
    <div>
      {/* search bar */}
      <div className="flex justify-center mb-4 ">
        <div className="border-2 border-gray-300">
          <input
            type="text"
            placeholder="Search..."
            className="  p-2 w-64 focus:outline-none "
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className=" bg-black text-white  p-2 ">Search</button>
        </div>
      </div>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Area</th>
            <th>Price</th>
            <th>District</th>
            <th>Province</th>
            <th>Legal</th>
            <th>image</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.name}>
              <td>{item.name}</td>
              <td>
                <span>{item.area} m2</span>
              </td>
              <td>
                <span>{item.price / 1000000000} tỉ</span>
              </td>
              <td>{item.district}</td>
              <td>{item.province}</td>
              <td>{item.legal}</td>
              <td>
                <ImageShow imageurl={item.image} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default page;
