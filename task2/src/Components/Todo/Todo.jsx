export const Todo = ({ item }) => (
  <div>
    <p>
      {item.id}: <span>{item.title}</span>
    </p>
  </div>
);
