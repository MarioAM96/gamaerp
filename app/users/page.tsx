import { columns } from "@/app/users/columns";
import DataTable from "@/app/users/data-table";
import { users } from "@/app/users/users";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { SiteHeader } from "@/components/site-header";
import { AppSidebar } from "@/components/app-sidebar";

export default async function Home() {
  return (
    <SidebarProvider>
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />
        <br />
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-gray-900">Users</h2>
          <br />
          <DataTable data={users} columns={columns} />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
