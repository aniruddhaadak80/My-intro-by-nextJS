import Image from "next/image";
import "./picture.css";
import Profile from "../../../public/vercel.svg";
export default function Pictures() {
  return (
    <>
      {/* you have to configure the hostname and protocol in next.config.js file  */}
      <h1>You will see some images here </h1>
      {/* Image of beautiful queen */}
      <Image
        className="image-pic"
        height={350}
        width={250}
        src="https://image.lexica.art/md2_webp/182e551e-6443-46d6-abee-2336b2499c3c"
        alt="image of queen"
      />
      {/* image of a cute cat  */}
      <Image
        className="image-pic"
        height={350}
        width={250}
        src={
          "https://image.lexica.art/md2_webp/cdbf782f-8061-4cc6-a925-8a618986a00c"
        }
        alt="cat-image"
      />

      {/* image for public image (vercel) */}
      <Image
        src={Profile}
        className="image-pic"
        height={350}
        width={250}
        alt="vercel logo"
      />
    </>
  );
}

// Title for pictures page
export function generateMetadata() {
  return {
    title: "Pictures ",
  };
}
