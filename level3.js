let popped = 0;
let yellowPopped = 0;
let life3 = 3;
let data = document.getElementById("life");
document.addEventListener('mouseover', function(e){
    
    if (e.target.className === "balloon"){
        
        if(e.target.style.backgroundColor === "#ffce00")
        {
            e.target.style.backgroundColor = "#ededed";
                e.target.textContent = "";
                yellowPopped++ ;
                checkOrangePopped();
        }
        else{
                e.target.style.backgroundColor = "#ededed";
                e.target.textContent = "";
                popped++;
                removeEvent(e);
                life3--;
                if(life3===0)
                {
                   // data.innerText = "You Lost";
                   
                }
                else{
                   // data.innerText = `you have ${life3} left`;
                }
        }
    }   
});


function removeEvent(e){
    e.target.removeEventListener('mouseover', function(){  
    })
};

function checkYellowPopped(){
    if (yellowPopped === 3){
        console.log('You Won');
        let gallery = document.querySelector('#balloon-gallery');
        let message = document.querySelector('#no-balloons');
        gallery.innerHTML = '';
        message.style.display = 'block';
        setTimeout(() => {
            window.location.replace("game.html");
        }, 3000);
    }
};





   

let array = ["orange","green","blue","yellow","red","pink"];
for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}
console.log(array);



