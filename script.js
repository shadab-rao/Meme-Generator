const memeButton = document.querySelector('.btn')
const memeImg = document.querySelector('.meme-generator img')
const memeAuthor = document.querySelector('.meme-author')
const memeTitle = document.querySelector('.meme-title')



const updateDetails = (url,title,author)=>{
    memeImg.setAttribute("src",url)
    memeTitle.innerHTML = title;
    memeAuthor.innerHTML = author;
}

const generatorMeme = ()=>{
    fetch("https://meme-api.com/gimme/wholesomememes" ).then((Response)=>Response.json()).then(data=>{
        updateDetails(data.url,data.title,data.author)
        console.log(Response)
    })
}

memeButton.addEventListener('click',generatorMeme)
generatorMeme();
