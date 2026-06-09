async function getStats() {
  const res = await fetch("/api/public/projects");
  return res.json();
}

export default async function AdminPage() {
  // const data = await getStats();

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>

      <div className="grid grid-cols-1 gap-4 text-white">
        {/* <div className="p-4 bg-black shadow rounded">
          Total Projects: {data.total}
        </div> */}

        {/* <div className="p-4 bg-black shadow rounded">
          Skills: Coming soon
        </div> */}

        <div className="p-4 bg-black shadow rounded">
          Contacts: Coming soon
        </div>
      </div>
    </div>
  );
}