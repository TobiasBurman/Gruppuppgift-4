async function getPosts(){
    try{
        const respons = await fetch("https://blog-api-assignment.up.railway.app/posts/")

        const data = await respons.json()
        console.log(data)
        
        let blogPosts=""
        for (let posts of data){
            blogPosts +=`
            <section class="box">
                <h1>${posts.title}</h1>
                <i>Author: ${posts.author}</i>
                <i>${posts.date.slice(0,16)}</i>
                <p class="text">${posts.content.slice(0,200)}...<a href="post.html?id=${posts._id}" data-id=${posts._id}>Read more</a></p>
                <p class="tags">Tags: ${posts.tags.join(', ')}</p>
             
            </section>   
            `
            document.getElementById("content").innerHTML=blogPosts
        }
    }
    catch(error){
        console.log(error)
    }
        
}

getPosts()