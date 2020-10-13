
import Link from "next/link";

export const Pages = (props)=>{
const pageButtons = props.pages.map((el)=><div className="row mb-2"><Link href={"/pagine/" + el.slug}><a>{el.title.rendered}</a></Link></div>)

return (<div>
    <h2>PAGINE</h2>
<div className="container">

{pageButtons}
</div>
</div>
)
}
