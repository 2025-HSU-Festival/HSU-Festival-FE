import React from "react";

// images
import BoothMapImg from "../../assets/booth/booth-map.svg";

// styles
import * as S from "../../styles/booth/booth.styles";

// components
import Marker from "./Marker";

// stores
import { activityMarkers } from "../../stores/markerStore";

export default function BoothMap({
  selectedMarker,
  setSelectedMarker,
  selectedCategory,
}) {
  return (
    <S.BoothMap>
      <S.BoothMapImage src={BoothMapImg} alt="boothMap" />
      {activityMarkers.map((marker) => (
        <Marker
          key={marker.id}
          markerName={marker.id}
          top={marker.top}
          left={marker.left}
          selectedMarker={selectedMarker}
          setSelectedMarker={setSelectedMarker}
          selectedCategory={selectedCategory}
        />
      ))}
    </S.BoothMap>
  );
}
