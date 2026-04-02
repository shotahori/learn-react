import { people } from "./data.js";
import { getImageUrl } from "./utils.js";

const chemists = [];
const others = [];

people.forEach((person) => {
  if (person.profession === "chemist") {
    chemists.push(person);
  } else {
    others.push(person);
  }
});

function ListItem({ person }) {
  return (
    <li>
      <img src={getImageUrl(person)} alt={person.name} />
      <p>
        <b>{person.name}:</b>
        {" " + person.profession + " "}
        known for {person.accomplishment}
      </p>
    </li>
  );
}

function ListSection({ title, people }) {
  return (
    <>
      <h2>{title}</h2>
      <ul>
        {people.map((person) => (
          <ListItem key={person.id} person={person} />
        ))}
      </ul>
    </>
  );
}

export default function List() {
  return (
    <article>
      <h1>Scientists</h1>
      <ListSection title="Chemists" people={chemists} />
      <ListSection title="Others" people={others} />
    </article>
  );
}
