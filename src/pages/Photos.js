import React from "react";
import { useOutletContext } from "react-router-dom";
export default function Photos() {
  const [currentVan, setCurrentVan] = useOutletContext();

  return <img src={currentVan.imageUrl} className="host-van-detail-image" />;
}
