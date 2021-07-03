import React from "react";
import { useParams } from "react-router-dom";

export default function JobAdvertisementDetailsForCandidates() {
  let { id } = useParams();

  return (
    <div>
      DETAY SAYFASI
      {id}
    </div>
  );
}
