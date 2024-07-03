import UpdateCategoryForm from "@/app/ui/categories/updateForm";
import {fetchCategoryById, fetchClientById} from "@/app/lib/queries";

export default async function updatePage({ params }: { params: { id: string } }) {
  const id = params.id;
  const category = await fetchCategoryById(id);
  return (
    <div>
      <UpdateCategoryForm category={category} />
    </div>
  );
}
