import React from "react";
import styled from "styled-components";
import {
  GoogleMap,
  LoadScript,
  Marker,
  OverlayView,
} from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "100%",
};
const center = { lat: 37.49088056941987, lng: 127.0334062691301 };
const DUMMY_LIST = [
  {
    position: { lat: 37.49136579728423, lng: 127.03242994512794 },
    price: "80,983",
  },
  {
    position: { lat: 37.49005482352715, lng: 127.03288055620587 },
    price: "66,547",
  },
  {
    position: { lat: 37.49115297843356, lng: 127.03468300051748 },
    price: "58,678",
  },
  {
    position: { lat: 37.49268526062406, lng: 127.03269816600766 },
    price: "77,534",
  },
  {
    position: { lat: 37.48972282002825, lng: 127.03359938816345 },
    price: "25,464",
  },
  {
    position: { lat: 37.49062518506728, lng: 127.03576661287148 },
    price: "55,325",
  },
  {
    position: { lat: 37.49022508115929, lng: 127.03055239897003 },
    price: "102,548",
  },
  {
    position: { lat: 37.4909401589765, lng: 127.02942587127528 },
    price: "222,054",
  },
  {
    position: { lat: 37.488701261545344, lng: 127.03466154284709 },
    price: "150,121",
  },
  {
    position: { lat: 37.48997820746605, lng: 127.03783727806281 },
    price: "75,054",
  },
];
const Map = () => {
  const googleMapsApiKey = process.env.REACT_APP_GOOGLE_MAP_API_KEY;
  return (
    <MapWrapper>
      <LoadScript googleMapsApiKey={googleMapsApiKey}>
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={18}>
          {DUMMY_LIST.map((item) => {
            return (
              <>
                <OverlayView
                  position={item.position}
                  mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
                >
                  <Label onClick={() => console.log("click")}>
                    {item.price}
                  </Label>
                </OverlayView>
                <Marker position={item.position} />
              </>
            );
          })}
        </GoogleMap>
      </LoadScript>
    </MapWrapper>
  );
};
const Label = styled.div`
  background: white;
  padding: 0.5rem 1.5rem;
  border-radius: 1rem;
  transform: translate(-50%, -230%);
  box-shadow: 0 0 10px #858585;
  font-weight: bold;
  font-size: 1.3rem;
  transition: transform 0.5s;
  &:hover {
    transform: translate(-50%, -240%);
    padding: 0.6rem 1.6rem;
   }
`;
const MapWrapper = styled.div``;

export default React.memo(Map);
