import Link from "next/link";

export default function AdminSidebar() {
  return (
    <aside className="w-64 bg-slate-950 border-r border-slate-800 flex flex-col p-6 space-y-6">
      <div>
        <h2 className="text-lg font-bold text-blue-400 tracking-wide">Muzu CMS</h2>
        <p className="text-xs text-slate-500">Control Panel</p>
      </div>
      
      <nav className="flex flex-col space-y-2 text-sm text-slate-400">
        <Link href="/admin" className="hover:text-white p-2 hover:bg-slate-900 rounded transition">📊 Analytics Overview</Link>
        <Link href="/admin/projects" className="hover:text-white p-2 hover:bg-slate-900 rounded transition">💼 Manage Projects</Link>
        <Link href="/admin/blogs" className="hover:text-white p-2 hover:bg-slate-900 rounded transition">✍️ Write Blogs</Link>
        <hr className="border-slate-800 my-2" />
        <Link href="/" className="hover:text-white p-2 text-xs text-blue-500 transition">← Back to Portfolio</Link>
      </nav>
    </aside>
  );
}