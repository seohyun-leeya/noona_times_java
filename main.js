const API_KEY=`bd04bad3a7ba4d34bb6e9f11332ae63e`
let news = []

const getLatestNews = async() => {
    const url = new URL (`https://noona-times-be-5ca9402f90d9.herokuapp.com/`
    )
    const response = await fetch (url)
    const data = await response.json ()
    news = data.articles
    console.log("rrrr",news)
}

getLatestNews ()