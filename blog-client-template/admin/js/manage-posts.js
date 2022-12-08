async function managePosts(){
    try{

        const response = await fetch("https://blog-api-assignment.up.railway.app/posts");
        const data = await response.json()

        
        
        for (let post of data){
            document.getElementById("table").innerHTML += `
            <table>
                <tr>
                    <td>${post.title}</td>
                    <td>${post.author}</td>
                    <td>${post.date}</td>
                    <td>${post.tags}</td>
                </tr

            </table>
            `
        // document.getElementById("content").innerHTML = table
        // console.log(data)
        }
    }
    catch(error){
        console.log(error)
    }
}
managePosts();