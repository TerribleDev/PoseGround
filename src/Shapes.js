import React, { useState, useEffect } from "react";
import pose from "react-pose";

const Box = pose.div({
  up: {
    y: 0,
    backgroundColor: "#7E57C2",
    borderRadius: "0",
    transition: {
      duration: 700,
      ease: "backOut"
    }
  },
  down: {
    y: 200,
    backgroundColor: "#336633",
    transition: {
      duration: 700,
      ease: "backIn"
    }
  },
});
const toggleSquare = input => {
  return input === "up" ? "down" : "up";
};
export const Square = () => {
  const [pose, setPose] = useState("down");
  return (
    <Box
      onPoseComplete={() => setPose(toggleSquare(pose))}
      pose={pose}
      initialPose="up"
      style={{ width: "8rem", height: "8rem", marginBottom: 200 }}
    />
  );
};

const Sphere = pose.div({
  here: {
    x: 0,
    backgroundColor: "#42A5F5"
  },
  gone: {
    x: 400,
    backgroundColor: "#336633",
    transition: {
      type: "physics",
      acceleration: 50
    }
  }
});

export const Circle = () => {
  const [pose, setPose] = useState("here");
  return (
  <>
  <Sphere
    onClick={() => setPose("gone")}
    pose={pose}
    initialPose="here"
    style={{ width: "8rem", height: "8rem", borderRadius: '4rem' }}></Sphere>
  </>);
};
