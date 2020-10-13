import Header from "../public/components/header.js"
import Postlist from "../public/components/postlist.js"
import {useState} from "react"
import {Categories} from "../public/components/categories.js"
import {Pages} from "../public/components/pages.js"

export default function Home({posts, categories, pages}) {
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

let viewed = posts.slice(0 + 10 * Page, 10 + 10* Page)
  return (<>
  <Header current={"HOME"}/>
  <div className="container">
    <div className="row">
    <div className="col-2">
  <Categories cats={categories}/>
  <Pages pages={pages}/>
  </div>
  <div className="col-9 offset-1">
  <Postlist posts={viewed} prev={prev} next={next}/>
  </div>
  </div>
  </div>
  </>
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
//let users = await getData("users")
//let tags = await getData("tags")

  return {props: {
    categories: categories,
   posts: posts,
   pages: pages,
   //users: users, 
  }}
}




