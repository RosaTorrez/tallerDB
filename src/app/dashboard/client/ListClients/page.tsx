import React from "react";
import Form from "@/app/ui/invoices/create-form";
import { fetchCustomers } from "@/app/lib/data";
import { customers } from "@/app/lib/placeholder-data";
export default funtion
export default async function createPage() {
    const client = await fetchCustomers();
    return (
      <div className="hola">
        <h1>Pon cualquier texto</h1>
        <Form customers={customers} />
      </div>
    );
  }