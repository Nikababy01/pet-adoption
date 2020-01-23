const pets = [
    {
      imageUrl: "https://s.abcnews.com/images/Lifestyle/AL_scared_cat_jt_151225_16x9_992.jpg",
      name: "Mable",
      color: "Green",
      specialSkill: "Gives sincere apologies.",
      type: "cat"
      
    },
    {
      imageUrl: "https://hackernoon.com/hn-images/1*mONNI1lG9VuiqovpnYqicA.jpeg",  
      name: "Curly",
      color: "Poop-Colored",
      specialSkill: "Just picks the tomatoes off of a sandwich instead of requesting a whole new sandwich.",
      type: "cat"
      
    },
    {
      imageUrl:"https://s.abcnews.com/images/Lifestyle/AL_scared_cat_jt_151225_16x9_992.jpg",
      name:"Sadie",
      color: "Green",
      specialSkill: "Catches Freesbies on the beach",
      type: "cat"
    
    },
    {
       imageUrl:"https://content.fortune.com/wp-content/uploads/2019/01/boo.jpg",
       name:"Pupstar",
       color: "Red",
       specialSkill: "this is a skill",
       type: "dog"
    },
    {
        imageUrl: "https://content.fortune.com/wp-content/uploads/2019/01/boo.jpg",
        name: "Coco",
        color: "Green",
        specialSkill: "Gives sincere apologies.",
        type: "dog"
        
      },
      {
        imageUrl: "https://content.fortune.com/wp-content/uploads/2019/01/boo.jpg",  
        name: "Fluffy",
        color: "Poop-Colored",
        specialSkill: "Just picks the tomatoes off of a sandwich instead of requesting a whole new sandwich.",
        type: "dog"
       },
       {
         imageUrl: "http://kittentoob.com/wp-content/uploads/2015/06/funny-cat-with-a-towel.jpg",
         name: "Dusty",
         color: "Green",
         specialSkill: "Gives sincere apologies.",
         type: "dino"
            
        },
        {
         imageUrl: "http://www.jozilife.co.za/wp-content/uploads/The-Dino-Expo.jpg",  
         name: "Trouble",
         color: "Poop-Colored",
         specialSkill: "Just picks the tomatoes off of a sandwich instead of requesting a whole new sandwich.",
         type: "dino"
        },
        {
         imageUrl: "http://www.jozilife.co.za/wp-content/uploads/The-Dino-Expo.jpg", 
         name: "Trouble",
         color: "Poop-Colored",
         specialSkill: "Just picks the tomatoes off of a sandwich instead of requesting a whole new sandwich.",
         type: "dino"
        
        }
    ];


    const buildpetsCards = ()=> {
    let domString= '';
    for(let i = 0; i < pets.length; i++){
        domString += `<div class="petscards">`;
        domString += `<img class="img" src="${pets[i].imageUrl}">`
        domString += `<h3>${pets[i].name}</h3>`;
        domString += `<p>Color: ${pets[i].color}</p>`;
        domString += `<p>SpecialSkill: ${pets[i].specialSkill}</p>`;
        domString += `<h3>${pets[i].type}</h3>`;
        domString += '</div>';
      }
      const printToDom = (divId, textToPrint) => {
        const selectedDiv = document.getElementById(divId);
        selectedDiv.innerHTML = textToPrint;
        }
        printToDom('pets',domString);
    };

 
    buildpetsCards();
    
    
        
        console.log(pets);