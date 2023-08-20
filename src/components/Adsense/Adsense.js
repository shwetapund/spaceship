import React, { useEffect } from "react";

function Adsense({ dataAdSlot }) {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error(e);
    }
  }, []);
  return (
    <div>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-1373341236327290"
        data-ad-slot={dataAdSlot || "9699001202"}
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
      Ads are blocked by default
    </div>
  );
}

export default Adsense;
