"use client";

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Card, TextInput } from "@tremor/react";

export default function Search({ placeholder }: { placeholder: string }) {
  return (
    <TextInput
      icon={MagnifyingGlassIcon}
      className="flex-1 w-full rounded-md border border-gray-200 outline-0 py-[9px] pl-10 text-sm placeholder:text-gray-500"
      placeholder={placeholder}
    />
  );
}
