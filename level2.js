let popped = 0;
let orangePopped = 0 ;
let life2 = 3 ;
document.addEventListener('mouseover', function(e){
    
    if (e.target.className === "balloon"){
        if(e.target.style.backgroundColor = "#ff3300")
        {
            e.target.style.backgroundColor = "#ededed";
                e.target.textContent = "";
                orangePopped++ ;
                checkOrangePopped();
        }
        else{
                e.target.style.backgroundColor = "#ededed";
                e.target.textContent = "";
                popped++;
                removeEvent(e);
                life2--;
                if(life2===0)
                {
                    data.innerText = "You Lost";
                   setTimeout(() => {
                       window.location("game.html");
                   }, 3000);
                }
                else{
                    data.innerText = `you have ${life2} left`;
                }  
        }
    }   
});

function removeEvent(e){
    e.target.removeEventListener('mouseover', function(){
        
    })
};

function checkOrangePopped(){
    if (orangePopped === 3){
        console.log('Level complete');
        let gallery = document.querySelector('#balloon-gallery');
        let message = document.querySelector('#no-balloons');
        gallery.innerHTML = '';
        message.style.display = 'block';
        setTimeout(() => {
            window.location.replace("level3.html");
        }, 3000);
    }
};
