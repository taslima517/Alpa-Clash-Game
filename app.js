function play(){
    //screen section

    console.log('play game')
//     const homescreen = document.getElementById('home_screen')
//      homescreen.classList.add('hidden')
         addElementById('home_screen');
         addElementById('final_score');
       //play ground section

     // const playgroundSection = document.getElementById('play_ground')
     // playgroundSection.classList.remove('hidden');

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

          //Update Score:
          
          //1:Get the current score
          // const currentScoreElement=document.getElementById('Current_Score')
          // const currentScoreText = currentScoreElement.innerText;
          // const currentScore=parseInt(currentScoreText)
          // console.log("My game score",typeof(currentScore));


          const currentLife = getTextElementValueById('Current_Score')
          const updatedLife = currentLife +1;
          setTextElementById('Current_Score',updatedLife)

          // //2: increase the score by 1
          // const UpdateScore = currentScore + 1;
          // //3:Show the update score
          // currentScoreElement.innerText=UpdateScore;

          // const finalresult = document.getElementById('score_change')
          // finalresult.innerText =UpdateScore;

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

     //removed background Color

     const removeBackgroundColor = document.getElementById(expectedAlphabet)
     removeBackgroundColor.classList.remove('bg-orange-400')

     }
     else{
          console.log('you can not win the game')

          //step 1:get the current life
                
          // const currentLifeElement = document.getElementById('Current_life')

          // const currentLifeText = currentLifeElement.innerText;
          // const currentLife=parseInt(currentLifeText)
          // console.log("My life score",typeof(currentLife));

          // console.log(currentLife)

          const currentLife = getTextElementValueById('Current_life')
          const updateLife = currentLife -1;
         setTextElementById('Current_life',updateLife)
          // //step 2: reduce the life count

          // const updateLife = currentLife -1;
           
          // //step 3: display the update life

          // currentLifeElement.innerText=updateLife;


          // const finalResult = document.getElementById('score_change')

         
          if(updateLife===0){
               console.log('game over')
     //           const playgroundSection = document.getElementById('play_ground')
     // playgroundSection.classList.add('hidden');
     addElementById('play_ground');
        
     //   const FinalSection = document.getElementById('final_score')
     //   FinalSection.classList.remove('hidden')

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