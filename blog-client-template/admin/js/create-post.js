document.getElementById("create-post").addEventListener("submit", async function(e){
    e.preventDefault();

    let object = {
        "content": document.getElementById("textarea").value,
        "title": document.getElementById("input-title").value,
        "author": document.getElementById("input-author").value,
        "tags": document.getElementById("input-tags").value
        
    }
   
    
    console.log(object)
    try {
    await fetch('https://blog-api-assignment.up.railway.app/posts/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(object) 
    })

    

    location.replace('index.html')
} catch(error) {
    console.log(error)
}

})

new MultiSelectTag("input-tags")



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














