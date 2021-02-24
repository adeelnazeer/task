/* eslint-disable no-cond-assign */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable import/no-anonymous-default-export */
import React, { useEffect, useState } from "react";
import "./style.css";
import axios from "axios";
export default () => {
  const [arrayData, setArrayData] = useState([]);
  const [datas, setDatas] = useState([]);
  const [dummy, setDummy] = useState([]);
  const [albumOne, setAlbumOne] = useState([]);
  const [albumTwo, setAlbumTwo] = useState([]);
  const [albumThree, setAlbumThree] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then((response) => {
        response &&
          response.data &&
          response.data.map((row) => {
            if (row.albumId === 100) {
              arrayData.push(row);
              // setData(arrayData);
              setAlbumOne(arrayData);
              setArrayData([]);
            }
            if (row.albumId === 99) {
              datas.push(row);
              // setData(arrayData);
              setAlbumTwo(datas);
              setDatas([]);
            }
            if (row.albumId === 98) {
              dummy.push(row);
              // setData(arrayData);
              setAlbumThree(dummy);
              setDummy();
            }
          });
      });
  }, []);
  return (
    <div>
      <div className="main-container">
        <h1>Album One</h1>
        <div className="main-div-card">
          {albumOne &&
            albumOne
              .slice(1)
              .splice(-2)
              .map((single) => (
                <div key={single.id} className="inner-div">
                  <div class="card" style={{ width: "18rem" }}>
                    <div
                      style={{
                        backgroundImage: `url(${single.thumbnailUrl})`,
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        height: "270px",
                      }}
                    ></div>
                    <div class="card-body">
                      <p class="card-text">{single.title}</p>
                    </div>
                  </div>
                </div>
              ))}
        </div>
        <h1>Album Two</h1>
        <div className="main-div-card-two">
          {albumTwo &&
            albumTwo
              .slice(1)
              .splice(-2)
              .map((single) => (
                <div key={single.id} className="inner-div-two">
                  <div class="card" style={{ width: "18rem" }}>
                    <div
                      style={{
                        backgroundImage: `url(${single.thumbnailUrl})`,
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        height: "270px",
                      }}
                    ></div>
                    <div class="card-body">
                      <p class="card-text">{single.title}</p>
                    </div>
                  </div>
                </div>
              ))}
        </div>
        <h1>Album Three</h1>
        <div className="main-div-card-three">
          {albumThree &&
            albumThree
              .slice(1)
              .splice(-2)
              .map((single) => (
                <div key={single.id} className="inner-div-three">
                  <div class="card" style={{ width: "18rem" }}>
                    <div
                      style={{
                        backgroundImage: `url(${single.thumbnailUrl})`,
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        height: "270px",
                      }}
                    ></div>
                    <div class="card-body">
                      <p class="card-text">{single.title}</p>
                    </div>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
};
