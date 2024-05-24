import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { slides } from "./data";
import { Captions } from "yet-another-react-lightbox/plugins";

function LightboxSlider() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)}>Open Lightbox</button>

      <Lightbox
        plugins={[Captions]}
        captions={{
          showToggle: true,
          descriptionTextAlign: "end",
        }}
        open={open}
        slides={slides}
        close={() => setOpen(false)}
      />
    </>
  );
}

export default LightboxSlider;
