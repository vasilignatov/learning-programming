function getArticleGenerator(articles) {


    function getArticle() {
        if(articles.length > 0){
            const content = document.getElementById('content');
            const articleEl = document.createElement('article');
            articleEl.textContent = articles.shift();
            content.appendChild(articleEl);
        }

    }
    
    return getArticle;
}
