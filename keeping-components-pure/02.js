// なぜ再展開で同じ人物を表示するのか
// 同じ変数を参照し、currentPersonの値が上書きされるから
// 受け取ったpropsを変数に代入せずに、propsとして子に渡す

import Panel from "./Panel.js";
import { getImageUrl } from "./utils.js";

export default function Profile({ person }) {
  return (
    <Panel>
      <Header name={person.name} />
      <Avatar person={person} name={person.name} />
    </Panel>
  );
}

function Header({ name }) {
  return <h1>{name}</h1>;
}

function Avatar({ person, name }) {
  return (
    <img
      className="avatar"
      src={getImageUrl(person)}
      alt={name}
      width={50}
      height={50}
    />
  );
}
