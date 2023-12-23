"use client";
import React, { useState } from "react";
import Button from "../components/button";
import { students } from "@/public/studentsData/page";

function DataHandler() {
  const [index, setIndex] = useState(0);
  const [showData, setShowData] = useState(false);

  const onClickAddHandler = () => {
    setIndex((prevIndex) =>
      prevIndex < students.length - 1 ? prevIndex + 1 : prevIndex
    );
  };

  const onClickMinusHandler = () => {
    setIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
  };

  const toggleShowData = () => {
    setShowData(!showData);
  };

  return (
    <div className="container mx-auto mt-8">
      <div className="bg-green-100 p-4 mb-4">
        <Button title="Next" onClickHandler={onClickAddHandler} />
        <p className="border px-4 py-2 font-bold">
          {students[index].name.toUpperCase()}
        </p>
        <Button title="Previous" onClickHandler={onClickMinusHandler} />
      </div>

      <Button title="Show all data" onClickHandler={toggleShowData} />

      {showData && (
        <div className="mt-4">
          <table className="table-auto border-collapse w-full">
            <thead>
              <tr>
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Gender</th>
                <th className="px-4 py-2">Maths</th>
                <th className="px-4 py-2">Physics</th>
                <th className="px-4 py-2">English</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2 font-bold">
                  {students[index].name.toUpperCase()}
                </td>
                <td className="border px-4 py-2">{students[index].gender}</td>
                <td className="border px-4 py-2">{students[index].maths}</td>
                <td className="border px-4 py-2">{students[index].physics}</td>
                <td className="border px-4 py-2">{students[index].english}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default DataHandler;