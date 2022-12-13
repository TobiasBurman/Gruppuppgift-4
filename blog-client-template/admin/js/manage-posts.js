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
                    <td class="btnUpdate"><a id="update"href="update-post.html?id=${post._id}">Update</a></td>
                    <td class="btnDelete"><a id="delete"class="delete" data-id =${post._id} href="#">Delete</a></td>
                   
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

    const links = document.getElementsByClassName("delete")
    for (let link of links){
        link.addEventListener("click", function(e){
            
            deletePost(e)
        })
    }
}
managePosts();

async function deletePost(e){
    e.preventDefault();
    try{
        await fetch("https://blog-api-assignment.up.railway.app/posts/"+e.target.dataset.id,{
            method: "DELETE",
        })
        e.target.parentNode.parentNode.remove()

    
    }
    catch (error){
        console.log(error)
    }
}




















function snow (){
const snow = document.getElementById("snow")
var snowParticles = [];
var snowParticleCount = 100;
var snowParticleSize = 10;
var snowParticleSpeed = 1;
for (var i = 0; i < snowParticleCount; i++) {
  var snowParticle = document.createElement('div');
  snowParticle.style.position = 'absolute';
  snowParticle.style.width = snowParticleSize + 'px';
  snowParticle.style.height = snowParticleSize + 'px';
  snowParticle.style.borderRadius = '50%';
  snowParticle.style.backgroundColor = 'white';
  snowParticle.style.opacity = '0.5';
  snowParticle.style.zIndex = '-1';
  snowParticle.style.top = Math.random() * window.innerHeight + 'px';
  snowParticle.style.left = Math.random() * window.innerWidth + 'px';
  snowParticles.push(snowParticle);
  snow.appendChild(snowParticle);
}

function animateSnow() {
  for (var i = 0; i < snowParticleCount; i++) {
    var snowParticle = snowParticles[i];
    var top = parseInt(snowParticle.style.top);
    snowParticle.style.top = (top + snowParticleSpeed) + 'px';
    if (top > window.innerHeight) {
      snowParticle.style.top = '0px';
    }
  }
  requestAnimationFrame(animateSnow);
}
animateSnow();
}
snow();

