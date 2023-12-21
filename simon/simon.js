let gameseq = [];
let userseq = [];
let btns = ['red','yellow','green','purple']
let started = false;
let level = 0;
let h2 = document.querySelector('h2')
document.addEventListener("keypress", function()
{
    if(started==false)
    {
        console.log('game is started')
        started = true
        levelUp();
    }
}
);
function gameflash(btn)
{
    btn.classList.add('flash')
    setTimeout(function(){
        btn.classList.remove('flash')
    },300)
}

function levelUp()
{
    userseq = []
    level++;
    h2.innerText = `Level ${level}`
    let id = Math.floor(Math.random()*4)
    let randcolor = btns[id]
    let randbtn = document.querySelector(`.${randcolor}`)
    // console.log(randbtn)
    // console.log(id)
    // console.log(randcolor)
    gameseq.push(randcolor)
    console.log(gameseq)
    gameflash(randbtn);
}
function checkAns(idx)
{
    if(userseq[idx]===gameseq[idx])
    {
        if(userseq.length==gameseq.length)
        {
            setTimeout(levelUp(),1000)
        }
    }
    else
    {
        h2.innerHTML = `Game Over! , Your score was <b>${level}</b><br>Press any key to start`
        document.querySelector('body').style.backgroundColor = 'red'
        setTimeout(()=>{
            document.querySelector('body').style.backgroundColor = 'white'
        },500)
        reset()
    }
}


function userflash(btn)
{
    btn.classList.add('userflash')
    setTimeout(function(){
        btn.classList.remove('userflash')
    },300)
}
function btnPress()
{
    let btn = this
    // console.log(btn)
    userflash(btn)
    usercolor = btn.getAttribute('id')
    console.log(usercolor)
    userseq.push(usercolor)
    checkAns(userseq.length-1)
}
let allBtns = document.querySelectorAll('.btn')
for(i of allBtns)
{
    i.addEventListener('click',btnPress)
}
function reset()
{
    
    started = false
    gameseq = []
    userseq = []
    level = 0
}