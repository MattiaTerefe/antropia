
import Link from "next/link";

export const Categories = (props)=>{
const catButtons = props.cats.map((el)=><div className="row"><Link href={"/categorie/" + el.slug} style={{margin: "1em", color: "red",}}><a>{el.name}</a></Link></div>)

return (<div>
    <h2>CATEGORIE</h2>
<div className="container">

{catButtons}
</div>
</div>
)
}
