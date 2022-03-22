import React, { useState } from "react";
import Countdown from "react-countdown";
import { useNavigate } from "react-router-dom";
import Modal from "react-modal";
import Emote from "./Images/Emote.png";
Modal.setAppElement("#root");

const ModalLayer = () => {
  const navigate = useNavigate();
  const [modalIsOpen, setIsOpen] = useState(false);
  let movieName = sessionStorage.getItem("movie");
  let movieTime = sessionStorage.getItem("cinema-time");
  let movieLocation = sessionStorage.getItem("cinema-location");
  let seats = sessionStorage.getItem("row1");
  let bookedSeat = JSON.parse(seats);
  let sum = 0;
  bookedSeat.forEach((element) => {
    if (element.completed === true) {
      sum = Number(sum) + Number(element.price);
    }
  });

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const newSeat = () => {
    navigate("/shows");
  };

  const confirmBook = () => {
    openModal();
  };

  const done = () => {
    navigate("/");
  };
  return (
    <div>
      <div className="text-center modal_style p-3">
        <h2>Booking Details</h2>
        <div className="text-danger">
          <h2>
            <Countdown date={Date.now() + 10000} />{" "}
          </h2>{" "}
        </div>
        <div>
          <h4>
            Movie: <span>{movieName}</span>
          </h4>
          <h3>
            Location: <span>{movieLocation}/ </span> Time: {movieTime}
          </h3>
        </div>
        <table className="table table-success table-striped">
          <thead>
            <tr>
              <th> SR. NO.</th>
              <th>Seats</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {bookedSeat.map((ele, i) => {
              return ele.completed === true ? (
                <tr key={i}>
                  <td> {i + 1}</td>
                  <td>{ele.value}</td>
                  <td>{ele.price}</td>
                </tr>
              ) : (
                ""
              );
            })}
          </tbody>
        </table>

        <div className="bg-success text-white py-2">
          {" "}
          The total bill amount would be {sum} Rs/-
        </div>
        <div className="button_modal">
          <div>
            <button className="btn btn-danger my-2" onClick={newSeat}>
              Book other seat
            </button>
          </div>
          <div>
            <button className="btn btn-success my-2" onClick={confirmBook}>
              Confirm Booking
            </button>
          </div>
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
      >
        <div className="text-center">
          <h2 className="text-danger">Congratulations</h2>
          <img src={Emote} alt="Final" className="final_logo" />
          <h3 className="text-danger"> Your Booking confirmed</h3>
          <h3 className="text-success">
            {" "}
            Be ready with your popcorn and enjoy the show
          </h3>
          <button className="btn btn-success" onClick={done}>
            Okay
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default ModalLayer;
