import Header from "../public/components/header.js"
import ReactHtmlParser from "react-html-parser"

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

export default function Post({post, categories}){
    
    return( <>
    <Header cats={categories} current={post.title.rendered}/>
       <h1>{ReactHtmlParser(post.title.rendered)}</h1>
       <p>{ReactHtmlParser(post.content.rendered)}</p>
       <button><a href="/">HOMEPAGE</a></button>
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
     post: posts.find((el)=>el.slug == params.slug),
     //pages: pages,
     //users: users, 
    }}
  }