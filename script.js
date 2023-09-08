const music = new Audio('audio/1.mp3');


const songs = [{
    id: '1',
    songName: ` On My Way <br>
<div class="subtitle">Alan Walker</div>`,
    poster: "img/1.jpg"
},
{
    id: '2',
    songName: ` Alan Walker-Fade <br>
<div class="subtitle">Alan Walker</div>`,
    poster: "img/2.jpg"
},
{
    id: "3",
    songName: `Cartoon - On & On <br><div class="subtitle"> Daniel Levi</div>`,
    poster: "img/3.jpg",
},
{
    id: "4",
    songName: `Warriyo - Mortals <br><div class="subtitle">Mortals</div>`,
    poster: "img/4.jpg",
},
{
    id: "5",
    songName: `Ertugrul Gazi <br><div class="subtitle">Ertugrul</div>`,
    poster: "img/5.jpg",
},
{
    id: "6",
    songName: `Electronic Music <br><div class="subtitle">Electro</div>`,
    poster: "img/6.jpg",
},
{
    id: "7",
    songName: `Agar Tum Sath Ho <br><div class="subtitle">Tamashaa</div>`,
    poster: "img/7.jpg",
},
{
    id: "8",
    songName: `Suna Hai <br><div class="subtitle">Neha Kakker</div>`,
    poster: "img/8.jpg",
},
{
    id: "9",
    songName: `Dilber <br><div class="subtitle">Satyameva Jayate</div>`,
    poster: "img/9.jpg",
},
{
    id: "10",
    songName: `Duniya <br><div class="subtitle">Luka Chuppi</div>`,
    poster: "img/10.jpg",
},
{
    id: "11",
    songName: `Lahore<br><div class="subtitle">Street Dancer 3D</div>`,
    poster: "img/11.jpg",
},
{
    id: "12",
    songName: `Putt Jatt Da <br><div class="subtitle">Putt Jatt Da</div>`,
    poster: "img/12.jpg",
},
{
    id: "13",
    songName: `Baarishein <br><div class="subtitle">Atif Aslam</div>`,
    poster: "img/13.jpg",
},
{
    id: "14",
    songName: `Vaaste <br><div class="subtitle">Dhvani Bhanushali</div>`,
    poster: "img/14.jpg",
},
{
    id: "15",
    songName: `Lut Gaye <br><div class="subtitle">Jubin Nautiyal</div>`,
    poster: "img/15.jpg",
},
{
    id: "16",
    songName: `Tu Meri Jindgi Hai Tu <br><div class="subtitle">Jubin Nautiyal</div>`,
    poster: "img/16.jpg",
},
{
    id: "17",
    songName: ` Batao Yaad Hai Tumko Wo Jab Dil Ko Churaya Tha <br><div class="subtitle"> Rahat Fateh Ali Khan</div>`,
    poster: "img/17.jpg",
},
{
    id: "18",
    songName: `Mere Dhol Judaiyan<br><div class="subtitle">Ali Sethi Seha Gill</div>`,
    poster: "img/18.jpg",
},
{
    id: "19",
    songName: `Eh Munde Pagal Ne Saare <br><div class="subtitle">Ap Dhillon, Gurinder Gill, Shinda Kahlon</div>`,
    poster: "img/19.jpg",
},
{
    id: "20",
    songName: `Dunny 82K <br><div class="subtitle">Ap Dhillon, Gurinder Gill, Shinda Kahlon</div>`,
    poster: "img/20.jpg",
},
{
    id: "21",
    songName: `Dunny 82K <br><div class="subtitle">Ap Dhillon, Gurinder Gill, Shinda Kahlon</div>`,
    poster: "img/20.jpg",
},
{
    id: "22",
    songName: `Dunny 82K <br><div class="subtitle">Ap Dhillon, Gurinder Gill, Shinda Kahlon</div>`,
    poster: "img/20.jpg",
},
{
    id: "23",
    songName: `Dunny 82K <br><div class="subtitle">Ap Dhillon, Gurinder Gill, Shinda Kahlon</div>`,
    poster: "img/20.jpg",
},
{
    id: "24",
    songName: "Arijit Singh",
    poster: "img/arjit.jpg",
},
{
    id: "25",
    songName: "Alan Walker",
    poster: "img/alan.jpg",
},
{
    id: "26",
    songName: "Diljit Dosanjh",
    poster: "img/Diljit_Dosanjh.jpg",
},
{
    id: "27",
    songName: "Guru Randhawa",
    poster: "img/guru.jpg",
},
{
    id: "28",
    songName: "Neha Kakkar",
    poster: "img/neha.jpg",
},
{
    id: "29",
    songName: "Jubin Nautiyal",
    poster: "img/jubin Nautiyal.jpg"
},
{
    id: "30",
    songName: "Honey Singh",
    poster: "img/honey.jpg"
},
{
    id: "31",
    songName: "Justin Beiber",
    poster: "img/justin.jpg"
}
];

