"use client";
"use client";
import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import { FaPen } from "react-icons/fa";
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
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Cron Job Management</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h2 className="text-xl font-semibold mb-2">Existing Cron Jobs</h2>
          <ul className="space-y-2">
            {cronJobs.map((job) => (
              <li key={job.id} className="p-2 border rounded-md">
                <p>
                  <strong>API URL:</strong> {job.apiUrl}
                </p>
                <p>
                  <strong>Cron Schedule:</strong> {job.cronSchedule}
                </p>
                <div className="flex gap-2 ">
                  <MdDelete className=" cursor-pointer" />
                  <FaPen className=" cursor-pointer" />
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Add New Cron Job</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                API URL
              </label>
              <input
                type="text"
                value={apiUrl}
                onChange={(e) => setApiUrl(e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="https://example.com/api"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Cron Schedule
              </label>
              <input
                type="text"
                value={cronSchedule}
                onChange={(e) => setCronSchedule(e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="* * * * *"
                required
              />
              <p className="text-sm text-gray-500 mt-1">
                Use cron format (e.g., "* * * * *" for every minute)
              </p>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Add Cron Job
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CronJobSetup;
