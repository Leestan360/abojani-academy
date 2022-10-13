import React, { useState, useEffect } from "react";

function CommunityInformation() {
  const [news, setNews] = useState([]);
  const [reports, setReports] = useState([]);
  const [stock, setStock] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/news")
      .then((res) => res.json())
      .then((data) => setNews(data));
  }, []);

  useEffect(() => {
    fetch(" http://localhost:3000/reports")
      .then((res) => res.json())
      .then((data) => setReports(data));
  }, []);

  useEffect(() => {
    fetch(" http://localhost:3000/stocks")
      .then((res) => res.json())
      .then((data) => setStock(data));
  }, []);

  const reportsToDisplay = reports.map((report) => {
    return (
      <div style={{ width: "180px" }}>
        <ul>
          <li className="bg-white w-32 m-4 rounded-lg">
            <div className="pl-3">
              <p className="font-bold text-purple-700">{report.title}</p>
              <p>{report.content}</p>
              <p>Today</p>
              <p>12/3</p>
            </div>
          </li>
        </ul>
      </div>
    );
  });

  const stockToDisplay = stock.map((item) => {
    return (
      <div className="py-3">
        <ul>
          <li className="bg-white mb-5 m-5 w-100 rounded-lg p-5">
            <div className="flex pb-3">
              <img
                className="w-16 h-16 rounded-full mx-2"
                src={item.image}
                alt="Stock"
              />
              <div className="flex flex-col pt-2">
                <p className="px-3 font-bold text-lg">{item.title}</p>
                <div className="flex flex-row">
                  <p className="text-green-400 px-3">+2.90%</p>
                  <p className="text-gray-400">21 Symbols</p>
                </div>
              </div>
            </div>
            <p className="w-100">{item.content}</p>
          </li>
        </ul>
      </div>
    );
  });

  const newsToDisplay = news.map((item) => {
    return (
      <div style={{ width: "300px" }} className="pt-0.5">
        <ul key={item.id}>
          <li className="bg-white m-2 rounded-lg p-2 shadow-2xl">
            <p className="font-bold text-lg">{item.title}</p>
            <div>
              <div className="flex">
                <div style={{ width: "200px" }}>
                  <h5>{item.content}</h5>
                  <p className="text-gray-500">{item.day}</p>
                </div>
                <img
                  className="w-12 rounded-sm mx-3"
                  src={item.image}
                  alt="News"
                />
              </div>
            </div>
          </li>
        </ul>
      </div>
    );
  });
  return (
    <div className="flex">
      <div className="mr-5">
        <h2 className="font-bold text-xl">News</h2>
        <div className="m-3 bg-gray-100 rounded-xl">{newsToDisplay}</div>
      </div>
      <div>
        <div>
          <p className="font-bold text-xl mb-3">Financial Reports</p>
          <div
            style={{ display: "flex", flexWrap: "wrap" }}
            className="bg-gray-100 rounded-xl"
          >
            {reportsToDisplay}
          </div>
        </div>
        <br />
        <br />
        <div>
          <h2 className="font-bold text-xl">Stock Recommendations</h2>
          <div className="bg-gray-100 mt-5 rounded-xl">{stockToDisplay}</div>
        </div>
      </div>
    </div>
  );
}
export default CommunityInformation;
