import Header from "../public/components/header.js"
import ReactHtmlParser from "react-html-parser"
import {Categories} from "../public/components/categories.js"
import {Pages} from "../public/components/pages.js"

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
     
        let posts = await  getData("posts")


return {

paths: posts.map((el)=>{
    return {
        params: {
            slug: el.slug,
        },
}}),
fallback: false,
}
}

export default function Post({post, categories, pages}){
    
    return( <>
    <Header current={post.title.rendered}/>
  <div className="container">
    <div className="row">
    <div className="col-2">
  <Categories cats={categories}/>
  <Pages pages={pages} />
  </div>
  <div className="col-9 offset-1">
  <div style={{margin: "1em",}}> <h1>{ReactHtmlParser(post.title.rendered)}</h1>
       <p>{ReactHtmlParser(post.content.rendered)}</p>
       </div>
  </div>
  </div>
  </div>
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
  let pages = await  getData("pages")
  //let users = await getData("users")
  //let tags = await getData("tags")
  
    return {props: {
      categories: categories,
     posts: posts,
     post: posts.find((el)=>el.slug == params.slug),
     pages: pages,
     //users: users, 
    }}
  }
