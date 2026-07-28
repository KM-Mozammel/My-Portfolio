export function Experience({
  role,
  time,
  items,
}: {
  role: string;
  time: string;
  items: string[];
}) {
  return (
    <div
      className="
                mb-6
                rounded-xl
                border
                border-gray-200
                p-5
                hover:shadow-lg
                transition
            "
    >
      <div className="flex justify-between flex-wrap gap-2">
        <h3 className="font-bold text-lg text-gray-900">
          {role}
        </h3>
        <span className="text-gray-500 text-sm">
          {time}
        </span>
      </div>
      <ul className="mt-4 list-disc pl-5 space-y-2 text-gray-700">
        {items.map((item, index) => (
          <li key={index}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}