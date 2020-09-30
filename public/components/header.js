
import {Container} from "react-bootstrap";
import {Jumbotron} from "react-bootstrap";
import {Button} from "react-bootstrap";
import {ButtonGroup} from "react-bootstrap";
import Link from "next/link";

export default function Header(props) {
const catButtons = props.cats.map((el)=>{
return(
<button><a href={"/" + props.cats.slug}>{props.cats.name}</a></button>
)}
)
  return (<>
  <Jumbotron fluid style={{backgroundColor: "silver", paddingBottom: "5px"}}>
  <Container ><div style={{marginLeft: "3%",}}>
    <h1>ANTROPIA</h1>
    <p>
     <Link href="/"><a>Home Page</a></Link> 
    </p>
    </div>
  </Container>
</Jumbotron>
{catButtons}
{/*
<ButtonGroup aria-label="Basic example">
<Button variant="secondary"><Link href="/cultura-medica"><a>Cultura Medica</a></Link></Button>
<Button variant="secondary"><Link href="/scienze-e-tecnologie"><a>Scienze e tecnologie</a></Link></Button>
<Button variant="secondary"><Link href="/psicologia"><a>Psicologia</a></Link></Button>
<Button variant="secondary"><Link href="/societa-e-storia"><a>Società e storia</a></Link></Button>
<Button variant="secondary"><Link href="/pop"><a>Pop</a></Link></Button>
<Button variant="secondary"><Link href="/ambiente"><a>Ambiente</a></Link></Button>


</ButtonGroup> 
*/}
</>
)

}






  