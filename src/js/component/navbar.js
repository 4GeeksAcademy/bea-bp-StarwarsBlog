import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  const { likes } = store;

  return (
    <nav className="navbar navbar-light bg-light mb-3">
   
      <div className="ml-auto">
        <div className="dropdown">
          <button
            className="btn btn-primary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Favorites {likes.length}
          </button>
          <ul className="dropdown-menu">
            {likes.map((like) => {
              return (
                <li key={like.id}>
                  <Link
                    onClick={() => actions.cleanDetailView()}
                    className="dropdown-item"
                    to={createRoute(like.id)}
                  >
                    {like.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

const createRoute = (str) => {
  const stringPart = str.match(/[a-zA-Z]+/)[0];
  const numberPart = str.match(/\d+/)[0];
  return `${stringPart}/${numberPart}`;
};