import React from 'react'
import { useNavigate } from 'react-router-dom';

const Shows = () => {

    let theatres = {
        data: [
          {
            name: "Inox: Korum Mall",
            rating: "7/10",
            Amenity1:"M-ticket",
            Amenity2:"Food & Beverages",
            time: "09:30 AM"
          },
          {
            name: "Cinepolis: Viviana Mall",
            rating: "9/10",
            Amenity1:"M-ticket",
            Amenity2:"Food & Beverages",
            time: "10:30 AM"
          },
          {
            name: "Gold cinema: High Street Cinema",
            rating: "6/10",
            Amenity1:"M-ticket",
            Amenity2:"Food & Beverages",
            time: "12:30 PM"
          },
          {
            name: "Gold cinema: Eternity",
            rating: "6/10",
            Amenity1:"M-ticket",
            Amenity2:"Food & Beverages",
            time: "01:30 PM"
          },
          {
            name: "PVR: Lodha cineplex",
            rating: "8/10",
            Amenity1:"M-ticket",
            Amenity2:"Food & Beverages",
            time: "03:20 PM"
          },
          {
            name: "PVR: Citi Mall",
            rating: "9/10",
            Amenity1:"M-ticket",
            Amenity2:"Food & Beverages",
            time: "05:30 PM"
          },
          {
            name: "Inox: Growel Cineplex",
            rating: "9/10",
            Amenity1:"M-ticket",
            Amenity2:"Food & Beverages",
            time: "05:30 PM"
          },
          {
            name: "Cinepolis: Infiniti Mall",
            rating: "9/10",
            Amenity1:"M-ticket",
            Amenity2:"Food & Beverages",
            time: "05:30 PM"
          }
        ],
      };

      let movieName = sessionStorage.getItem("movie")

      const navigate = useNavigate()
      const cinemaSelect = (time, location) => {
         if(movieName){
             sessionStorage.setItem("cinema-time", time);
             sessionStorage.setItem("cinema-location", location);
             navigate("/screen");
         }else{
             alert("no movie selected");
             navigate("/")
         }
      }

    
  return (
    <div className='container'>
        <h3 className='text-center'> Please Select the Cinema </h3>
        <div className='container'>
            <h3 className='text-center'> Movie: {movieName} </h3>
            {
               theatres.data.map((ele, i) => {
                   return <div key={i} className="cinema-main">
                       <div className='inside-card'>
                       <h4>{ele.name}</h4> <h5 className='mx-3'>{ele.time}</h5>
                       </div>
                       <div className='inside-card'>
                       <p>{ele.Amenity1}, {ele.Amenity2}</p> <p className='mx-3'>{ele.rating}</p>
                       </div>
                       <div className='text-center'>
                           <button className='btn btn-success' onClick={() => cinemaSelect(ele.time, ele.name)}>Enter</button>
                       </div>
                   </div>
               }) 
            }
        </div>
    </div>
  )
}

export default Shows