let boxes = document.querySelectorAll(".box");
let turn = "X";
let endGame = false;//chua ket thuc game
boxes.forEach(e=>{
    e.innerHTML = "";//ghi de len tat ca cac box co gia tri ""
    e.addEventListener("click",function()
    {
        if(endGame == false && e.innerHTML == "")
        {
            document.querySelector("#results").style.display = "none";
            //game chưa kết thúc mới cho ghi đè lên.
            e.innerHTML = turn;
            cheakWin();
            changeTurn();
        }
        document.getElementById('play-again').style.display = "inline";
    })
})
function changeTurn()
{
    var backg = document.querySelector('.bg');
    if(turn == "X")
    {
        turn = "O";
        backg.style.left="85px";
    }
    else
    {
        turn = "X";
        backg.style.left = "0px";
    }
}
function cheakWin(){
    let winConditions = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ]
    for(let i = 0; i<winConditions.length; i++){
        let v0 = boxes[winConditions[i][0]].innerHTML;
        let v1 = boxes[winConditions[i][1]].innerHTML;
        let v2 = boxes[winConditions[i][2]].innerHTML;
        if(v0 != "" && v0 === v1 && v0 === v2){
            endGame = true;//ket thúc rồi ngưng 
            document.querySelector("#results").innerHTML = turn + " win";
            document.getElementById('results').style.display = "block";
            for(j = 0; j<3; j++){
                boxes[winConditions[i][j]].style.backgroundColor = "#08D9D6"
                boxes[winConditions[i][j]].style.color = "#000"
            }
        }
    }
}

function resetGame()
{
    endGame = false;
    turn = "X";
    boxes.forEach(function(e){
        e.innerHTML = "";
        e.style.color = "#fff";
        e.style.removeProperty("background-color");
    });
    document.getElementById('results').style.display = "none";
    document.getElementById('play-again').style.display = "none";
    document.querySelector('.bg').style.left = "0";
}

