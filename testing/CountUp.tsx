"use client";

import CountUp from "react-countup";

const CountUpItem = (props: {
  start: number;
  end: number;
  duration: number;
  delay: number;
}) => {
  return (
    <div>
      <CountUp
        start={props.start}
        end={props.end}
        duration={props.duration}
        delay={props.delay}
        suffix="+"
      />
    </div>
  );
};

export default CountUpItem;
