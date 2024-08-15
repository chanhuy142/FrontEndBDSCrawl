"use client";
import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import { FaPen } from "react-icons/fa";
import { Button } from "antd";
import { Card, Col, Row, Avatar, Switch } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";

const actions = [
  <EditOutlined key="edit" />,
  <SettingOutlined key="setting" />,
  <EllipsisOutlined key="ellipsis" />,
];

function CronJobSetup() {
  const [apiUrl, setApiUrl] = useState("");
  const [cronSchedule, setCronSchedule] = useState("");
  const [cronJobs, setCronJobs] = useState([
    {
      id: 1,
      apiUrl: "http://localhost:9000/api/fetch",
      cronSchedule: "0 12 * * *",
    },
    {
      id: 2,
      apiUrl: "http://localhost:9000/api/fetch",
      cronSchedule: "0 0 * * *",
    },
    {
      id: 3,
      apiUrl: "http://localhost:9000/api/fetch",
      cronSchedule: "0 0 * * *",
    },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCronJob = {
      id: cronJobs.length + 1,
      apiUrl,
      cronSchedule,
    };
    setCronJobs([...cronJobs, newCronJob]);
    setApiUrl("");
    setCronSchedule("");
  };

  return (
    <div className="p-4">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            API URL
          </label>
          <input
            className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full md:w-1/2 lg:w-1/4"
            type="text"
            value={apiUrl}
            onChange={(e) => setApiUrl(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Cron Schedule
          </label>
          <input
            className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full md:w-1/2 lg:w-1/4"
            type="text"
            value={cronSchedule}
            onChange={(e) => setCronSchedule(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <Button type="primary" htmlType="submit">
            Add
          </Button>
        </div>
      </form>
      <Row gutter={[16, 16]}>
        {cronJobs.map((cronJob) => (
          <Col xs={24} sm={12} md={8} lg={8} key={cronJob.id}>
            <Card actions={actions} style={{ minWidth: 300 }}>
              <Card.Meta
                avatar={
                  <Avatar
                    src="
https://upload.wikimedia.org/wikipedia/commons/d/d3/Alarms_%26_Clock_icon.svg
                  "
                  />
                }
                title={cronJob.apiUrl}
                description={
                  <>
                    <div className="flex justify-between">
                      <p>{cronJob.cronSchedule}</p>
                      <Switch defaultChecked />
                    </div>
                  </>
                }
              />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default CronJobSetup;
