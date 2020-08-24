import React from "react";
import "./Detail.scss";
import { useParams } from "react-router-dom";
import { data } from "../../assets/data/data";

function Detail() {
  let params = useParams();
  let id = parseInt(params.id);
  const filterData = data.filter((item) => {
    return item.id === id;
  });
  const objectData = filterData[0];
  console.log(objectData);
  return (
    <div className="detail">
      <div className="detail__container">
        <h2>{objectData.job}</h2>
        <h3> {objectData.additional_requirements.title}</h3>
        <ul>
          {objectData.additional_requirements.content.map((a, i) => {
            return <li key={i}>{a}</li>;
          })}
        </ul>
        <h3> {objectData.responsible.title}</h3>
        <ul>
          {objectData.responsible.content.map((a, i) => {
            return <li key={i}>{a}</li>;
          })}
        </ul>
        <h3> {objectData.education.title}</h3>
        <ul>
          {objectData.education.content.map((a, i) => {
            return <li key={i}>{a}</li>;
          })}
        </ul>
        <h3> {objectData.skills.title}</h3>
        <ul>
          {objectData.skills.content.map((a, i) => {
            return <li key={i}>{a}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default Detail;
