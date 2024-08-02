
const box = document.getElementsByClassName('cell');
const players=['x','0'];
let currentPlayer =players[0];//initially set to player 1


const message = document.createElement('h2');
message.textContent= 'Player1 turn!';
message.style.marginTop='30px';
message.style.textAlign='center';
message.style.color='orange';
document.body.appendChild(message);

const winningCombinations = [
[0,1,2],[3,4,5],[6,7,8],   //rows
[0,3,6],[1,4,7],[2,5,8] ,  //columns
[0,4,8],[2,4,6],      //diagonal
];


function handleClick(event){
    const clickedBox=  event.target;
    if (clickedBox.textContent !== ''){
        return; //if the cell is already filled ,it returns without making any changes.
    }
    clickedBox.textContent = currentPlayer;

    if (checkWinner(currentPlayer)) {
        
            message.textContent=`Game over! ${currentPlayer} wins!`;
            setTimeout(reset, 1000);
            return;
        };
        
    
    
    if (handleTie()) {
      
            message.textContent= `Game is tied!`;
            setTimeout(reset, 1000);
            return;
        
        
    }
 //switch player
currentPlayer = (currentPlayer ===players[0]?players[1]:players[0]);
if (currentPlayer == players[0]){
    message.textContent= 'Player1\'s turn!'
}
else{
    message.textContent= 'Player2\'s turn!'
}
}



function checkWinner(currentPlayer){
    for (let i=0;i<winningCombinations.length;i++)
    {
           const [a,b,c]=winningCombinations[i];
             if(box[a].textContent==currentPlayer &&
                box[b].textContent==currentPlayer &&
                box[c].textContent==currentPlayer)
                          {
                          return true;  //if a winning combination is found it returns true;
                           }

    }
    return false;

}


// Function to check if the game is tied
function handleTie(){
    for(let i=0;i<box.length; i++){
        if(box[i].textContent === ''){
            return false;  //if any cell is empty it returns false indicating no tie yet
        }
    }
    return true;
}


// Function to reset the game
function reset(){
    for(let i=0;i<box.length;i++)
    {
        box[i].textContent ="";
     }
        currentPlayer = players[0]; // Reset to Player 1
        message.textContent='Game has been reset. Player 1\'s turn!'
       
}


// Attach event listeners to each cell

for(let i=0; i<box.length; i++)
    {
        box[i].addEventListener('click',handleClick);
    }


