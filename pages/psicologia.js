import Header from "../public/components/header.js"
import Postlist from "../public/components/postlist.js"
import {useState} from "react"


export default function Psicologia({posts}) {
  const [Page, setPage] = useState(0)
const next = () => {
  if (Page < posts.length / 10){
  setPage(Page+1)
}
}
const prev = () => {
  if (Page > 0){
  setPage(Page-1)
}
}


let viewed = posts.filter((el)=>el.categories[0] == 16)
viewed = viewed.slice(0 + Page * 10 ,10 + Page * 10);
  return (<>
  <Header/>
  <Postlist posts={viewed} prev={prev} next={next}/></>
)

}




export async function getStaticProps(){
 
  const getData = async (type) => {
   let fetched = 0;
   let tot = 0;
   let allElements = [];
   do{
   const response = await fetch ("https://antropia.it/wp-json/wp/v2/"+ type + "/?per_page=100&offset=" + fetched.toString())
   tot = response.headers.get("x-wp-total")
   let data= await response.json()
   allElements = allElements.concat(data)
   fetched += 100;
   }while(fetched < tot)
   return allElements;
   }

let categories = await getData("categories")
let posts = await  getData("posts")
let pages = await  getData("pages")
let users = await getData("users")
let tags = await getData("tags")

  return {props: {
    categories: categories,
   posts: posts,
   pages: pages,
   users: users, 
  }}
}



