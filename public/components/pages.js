
import Link from "next/link";

export const Pages = (props)=>{
let filtered = props.pages.filter((el)=>el.slug==="pagine-amiche" || el.slug==="chi-siamo" || el.slug==="contatti")
let pageButtons = filtered.map((el)=><div className="row mb-2"><Link href={"/pagine/" + el.slug}><a>{el.title.rendered}</a></Link></div>)
return (<div>
    <h2>PAGINE</h2>
<div className="container">

{pageButtons}
</div>
</div>
)
}
