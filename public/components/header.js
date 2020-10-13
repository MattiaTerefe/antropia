
import Link from "next/link";

export default function Header(props) {
  return (<>
  <div className="jumbotron jumbotron-fluid bg-primary">
 <div style={{marginLeft: "3em",}}>
  <h1 className="display-4">ANTROPIA</h1><p className="lead">{props.current}</p><hr class="my-4" />
     <Link href="/"><a><button className="btn btn-dark">Home Page</button></a></Link> 
    </div>
</div>

</>
)

}






  