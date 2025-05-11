import React from "react";

import { addLineBreak } from "../shared/lib/add-line-break";

export const Preview = () => {
  return (
    <div className="preview">
      <div className="container">
        <div className="preview__row">
          <div className="preview__title">
            <h1>{addLineBreak("ПРОДАЖА КВАРТИР \n В ДОМЕ МЕЧТЫ")}</h1>
          </div>
          <div className="preview__image">
            <img src="./src/assets/img/домик-2.png" alt=""></img>
          </div>
        </div>
      </div>
    </div>
  );
};
