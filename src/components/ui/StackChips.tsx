interface StackChipsProps {
  items: string[];
}

export function StackChips({ items }: StackChipsProps) {
  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((item) => (
        <li
          key={item}
          className="rounded-md border border-border bg-surface px-2.5 py-1 font-mono text-[11px] text-muted"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
