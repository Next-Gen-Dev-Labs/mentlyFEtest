interface Props {
  checked: boolean;
  onChange: (checked: boolean) => void;
}

export function PublishedToggle({ checked, onChange }: Props) {
  return (
    <div className="flex items-center gap-3 py-2 mt-4 mb-10">
      <input
        type="checkbox"
        id="showPublished"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="peer h-5 w-5 rounded-lg border-gray-300 text-orange-500 focus:ring-orange-500/20 transition-all cursor-pointer"
      />
      <label
        htmlFor="showPublished"
        className="text-gray-700 select-none dark:text-foreground "
      >
        Show this section when Published
      </label>
    </div>
  );
}
