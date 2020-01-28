const pets = [
  {
    name: "Cookie",
    imageUrl: "https://images.saatchiart.com/saatchi/966847/art/3950341/3020199-PDVYDDUU-7.jpg",
    color: "Tan & Black",
    specialSkill: "She is not for the faint of heart. LIKES:the song Cat Scratch Fever and she will dance. She has a lot of personality",
    type: "Cat"
    
  },
  {
    name: "Princess",
    imageUrl: "https://hackernoon.com/hn-images/1*mONNI1lG9VuiqovpnYqicA.jpeg",  
    color: "Black & White",
    specialSkill: "Sweet and curious and loves attention,she will gently place a paw to ask for affection. She loves to massage your tummy",
    type: "Cat"
    
  },
  {
    imageUrl:"https://s.abcnews.com/images/Lifestyle/AL_scared_cat_jt_151225_16x9_992.jpg",
    name:"Abby",
    color: "Tiger Strips",
    specialSkill: "Loves to hunt mice, be careful, she might bring you back her prizes",
    type: "Cat"
  
  },
  {
     imageUrl:"https://petlandbradenton.com/wp-content/uploads/2018/11/1238416_800.jpg",
     name:"Pupstar",
     color: "Beige",
     specialSkill: "This beauty is not just good looks, but also has the brains and personality to match! Throw a ball and watch him bring it back to you",
     type: "Dog"
  },
  {
      imageUrl: "https://www.askideas.com/media/16/Cute-Pug-Puppy-Image.jpg",
      name: "Coco",
      color: "Beige & White",
      specialSkill: "She loves kids, other dogs, and to play and run! Throw a freesbie and she will catch it and bring it back to you. Buy her lots of toys and she will be your new bestie.",
      type: "Dog"
      
    },
    {
      imageUrl: "https://content.fortune.com/wp-content/uploads/2019/01/boo.jpg",  
      name: "Fluffy",
      color: "White & Tan",
      specialSkill: "Loves to jump on the couch and cuddle up next to you. Loves to shake paws. Has an awesome personality.Will play with almost anyone",
      type: "Dog"
     },
     {
       imageUrl: "https://images-na.ssl-images-amazon.com/images/I/71IY2o-6jlL._AC_SX425_.jpg",
       name: "Deeno",
       color: "Brown",
       specialSkill: "Sweet with so much love to give for the humans who take care of him. Gives the best kisses. Don't be afraid, he is harmless and won't bite!",
       type: "Dino"
          
      },
      {
       imageUrl: "http://www.jozilife.co.za/wp-content/uploads/The-Dino-Expo.jpg",  
       name: "Barney",
       color: "Brown",
       specialSkill: "Seems a little scary at first, but loves to snuggle up in the sunshine. He is a great protector and nobody will mess with you with him around!",
       type: "Dino"
      },
      {
       imageUrl: "https://www.papo-france.com/674/stegosaurus.jpg", 
       name: "Trouble",
       color: "Green",
       specialSkill: "Such a gentle giant. He loves the nice humans who come to see him here at the 100 Oaks PetSmart. He loves to be stroked on the head gently.",
       type: "Dino"
      
      }
  ];
  const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
    };

  const buildpetsCards = (monkeyButt)=> {
  let domString= ''; 
  console.log("im in here ${monkeyButt.length}") 
  for(let i = 0; i < monkeyButt.length; i++){
      domString += `<div class="petscards">`;
      domString += `<h2 class="petname ${monkeyButt[i].type}">${pets[i].name}</h2>`;
      domString += `<img class="img" src="${monkeyButt[i].imageUrl}">`;
      domString += `<p>Color: ${monkeyButt[i].color}</p>`;
      domString += `<p class="skill">${monkeyButt[i].specialSkill}</p>`;
      domString += `<h3 class="pettype ${monkeyButt[i].type}">${monkeyButt[i].type}</h3>`;
      domString += '</div>';
    }
    
      printToDom('pets',domString);
      
  };
         
       const myPetBtn=(e) => {
        const buttonId = e.target.id;
        console.log(buttonId);
        
        if(buttonId === 'All' ) {
        buildpetsCards(pets);
        } else {
        const myPets = [];
        for(let i = 0; i < pets.length; i++){
        if(pets[i].type  === buttonId) {
            myPets.push(pets[i]);
          }
        }
        buildpetsCards(myPets);
       }
      };
        
        const eventsForPets = () => {
          document.getElementById('All').addEventListener('click', myPetBtn);
          document.getElementById('Cat').addEventListener('click', myPetBtn);
          document.getElementById('Dog').addEventListener('click', myPetBtn);
          document.getElementById('Dino').addEventListener('click', myPetBtn);
        }

            const init = () => {
            buildpetsCards(pets);
            eventsForPets();
        }
        init();
       