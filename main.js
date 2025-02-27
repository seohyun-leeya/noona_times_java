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

const openSearchBox = () => {
    let inputArea = document.getElementById("input-area");
    if (inputArea.style.display === "inline") {
      inputArea.style.display = "none";
    } else {
      inputArea.style.display = "inline";
    }
  };
  

  const render = () => {
    let newsHTML = newsList
      .map((news) => {
        const newsTitle = news.title ? news.title : "제목 없음";
        const urlImg = news.urlToImage
          ? news.urlToImage
          : "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/300px-No_image_available.svg.png";
        const newsSource = news.source.name ? news.source.name : "출처없음";
  
        const momentTime = news.publishedAt
          ? moment(news.publishedAt).fromNow()
          : "날짜없음";
  
        return `<div class="row news-list">
                  <div class="col-lg-4">
                    <img class="news-img-size" src="${urlImg}"
                    onerror="this.onerror=null; this.src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/300px-No_image_available.svg.png';"/>
  
                  </div>
                  <div class="col-lg-8">
                    <h2>${newsTitle}</h2>
                    <p>${textLimit(news.description, 200)}
                    </p>
                    <div>
                      ${newsSource} * ${momentTime}
                    </div>
                  </div>
                </div>`;
      })
      .join("");
      document.getElementById("news-board").innerHTML = newsHTML;
    };
    
// const render=()=>{
//     const newsHTML=newsList.map(
//         (news) =>`<div class="row news">
//                 <div class="col-lg-4">
//                     <img class="news-img-size" 
//                         src=${news.urlToImage}/>
//                 </div>
//                 <div class="col-lg-8">
//                     <h2>${news.title}</h2>
//                     <p>${news.description}</p>
//                     <div>${news.source.name} * ${news.publishedAt}</div>
//                 </div>
//             </div>`
//         )
//         .join('')

//     document.getElementById("news-board").innerHTML = newsHTML
// }

getLatestNews ()

const openNav = () => {
    document.getElementById("mySidenav").style.width = "250px";
  };
  
  const closeNav = () => {
    document.getElementById("mySidenav").style.width = "0";
  };
  