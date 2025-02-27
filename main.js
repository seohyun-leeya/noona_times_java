// const API_KEY=`bd04bad3a7ba4d34bb6e9f11332ae63e`
let newsList = []

const getLatestNews = async() => {
    let url =new URL(`https://noona-times-be-5ca9402f90d9.herokuapp.com/top-headlines?country=kr`);
    const response = await fetch (url)
    const data = await response.json ()
    newsList = data.articles
    render();
    console.log("rrrr",newsList)
}


const render=()=>{
    const newsHTML=newsList.map(
        (news) =>`<div class="row news">
                <div class="col-lg-4">
                    <img class="news-img-size" 
                        src=${news.urlToImage}/>
                </div>
                <div class="col-lg-8">
                    <h2>${news.title}</h2>
                    <p>${news.description}</p>
                    <div>${news.source.name} * ${news.publishedAt}</div>
                </div>
            </div>`
        )
        .join('')

    document.getElementById("news-board").innerHTML = newsHTML
}

getLatestNews ()

const openNav = () => {
    document.getElementById("mySidenav").style.width = "250px";
  };
  
  const closeNav = () => {
    document.getElementById("mySidenav").style.width = "0";
  };
  