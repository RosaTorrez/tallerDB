import UpdateClientForm from "@/app/ui/client/updateForm";
import {fetchClientById} from "@/app/lib/queries";

export default async function updatePage({ params }: { params: { id: string } }) {
  const id = params.id;
  const client = await fetchClientById(id);
  return (
    <div>
      <UpdateClientForm client={client} />
    </div>
  );
}
