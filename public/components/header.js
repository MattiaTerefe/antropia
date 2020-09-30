
import {Container} from "react-bootstrap";
import {Jumbotron} from "react-bootstrap";
import {Button} from "react-bootstrap";
import {ButtonGroup} from "react-bootstrap";
import Link from "next/link";

export default function Header(props) {
const catButtons = props.cats.map((el)=><a href={"/categorie/" + el.slug} style={{margin: "1em", color: "red",}}>{el.name}</a>)
  return (<>
  <Jumbotron fluid style={{backgroundColor: "silver", paddingBottom: "5px"}}>
  <Container ><div style={{marginLeft: "3%",}}>
  <h1>ANTROPIA : {props.current}</h1>
    <p>
     <Link href="/"><a style={{color: "blue",}}>Vai a Home Page</a></Link> 
    </p>
    </div>
  </Container>
</Jumbotron>
<br/>
<div style={{textAlign: "center",}}>{catButtons}</div>

</>
)

}






  