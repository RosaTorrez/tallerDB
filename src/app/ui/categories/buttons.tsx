import { PencilIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { deleteClient } from "@/app/lib/actions";

export function CreateClient() {
  return (
    <Link
      href="/dashboard/client/create"
      className="flex h-full items-center rounded-lg bg-blue-600 p-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
    >
      <span className="hidden md:block">Create Client</span>{" "}
      <PlusIcon className="h-5 md:ml-4" />
    </Link>
  );
}

export function UpdateCategory({ id }: { id: number }) {
  return (
    <Link
      href={`/dashboard/categories/${id}/update`}
      className="rounded-md p-2 hover:bg-gray-600 dark:hover:bg-gray-800 bg-dark-tremor-background-subtle hover:rounded-3xl transition-all duration-300 text-white"
    >
      <PencilIcon className="w-5" />
    </Link>
  );
}

export function DeleteCategory({ id }: { id: number }) {
  const dispatch = deleteClient.bind(null, id);
  return (
    <>
      <form action={dispatch}>
        <button className="rounded-md p-2 hover:bg-red-600 dark:hover:bg-red-800 bg-red-600 hover:rounded-3xl transition-all duration-300 text-white">
          <span className="sr-only">Delete</span>
          <TrashIcon className="w-5" />
        </button>
      </form>
    </>
  );
}
