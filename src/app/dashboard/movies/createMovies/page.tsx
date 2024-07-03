import Form from "@/app/ui/movies/create-form";
import { Card } from "@tremor/react";

export default function Page() {
  return (
    <Card
      className={"flex md:flex-row flex-col items-stretch gap-5 md:p-10 p-2"}
    >
      <img
        className={
          "object-cover md:w-1/5 w-full rounded-xl shadow-xl shadow-indigo-800 md:block hidden"
        }
        src={"/icononet.jpg"}
      />
      <Form />
    </Card>
  );
}