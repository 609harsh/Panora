import ConnectionTable from "./Connection";

export default function ConnectionsPage() {
    return (
      <div className="flex items-center justify-between space-y-2">
      <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex flex-col items-start justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Connections</h2>
        <h2 className="text-lg font-bold tracking-tight">Integrations between your users’ accounts and third-party apps.</h2>
      </div>          
      <ConnectionTable/>
      </div>
    </div>
    );
  }