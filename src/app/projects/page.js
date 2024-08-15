"use client";
import ImageShow from "@/components/image-show";
import React, { useState, useEffect } from "react";
import { Pagination } from "antd";
import { Input } from "antd";
import { AudioOutlined } from "@ant-design/icons";
import { Table } from "antd";
const { Search } = Input;

function page() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      // Ẩn cột này trên màn hình nhỏ
    },
    {
      title: "Area",
      dataIndex: "area",
      key: "area",
      responsive: ["md"], // Ẩn cột này trên màn hình nhỏ
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      //render, nếu ==0 thì hiển thị thoả thuận
      render: (text, record) =>
        record.price == 0 ? "Thoả thuận" : record.price,
    },
    {
      title: "District",
      dataIndex: "district",
      key: "district",
      responsive: ["lg"], // Ẩn cột này trên màn hình vừa và nhỏ
    },
    {
      title: "Province",
      dataIndex: "province",
      key: "province",
      responsive: ["lg"], // Ẩn cột này trên màn hình vừa và nhỏ
    },
    {
      title: "Legal",
      dataIndex: "legal",
      key: "legal",
      responsive: ["md"], // Ẩn cột này trên màn hình nhỏ
    },
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      render: (text, record) => <ImageShow imageurl={record.image} />,
    },
  ];

  const suffix = (
    <AudioOutlined
      style={{
        fontSize: 16,
        color: "#1677ff",
      }}
      className="cursor-pointer"
    />
  );

  // Fetch data from external API
  useEffect(() => {
    fetch("http://localhost:9000/api/get?page=1&itemperpage=10")
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
    <div className="flex flex-col justify-center items-center p-4">
      {/* search bar */}
      <Search
        className="w-full md:w-96 m-4"
        placeholder="Type something to search"
        enterButton="Search"
        size="large"
        suffix={suffix}
        onSearch={(value) => setSearch(value)}
      />
      <div className="w-full overflow-x-auto">
        <Table columns={columns} dataSource={data} pagination={false} />
      </div>
      <Pagination className="mt-2" defaultCurrent={1} total={50} />
    </div>
  );
}

export default page;
