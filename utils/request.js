const API_KEY = '357972a9a297a46886a23dca5d5f4483'

export default{
    fetchTrending:{
        title: "Trending",
        url: `/trending/all/week?api_key=357972a9a297a46886a23dca5d5f4483&language=en-US`
    },
    fetchTopRated: {
        title: "Top Rated",
        url: `/movie/top_rated?api_key=357972a9a297a46886a23dca5d5f4483&language=en-US`,
    },
}