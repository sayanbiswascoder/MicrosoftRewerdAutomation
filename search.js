javascript:(async()=>{
    for(let i = 0; i< 50; i++) {
      await fetch(`https://www.bing.com/search?q=search-${i}`)
    }
})()