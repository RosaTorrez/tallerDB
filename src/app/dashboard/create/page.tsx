import React from "react";
import Form from "@/app/ui/invoices/create-form";
import { fetchCustomers } from "@/app/lib/data";

export default async function createPage() {
  const customers = await fetchCustomers();
  return (
    <div className="hola">
      <h1>Formulario de Ejemplo para TCX</h1>
      <Form customers={customers} />
    </div>
  );
}
