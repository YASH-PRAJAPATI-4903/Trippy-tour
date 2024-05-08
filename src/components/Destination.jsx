import React from "react";
import Mountain1 from "../assets/1.jpg";
import Mountain2 from "../assets/2.jpg";
import Mountain3 from "../assets/3.jpg";
import Mountain4 from "../assets/4.jpg";
import "./DestinationStyles.css";
import DestinationData from "./DestinationData";

const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destination</h1>
      <p>Tours give you the oppotunity to see a lot, within a time frame.</p>

      <DestinationData cName="first-des"
        heading="Taal Volcano, Batangas"
        text="Discover the wonders of Taal Volcano, A majestic volcano in Batangas, Philippines. Trek its rugged terrain, reach the summit high, Gaze upon the smoldering crater with awe in your eyes. Explore the caldera, a sight so surreal, Turquoise waters against a barren appeal. Immerse in local culture, experience the charm, From heritage sites to vibrant markets, it'll disarm. Feel the warm hospitality of the locals so kind, As you indulge in Filipino flavors, unwind. Nature's beauty and adventure await, Taal Volcano, a destination that's simply great!"
        img1={Mountain1}
        img2={Mountain2}
      />

      <DestinationData 
      cName="first-des-reverse"
        heading="Mt. Dagudul, Batangas"
        text="Embark on a thrilling journey to Mt. Dagudul,
Batangas' hidden gem, standing tall and beautiful.
Hike through lush forests, nature's serene embrace,
Discover hidden trails, a paradise to embrace.

Reach the summit, a breathtaking reward in sight,
Panoramic views that fill your heart with delight.
Marvel at the majestic landscapes, nature's grand art,
Feel the exhilaration, let it ignite your adventurous heart.

Breathe in the fresh mountain air, pure and crisp,
As you explore this haven, nature's precious gift.
Immerse in tranquility, find solace in its embrace,
Mt. Dagudul, an enchanting escape, a serene place.

Uncover the secrets of Batangas, revealed on this peak,
A destination that promises memories unique.
So pack your bags, let the journey begin,
Mt. Dagudul awaits, a majestic experience to win!"
        img1={Mountain3}
        img2={Mountain4}
      />
    </div>
  );
};

export default Destination;
