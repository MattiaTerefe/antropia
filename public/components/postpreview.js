import ReactHtmlParser from "react-html-parser"

export default function Postpreview (props)  {
return (
    <>
<h1>{ReactHtmlParser(props.title)}</h1>

<p>{ReactHtmlParser(props.estratto)}</p>

<a href={props.link}>LEGGI L'ARTICOLO</a>

</>
)

}