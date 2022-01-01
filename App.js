import { StyleSheet, Text, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { useState, useEffect } from "react";
// import GeoLocation from "@react-native-community/geolocation";
// import Geolocation from "react-native-geolocation-service";
// navigator.geolocation = require("@react-native-community/geolocation");

export default function App() {
  const [lat, setLat] = useState("");
  const [long, setLong] = useState("");
  // function success(e) {
  //   console.log(e.coords.longitude);
  // }
  // navigator.geolocation.getCurrentPosition(success, error);
  // GeoLocation.setRNConfiguration(config);
  // useEffect(() => {
  //   GeoLocation.getCurrentPosition(
  //     //Will give you the current location
  //     (position) => {
  //       //getting the Longitude from the location json
  //       console.log(position);
  //     },
  //     (error) => alert(error.message),
  //     {
  //       enableHighAccuracy: true,
  //       timeout: 20,
  //       maximumAge: 1000,
  //     }
  //   );
  // });
  // Geolocation.getCurrentPosition(
  //   (position) => {
  //     console.log(position);
  //   },
  //   (error) => {
  //     // See error code charts below.
  //     console.log(error.code, error.message);
  //   },
  //   { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
  // );

  return (
    <MapView style={{ ...StyleSheet.absoluteFill }}>
      <Marker
        coordinate={{ latitude: 27.787, longitude: 76.2 }}
        title="TestTitle"
        description="TestDescription"
      ></Marker>
    </MapView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#242333",
    alignItems: "center",
    justifyContent: "center",
  },
});
