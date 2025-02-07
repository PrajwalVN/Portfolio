import React from "react";

function card(props) {
  var i = 1;
  function show() {
    var front = document.getElementById(props.id + "_front");
    var back = document.getElementById(props.id + "_back");
    var card = document.getElementById(props.id);
    console.log();
    if (getComputedStyle(front).display == "block") {
      card.style.transform = `rotateY(${180 * i}deg)`;
      front.style.display = "none";
      back.style.display = "block";
      i++;
    } else {
      card.style.transform = `rotateY(${180 * i}deg)`;
      front.style.display = "block";
      back.style.display = "none";
      i++;
    }
  }
  return (
    <>
      <div className="card" id={props.id} onClick={show}>
        <div className="front" id={props.id + "_front"}>
          <img className="founder_img p-4 mb-5 mx-2" src={props.img} alt="" />
          <div className="card-body mt-10">
            <div>
              <h5 className="text-[#ff243d]">{props.name} </h5>
              <p className="text-[#ffffff]">{props.position}</p>
            </div>
            <div className="img">
              <a href={props.git} target="_blank">
                <img src="/src/components/images/github.png" alt="" />
              </a>
            </div>
          </div>
        </div>
        <div className="back" id={props.id + "_back"}>
          <p className="text-[#ffffff]">{props.about}</p>
        </div>
      </div>
    </>
  );
}

export default card;
