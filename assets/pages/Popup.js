import React from "react";

const Popup = ({ setIsPopup }) => {
  return (
    <div className="popUp">
      <div className="popUpText">
        <p>Hello</p>
        <button onClick={() => setIsPopup(false)} className="btn btn-showup">
          X
        </button>
      </div>
    </div>
  );
};

export default Popup;
