import {lusitana} from "@/app/ui/fonts";
import {CreateClient} from "@/app/ui/client/buttons";
import Search from "@/app/ui/search";
import {Suspense} from "react";
import {InvoicesTableSkeleton} from "@/app/ui/skeletons";
import Table from "@/app/ui/client/table";
import Pagination from "@/app/ui/invoices/pagination";
import {fetchClientsPages} from "@/app/lib/queries";

export default async function Page({searchParams}:{searchParams?: {query?: string, page?: number}}){
    const currentPage = Number(searchParams?.page!) || 1
    const query = searchParams?.query || ''
    const totalPages = await fetchClientsPages(query)

    return (
        <div className='w-full'>
            <div className='flex w-full items-center justify-center'>
                <h1 className={`${lusitana.className} text-2xl`}>
                    Clients
                </h1>
            </div>
            <div className='mt-4 flex items-center justify-between gap-2 md:mt-8'>
                <Search placeholder={'Search Invoice...'}/>
                <CreateClient/>
            </div>
            <Suspense key={query + currentPage} fallback={<InvoicesTableSkeleton/>}>
                <Table query={query} currentPage={currentPage}/>
            </Suspense>
            <div className="mt-5 flex w-full justify-center">
                <Pagination totalPages={totalPages}/>
            </div>
        </div>

    );
}