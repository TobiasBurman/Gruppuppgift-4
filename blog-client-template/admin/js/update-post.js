window.onload = function(){
    
    let urlParams = new URLSearchParams(window.location.search)
    let postId = urlParams.get("id");
    
    
    async function getPost(){
        try{
            const response = await fetch("https://blog-api-assignment.up.railway.app/posts/"+postId,{
                method: 'GET'
            })
            const data = await response.json()
            let title = document.getElementById("title")
            title.value=`${data.title}`
            let author = document.getElementById("author")
            author.value=`${data.author}`
            let content = document.getElementById("content-textarea")
            content.value=`${data.content}`
            let tags = document.getElementById("tags")
            tags.value =`${data.tags.join(', ')}`
            console.log(data)
      
         
        } catch(error){
            console.log(error)
        } 
    }
    getPost()
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    

    let form = document.getElementById("update-form");
    form.addEventListener("submit", async function(e){
        e.preventDefault()
        let stringJson = {
            "content": document.getElementById("content-textarea").value
        }
        try{
             await fetch("https://blog-api-assignment.up.railway.app/posts/"+punId,{
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify(stringJson)
            })

            window.location.replace('index.html')

        } catch(error){
            console.log(error)
        }
    })
}