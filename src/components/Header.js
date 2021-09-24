// import { useLocation } from '../context/LocationContext'
// import { useEffect } from 'react';

// function Header() {
//     const { location, setLocation } = useLocation();

//     useEffect(() => {
//         document.querySelector('#locations').value = location;
//     }, [location]);

//     return (
//         <div className="header">
//             <select name="locations" id="locations" onChange={(e) => {setLocation(e.target.value)}}>
//                 <option value="istanbul">Istanbul</option>
//                 <option value="izmir">Izmir</option>
//                 <option value="bursa">Bursa</option>
//                 <option value="ankara">Ankara</option>
//                 <option value="balikesir">Balıkesir</option>
//             </select>
//         </div>
//     )
// }

// export default Header


import { useLocation } from '../context/LocationContext'
import { useEffect } from 'react';
import axios from 'axios';

function Header() {
    const { location, setLocation } = useLocation();

    useEffect(() => {
        document.querySelector('#locations').value = location;
    }, [location]);

    // function getLocation() {
    //     if (navigator.geolocation) {
    //       navigator.geolocation.getCurrentPosition(showPosition);
    //     } else { 
    //       console.log("Geolocation is not supported by this browser");
    //     }
    //   }
      
    //   function showPosition(position) {
    //     let result;
    //     let lat = position.coords.latitude;
    //     let lon = position.coords.longitude;
    //     let apiUrl = `http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=1&appid=6d5f20313c39f8c5ba9f18e882e40101`

    //     axios(apiUrl)
    //     .then(response => setLocation(response.data[0].name))
    //     .catch(e => console.log(e))
    //   }

    return (
        <>
        <input type="text" id="locations" onChange={(e) => {setLocation(e.target.value)}}/>
        {/* <br /><br />
        <button onClick={getLocation()}>Get Location</button> */}
       </>
    )
}

export default Header

