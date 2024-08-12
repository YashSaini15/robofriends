import React from "react";
import Cards from "./Cards";

const CardList = ({ robots }) => {
  return (
    <>
      {robots.map((user) => {
        return (
          <Cards
            key={user.id}
            id={user.id}
            name={user.name}
            email={user.email}
          />
        );
      })}
    </>
  );
};

export default CardList;
