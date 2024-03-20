export default function Item(props) {
  return (
    <li
      className="p-2 m-4 bg-slate-900 max-w-sm hover:bg-orange-800 cursor-pointer"
      onClick={props.onSelect}
    >
      <h2 className="text-xl font-bold">{props.name}</h2>
      <div className="text-sm">
        Buy {props.quantity} in {props.category}
      </div>
    </li>
  );
}
