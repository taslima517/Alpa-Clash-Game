function play(){
    //screen section

    console.log('play game')

    
         addElementById('home_screen');
         addElementById('final_score');
       //play ground section

     
       

     removeElementById('play_ground')
     setTextElementById('Current_life',5)
     setTextElementById('Current_Score',0)

           //create alphabets string

     const alphabets = 'abcdefghijklmnopqrstuvwxyz'
     const alphabet = alphabets.split('')
     console.log(alphabet)

     //get a random Number

     const randomNumber = Math.random()*25
     const index= Math.round(randomNumber)
     console.log(index)

     const randomIndex = alphabet[index]
     console.log(randomIndex)
     
          //random Y number create

     const currentAlphabet = document.getElementById('current_alphabet')
     const currentAlphabetindex = currentAlphabet.innerText=(randomIndex)

     //set randomly generated alphabets to the screen

     const addBackgroundColor= document.getElementById(randomIndex)
     addBackgroundColor.classList.add('bg-orange-400')

}

function handleKeyButtonPress(event){
     // console.log('button press')
     const playerPressed = event.key;
     // console.log(event.key);
     console.log('Player Pressed',playerPressed)

     const currentAlphabetsElement = document.getElementById('current_alphabet')
     const Currrent_alphabet = currentAlphabetsElement.innerText;
     const expectedAlphabet = Currrent_alphabet.toLocaleLowerCase();
     console.log(playerPressed,expectedAlphabet);

     if(playerPressed===expectedAlphabet){
          console.log('you are will the Game')

         
          const currentLife = getTextElementValueById('Current_Score')
          const updatedLife = currentLife +1;
          setTextElementById('Current_Score',updatedLife)

         

     const alphabets = 'abcdefghijklmnopqrstuvwxyz'
     const alphabet = alphabets.split('')
     console.log(alphabet)

     //get a random Number

     const randomNumber = Math.random()*25
     const index= Math.round(randomNumber)
     console.log(index)

     const randomIndex = alphabet[index]
     console.log(randomIndex)
     
          //random Y number create

     const currentAlphabet = document.getElementById('current_alphabet')
     const currentAlphabetindex = currentAlphabet.innerText=(randomIndex)

     //set randomly generated alphabets to the screen

     const addBackgroundColor= document.getElementById(randomIndex)
     addBackgroundColor.classList.add('bg-orange-400')

     //removed background Color

     const removeBackgroundColor = document.getElementById(expectedAlphabet)
     removeBackgroundColor.classList.remove('bg-orange-400')

     }
     else{
          console.log('you can not win the game')

          const currentLife = getTextElementValueById('Current_life')
          const updateLife = currentLife -1;
         setTextElementById('Current_life',updateLife)
          
         
         
          if(updateLife===0){
               console.log('game over')
     
               
     addElementById('play_ground');
        
     
     

     removeElementById('final_score')
       
     const lastScore = getTextElementValueById('Current_Score');
     console.log('last score',lastScore)
     setTextElementById('score_change',lastScore)

     const removeBackgroundColor = document.getElementById(expectedAlphabet)
     removeBackgroundColor.classList.remove('bg-orange-400')
          
     
          }

     }
         
}

document.addEventListener('keyup',handleKeyButtonPress);