"use client";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { LatLngExpression, Icon } from "leaflet";

type props = {
  latitude: number;
  longitude: number;
};

const issIcon = new Icon({
  iconUrl:
    "https://upload.wikimedia.org/wikipedia/commons/d/d0/International_Space_Station.svg",
  iconSize: [40, 40],
});
export default function ISSMap({ latitude, longitude }: props) {
  const position: LatLngExpression = [latitude, longitude];
  return (
    <MapContainer
      center={position}
      zoom={3}
      scrollWheelZoom={false}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={position} icon={issIcon}>
        <Popup>International space station </Popup>
      </Marker>
    </MapContainer>
  );
}
