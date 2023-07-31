import React from "react";
import { Link, useSearchParams } from "react-router-dom";

export default function Vans() {
  const [vans, setVans] = React.useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const typeFilter = searchParams.get("type");

  React.useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, []);

  const desplayedVans = vans.filter((van) => {
    if (typeFilter) {
      return van.type === typeFilter;
    } else return vans;
  });
  const vanElements = desplayedVans.map((van) => (
    <div key={van.id} className="van-tile">
      <Link to={`/vans/${van.id}`}>
        <img src={van.imageUrl} />
        <div className="van-info">
          <h3>{van.name}</h3>
          <p>
            ${van.price}
            <span>/day</span>
          </p>
        </div>
        <i className={`van-type ${van.type} selected`}>{van.type}</i>
      </Link>
    </div>
  ));
  function handleFilterChange(key, val) {
    setSearchParams((prevParam) => {
      if (val === null) {
        prevParam.delete(key);
      } else {
        prevParam.set(key, val);
      }
      return prevParam;
    });
  }
  return (
    <div className="van-list-container">
      <h1>Explore our van options</h1>
      <div className="van-list-filter-buttons">
        <button
          className="van-type simple"
          onClick={() => handleFilterChange("type", "simple")}
        >
          Simple
        </button>
        <button
          className="van-type rugged"
          onClick={() => handleFilterChange("type", "rugged")}
        >
          Rugged
        </button>
        <button
          className="van-type luxury"
          onClick={() => handleFilterChange("type", "luxury")}
        >
          Luxury
        </button>
      </div>
      {typeFilter && (
        <button className="van-type clear" onClick={() => setSearchParams({})}>
          Clear
        </button>
      )}
      <div className="van-list">{vanElements}</div>
    </div>
  );
}
