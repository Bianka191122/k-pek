import { getData } from "./utils.js";
import { apiKey } from "./apiKey.js";

let page = 1
const url = `https://api.unsplash.com/search/photos/?client_id=${apiKey}&page=`

let qString
document.querySelector('.katt').addEventListener('click', keres)
export function keres(){
    document.querySelector('.search').innerHTML = ""
    document.querySelector('.image-gallery').innerHTML = ""
    //console.log(document.querySelector('.search').value)
    qString = "&query=" + document.querySelector('.search').value
    getData(url + page + qString, renderImages)
    document.querySelector('.search').value = ""
} 

//let qString = '&query=dogs'

function renderImages(data){
    document.querySelector('.loading').style.display='none'
    //console.log(data);
    data.results.forEach(obj => {
        const imageElement = document.createElement('img')
        imageElement.src = obj.urls.small
        imageElement.alt = obj.alt_description
        document.querySelector('.image-gallery').appendChild(imageElement) 
    })
    //console.log(page);
    page++
}

window.addEventListener('scroll', handelScroll)

function handelScroll(){
    if(window.innerHeight + window.scrollY >= document.body.offsetHeight-200){
        document.querySelector('.loading').style.display='block'
        getData(url + page + qString, renderImages)
        console.log(url + page + qString);
    }
}

/* .conatiner{
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            flex-direction: column;
        }
              .katt:hover {
            background-color: darkgray;
        }

        .katt {
            margin: 20px;
            padding: 5px;
            border-radius: 35%;
            box-shadow: 0 0 5px black;
            background-color: gray;
        }
        */