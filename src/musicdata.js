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
                name : "Everlight",
                cover : "https://chillhop.com/wp-content/uploads/2021/11/4c9682ee612a3b8ef51de286c49b5489408e9257-1024x1024.jpg",
                artist : "Parkbench Epiphany",
                audio : "https://mp3.chillhop.com/serve.php/?mp3=27501",
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
                name : "Viatecture",
                cover : "https://chillhop.com/wp-content/uploads/2021/06/23b2ff959731b56ea8545828b462311e8b1a2bcc-1024x1024.jpg",
                artist : "Leavv, Makzo",
                audio : "https://mp3.chillhop.com/serve.php/?mp3=20119",
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
                name : "Colors Fade",
                cover : "https://chillhop.com/wp-content/uploads/2020/09/686808356b2bbc6a368e372ea604150bc346c788-1024x1024.jpg",
                artist : "Sleepy Fish",
                audio : "https://mp3.chillhop.com/serve.php/?mp3=10023",
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