
import Link from "next/link";

export const Pages = (props)=>{
let pageButtons = props.pages.map((el)=><div className="row mb-2"><Link href={"/pagine/" + el.slug}><a>{el.title.rendered}</a></Link></div>)
pageButtons = pageButtons.filter((el)=>el.slug==="pagine-amiche" || el.slug==="chi-siamo" || el.slug==="contatti")
return (<div>
    <h2>PAGINE</h2>
<div className="container">

{pageButtons}
</div>
</div>
)
}
