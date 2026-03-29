import { getImageUrl } from "./utils.js";

const scientists = [
  {
    name: "Maria Skłodowska-Curie",
    imageId: "szV5sdG",
    profession: "physicist and chemist",
    awards: [
      "Nobel Prize in Physics",
      "Nobel Prize in Chemistry",
      "Davy Medal",
      "Matteucci Medal",
    ],
    discovery: "polonium (chemical element)",
  },
  {
    name: "Katsuko Saruhashi",
    imageId: "YfeOqp2",
    profession: "geochemist",
    awards: ["Miyake Prize for geochemistry", "Tanaka Prize"],
    discovery: "a method for measuring carbon dioxide in seawater",
  },
];

function Profile({ scientist, imageSize = 70 }) {
  return (
    <section className="profile">
      <h2>{scientist.name}</h2>
      <img
        className="avatar"
        src={getImageUrl(scientist.imageId)}
        alt={scientist.name}
        width={imageSize}
        height={imageSize}
      />
      <ul>
        <li>
          <b>Profession: </b>
          {scientist.profession}
        </li>
        <li>
          <b>Awards: {scientist.awards.length} </b>
          ({scientist.awards.join(", ")})
        </li>
        <li>
          <b>Discovered: </b>
          {scientist.discovery}
        </li>
      </ul>
    </section>
  );
}

export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      {scientists.map((scientist, index) => (
        <Profile key={index} scientist={scientist} imageSize={70} />
      ))}
    </div>
  );
}
