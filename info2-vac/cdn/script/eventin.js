document.addEventListener('DOMContentLoaded', function () {
    // const rssUrl = 'https://www.giornaletrentino.it/feed-rss/cronaca-valsugana-e-primiero-1.397';
    const rssFeedContainer = document.getElementById('rss-feed');
    const maxItems = 5; 
    let currentIndex = 0;

    fetch(`https://api.rss2json.com/v1/api.json?rss_url=${rssUrl}`)
        .then(response => response.json())
        .then(data => {
            const items = data.items.slice(0, maxItems);
            let html = '';
            items.forEach(item => {
                html += `
                    <li class="news-item" style="display:none;">
                        <a href="${item.link}" target="_blank" style="color:black;">${item.title}</a>
                        <p style="font-size:10pt; margin-top:0px;"><i>Notizia del ${item.pubDate}</i></p>
                        <p style="width:50%; text-align:center; margin-right:auto; margin-left:auto;">${item.description}</p>
                    </li>
                `;
            });
            rssFeedContainer.innerHTML = html;

            const itemsElements = document.querySelectorAll('.news-item');
            itemsElements[0].style.display = 'block'; 

            setInterval(() => {
                itemsElements[currentIndex].style.display = 'none'; 
                currentIndex = (currentIndex + 1) % itemsElements.length; 
                itemsElements[currentIndex].style.display = 'block';
            }, 5000);
        })
});
