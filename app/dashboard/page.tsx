
import { fetchLatestInvoices } from "../lib/data"

export default async function DahboardPAge(){

    const res = await fetchLatestInvoices()

    console.log(res);

    return(
        <div>
            {res.map(item =>(
                <>
                    <h2>{item.name}</h2>
                    <p>{item.amount}</p>
                </>
            ))}
        </div>
    )
}