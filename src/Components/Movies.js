import React from "react";
import { useNavigate } from "react-router-dom";

const Movies = () => {
  let movies = {
    data: [
      {
        name: "The Kashmir Files",
        imageurl:
          "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:q-80/et00110845-nrqemltwud-portrait.jpg",
        description:
          "The Kashmir Files' is a story, based on video interviews of the first generation victims of the Genocide of Kashmiri Pandit Community In 1990.",
        rating: "9/10",
        director: "Vivek Agnihotri",
        genres: "Drama/Historical",
      },
      {
        name: "The Batman",
        imageurl:
          "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:q-80/et00129624-cyfeqjvtcr-portrait.jpg",
        description:
          "When the Riddler, a sadistic serial killer, begins murdering key political figures in Gotham, Batman is forced to investigate the city's hidden corruption and question his family's involvement.",
        rating: "7/10",
        director: "Matt Reves",
        genres: "Action/Adventure/Drama/Crime",
      },
      {
        name: "Spider Man: No Way Home",
        imageurl:
          "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:q-80/et00310790-sjaqddgbsy-portrait.jpg",
        description:
          "With Spider-Man's identity now revealed, Peter asks Doctor Strange for help. When a spell goes wrong, dangerous foes from other worlds start to appear, forcing Peter to discover what it truly means to be Spider-Man.",
        rating: "8/10",
        director: "Jon Watts",
        genres: "Action/Adventure/Sci-Fi",
      },
      {
        name: "Radhe Shyam",
        imageurl:
          "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:q-80/et00135230-sfywfvrgms-portrait.jpg",
        description: "A romantic drama set in Europe during the 1970s.",
        rating: "7.5/10",
        director: "K.K. Radhakrishna",
        genres: "Drama/Period/Romantic",
      },
    ],
  };

  const navigate = useNavigate();

  const movieCall = (data) => {
    sessionStorage.setItem("movie", data);
    navigate("shows");
  };
  return (
    <div>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://1847884116.rsc.cdn77.org/telugu/home/thekashmirfiles21022022_c.jpg"
              className="d-block w-100 banner_image"
              alt="banner"
            />
          </div>
          <div className="carousel-item">
            <img
              src="http://project-nerd.com/wp-content/uploads/2013/09/Batman-Banner.jpg"
              className="d-block w-100 banner_image"
              alt="banner"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://imgix.bustle.com/uploads/image/2021/8/24/93688c06-aaa6-4f66-9a2e-7f01033455ca-spider-man-no-way-home-trailer-still-h2021.jpeg?w=2000&h=640&fit=crop&crop=faces&auto=format%2Ccompress&q=50&dpr=2"
              className="d-block w-100 banner_image"
              alt="banner"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <h3 className="text-center"> Select Movie </h3>
      <div className="row">
        {movies.data.map((ele, i) => {
          return (
            <div className="col-md-3 col-sm-4 col-xs-12" key={i}>
              <div className="card card_bg m-1">
                <img
                  src={ele.imageurl}
                  className="card-img-top product_img"
                  alt="movie"
                />
                <div className="card-body">
                  <h5 className="card-title movie_name">{ele.name}</h5>
                  <p className="card-text">{ele.genres}</p>
                  <button
                    className="btn btn-success button_bg"
                    onClick={() => movieCall(ele.name)}
                  >
                    Book
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Movies;
