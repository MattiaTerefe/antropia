import Header from "../../public/components/header.js"
import ReactHtmlParser from "react-html-parser"
import Postlist from "../../public/components/postlist.js"
import {useState} from "react"

export async function getStaticPaths() {

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
     
        let categories = await  getData("categories")


return {

paths: categories.map((el)=>{
    return {
        params: {
            cat: el.slug,
        },
}}),
fallback: false,
}
}

export default function Cat({posts, category, categories}){

  const [Page, setPage] = useState(0)
      const next = () => {
        if (Page <  posts.length/10){
        setPage(Page+1)
      }
      }
      const prev = () => {
        if (Page > 0){
        setPage(Page-1)
      }
      }
      let filtered = posts.filter((el)=>el.categories[0] == category.id)
      let viewed = filtered.slice(0 + 10 * Page, 10 + 10* Page)
    
    return( <>
    <Header cats={categories} current={category.name}/>
  <Postlist posts={viewed} next={next} prev={prev} />
       </>
    )
}

export async function getStaticProps({params}){
 
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
  
     let posts = await  getData("posts")
  let categories = await getData("categories")
  //let pages = await  getData("pages")
  //let users = await getData("users")
  //let tags = await getData("tags")
  
    return {props: {
    categories: categories,
     posts: posts,
     category: categories.find((el)=>el.slug == params.cat),
     //pages: pages,
     //users: users, 
    }}
  }