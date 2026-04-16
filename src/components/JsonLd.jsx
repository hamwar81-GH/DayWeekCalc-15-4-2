import { useEffect } from "react";
import { serializeJsonLd } from "../lib/schema";

function JsonLd({ id, data }) {
  const serializedData = serializeJsonLd(data);

  useEffect(() => {
    let script = document.querySelector(`script[data-jsonld-id="${id}"]`);

    if (!script) {
      script = document.createElement("script");
      script.type = "application/ld+json";
      script.setAttribute("data-jsonld-id", id);
      document.head.appendChild(script);
    }

    script.textContent = serializedData;

    return () => {
      if (script?.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, [id, serializedData]);

  return null;
}

export default JsonLd;
