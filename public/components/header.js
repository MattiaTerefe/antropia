
import {Container} from "react-bootstrap";
import {Jumbotron} from "react-bootstrap";
import {Button} from "react-bootstrap";
import {ButtonGroup} from "react-bootstrap";
import Link from "next/link";

export default function Header(props) {
const catButtons = props.cats.map((el)=><button><a href={"/categorie/" + el.slug}>{el.name}</a></button>)
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

</>
)

}






  