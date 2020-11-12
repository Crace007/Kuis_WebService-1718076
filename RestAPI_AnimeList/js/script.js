const baseUrl = "https://api.jikan.moe/v3/";
const pageId = "1";
const topTV = `${baseUrl}top/anime/${pageId}/tv`;
const topAiring = `${baseUrl}top/anime/${pageId}/airing`;
const topUpcoming = `${baseUrl}top/anime/${pageId}/upcoming`;
const topMovie = `${baseUrl}top/anime/${pageId}/movie`;

const ViewModal = document.querySelector('#modal1');
var instance = M.Modal.init(ViewModal);

const contents = document.querySelector("#content-list");
const title = document.querySelector(".card-title");

function getListTopTV() {
    title.innerHTML = "Top 1 - 50 Anime All Time";
    fetch(topTV)
        .then(response => response.json())
        .then(resJson =>{
            console.log(resJson.top);
            let animetv = "";
            resJson.top.forEach(tv => {
                animetv += `
                <table class="responsive-table-md">
                    <tr>
                        <td width="50px">
                            <img src="${tv.image_url}" width="120px">
                        </td>
                        <td>
                            <h5>${tv.title}</h5>
                            Rank: ${tv.rank} <br>
                            Score: ${tv.score} <br>
                            Episode: ${tv.episodes} <br>
                            Type: ${tv.type} <br>
                            <a class="waves-effect waves-light btn modal-trigger secondary-content" data-id="${tv.mal_id}" href="#modal1"><i data-id="${tv.mal_id}" class="medium material-icons">info</i></a>             
                        </td>
                    </tr>
                </table>
                `
            });
            contents.innerHTML = '<ul class="collection">' + animetv + '</ul>'
            const detail = document.querySelectorAll('.secondary-content');
            detail.forEach(btn => {
                btn.onclick = (event) => {
                    console.log(event.target.dataset.id);
                    getAnimeInfo(event.target.dataset.id);
                }
            })
        }).catch(error => {
            console.error(error);
        })
}

function getListTopAiring() {
    title.innerHTML = "Top 1 - 50 Anime Ongoing";
    fetch(topAiring)
        .then(response => response.json())
        .then(resJson =>{
            console.log(resJson.top);
            let animeAiring = "";
            resJson.top.forEach(airing => {
                animeAiring += `
                <table class="responsive-table-md">
                    <tr>
                        <td width="50px">
                            <img src="${airing.image_url}" width="120px">
                        </td>
                        <td>
                            <h5>${airing.title}</h5>
                            Rank: ${airing.rank} <br>
                            Score: ${airing.score} <br>
                            Episode: ${airing.episodes} <br>
                            Type: ${airing.type} <br>
                            <a class="waves-effect waves-light btn modal-trigger secondary-content" data-id="${airing.mal_id}" href="#modal1"><i data-id="${airing.mal_id}" class="medium material-icons">info</i></a>             
                        </td>
                    </tr>
                </table>
                `
            });
            contents.innerHTML = '<ul class="collection">' + animeAiring + '</ul>'
            const detail = document.querySelectorAll('.secondary-content');
            detail.forEach(btn => {
                btn.onclick = (event) => {
                    console.log(event.target.dataset.id);
                    getAnimeInfo(event.target.dataset.id);
                }
            })
        }).catch(error => {
            console.error(error);
        })
}


function getListTopUpcoming() {
    title.innerHTML = "Top 1 - 50 Anime Upcoming";
    fetch(topUpcoming)
        .then(response => response.json())
        .then(resJson =>{
            console.log(resJson.top);
            let animeUpcoming = "";
            resJson.top.forEach(upcoming => {
                animeUpcoming += `
                <table class="responsive-table-md">
                    <tr>
                        <td width="50px">
                            <img src="${upcoming.image_url}" width="120px">
                        </td>
                        <td>
                            <h5>${upcoming.title}</h5>
                            Rank: ${upcoming.rank} <br>
                            Release: ${upcoming.start_date}<br>
                            Type: ${upcoming.type} <br>
                            <a class="waves-effect waves-light btn modal-trigger secondary-content" data-id="${upcoming.mal_id}" href="#modal1"><i data-id="${upcoming.mal_id}" class="medium material-icons">info</i></a>             
                        </td>
                    </tr>
                </table>
                `
            });
            contents.innerHTML = '<ul class="collection">' + animeUpcoming + '</ul>'
            const detail = document.querySelectorAll('.secondary-content');
            detail.forEach(btn => {
                btn.onclick = (event) => {
                    console.log(event.target.dataset.id);
                    getAnimeInfo(event.target.dataset.id);
                }
            })
        }).catch(error => {
            console.error(error);
        })
}

