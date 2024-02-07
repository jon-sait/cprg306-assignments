export default function Item(props) {
  return (
    <li class="p-2 m-4 bg-slate-900 max-w-sm">
      <h2 class="text-xl font-bold">{props.name}</h2>
      <div class="text-sm">
        Buy {props.quantity} in {props.category}
      </div>
    </li>
  );
}
