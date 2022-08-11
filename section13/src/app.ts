import axios from "axios";

const apiKey = "AIzaSyBLUJoT38ultL6ByepTHWLCrVevNhxFs2k";
// const googleApiUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=${apiKey}`;

const form = document.querySelector("form")! as HTMLFormElement;
const addressInput = document.getElementById("address")! as HTMLInputElement;

// declare var google: any;

type googleGeocodingResponse = {
  results: { geometry: { location: { lat: number; lng: number } } }[];
  status: "OK" | "ZERO_RESULTS";
};

function searchAddressHandler(event: Event) {
  event.preventDefault();
  const enteredAddress = addressInput.value;

  axios
    .get<googleGeocodingResponse>(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(
        enteredAddress
      )}&key=${apiKey}`
    )
    .then((res) => {
      if (res.data.status !== "OK") {
        throw new Error("Could not fetch location");
      }
      const coordinates = res.data.results[0].geometry.location;
      const map = new google.maps.Map(document.getElementById("map") as HTMLDivElement, {
        center: coordinates,
        zoom: 8,
      });

      const marker = new google.maps.Marker({
        position: coordinates,
        map: map,
      });
    })
    .catch((err) => {
      alert(err.message);
      console.log(err);
    });
}

form.addEventListener("submit", searchAddressHandler);
