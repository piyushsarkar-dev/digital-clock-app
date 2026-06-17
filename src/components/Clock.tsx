"use client";

import NumberFlow from "@number-flow/react";
import { format } from "date-fns";
import { useEffect, useState } from "react";
import GlassSurface from "./GlassSurface";
import { TextAnimate } from "./shadcnui/text-animate";

const Clock = () => {
  const [hours, setHours] = useState("0");
  const [minutes, setMinutes] = useState("0");
  const [secoend, setSecoend] = useState("0");
  const [ampm, setAmPm] = useState("XX");
  const [date, setDate] = useState("XX, XX XXXX XXXX");

  useEffect(() => {
    const interval = setInterval(() => {
      setHours(format(new Date(), "hh"));
      setMinutes(format(new Date(), "mm"));
      setSecoend(format(new Date(), "ss"));
      setAmPm(format(new Date(), "a"));
      setDate(format(new Date(), "eeee, dd LLLL yyy"));
    }, 100);
    return () => clearInterval(interval);
  }, []);
  return (
    <div>
      <GlassSurface
        width={1000}
        height={350}
        borderRadius={30}>
        <div className="space-y-4">
          <div className="flex items-center gap-1 font-mono text-9xl">
            <NumberFlow value={parseInt(hours)} />
            <span className="animate-pulse">:</span>
            <NumberFlow value={parseInt(minutes)} />
            <span className="animate-pulse">:</span>
            <NumberFlow value={parseInt(secoend)} />
            <TextAnimate
              key={ampm}
              animation="fadeIn"
              by="line"
              as="p">
              {ampm}
            </TextAnimate>
          </div>
          <div className="text-center text-6xl">{date}</div>
        </div>
      </GlassSurface>
    </div>
  );
};

export default Clock;
