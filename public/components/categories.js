
const Categories = (props)=>{
const catButtons = props.cats.map((el)=><div className="row"><Link href={"/categorie/" + el.slug} style={{margin: "1em", color: "red",}}><a>{el.name}</a></Link></div>)

return (
<div className="container">
{catButtons}
</div>
)
}