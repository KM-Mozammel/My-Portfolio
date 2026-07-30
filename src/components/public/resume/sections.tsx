export function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {

  return (
    <section className="mt-10">
      <div className="flex items-center gap-3 mb-5">
        <div className="w-2 h-8 rounded-full bg-blue-600" />
        <h2 className="text-2xl font-bold text-gray-900">
          {title}
        </h2>
      </div>
      {children}
    </section>
  );
}
