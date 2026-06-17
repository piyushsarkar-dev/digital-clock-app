"use client";

import GlassSurface from "./GlassSurface";

const Clock = () => {
  return (
    <GlassSurface
      width={1000}
      height={350}
      borderRadius={30}>
      <div className="text-6xl font-bold tracking-widest text-white drop-shadow-lg">
        {" "}
      </div>
    </GlassSurface>
  );
};

export default Clock;
