import Postpreview from "./postpreview.js"


export default function Postlist(props){

let viewed = props.posts.map((el)=><Postpreview title={el.title.rendered} link={el.slug} estratto={el.excerpt.rendered}/>)

    return (
      
     <div style={{margin: "3em",}}>  
       <button className="btn btn-primary" onClick={()=>{props.next()}}>Prossima pagina</button> <button className="btn btn-primary" onClick={()=>{props.prev()}}>Pagina precedente</button><br/><br/>
     <div>{viewed}</div></div>
   
    )
}