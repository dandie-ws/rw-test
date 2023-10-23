import React, { createRef, useEffect } from "react";
import { render } from "react-dom";
import { FixedSizeList as List } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";

import "./styles.css";

const Row = ({ index, style }) => (
  <li
    role="listitem"
    aria-posinset={index + 1}
    aria-setsize={1000}
    tabIndex={0}
    className={index % 2 ? "ListItemOdd" : "ListItemEven"}
    style={style}
    data-test-id={1}
  >
    Row {index}
  </li>
);

const Example = () => {
  const setRole = (ref) => {
    ref.setAttribute("role", "list");

    console.log(ref);
  };

  return (
    <AutoSizer>
      {({ height, width }) => (
        <List
          className="List"
          height={height}
          itemCount={1000}
          itemSize={35}
          width={width}
          innerRef={setRole}
          innerElementType="ul"
          tabIndex={0}
        >
          {Row}
        </List>
      )}
    </AutoSizer>
  );
};

render(<Example />, document.getElementById("root"));
