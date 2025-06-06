"use client";

import { Typewriter } from "react-simple-typewriter";

export default function TypeTitles() {
  return (
    <Typewriter
      words={[
        "Software Engineer.",
        "Mentor.",
        "Knowledge Seeker.",
        "Business Enthusiast.",
        "Christian.",
      ]}
      loop={0}
      cursor
      cursorStyle="|"
      typeSpeed={120}
      deleteSpeed={120}
      delaySpeed={1000}
    />
  );
}