function getListMovieg() {
    title.innerHTML = "Anime Movie";
    fetch(topMovie)
        .then(response => response.json())
        .then(resJson =>{
            console.log(resJson.top);
            let animeMovie = "";
            resJson.top.forEach(movie => {
                animeMovie += `
                <div class="col s12 m6 l4">
                    <div class="card medium">
                        <div class="card-image">
                            <img src="${movie.image_url}" width="100px"> 
                            
                            <span class="orange-text text-accent-3 card-title" ><h5 style="bold"> ${movie.title} </h5></span>
                            </div>
                            <div class="card-content">
                            <p>
                                Rank: ${movie.rank} <br>
                                Score: ${movie.score} <br>
                                Release: ${movie.start_date} <br>
                                <a class="waves-effect waves-light btn modal-trigger secondary-content" data-id="${movie.mal_id}" href="#modal1"><i data-id="${movie.mal_id}" class="medium material-icons">info</i></a> 
                            
                            </p>
                        </div>
                    </div>
                </div>
                `
            });
            contents.innerHTML = '<ul class="collection">' + animeMovie + '</ul>'
            const detail = document.querySelectorAll('.secondary-content');
            detail.forEach(btn => {
                btn.onclick = (event) => {
                    console.log(event.target.dataset.id);
                    getAnimeInfo(event.target.dataset.id);
                }
            })
        }).catch(error => {
            console.error(error);
        })
}

function getAnimeInfo(id){
    var genreTxt = "";
    var StudioTxt = "";
    let url = baseUrl + "anime/" + id;
    console.log(url);
        fetch(url)
            .then(response => response.json())
            .then(info =>{
                console.log(info);
                let genre = info.genres;
                    genre.forEach(item =>{
                        genreTxt += item.name + ", ";
                    })
                let studio = info.studios;
                    studio.forEach(item =>{
                        StudioTxt = item.name;
                    })
                    ViewModal.innerHTML=
                    `<div class="card-image"  align="center" >
                        <img class="responsive-img"  src="${info.image_url}"  ">
                    </div>
                    <div class="modal-content">
                        <h4 align="center">${info.title}</h4>
                            <table align="center" class="highlight">
                                <tr>
                                    <td>Trailer</td>
                                    <td><a href="${info.trailer_url}" target="_blank">Click Here</a></td>
                                </tr>
                                <tr>
                                    <td>Episode</td>
                                    <td>${info.episodes}</td>
                                </tr>
                                <tr>
                                    <td>Status</td>
                                    <td>${info.status}</td>
                                </tr>
                                <tr>
                                    <td>Rating</td>
                                    <td>${info.score}</td>
                                </tr>
                                <tr>
                                    <td>Genre</td>
                                    <td>${genreTxt}</td>
                                </tr>
                                <tr>
                                    <td>Duration</td>
                                    <td>${info.duration}</td>
                                </tr>
                                <tr>
                                    <td>Release</td>
                                    <td>${info.premiered}</td>
                                </tr>
                                <tr>
                                    <td>Source</td>
                                    <td>${info.source}</td>
                                </tr>
                                <tr>
                                    <td>Studio</td>
                                    <td>${StudioTxt}</td>
                                </tr>
                                <tr>
                                    <td>Sinopsis</td>
                                    <td>${info.synopsis}</td>
                                </tr>
                            </table>
                    </div>
                    <div class="modal-footer">
                    <a href="#" class="modal-close waves-effect waves-green btn-flat">Agree</a>
                    </div> `;
        })
}



function loadPage(page) {
    switch (page) {
        case "anime-tv":
            getListTopTV();
            break;
        case "anime-airing":
            getListTopAiring();
            break;
        case "anime-upcoming":
            getListTopUpcoming();
            break;
        case "anime-movie":
            getListMovieg();
            break;
    }
}

document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);

    document.querySelectorAll(".sidenav a, .topnav a").forEach(elm => {
        elm.addEventListener("click", evt => {
            let sideNav = document.querySelector(".sidenav");
            M.Sidenav.getInstance(sideNav).close();
            page = evt.target.getAttribute("href").substr(1);
            loadPage(page);
        })
    })
    var page = window.location.hash.substr(1);
    if (page === "" || page === "!") page = "teams";

    loadPage(page);
});