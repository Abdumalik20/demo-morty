import React from "react";

const Pagenation = ({ pageNumber, setPageNumber }) => {
  let next = () => {
    setPageNumber((x) => x + 1);
  };

  let prev = () => {
    if (pageNumber === 1) return;
    setPageNumber((x) => x - 1);
  };

  return (
    <div className="btns">
      <button className="btn_color" onClick={prev}>
        prev
      </button>
      <button className="btn_color" onClick={next}>
        next
      </button>
    </div>
  );
};

export default Pagenation;
