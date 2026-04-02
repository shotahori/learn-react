export default function StoryTray({ stories }) {
  const items = [
    ...stories,
    {
      id: "create",
      label: "Create Story",
    },
  ];

  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>{item.label}</li>
      ))}
    </ul>
  );
}
