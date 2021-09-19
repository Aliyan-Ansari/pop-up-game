let popped = 0;
let bluePopped = 0;
let life = 3;
let data = document.getElementById("life");
document.addEventListener('mouseover', function(e){
    
    if (e.target.className === "balloon"){
        
        if(e.target.style.backgroundColor = "#3f7abe")
        {
            e.target.style.backgroundColor = "#ededed";
                e.target.textContent = "";
                bluePopped++ ;
                checkBluePopped();
        }
        else{
                e.target.style.backgroundColor = "#ededed";
                e.target.textContent = "";
                popped++;
                removeEvent(e);
                life--;
                if(life===0)
                {
                    data.innerText = "You Lost";
                   setTimeout(() => {
                       window.location("./game.html");
                   }, 3000);
                }
                else{
                    data.innerText = `you have ${life} left`;
                }
                
                
        }
    }   
});



function removeEvent(e){
    e.target.removeEventListener('mouseover', function(){
        
    })
};

function checkBluePopped(){
    if (bluePopped === 3){
        console.log('Level Completed redireting to level 2');
        let gallery = document.querySelector('#balloon-gallery');
        let message = document.querySelector('#no-balloons');
        gallery.innerHTML = '';
        message.style.display = 'block';
        setTimeout(() => {
            window.location.replace("level2.html");
        }, 3000);
    }
};
