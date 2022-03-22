import { useEffect, useState } from "react";
import React from "react";
import ModalLayer from "./ModalLayer";
import { useNavigate } from "react-router-dom";

const Screen = () => {
  let row1 = {
    data: [
      { value: "A1", price: "150", completed: false },
      { value: "A2", price: "150", completed: false },
      { value: "A3", price: "150", completed: false },
      { value: "A4", price: "150", completed: false },
      { value: "A5", price: "150", completed: false },
      { value: "A6", price: "150", completed: false },
      { value: "A7", price: "150", completed: false },
      { value: "A8", price: "150", completed: false },
      { value: "A9", price: "150", completed: false },
      { value: "A10", price: "150", completed: false },
      { value: "A11", price: "150", completed: false },
      { value: "A12", price: "150", completed: false },
    ],
  };
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);
  const [state, setState] = useState(row1.data);
  const [seats, setSeats] = useState(false);
  const toggleComplete = (i) => {
    const updatedTasks = state.map((ele, index) => {
      if (index === i) {
        ele.completed = !ele.completed;
      }
      return ele;
    });
    setState(updatedTasks);
    sessionStorage.setItem("row1", JSON.stringify(state));
  };
  useEffect(() => {
    localStorage.setItem("row1", JSON.stringify(state));
  }, [state]);
  let movieName = sessionStorage.getItem("movie");
  let movieTime = sessionStorage.getItem("cinema-time");
  let movieLocation = sessionStorage.getItem("cinema-location");

  let sessionData = sessionStorage.getItem("row1");
  let bookedSeat = JSON.parse(sessionData);

  const handleClick = () => {
    setSeats(true);
    setModal(true);
    setTimeout(() => {
      setSeats(false);
      setModal(false);
      alert("the Time is over please select the theatre again")
      navigate("/shows");
    }, 10000);
  };

  return (
    <div className="container">
      <div className="upper_screen row mt-5">
        <div className="col-2"> {movieName} </div>
        <div className="col-8 screen_style text-center">
          <small> Screen is here</small>
        </div>
        <div className="col-2">
          {" "}
          <p>{movieLocation}</p>
          <p>{movieTime}</p>
        </div>
      </div>

      <div className="container px-5">
        <small className="text-secondary">classic: 150 Rs</small>
        <div className="row_division px-5">
          {!seats
            ? state.map((ele, i) => {
                return (
                  <div key={i} className="seat_style">
                    <input
                      type="checkbox"
                      checked={ele.completed}
                      onChange={() => toggleComplete(i)}
                    ></input>
                  </div>
                );
              })
            : seats
            ? bookedSeat.map((ele, i) => {
                return (
                  <div key={i} className="seat_style">
                    <input type="checkbox" checked={ele.completed}></input>
                  </div>
                );
              })
            : ""}
        </div>
      </div>
      <dic className="container">
        <button className="btn btn-danger" onClick={handleClick}>
          Proceed
        </button>
      </dic>
      {modal === true ? (
        <div className="container">
          <ModalLayer />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Screen;
