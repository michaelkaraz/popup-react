import React from "react";

import Popover, { ArrowContainer } from "react-tiny-popover";

export const Popup = ({ isPopup, mycontent, handlePopClick }) => {
  return (
    <div className="Popup">
      <h1>React tiny popover demo</h1>

      <Popover
        isOpen={isPopup}
        position={["top", "right"]}
        padding={10}
        onClickOutside={handlePopClick}
        content={({ position, targetRect, popoverRect }) => (
          <ArrowContainer // if you'd like an arrow, you can import the ArrowContainer!
            position={position}
            targetRect={targetRect}
            popoverRect={popoverRect}
            arrowColor={"blue"}
            arrowSize={10}
            arrowStyle={{ opacity: 0.7 }}
          >
            <div
              style={{ backgroundColor: "blue", opacity: 0.7 }}
              onClick={handlePopClick}
            >
              {mycontent}
            </div>
          </ArrowContainer>
        )}
      >
        <div style={{ cursor: "pointer" }} onClick={handlePopClick}>
          Click me!
        </div>
      </Popover>
    </div>
  );
};
