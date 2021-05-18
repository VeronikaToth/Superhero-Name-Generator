



function generator() {  
    const word1 = ['The Big','The Bad','The Ugly','The Poopy','The Beautiful','The Abnormal','The Average','The Special','The Fabulous','The Fantastic',
'The Fascinating','The Helpful','The Gloomy','The Easy-Going','The Musical','The Deep','The Below Average','The Wary','The Warm','The Volcanic',
'The Unpopular','The Wet','The Smelly','The Huge','The Green','The Purple','The Unsure','The Tired','The Touchy','The Tolerant','The Thoughtful',
'The Sturdy','The Suspicious','The Soulless','The Obnoxious','The Sexual','The Smart','The Slow','The Floppy','The Sour','The Saucy','The Ridiculous',
'The Sassy','The Old-Fashioned','The Nosy','The Normal','The Nasty','The Meticulous','The Foreign','The Motivated','The Lazy','The Inventive'];

const word2 = ['Pineapple','Soul','Children','Dimension','Krispy Kreme','Alien','Doughnut','Cucumber','Peanut Butter','Falcon','Brother','Cork','Wine',
'Bottle','Shoe','Underwear','Fruit','Friend','Trouser','Sheep','Sloth','Dog','Flower','Car','Crime','Debt','Plant','Condom','Breath','Tooth','Fairy','Dinosaur',
'T-Rex','Rumour','Rattlesnake','Bike','Sardine','Dolphin','Eyeball','Hair','Toilet Paper','Brush','Mask','Forest','Egg','Priest','Ball','Beer','Darth Vader',
'Stormtrooper','Hero','Skirt','Bunny','Gerbil','Butter','Sound'];

const word3 = ['Destroyer','Humiliator','Collector','Designer','Kisser','Stealer','Fixer','Runner','Decorator','Trainer','Shapeshifter','Breaker','Cleaner','Smoker','Sniffer','Traveler','Timer','Energizer','Manipulator','Hypnotizer','Licker','Printer','Catcher','ShieldMaiden','Warrior','Gentleman','Lady','Scientist',
'Compiler','Protector','Charger','Interpreter','Driver','Fighter','Hero','Magnetizer','Witness','Listener','Healer','Wizard','Tutor','Cop','Woman','Man','Trimmer','Leader'];

    var newName = word1[Math.floor(Math.random() * word1.length)] + " " + word2[Math.floor(Math.random() * word2.length)] + " " + word3[Math.floor(Math.random() * word3.length)];
    return newName;
    console.log(newName);
};

function input() {
    document.getElementById("demo").innerHTML = generator();
  }

/*function randomNumGen() {
    let random =[]
    for (let step = 0; step < 3; step++) {
        //console.log(step);
       let number = Math.floor(Math.random()*word1.length);
        console.log(number);
        random.push(number);   
        
    };
    console.log(random); 
};
*/


//console.log(randomNumGen());

console.log(generator());