Array.from(document.getElementsByClassName('songItem')).forEach((e, i) => {   
    e.getElementsByTagName('img')[0].src = songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML= songs[i].songName;
});

// music.play();

let masterPlay = document.getElementById('master_Play');

masterPlay.addEventListener('click', () => {
    if (music.paused || music.currentTime <= 0) {
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
    } else {
        music.pause();
        masterPlay.classList.add('bi-play-fill');
        masterPlay.classList.remove('bi-pause-fill');
    }
});

let index = 0;

let poster_master_play = document.getElementById('poster_masterPlay');
let title = document.getElementById('title');
let downloadBtn = document.getElementById('downloadBtn');


Array.from(document.getElementsByClassName('playListPlay')).forEach((e) => {
    e.addEventListener('click', (el) => {
        index = el.target.id;
        music.src = `audio/${index}.mp3`;
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        downloadBtn.href = `audio/${index}.mp3`;
        let songTitles = songs.filter((els) => {
            return els.id == index;
        });

        songTitles.forEach(elss => {
            let {songName, poster} = elss;
            title.innerHTML = songName;
            poster_master_play.src = poster;
            downloadBtn.setAttribute('download', songName);
        })
    })
})

let currentStart = document.getElementById('currentStart');
let currentEnd = document.getElementById('currentEnd');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];

music.addEventListener('timeupdate' , () => {
    let music_curr = music.currentTime;
    let music_dur = music.duration;

    let min1 = Math.floor(music_dur / 60);
    let sec1 = Math.floor(music_dur % 60);

    if (min1 < 10){
        min1 = `0${min1}`;
    }
    if (sec1 < 10){
        sec1 = `0${sec1}`;
    }

    currentEnd.innerText = `${min1}:${sec1}`;

    let min2 = Math.floor(music_curr / 60);
    let sec2 = Math.floor(music_curr % 60);

    if (min2 < 10){
        min2 = `0${min2}`;
    }
    if (sec2 < 10){
        sec2 = `0${sec2}`;
    }

    currentStart.innerText = `${min2}:${sec2}`;

    let progressBar = parseInt((music_curr / music_dur) * 100);
    seek.value = progressBar;
    let seekbar = seek.value;
    bar2.style.width = `${seekbar}%`;
    dot.style.left = `${seekbar}%`;
});

seek.addEventListener('change', () => {
    music.currentTime = seek.value * music.duration / 100;
});

let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('seek2');

vol.addEventListener('change', () => {
    if (vol.value == 0) {
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-mute');
    }
    if (vol.value > 0) {
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.add('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-mute');
    }
    if (vol.value > 50) {
        vol_icon.classList.add('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-mute');
    }
    let vol_a = vol.value;
    music.volume = vol_a / 100;
});

let back = document.getElementById('back');
let next = document.getElementById('next');

back.addEventListener('click', () => {
    index -= 1;
    if (index < 1) {
        index = 23;
    }
    music.src = `audio/${index}.mp3`;
    music.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');
        
    let songTitles = songs.filter((els) => {
        return els.id == index;
    });

    songTitles.forEach(elss => {
        let {songName, poster} = elss;
        title.innerHTML = songName;
        poster_master_play.src = poster;
    })
})

next.addEventListener('click', ()=> {
    index++;
    if (index > 23){
        index = 1;
    }

    music.src = `audio/${index}.mp3`;
    music.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');
        
    let songTitles = songs.filter((els) => {
        return els.id == index;
    });

    songTitles.forEach(elss => {
        let {songName, poster} = elss;
        title.innerHTML = songName;
        poster_master_play.src = poster;
    })
})

let shuffle = document.getElementsByClassName('shuffleBtn');

music.addEventListener('ended', ()=>{
    if (index == 23) {
        index = 1;
    }
    else{
        index++;
    }
    music.src = `audio/${index}.mp3`;
    music.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');
    downloadBtn.href = `audio/${index}.mp3`;
    let songTitles = songs.filter((els) => {
        return els.id == index;
    });
    
    songTitles.forEach(elss => {
        let {songName, poster} = elss;
        title.innerHTML = songName;
        poster_master_play.src = poster;
        downloadBtn.setAttribute('download', songName);
    })
})