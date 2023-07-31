import React from "react";
import { Link } from "react-router-dom";
export default function Vans() {
  const [vans, setVans] = React.useState([]);
  React.useEffect(() => {
    fetch("/api/host/vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, []);
  const vanElements = vans.map((van) => (
    <div key={van.id}>
      <Link to={`/host/vans/${van.id}`} className="host-van-link-wrapper">
        <div className="host-van-single" key={van.id}>
          <img src={van.imageUrl} alt={`Photo of ${van.name}`} />
          <div className="host-van-info">
            <h3>{van.name}</h3>
            <p>${van.price}/day</p>
          </div>
        </div>
      </Link>
    </div>
  ));
  return (
    <div className="van-list-container">
      <h1>Your Listed Van: </h1>
      <div>{vanElements}</div>
    </div>
  );
}
