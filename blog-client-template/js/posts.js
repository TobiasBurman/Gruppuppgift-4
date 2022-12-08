async function getPosts(){
    try{
        const respons = await fetch("https://blog-api-assignment.up.railway.app/posts/")

        const data = await respons.json()
        
        
        let blogPosts=""
        for (let posts of data){
            blogPosts +=`
            <h3>${posts.title}</h3>
            <i>${posts.author}</i>
            <i>${posts.date}</i>
            <p>${posts.content}</p>
            <p>${posts.tags}</p>
            `
            document.getElementById("content").innerHTML=blogPosts
        }

    } catch(error){
        console.log(error)
    }
}
getPosts()