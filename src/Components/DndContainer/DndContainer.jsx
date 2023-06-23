import React, { useState, useEffect, useRef } from "react";
import { useDrag, useDrop } from "react-dnd";

const containerStyle = {
  width: "100%",
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const innerStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
};

const DropContainer = (props) => {
  const targetRef = useRef();
  const [position, setPosition] = useState({
    top: null,
    left: null,
  });

  const [_, drop] = useDrop(
    () => ({
      accept: "Menu",
      drop(item, monitor) {
        const delta = monitor.getDifferenceFromInitialOffset();
        const left = Math.round(item.left + delta.x);
        const top = Math.round(item.top + delta.y);

        setPosition({ left, top });

        return undefined;
      },
    }),
    []
  );

  const [_drag, drag] = useDrag(
    () => ({
      type: "Menu",
      item: { ...position },
    }),
    [position]
  );

  useEffect(() => {
    const dom = targetRef.current;
    const rect = dom.getBoundingClientRect();

    setPosition({ top: rect.top, left: rect.left });
  }, []);

  return (
    <div ref={drop} style={containerStyle}>
      <div ref={drag} style={{ ...innerStyle, ...position }}>
        <div ref={targetRef}>{props.children}</div>
      </div>
    </div>
  );
};

export default DropContainer;
