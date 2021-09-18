import React from "react";

const Pagination = ({ prev, next, onPrevious, onNext }) => {
  const handlePrevious = () => {
    onPrevious();
  };

  const handleNext = () => {
    onNext();
  };
  return (
    <nav className="my-5">
      <ul className="pagination justify-content-center">
        {prev ? (
          <li className="page-item">
            <button onClick={handlePrevious} className="page-link">
              Anterior
            </button>
          </li>
        ) : null}
        {next ? (
          <li className="page-item">
            <button onClick={handleNext} className="page-link">
              Siguiente
            </button>
          </li>
        ) : null}
      </ul>
    </nav>
  );
};

export default Pagination;
