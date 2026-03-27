//getting user input from form

import axios from 'axios';


const form = document.querySelector('form');
const addressInput = document.getElementById('address') as HTMLInputElement;
const google_API_key = 'some apikey';
type GoogleGeocodingResponse = {
    results: {
        geometry: {
            location: {
                lat: number,
                lng: number
            }
        }
    }[];
    status: 'OK' | 'ZERO_RESULTS';
};
declare var google: any; //types google maps is better, install @types/googlemaps via npm

function searchAddressHandler(event: Event) {
    event.preventDefault();
    // @ts-ignore
    const enteredAddress = addressInput.value();

    //using oogle geo api / coordinates
    axios.get<GoogleGeocodingResponse>(`${google_API_key}?address=${enteredAddress}`) //`https://maps.googleapis....
        .then((response) => {

            if (response.data.status !== 'OK') {
                throw new Error('Error');
            }
            const coordinates = response.data.results[0].geometry.location;
            const map = new google.maps.Map(document.getElementById("map"), {
                center: coordinates,
                zoom: 12,
            });
            new google.maps.Marker({position: coordinates, map: map});
        }).catch((error) => {
        console.log(error)
    });
}

form?.addEventListener('submit', searchAddressHandler);

