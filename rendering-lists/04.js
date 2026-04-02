function intersperse(items, createSeparator) {
  const result = [];

  items.forEach((item, i) => {
    if (i > 0) {
      result.push(createSeparator(i));
    }
    result.push(item);
  });

  return result;
}

const poem = {
  lines: [
    "I write, erase, rewrite",
    "Erase again, and then",
    "A poppy blooms.",
  ],
};

export default function Poem() {
  const paragraphs = poem.lines.map((line, i) => <p key={"p-" + i}>{line}</p>);
  const result = intersperse(paragraphs, (i) => <hr key={"hr-" + i} />);

  return <article>{result}</article>;
}
