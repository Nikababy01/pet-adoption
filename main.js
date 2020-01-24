const pets = [
    {
      name: "Mable",
      imageUrl: "https://images.saatchiart.com/saatchi/966847/art/3950341/3020199-PDVYDDUU-7.jpg",
      color: "Green",
      specialSkill: "Just picks the tomatoes off of a sandwich instead of requesting a whole new sandwich.",
      type: "Cat"
      
    },
    {
      name: "Curly",
      imageUrl: "https://hackernoon.com/hn-images/1*mONNI1lG9VuiqovpnYqicA.jpeg",  
      color: "Poop-Colored",
      specialSkill: "Just picks the tomatoes off of a sandwich instead of requesting a whole new sandwich.",
      type: "Cat"
      
    },
    {
      imageUrl:"https://s.abcnews.com/images/Lifestyle/AL_scared_cat_jt_151225_16x9_992.jpg",
      name:"Sadie",
      color: "Green",
      specialSkill: "just picks the tomatoes off of a sandwich instead of requesting a whole new sandwich.",
      type: "Cat"
    
    },
    {
       imageUrl:"https://petlandbradenton.com/wp-content/uploads/2018/11/1238416_800.jpg",
       name:"Pupstar",
       color: "Red",
       specialSkill: "Just picks the tomatoes of of a sandwich instead of requesting a whole new sandwich.",
       type: "Dog"
    },
    {
        imageUrl: "https://www.askideas.com/media/16/Cute-Pug-Puppy-Image.jpg",
        name: "Coco",
        color: "Green",
        specialSkill: "Just picks tomatoes off of a sandwich instead of requesting a new sandwich.",
        type: "Dog"
        
      },
      {
        imageUrl: "https://content.fortune.com/wp-content/uploads/2019/01/boo.jpg",  
        name: "Fluffy",
        color: "Poop-Colored",
        specialSkill: "Just picks the tomatoes off of a sandwich instead of requesting a whole new sandwich.",
        type: "Dog"
       },
       {
         imageUrl: "https://images-na.ssl-images-amazon.com/images/I/71IY2o-6jlL._AC_SX425_.jpg",
         name: "Dusty",
         color: "Green",
         specialSkill: "Just picks the tomatoes off of a sandwich instead of requesting a whole new sandwich",
         type: "Dino"
            
        },
        {
         imageUrl: "http://www.jozilife.co.za/wp-content/uploads/The-Dino-Expo.jpg",  
         name: "Trouble",
         color: "Poop-Colored",
         specialSkill: "Just picks the tomatoes off of a sandwich instead of requesting a whole new sandwich.",
         type: "Dino"
        },
        {
         imageUrl: "https://www.papo-france.com/674/stegosaurus.jpg", 
         name: "Trouble",
         color: "Poop-Colored",
         specialSkill: "Just picks the tomatoes off of a sandwich instead of requesting a whole new sandwich.",
         type: "Dino"
        
        }
    ];

    const buildpetsCards = ()=> {
    let domString= '';
    for(let i = 0; i < pets.length; i++){
        domString += `<div class="petscards">`;
        domString += `<h2 class="petname">${pets[i].name}</h2>`
        domString += `<img class="img" src="${pets[i].imageUrl}">`;
        domString += `<p>Color: ${pets[i].color}</p>`;
        domString += `<p>SpecialSkill: ${pets[i].specialSkill}</p>`;
        domString += `<h3 class="pettype">${pets[i].type}</h3>`;
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