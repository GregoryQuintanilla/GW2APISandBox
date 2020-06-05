function getAccount(){
    let key = 'F071AA74-6DBF-DB4E-9721-0A0F246CEBFFFE937E97-4A15-4FB3-91E6-4E16167BF77F';
    let url = 'https://api.guildwars2.com/v2/account?access_token=' + key;

    let request = new XMLHttpRequest();

    request.open('GET', url, true);

    request.onload = function(){
        if(request.status >= 200 && request.status < 400){

            let data = JSON.parse(this.response);
            console.log(data); 
        }
        else{
            console.log(request.status)
            console.log('error');
        }
    };
    request.send()
}
function getInfo(){
    let myKey = '?access_token=F071AA74-6DBF-DB4E-9721-0A0F246CEBFFFE937E97-4A15-4FB3-91E6-4E16167BF77F';
    let baseURL = 'https://api.guildwars2.com/v2/';
    let target = document.getElementById('targetPage').value;

    let URL = baseURL + target + myKey;

    let request = new XMLHttpRequest();

    request.open('GET', URL, false);

    request.onload = function(){
        if(request.status>= 200 && request.status < 400){
            let data  = JSON.parse(this.response);
            console.log(data);
            createCharacterSelect(data);
            
        }
        else{
            console.log(request.status);
            console.log('error');
        }
    }
    request.send()
}
function createCharacterSelect(charList){
    let charSelect = document.createElement('select');

    charList.forEach(character =>{
        let charOption = document.createElement('option');
        charOption.value = character;
        charOption.text = character;
        charSelect.appendChild(charOption);
    })

    charSelect.id = 'characterSelector'
    document.getElementById('CharacterSelect').appendChild(charSelect);

    let charButton = document.createElement('button');
    charButton.setAttribute('onclick', 'getCharacterInfo()') 
    charButton.textContent = 'Character Info';
    console.log(charButton);
    document.getElementById('characterButton').appendChild(charButton)

}
function getCharacterInfo(){
    let myKey = '?access_token=F071AA74-6DBF-DB4E-9721-0A0F246CEBFFFE937E97-4A15-4FB3-91E6-4E16167BF77F';
    let baseURL = 'https://api.guildwars2.com/v2/characters/';

    let character = document.getElementById('characterSelector').value;

    let URL = baseURL + character + myKey;

    let request = new XMLHttpRequest()
    request.open('GET', URL, false);
    request.onload = function(){
        let data = JSON.parse(request.response);
        if(request.status >= 200 && request.status < 400){
            console.log(data)
        }
        else{
            console.log(request.status);
            console.log('error');
        }
    }
    request.send()
} 

function getItem(){
    let URL = 'https://api.guildwars2.com/v2/items/81812';
    let request = new XMLHttpRequest();
    request.open('GET', URL, false);
    request.onload = function(){
        let data = JSON.parse(request.response);
        console.log(data)
        document.getElementById('itemImage').src = data.icon
    }
    request.send()
}