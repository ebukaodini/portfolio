"use client";

import { Typewriter } from "react-simple-typewriter";

export default function TypeTitles() {
  return (
    <Typewriter
      words={[
        "Software Engineer.",
        "Knowledge Seeker.",
        "Business Enthusiast.",
        "Mentor.",
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
