"use client";

import { useEffect, useState } from "react";

export default function Loader() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const finish = () => setDone(true);
    // Hide once the window has loaded, with a graceful minimum display time.
    const min = window.setTimeout(finish, 1400);
    window.addEventListener("load", finish, { once: true });

    document.body.style.overflow = "hidden";
    const restore = window.setTimeout(() => {
      document.body.style.overflow = "";
    }, 1600);

    return () => {
      window.clearTimeout(min);
      window.clearTimeout(restore);
      window.removeEventListener("load", finish);
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    if (done) document.body.style.overflow = "";
  }, [done]);

  return (
    <div className={`loader ${done ? "loader-hidden" : ""}`} aria-hidden="true">
      <div className="loader-inner">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/WPS_Landscape_WEB-WHITE.png"
          alt=""
          className="loader-logo"
          width={230}
          height={69}
        />
        <div className="loader-bar">
          <span />
        </div>
      </div>
    </div>
  );
}
