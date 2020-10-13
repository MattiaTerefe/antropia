
import Link from "next/link";

export const Categories = (props)=>{
const catButtons = props.cats.map((el)=><div className="row mb-2"><Link href={"/categorie/" + el.slug}><a>{el.name}</a></Link></div>)

return (<div>
    <h2>CATEGORIE</h2>
<div className="container">

{catButtons}
</div>
</div>
)
}
