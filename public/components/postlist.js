import Postpreview from "./postpreview.js"
import {Button} from "react-bootstrap"

export default function Postlist(props){

let viewed = props.posts.map((el)=><Postpreview title={el.title.rendered} link={el.link} estratto={el.excerpt.rendered}/>)

    return (
      <>  <div>{viewed}</div>
    <Button onClick={()=>{props.next()}}>Prossima pagina</Button><Button onClick={()=>{props.prev()}}>Pagina precedente</Button></>
    )
}