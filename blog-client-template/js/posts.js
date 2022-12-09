async function getPosts(){
    try{
        const respons = await fetch("https://blog-api-assignment.up.railway.app/posts/")

        const data = await respons.json()
        console.log(data)
        
        let blogPosts=""
        for (let posts of data){
            blogPosts +=`
            <h3>${posts.title}</h3>
            <i>${posts.author}</i>
            <i>${posts.date}</i>
            <div>
                <p class="text">${posts.content.slice(0,200)}<a href="post.html?id=${posts._id}" class="readMoreLink" data-id=${posts._id}>Read more...</a></p>
                <p class="tags">Tags: ${posts.tags.join(', ')}</p>
             </div>   
            `
            document.getElementById("content").innerHTML=blogPosts
        }
    }
    catch(error){
        console.log(error)
    }
        const links = document.getElementsByClassName('readMoreLink')
        for (let link of links){
            link.addEventListener('click', async function(e){
                e.preventDefault()
                
            })
    }
}
getPosts()