import React from 'react';
import PropTypes from 'prop-types';
import ActivePlus from '../assets/images/plus-active.png';
import InActivePlus from '../assets/images/plus-inactive.png';
import ActiveSearch from '../assets/images/search-active.png';
import InActiveSearch from '../assets/images/search-inactive.png';

const btns = [
  { status: 0, title: "All" },
  { status: 1, title: "Active" },
  { status: 2, title: "Completed" },
];

const Footer = ({
  action,
  updateAction,
  status,
  filterAction,
  completeRecords,
}) => {
  const add = (
    <img
      src={action === "add" ? ActivePlus : InActivePlus}
      alt="Add"
      onClick={() => {
        updateAction("add");
      }}
    />
  );

  const search = (
    <img
      src={action === "search" ? ActiveSearch : InActiveSearch}
      alt="Search"
      onClick={() => {
        updateAction("search");
      }}
    />
  );
  return (
    <div className="footer">
      <div className="flex-container">
        <div className="action-btn">
          <div className="action-flex">
            <div className="text">{add}</div>
            <div className="text">{search}</div>
            <div className="text">|</div>
            <div className="text">{completeRecords} items left</div>
          </div>
        </div>
        <div className="filter-btn">
          <div className="filter-flex">
            {btns.map((item) => (
              <button
                key={item.title}
                onClick={() => {
                  filterAction(item.status);
                }}
                className={`btn${item.status === status ? " active" : ""}`}
              >
                {item.title}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

Footer.propTypes = {
  action: PropTypes.string,
  updateAction: PropTypes.func,
  filterAction: PropTypes.func,
  status: PropTypes.number,
  completeRecords: PropTypes.number,
};
export default Footer;
