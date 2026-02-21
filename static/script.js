// function openModal() {
//     document.getElementById("modal").style.display="block";
// }

// function submitName() {
//     fetch("/set_username", {
//         method:"POST",
//         headers: {"Content-Type":"application/json"},
//         body: JSON.stringify({
//             username:document.getElementById("username").value
//         })
//     }).then(()=>window.location="/dashboard");
// }

// function generate() {
//     fetch("/generate", {
//         method:"POST",
//         headers: {"Content-Type":"application/json"},
//         body: JSON.stringify({
//             story:document.getElementById("story").value
//         })
//     }).then(()=>alert("Generated!"));
// }

// previoius version of the code with loading state and error handling
// function openModal(){
// document.getElementById("modal").style.display="block";
// }

// function submitName(){
// fetch("/set_username",{
// method:"POST",
// headers:{"Content-Type":"application/json"},
// body:JSON.stringify({
// username:document.getElementById("username").value
// })
// }).then(()=>window.location="/dashboard");
// }

// function generate(){
// const story=document.getElementById("story").value;
// const btn=document.getElementById("generateBtn");
// const loading=document.getElementById("loading");

// btn.disabled=true;
// btn.innerText="Generating...";
// loading.style.display="block";

// fetch("/generate",{
// method:"POST",
// headers:{"Content-Type":"application/json"},
// body:JSON.stringify({story:story})
// })
// .then(res=>res.json())
// .then(()=>window.location="/screenplay")
// .catch(()=>alert("Error generating content"));
// }

function openModal(){
    document.getElementById("modal").style.display="block";
}

function submitName(){
    fetch("/set_username",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({
            username:document.getElementById("username").value
        })
    }).then(()=>window.location="/dashboard");
}

function generate(){
    const story=document.getElementById("story").value.trim();
    const btn=document.getElementById("generateBtn");
    const loading=document.getElementById("loading");
    const error=document.getElementById("errorMsg");

    if(!story){
        error.innerText="⚠ Please enter a story idea first.";
        return;
    }

    btn.disabled=true;
    btn.innerText="Generating...";
    loading.style.display="block";
    error.innerText="";

    fetch("/generate",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({story:story})
    })
    .then(res=>res.json())
    .then(()=>{
        loading.style.display="none";
        btn.innerText="Generated ✓";
        btn.disabled=false;
        error.innerText="Content generated! Use sidebar to view.";
    })
    .catch(()=>{
        loading.style.display="none";
        btn.innerText="Generate AI Content";
        btn.disabled=false;
        error.innerText="❌ Generation failed.";
    });
}