function Drink({ name, partOfPlant, caffeinContent, age }) {
  return (
    <section>
      <h1>{name}</h1>
      <dl>
        <dt>Part of plant</dt>
        <dd>{partOfPlant}</dd>
        <dt>Caffeine content</dt>
        <dd>{caffeinContent}</dd>
        <dt>Age</dt>
        <dd>{age}</dd>
      </dl>
    </section>
  );
}

const drinks = [
  {
    id: 1,
    name: "tea",
    partOfPlant: "leaf",
    caffeinContent: "15–70 mg/cup",
    age: "4,000+ years",
  },
  {
    id: 2,
    name: "coffee",
    partOfPlant: "bean",
    caffeinContent: "80–185 mg/cup",
    age: "1,000+ years",
  },
];

export default function DrinkList() {
  return (
    <div>
      {drinks.map(({ id, name, partOfPlant, caffeinContent, age }) => (
        <Drink
          key={id}
          name={name}
          partOfPlant={partOfPlant}
          caffeinContent={caffeinContent}
          age={age}
        />
      ))}
    </div>
  );
}
