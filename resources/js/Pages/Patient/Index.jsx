import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import PatientsTable from "./PatientsTable";

export default function Index({ auth, patients, queryParams, success }) {
  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <div className="flex justify-between items-center">
          <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Patients</h2>
          <Link href={route("patient.create")} className="bg-emerald-500 py-1 px-3 text-white rounded shadow transition-all hover:bg-emerald-600">Add New</Link>
        </div>
      }>
      <Head title="Patients"></Head>
      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 text-gray-900 dark:text-gray-100">
              {/* <pre>{JSON.stringify(patients, undefined, 2)}</pre> */}
              <PatientsTable patients={patients} queryParams={queryParams} success={success}></PatientsTable>
            </div>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
