// ADVENTURE TIME API

const baseURL = `https://adventure-time-api.herokuapp.com/api/v1/`;

fetch(baseURL + 'characters')
        .then((response) => response.json())
        .then((json) => characterData(json))
        .catch((error) => console.log(error))

function characterData(character) {

        // const card = document.querySelector('.card');
        // const cardBody = document.querySelector('.card-body');
        // const moreInfoBtn = document.querySelector('.btn');

    //FINN
        let characterName0 = document.getElementById('characterName0').innerText = character[0].fullName;
        let info0 = document.getElementById('characterInfo0').innerHTML = '<span>Gender:</span> ' + character[0].sex + `<br><span>Species:</span> ` + character[0].species;
        console.log(character[0].sex);
        let image0 = document.getElementById('characterImage0').src = `https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/7/7e/Finn_with_bionic_arm-0.png/revision/latest?cb=20190807133126`;
        let modalTitle0 = document.getElementById('characterAltName0').innerText = character[0].displayName;
        let modalBody0 = document.getElementById('characterQuotes0').innerText = `<blockquote>` + character[0].quotes[0] + `</blockquote>s`;        

    //JAKE
        let characterName1 = document.getElementById('characterName1').innerText = character[1].fullName;
        let info1 = document.getElementById('characterInfo1').innerHTML = '<span>Gender:</span> ' + character[1].sex + `<br><span>Species:</span> ` + character[1].species;
        console.log(character[1].sex);
        let image1 = document.getElementById('characterImage1').src = `https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/3/3b/Jakesalad.png/revision/latest/scale-to-width-down/310?cb=20190807133015`;
        let modalTitle1 = document.getElementById('characterAltName1').innerText = character[1].displayName;
        let modalBody1 = document.getElementById('characterQuotes1').innerText = character[1].quotes[0];
    
    //BMO
        let characterName2 = document.getElementById('characterName2').innerText = character[2].fullName;
        let info2 = document.getElementById('characterInfo2').innerHTML = '<span>Gender:</span> ' + character[2].sex + `<br><span>Species:</span> ` + character[2].species;
        console.log(character[2].sex);
        let image2 = document.getElementById('characterImage2').src = `https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/8/81/BMO.png/revision/latest?cb=20190807133145`;
        let modalTitle2 = document.getElementById('characterAltName2').innerText = character[2].displayName;
        let modalBody2 = document.getElementById('characterQuotes2').innerText = character[2].quotes[0];
        
    //Princess Bubblegum
        let characterName3 = document.getElementById('characterName3').innerText = character[3].fullName;
        let info3 = document.getElementById('characterInfo3').innerHTML = '<span>Gender:</span> ' + character[3].sex + `<br><span>Species:</span> ` + character[3].species;
        console.log(character[3].sex);
        let image3 = document.getElementById('characterImage3').src = `https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/0/00/Princess_Bubblegum.png/revision/latest/scale-to-width-down/100?cb=20190807133134`;
        let modalTitle3 = document.getElementById('characterAltName3').innerText = character[3].displayName;
        let modalBody3 = document.getElementById('characterQuotes3').innerText = character[3].quotes[1];    
    
        //ICE KING
        let characterName4 = document.getElementById('characterName4').innerText = character[5].fullName;
        let info4 = document.getElementById('characterInfo4').innerHTML = '<span>Gender:</span> ' + character[5].sex + `<br><span>Species:</span> ` + character[5].species;
        console.log(character[5].sex);
        let image4 = document.getElementById('characterImage4').src = `https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/6/64/Original_Ice_King.png/revision/latest/scale-to-width-down/150?cb=20160405041324`;
        let modalTitle4 = document.getElementById('characterAltName4').innerText = character[5].displayName;
        let modalBody4 = document.getElementById('characterQuotes4').innerText = character[5].quotes[0];
        
    //LUMPY SPACE PRINCESS
    let characterName5 = document.getElementById('characterName5').innerText = character[6].fullName;
        let info5 = document.getElementById('characterInfo5').innerHTML = '<span>Gender:</span> ' + character[6].sex + `<br><span>Species:</span> ` + character[6].species;
        console.log(character[6].sex);
        let image5 = document.getElementById('characterImage5').src = `https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/9/9f/Lumpy_Space.png/revision/latest?cb=20110730224431`;
        let modalTitle5 = document.getElementById('characterAltName5').innerText = character[6].displayName;
        let modalBody5 = document.getElementById('characterQuotes5').innerText = character[6].quotes[1];
    
    //LADY RAINICORN
    let characterName6 = document.getElementById('characterName6').innerText = character[7].fullName;
        let info6 = document.getElementById('characterInfo6').innerHTML = '<span>Gender:</span> ' + character[7].sex + `<br><span>Species:</span> ` + character[7].species;
        console.log(character[7].sex);
        let image6 = document.getElementById('characterImage6').src = `https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/a/ad/1ATLadyRainicornLook.png/revision/latest?cb=20190807133156`;
        let modalTitle6 = document.getElementById('characterAltName6').innerText = character[7].displayName;
    let modalBody6 = document.getElementById('characterQuotes6').innerText = character[7].quotes[0];
    
    //MARCELINE - VAMPIRE QUEEN
    let characterName7 = document.getElementById('characterName7').innerText = character[4].fullName;
    let info7 = document.getElementById('characterInfo7').innerHTML = '<span>Gender:</span> ' + character[4].sex + `<br><span>Species:</span> ` + character[4].species;
    console.log(character[4].sex);
    let image7 = document.getElementById('characterImage7').src = `https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/e/e0/Marceline_Stock_Night.png/revision/latest/scale-to-width-down/95?cb=20190807133150`;
    let modalTitle7 = document.getElementById('characterAltName7').innerText = character[4].displayName;
    let modalBody7 = document.getElementById('characterQuotes7').innerText = character[4].quotes[0];
        /* Character pictures links: 

tarttoter : "https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/7/7d/Toter.png/revision/latest?cb=20120713195935",

marceline : "https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/e/e0/Marceline_Stock_Night.png/revision/latest/scale-to-width-down/95?cb=20190807133150",

lemongrab : "https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/f/f5/Earl.png/revision/latest?cb=20120723061821",
dukeofnuts : "https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/5/57/Prince-of-nuts.png/revision/latest?cb=20100402183002",
fionna : "https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/c/c3/Fionna_new_design.png/revision/latest?cb=20140704073319",

*/
            
        // const modalTitle = document.querySelector('.modal-title');
        const modalBody = document.querySelector('.modal-body');
            
        
    
    
        //card.insertBefore(img, cardBody);
        //modalBody.appendChild(expl);
}

characterData();
