function Navbar() {
  return (
    <div className="h-16 bg-white shadow flex items-center justify-between px-6">

      <h1 className="text-2xl font-semibold">
        Dashboard
      </h1>

      <div className="flex items-center gap-4">

        <span className="text-gray-600">
          Welcome, Admin
        </span>

        <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center">
          A
        </div>

      </div>

    </div>
  );
}

export default Navbar;