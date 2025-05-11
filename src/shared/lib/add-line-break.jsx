import { React, Fragment } from "react";

export const addLineBreak = (str) =>
  str.split("\n").map((subStr) => {
    return (
      <Fragment key={subStr}>
        {subStr}
        <br />
      </Fragment>
    );
  });
