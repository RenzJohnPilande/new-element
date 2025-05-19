function OrgChart() {
  return (
    <div className="flex flex-wrap flex-col w-full content-center text-center text-pretty shadow-lg p-5 bg-white uppercase font-semibold">
      <h1 className="text-lg text-balance my-4">Corporate Structure and Departments</h1>
      <div className="flex flex-wrap justify-center p-2">
        <div className="flex flex-wrap items-center justify-center text-xs border h-20 w-40 p-4 shadow-lg bg-yellow-300">
          CEO
        </div>
      </div>
      <div className="flex flex-wrap justify-center p-2">
        <div className="flex flex-wrap items-center justify-center text-xs border h-20 w-40 p-4 shadow-lg bg-blue-500">
          Board Committee
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 py-4">
        <div className="flex flex-wrap items-center justify-center text-xs border h-20 p-4 shadow-lg bg-green-500">
          HR
        </div>
        <div className="flex flex-wrap items-center justify-center text-xs border h-20 p-4 shadow-lg bg-green-500">
          Finance
        </div>
        <div className="flex flex-wrap items-center justify-center text-xs border h-20 p-4 shadow-lg bg-green-500">
          Marketing
        </div>
        <div className="flex flex-wrap items-center justify-center text-xs border h-20 p-4 shadow-lg bg-green-500">
          Investment
        </div>
        <div className="flex flex-wrap items-center justify-center text-xs border h-20 p-4 shadow-lg bg-green-500">
          Audit
        </div>
        <div className="flex flex-wrap items-center justify-center text-xs border h-20 p-4 shadow-lg bg-green-500">
          Legality
        </div>
      </div>
      <div className="flex flex-wrap grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 py-4">
        <div className="flex flex-wrap items-center justify-center text-xs border h-20 p-4 shadow-lg bg-indigo-500">
          International Trading Department
        </div>
        <div className="flex flex-wrap items-center justify-center text-xs border h-20 p-4 shadow-lg bg-indigo-500">
          Watches Department
        </div>
        <div className="flex flex-wrap items-center justify-center text-xs border h-20 p-4 shadow-lg bg-indigo-500">
          Sun Block and Whitening Department
        </div>
        <div className="flex flex-wrap items-center justify-center text-xs border h-20 p-4 shadow-lg bg-indigo-500">
          Electronic wearble device Department
        </div>
        <div className="flex flex-wrap items-center justify-center text-xs border h-20 p-4 shadow-lg bg-indigo-500">
          Golf Technology and Information Department
        </div>
        <div className="flex flex-wrap items-center justify-center text-xs border h-20 p-4 shadow-lg bg-indigo-500">
          Golf E-Vehicle Department
        </div>
        <div className="flex flex-wrap items-center justify-center text-xs border h-20 p-4 shadow-lg bg-indigo-500">
          Golf Equipment
        </div>
        <div className="flex flex-wrap items-center justify-center text-xs border h-20 p-4 shadow-lg bg-indigo-500">
          Golf Apparel and Accessories Department
        </div>
        <div className="flex flex-wrap items-center justify-center text-xs border h-20 p-4 shadow-lg bg-indigo-500">
          Advertising and Promotion Department
        </div>
        <div className="flex flex-wrap items-center justify-center text-xs border h-20 p-4 shadow-lg bg-indigo-500">
          Golf Event Coordination Department
        </div>
        <div className="flex flex-wrap items-center justify-center text-xs border h-20 p-4 shadow-lg bg-indigo-500">
          Professional Athlete Agent Department
        </div>
        <div className="flex flex-wrap items-center justify-center text-xs border h-20 p-4 shadow-lg bg-indigo-500">
          Golf Tourism / Traveling Department
        </div>
      </div>
    </div>
  );
}

export default OrgChart;
