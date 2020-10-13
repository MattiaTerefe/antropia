import ReactHtmlParser from "react-html-parser";
import Link from "next/link";

export default function Postpreview (props)  {
return (
    <>
<h1>{ReactHtmlParser(props.title)}</h1>

<p>{ReactHtmlParser(props.estratto)}</p>

<Link href={ "/" + props.link}><a>
<button className="btn btn-dark" onClick={()=>console.log(props.slug)}>LEGGI L'ARTICOLO</button>
    </a></Link>
<hr/>
</>
)

}