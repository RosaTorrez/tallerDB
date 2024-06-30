"use server"
import {updateCustomer} from "@/app/lib/data";

export async function handleUpdateCustomer(){
    /*\
    {
  id: "",
      name: "Delba de Oliveira",
    email: "delba@oliveira.com",
    image_url: "",
},
     */
     await updateCustomer("3958dc9e-712f-4377-85e9-fec4b6a6442a", "Delba de Oliveira", "/customers/delba-de-oliveira.jpg");
}
