import Postpreview from "./postpreview.js"
import {Button} from "react-bootstrap"

export default function Postlist(props){

let viewed = props.posts.map((el)=><Postpreview title={el.title.rendered} link={el.slug} estratto={el.excerpt.rendered}/>)

    return (
      <div style={{margin: "3em",}}>  <div>{viewed}</div><br/>
    <Button onClick={()=>{props.next()}}>Prossima pagina</Button><Button onClick={()=>{props.prev()}}>Pagina precedente</Button></div>
    )
}