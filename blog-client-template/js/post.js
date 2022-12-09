window.onload = async function() {
   
    let urlParams = new URLSearchParams(window.location.search)
    let punId = urlParams.get("id");
    

        try{
            const response = await fetch("https://blog-api-assignment.up.railway.app/posts/"+punId,{
                method: 'GET',
            })
            const data = await response.json()
            console.log(data)
            
         document.getElementById("content").innerHTML=`
                <h2>${data.title}</h2>
                <i>${data.author}</i>
                <i>${data.date}</i>
                <p>${data.content}</p>
                <p>Tags: ${data.tags.join(', ')}</p>
            `
            
            
            
        } catch(error){
            console.log(error)
        }
    }