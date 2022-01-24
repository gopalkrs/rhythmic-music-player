import {v4 as uuidv4} from "uuid";

function musicData(){
    return (
        [
            {
                name : "Rewind",
                cover : "https://chillhop.com/wp-content/uploads/2021/12/b3079408b79f0ceed3189d6eb804b448fa0c4068-1024x1024.jpg",
                artist : "SwuM, afternoon bike ride",
                audio : "https://mp3.chillhop.com/serve.php/?mp3=30134",
                id : uuidv4(),
                active : true
            },
            {
                name : "Rubaru",
                cover : "https://pagalsong.in/uploads//thumbnails/300x300/id3Picture_1043891242.jpg",
                artist : "Kamal Khan",
                audio : "https://pagalsong.in/uploads/systemuploads/mp3/Ginny Weds Sunny/Rubaru - Ginny Weds Sunny 128 Kbps.mp3",
                id : uuidv4(),
                active : false
            },
            {
                name : "Peer Manawan Challiyaan",
                cover : "https://c.saavncdn.com/594/Peer-Manaawan-Challiyaan-Coke-Studio-MTV-Season-4-Episode-5-Punjabi-2015-500x500.jpg",
                artist : "Sukhwinder Singh, Salim-Suleiman",
                audio : "https://pwdown.com/9899/Peer Manaawan Challiyaan - Sukhwinder Singh (Coke Studio).mp3",
                id : uuidv4(),
                active : false
            },
            {
                name : "Waiting",
                cover : "https://chillhop.com/wp-content/uploads/2021/11/4c9682ee612a3b8ef51de286c49b5489408e9257-1024x1024.jpg",
                artist : "Parkbench Epiphany",
                audio : "https://mp3.chillhop.com/serve.php/?mp3=27504",
                id : uuidv4(),
                active : false
            },
            {
                name : "Conflicted",
                cover : "https://chillhop.com/wp-content/uploads/2021/08/b0bb2309d0c8fe0a32907ecddab689501b7de5cf-1024x1024.jpg",
                artist : "Henz",
                audio : "https://mp3.chillhop.com/serve.php/?mp3=24643",
                id : uuidv4(),
                active : false
            },
            {
                name : "Skates",
                cover : "https://chillhop.com/wp-content/uploads/2021/03/74d62bc9370a68e440c1b98eaf650344f0a7faea-1024x1024.jpg",
                artist : "SwuM",
                audio : "https://mp3.chillhop.com/serve.php/?mp3=15226",
                id : uuidv4(),
                active : false
            },
            {
                name : "Desire",
                cover : "https://i1.sndcdn.com/artworks-eG3GhQd6JPPU7ezs-2OhtcQ-t500x500.jpg",
                artist : "AP Dhillon, Gurinder Gill",
                audio : "https://cdnsongs.com/music/data/Punjabi/202111/Hidden_Gems_EP/128/Desires_1.mp3",
                id : uuidv4(),
                active : false
            },
            {
                name : "Polaroid",
                cover : "https://chillhop.com/wp-content/uploads/2021/09/501327d9a200bed56717f5f4a0fa7e4517c491c9-1024x1024.jpg",
                artist : "Makzo, Mama Aiuto",
                audio : "https://mp3.chillhop.com/serve.php/?mp3=24767",
                id : uuidv4(),
                active : false
            },
            {
                name : "Chan Kithan",
                cover : "https://images.genius.com/e8f1c5c05f1d3076a504dd425d87e2c5.348x348x1.png",
                artist : "Ali Sethi",
                audio : "http://www.themusicbeats.net/wp-content/uploads/2017/06/Chan-Kithan-By-Ali-Sethithemusicbeats.mp3",
                id : uuidv4(),
                active : false

            },
            {
                name : "Bigadne De",
                cover : "https://a10.gaanacdn.com/images/albums/28/4977328/crop_480x480_1640274059_4977328.jpg",
                artist : "Benny Dayal, Pritam",
                audio : "https://pagalsong.in/uploads/systemuploads/mp3/83/Bigadne De - 83 128 Kbps.mp3",
                id : uuidv4(),
                active : false
            },
            {
                name : "Chale Chalo",
                cover : "https://pagalfree.com/images/128Chale Chalo - Lagaan 128 Kbps.jpg",
                artist : "A.R Rahman, Srinivas",
                audio : "https://pagalfree.com/musics/128-Chale Chalo - Lagaan 128 Kbps.mp3",
                id : uuidv4(),
                active : false
            },
            {
                name : "Beh Chala",
                cover : "https://pagalfree.com/images/128Beh Chala - Uri - The Surgical Strike 128 Kbps.jpg",
                artist : "Yasser Desai, Shashwat Sachdev",
                audio : "https://pagalfree.com/musics/128-Beh Chala - Uri - The Surgical Strike 128 Kbps.mp3",
                id : uuidv4(),
                active : false
            }
        ]
    );
}

export default musicData;