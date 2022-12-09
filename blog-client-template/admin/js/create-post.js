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





// let serializeForm = function (form) {
// var obj = {};
// var formData = new FormData(form);
// // console.log(formData.getAll());

// for (var key of formData.keys()) {
//     let inputData = formData.getAll(key);

//     if (inputData.length > 1) {
//         obj[key] = inputData;
//     } else {
//         obj[key] = inputData[0];    
//     }
// }

// // console.log(obj);
// return obj;
// };