import React, { useState } from "react";
import cn from "classnames";
import styles from "./Users.module.css";
import "./paginator.css";

const Paginator = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  let portionCount = Math.ceil(pagesCount / props.portionSize);
  let [portionNumber, setPortionNuber] = useState(1);
  let leftportion = (portionNumber - 1) * props.portionSize + 1;
  let rightPortion = portionNumber * props.portionSize;

  return (
    <div>
      {" "}
      {portionNumber > 1 && (
        <button
          onClick={() => {
            {
              setPortionNuber(portionNumber - 1);
            }
          }}
        >
          PREV
        </button>
      )}
      {pages
        .filter((p) => p >= leftportion && p <= rightPortion)
        .map((p) => {
          return (
            <span
              className={cn(
                { [styles.selectedPage]: props.curentPage === p },
                styles.pageNumber
              )}
              key={p}
              onClick={(e) => {
                props.onPageClick(p);
              }}
            >
              {p}
            </span>
          );
        })}
      {portionCount > portionNumber && (
        <button
          onClick={() => {
            setPortionNuber(portionNumber + 1);
          }}
        >
          NEXT
        </button>
      )}
    </div>
  );
};

export default Paginator;
