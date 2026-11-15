const nameInput = document.getElementById("name");

const cardsList = [
  //Each Card and all of its attributes
  //"Anonymous" 4 Chan User Echo
  {
    Image: "Images/Start/“Anonymous” 4 Chan User Echo.jpg",
    Type: "Start",
    Name: "\"Anonymous\" 4Chan User Echo",
    Gender: "Femme",
    Species: "Pegasus",
    Timeline: "(None)",
    Keywords: "Batpony, Mascot, OC, Top Bat",
    Character: "Echo",
    Power: "This card cannot be removed from the grid and can only be moved if it would result in this card being shipped with a Pony card with the Batpony and/or a Fruit keyword. (Apple, Mango, and Pear are Fruit keywords.) This power cannot be copied.",
    Flavor: "When you're on the computer, no one knows you're a bat. - Back to Bat",
    Set: "Nocturnal Adventures",
    Art: "Koonzy",
    Link:"https://docs.google.com/document/d/1XcIOfPeNu0jYISy8MzmWwNVUrgqJtd1fauMQxKIffRE/edit?tab=t.cocbtxw76wv8"
  },
  //"Writer Germ"
  {
    Image: "Images/Start/“Writer” Germ.jpg",
    Type:"Start",
    Name: "\"Writer\" Germ",
    Gender: "Masc",
    Species: "Pegasus",
    Timeline: "(None)",
    Keywords: "OC, Zombie",
    Character: "Germ",
    Power: "The first player to break up a chain of 7 or more Ships gets 2 points. This card cannot be moved or removed from the grid. This power cannot be copied.",
    Flavor: "This is the profile of a jorts-wearing American citizen. - Lepakkoelamaa",
    Set: "Card by RabidScout",
    Art: "RabidScout",
    Link:"https://docs.google.com/document/d/1XcIOfPeNu0jYISy8MzmWwNVUrgqJtd1fauMQxKIffRE/edit?tab=t.ajcbspgfb8z"
  },
  //Cutie Mark Crusaders: Fanfic Authors!
  {
    Image: "Images/Start/Cutie Mark Crusaders_  Fanfic Authors!.jpg",
    Type: "Start",
    Name: "Cutie Mark Crusaders: Fanfic Authors!",
    Gender: "Femme",
    Species: "Earth Pony, Pegasus, Unicorn",
    Timeline: "(None)",
    Keywords: "Apple, Apple Bloom, CMC, Scootaloo, Sweetie Belle",
    Character: "Sweetie Belle (Left: Femme, Unicorn, CMC) / Scootaloo (Middle: Femme, Pegasus, CMC) / Apple Bloom (Right: Femme, Earth Pony, Apple, CMC)",
    Power: "This card counts as 3 Ponies. One [Earth Pony], one [Pegasus], and one [Unicorn]. Achieved Goals are considered active. (They can be achieved by other players and are affected by powers.) This card cannot be moved or removed from the grid. This power cannot be copied.",
    Flavor: "\"Girls, listen!\" Apple Bloom cried, \"Why don't we just ship all of them together?\" Apple Bloom had never lost five hours faster in her life. - CMC's Not-So-Excellent Adventure",
    Set: "Shipping & Handling",
    Art: "BefishProductions",
    Link:"https://docs.google.com/document/d/1XcIOfPeNu0jYISy8MzmWwNVUrgqJtd1fauMQxKIffRE/edit?tab=t.s7vnqvdpipte"

  },
  //Dizzy Frizzy, Patron Saint of Shippers
  {
    Image: "Images/Start/Dizzy Frizzy, Patron Saint of Shippers.jpg",
    Type: "Start",
    Name: "Dizzy Frizzy, Patron Saint of Shippers",
    Gender: "Femme",
    Species: "Earth Pony",
    Timeline: "(None)",
    Keywords: "OC",
    Character: "Dizzy Frizzy",
    Power: "The first time a player swaps Pony cards during each of their turns, they may swap up to 2 additional Pony cards during that swap. This card cannot be moved or removed from the grid. This power cannot be copied.",
    Flavor: "They say she spent years in seclusion, living in a hut of cardboard and packing tape, sleeping on a bed of outdated Core Decks. She made these sacrifices so the world would know the joy of making horses kiss for points.",
    Set: "Thank You from Children of Kefentse",
    Art: "Pixel Prism",
    Link:"https://docs.google.com/document/d/1XcIOfPeNu0jYISy8MzmWwNVUrgqJtd1fauMQxKIffRE/edit?tab=t.i4i8erscktyq"
  },
  //Fanfic Author Discord
  {
    Image: "Images/Start/Fanfic Author Discord.jpg",
    Type: "Start",
    Name: "Fanfic Author Discord",
    Gender: "Masc",
    Species: "Alicorn",
    Timeline: "(None)",
    Keywords: "Draconequus, Elder, Twilight Sparkle",
    Character: "Discord / Twilight Sparkle (Cosplay)",
    Power: "Increase the numerals on all other cards by 1. Numerals that are spelled as words are not affected. This card cannot be moved or removed from the grid. This power cannot be copied.",
    Flavor: "Twilight Sparkle squealed with utter delight as she came upon my heart-pounding story of thrill and woe. “Oh, Discord,” she sighed, hoof placed upon heated brow. “You're suuuuch a good writer!” - Leave It to Discord",
    Set: "2015 Con Exclusives",
    Art: "Pixel Prism",
    Link:"https://docs.google.com/document/d/1XcIOfPeNu0jYISy8MzmWwNVUrgqJtd1fauMQxKIffRE/edit?tab=t.zefwcfeue2pr"
  },
  //Fanfic Author FIMFiction
  {
    Image: "Images/Start/Fanfic Author FIMFiction.jpg",
    Type: "Start",
    Name: "Fanfic Author FIMFiction",
    Gender: "Masc, Femme, Genderless",
    Species: "Earth Pony, Pegasus, Unicorn, Alicorn, Changeling, Non-Pony",
    Timeline: "(None)",
    Keywords: "OC, #horsefamous",
    Character: "FIMFiction Author",
    Power: "This card's gender and species are decided collectively by all players at the start of the game. This card cannot be moved or removed from the grid. This power cannot be copied.",
    Flavor: "The brilliant and beautiful fanfiction author and creator of this deck scoffed. “Oh, come off it.” She spat. “I have a big head, but not one big enough to put my own name on a card.” - The Everywoman",
    Set: "Card by Str8aura",
    Art: "Str8aura",
    Link:"https://docs.google.com/document/d/1XcIOfPeNu0jYISy8MzmWwNVUrgqJtd1fauMQxKIffRE/edit?tab=t.3a817e46u3br"
  },
  //Fanfic Author Gabby Gums
  {
    Image: "Images/Start/Fanfic Author Gabby Gums.jpg",
    Type: "Start",
    Name: "Fanfic Author Gabby Gums",
    Gender: "Femme",
    Species: "Earth Pony, Pegasus, Unicorn",
    Timeline: "(None)",
    Keywords: "Apple, Apple Bloom, CMC, Scootaloo, Sweetie Belle",
    Character: "Gabby Gums / Apple Bloom / Scootaloo, Sweetie Belle (Collective Pseudonym)",
    Power: "This card counts as an [Earth Pony], [Pegasus], or [Unicorn].If a Goal's requirements are already met when it's drawn, it goes to this card's achieved Goals. If this card has enough points to win the game, all players lose the game. This card cannot be moved or removed from the grid. This power cannot be copied.",
    Flavor: "She did NOT like pie that much. “Seventeen blueberry pies, please!” She just had these cravings sometimes. “I'll take twenty of the peach as well!” Writing takes a lot of energy! “Might as well throw in three of the chocolate!” Okay, MAYBE eating forty a day is a bit much, but other ponies do that, too, right? RIGHT? - Corrections, Foal Free Press Issue 25",
    Set: "Made Our Mark",
    Art: "Arcadian Phoenix",
    Link:"https://docs.google.com/document/d/1XcIOfPeNu0jYISy8MzmWwNVUrgqJtd1fauMQxKIffRE/edit?tab=t.bs5uf7ncbz5c"
  },
  //Fanfic Author Twilight
  {
    Image: "Images/Start/Fanfic Author Twilight.jpg",
    Type: "Start",
    Name: "Fanfic Author Twilight",
    Gender: "Femme",
    Species: "Unicorn",
    Timeline: "(None)",
    Keywords: "Mane 6, Twilight Sparkle",
    Character: "Twilight Sparkle",
    Power: "This card cannot be moved or removed from the grid. This power cannot be copied.",
    Flavor: "She was no writer. She was a prophet. Her words spanned the universes, sang hymns to the terrible improbability of life and love. She was like unto a god; Twilight was.",
    Set: "Core Deck",
    Art: "Pixel Prism",
    Link:"https://docs.google.com/document/d/1XcIOfPeNu0jYISy8MzmWwNVUrgqJtd1fauMQxKIffRE/edit?tab=t.sruu1hzcupxw"
  },
  //Fanfic Detective Rarity
  {
    Image: "Images/Start/Fanfic Detective Rarity.jpg",
    Type: "Start",
    Name: "Fanfic Detective Rarity",
    Gender: "Femme",
    Species: "Unicorn",
    Timeline: "(None)",
    Keywords: "Mane 6, Shadow Shade",
    Character: "Rarity / Shadow Spade (Cosplay)",
    Power: "At the start of the game, instead of drawing 3 Goals, draw a number of Goals equal to 3 times the number of players. Those Goals are not replaced after being achieved, and Goals are not drawn at start of turn. All players win the game when all active Goals have been achieved. At the end of each round, draw a card from the Goal deck and place it into this card's achieved Goals. If this card has enough points to win the game, all players lose the game. This card cannot be moved or removed from the grid. This power cannot be copied.",
    Flavor: "All the fanfics. All the bloodshed. It all led here. Time to stop the ones behind this!- The Maltese Griffon",
    Set: "Card by Ithry Skylark",
    Art: "Arcadian Phoenix",
    Link:"https://docs.google.com/document/d/1XcIOfPeNu0jYISy8MzmWwNVUrgqJtd1fauMQxKIffRE/edit?tab=t.ii98ifxlaamm"
  },
  //Fanfic Editor Starlight
  {
    Image: "Images/Start/Fanfic Editor Starlight.jpg",
    Type: "Start",
    Name: "Fanfic Editor Starlight",
    Gender: "Femme",
    Species: "Unicorn",
    Timeline: "(None)",
    Keywords: "Starlight Glimmer",
    Character: "Starlight Glimmer",
    Power: "Once during each of their turns, a player may change one keyword or symbol on an active Goal until the end of their turn. (Character names count as name keywords.) If that Goal is achieved while it is changed, it is worth 1 point and loses any ongoing powers. Players cannot choose a keyword or symbol that would cause that Goal to immediately be achieved. This card cannot be moved or removed from the grid. This power cannot be copied.",
    Flavor: "Oh, who am I kidding? There's no fixing this!” - Cry for Help",
    Set: "Children of Kefentse Promo #4",
    Art: "Pixel Prism",
    Link:"https://docs.google.com/document/d/1XcIOfPeNu0jYISy8MzmWwNVUrgqJtd1fauMQxKIffRE/edit?tab=t.8g94c7uiqz2f"
  },
  //Future Soarin, Alicorn of Spacetime
  {
    Image: "Images/Start/Future Soarin, Alicorn of Spacetime.jpg",
    Type: "Start",
    Name: "Future Soarin, Alicorn of Spacetime",
    Gender: "Masc",
    Species: "Alicorn",
    Timeline: "Dystopian Future",
    Keywords: "Apple, Elder",
    Character: "Future Soarin / Soarin (Alternate Name)",
    Power: "If a player would draw one or more cards from the Ship and/or Pony deck, they may instead look at that many cards from the top of that deck, put any number of them on the bottom and the rest on top, and then draw that many cards. (For example: If you would draw two cards, you may instead look at the top two cards of the deck, put neither, one, or both of those cards on the bottom of the deck, then draw two cards.)",
    Flavor: "“It would be a long time before your appearance becomes like mine. I am just one of an infinite amount of futures.” - MY LITTLE PONY THE MOVIE: INFECTION",
    Set: "Tamersverse",
    Art: "Tamers12345",
    Link:"https://docs.google.com/document/d/1XcIOfPeNu0jYISy8MzmWwNVUrgqJtd1fauMQxKIffRE/edit?tab=t.9r82kbspgygp"
  },
  //Ghostwriter Starlight
  {
    Image: "Images/Start/Ghostwriter Starlight.jpg",
    Type: "Start",
    Name: "Ghostwriter Starlight",
    Gender: "Femme",
    Species: "Unicorn",
    Timeline: "(None)",
    Keywords: "Starlight Glimmer",
    Character: "Starlight Glimmer",
    Power: "This card cannot be moved or removed from the grid. This power cannot be copied.",
    Flavor: "He had one job. ONE JOB. When she got her hooves on that dragon, she'd! Oh... right. - Nameless and Faceless",
    Set: "Out of Ink",
    Art: "Pixel Prism",
    Link:"https://docs.google.com/document/d/1XcIOfPeNu0jYISy8MzmWwNVUrgqJtd1fauMQxKIffRE/edit?tab=t.eg764h55a3ty"
  },
  //Grand Creator Fausticorn
  {
    Image: "Images/Start/Grand Creator Fausticorn.jpg",
    Type: "Start",
    Name: "Grand Creator Fausticorn",
    Gender: "Femme",
    Species: "Alicorn",
    Timeline: "(None)",
    Keywords: "Lauren Faust",
    Character: "Fausticorn / Lauren Faust (Alternate Name)",
    Power: "This card cannot be moved or removed from the grid. This power cannot be copied.",
    Flavor: "Gazing down at her work, she felt a soft smile touch her lips. Her creations danced in color, sang in harmony; all around the world, they brought joy to those who watched. “It's been magical, my little ponies,” she whispered. A gentle flurry of white feathers and she was gone: for she was needed elsewhere, and the profound love she left with the ponies was great enough to grow on its own. - Showtime",
    Set: "WEB CARD",
    Art: "Pixel Prism",
    Link:"https://docs.google.com/document/d/1XcIOfPeNu0jYISy8MzmWwNVUrgqJtd1fauMQxKIffRE/edit?tab=t.iv2fft3qw4qb"
  },
  //KP
  {
    Image: "Images/Start/KP.jpg",
    Type: "Start",
    Name: "KP",
    Gender: "Femme",
    Species: "Pegasus",
    Timeline: "(None)",
    Keywords: "OC, #horsefamous",
    Character: "KP",
    Power: "All Celestias and Discords MUST be shipped together if able. If a Celestia and Discord on the grid are not shipped together, every Swap power must be used to ship them. This card cannot be moved or removed from the grid. This power cannot be copied.",
    Flavor: "KP gazed upon her vast empire, bright screens flickering around every corner. And yet, it was not good enough. THEY needed to be together... - Kill Switch: Prologue",
    Set: "Card by ILoveKimPossibleAlot",
    Art: "Pixel Prism",
    Link:"https://docs.google.com/document/d/1XcIOfPeNu0jYISy8MzmWwNVUrgqJtd1fauMQxKIffRE/edit?tab=t.ppmtsrk12b1n"
  },
  //Lead Author Twilight
  {
    Image: "Images/Start/Lead Author Twilight.jpg",
    Type: "Start",
    Name: "Lead Author Twilight",
    Gender: "Femme",
    Species: "Unicorn",
    Timeline: "(None)",
    Keywords: "Shadowbolt, Twilight Sparkle",
    Character: "Twilight Sparkle",
    Power: "At the start of the game and whenever another Twilight Sparkle is played onto the grid, draw a new Goal. Whenever a Twilight Sparkle is removed from the grid, discard an active Goal at random. This card cannot be moved or removed from the grid. This power cannot be copied.",
    Flavor: "She was no hack. She was a scientist. Her theories spanned the universes, shedding light on the terrible probability of friendship and magic. She was a genius.",
    Set: "Foreshadow Prep",
    Art: "Ashley Nichols",
    Link:"https://docs.google.com/document/d/1XcIOfPeNu0jYISy8MzmWwNVUrgqJtd1fauMQxKIffRE/edit?tab=t.ftd9dh7wsmid"
  },
  //Mix Master Magic
  {
    Image: "Images/Start/Mix Master Magic.jpg",
    Type: "Start",
    Name: "Mix Master Magic",
    Gender: "Femme",
    Species: "Alicorn",
    Timeline: "(None)",
    Keywords: "Mane 6, Princess, Twilight Sparkle",
    Character: "Twilight Sparkle (Left)",
    Power: "Whenever a player achieves a Goal, turn this card 90° clockwise for each point that Goal was worth and discard each Pony card that the top of this card is facing. This card cannot be moved or removed from the grid. This power cannot be copied.",
    Flavor: "That sound was happening. Hip-Happening. Never before had Vinyl heard something so fresh... so recent! It was unique and modern. State-of-the-art. It was new! And the DJ wasn't half bad either. - Strike a Chord",
    Set: "Shipping & Handling",
    Art: "BelfishProductions",
    Link:"https://docs.google.com/document/d/1XcIOfPeNu0jYISy8MzmWwNVUrgqJtd1fauMQxKIffRE/edit?tab=t.flt9cpwoxa6t"
  },
  //Shipping & Handling
  {
    Image: "Images/Start/Shipping & Handling.jpg",
    Type: "Start",
    Name: "Shipping & Handling",
    Gender: "Femme",
    Species: "Pegasus",
    Timeline: "(None)",
    Keywords: "Derpy Hooves, Mascot",
    Character: "Derpy Hooves",
    Power: "At the start of each player's turn, that player may choose another player. If they do, both of those players reveal their hands to each other and put a card from the other player's hand into their own hand. This card cannot be moved or removed from the grid. This power cannot be copied.",
    Flavor: "“Boy, someone should have a talk with that mailmare! Do you know how long I've been in that box for!? Three weeks! And you only live next door! It's a good thing those peanuts were in there, or I would have starved! Maybe I didn't put enough stamps. My writing is awful, so I wrote the address in stamps so the mailmare could read it!” - FRAGILE ",
    Set: "Shipping & Handling",
    Art: "Arcadian Phoenix",
    Link:"https://docs.google.com/document/d/1XcIOfPeNu0jYISy8MzmWwNVUrgqJtd1fauMQxKIffRE/edit?tab=t.9gjbpzaaxhsz"
  },
  //Show Host Graphite Sketch
  {
    Image: "Images/Start/Show Host Graphite Sketch.jpg",
    Type: "Start",
    Name: "Show Host Graphite Sketch",
    Gender: "Masc",
    Species: "Pegasus",
    Timeline: "(None)",
    Keywords: "Draft Horses, OC",
    Character: "Graphite Sketch",
    Power: "This card cannot be moved or removed from the grid. This power cannot be copied.",
    Flavor: "“Hello everypony, and welcome to Draft Horses, the show that shot JFK!” - Timsplosion",
    Set: "youtube.com/@DraftHorses",
    Art: "Timsplosion",
    Link:"https://docs.google.com/document/d/1XcIOfPeNu0jYISy8MzmWwNVUrgqJtd1fauMQxKIffRE/edit?tab=t.29o3hlx1girb"
  },

  
  //Template
  /*{
    Image: "",
    Type: "Null",
    
    Link:""
  },
  */

  {
    Image: "Images/Ponies/Black Widow Rarity.png",
    Type: "Pony",
    Name: "Black Widow Rarity",
    Gender: "Femme",
    Species: "Unicorn",
    Timeline: "(None)",
    Keywords: "Mane 6",
    MultiplePonies: "No",
    Character: "Rarity",
    Power: "Malicious Machinations (New Goal): You may discard 1 active Goal and draw 1 new Goal to replace it.",
    Flavor: "She was black as silk and sharp as the nighttime wind. The stallions all had eyes for her, but she only had eyes for one thing: danger. - Casaflanka",
    Set: "Core Deck",
    Art: "Pixel Prism",
    Link:"https://docs.google.com/document/d/12TeI7bx8lL3SY0VRt4xqs1wYg_Vive6fAnT7JgPE7-c/edit?tab=t.bbgr64v8bzns"

  },
  {
    Image: "Images/Ponies/Fluffle Puff.png",
    Type: "Pony",
    Name: "Fluffle Puff",
    Gender: "Femme",
    Species: "Earth Pony",
    Timeline: "(None)",
    Keywords: "Fluffy Pony, OC",
    MultiplePonies: "No",
    Character: "Fluffle Puff",
    Power: "Mine! (Special): You may swap Fluffle Puff with a Pony card that is shipped with Chrysalis.",
    Flavor: "It's not that she was jealous. Not at all! It's just that she loved Chryssi so very much! - Thppt",
    Set: "Fluffle Puff Pack",
    Art: "Pixel Prism"

  },
  {
    Image: "Images/Ponies/Kefentse.png",
    Type: "Pony",
    Name: "Kefentse",
    Gender: "Femme",
    Species: "Alicorn",
    Timeline: "(None)",
    Keywords: "OC",
    MultiplePonies: "No",
    Character: "Kefentse",
    Power: "Overpowered Self-Insert (Copy): You may copy the power of any Pony card currently on the shipping grid.",
    Flavor: "Kefentse gazed down into her dark, crimson wine, sighing dejectedly in the shadows of the unsavory bar. The daughter of a friendly pony-raised dragon and a zebra sage... but she had been utterly shamed. No. She had been framed! There was no blood on her claws! - Blood and Darkness, Chapter 4",
    Set: "Core Deck",
    Art: "Pixel Prism"
  },
  {
    Image: "Images/Ponies/Vinyl Scratch.png",
    Type: "Pony",
    Name: "Vinyl Scratch",
    Gender: "Femme",
    Species: "Unicorn",
    Timeline: "(None)",
    Keywords: "(None)",
    MultiplePonies: "No",
    Character: "Vinyl Scratch",
    Power: "Remix (Replace): While this card is in your hand, you may discard a Pony card from the grid and play this card in its place.",
    Flavor: "Sobbing, Vinyl Scratch hung onto the weathervane, letting the rain dash against her cheeks like the tears that already fell. How could Octavia have been so hurtful? This was her music, her SOUL! That's when lightning struck, the electricity jabbing through her body and making it snap like a whip. - The Last Argument",
    Set: "Core Deck",
    Art: "Pixel Prism"
  },
  {
    Image: "Images/Ships/Cabin in the Woods, Awooo!.png",
    Type: "Ship",
    Name: "Cabin in the Woods, Awooo! ",
    Keywords: "Play From Discard",
    Power: "You may play the top card of the Pony discard pile using this Ship, rather than playing a Pony card from your hand.",
    Flavor: "Rarity's heart pounded. If the spooky noises outside didn't get to her, the romantic tension would! - Night Fright ",
    Set: "Core Deck",
    Art: "Pixel Prism "
  },
  {
    Image: "Images/Goals/Go Forth and Multiply.png",
    Type: "Goal",
    Name: "Go Forth and Multiply",
    Points: "1",
    Requirements: "You play 3 [Masc]/[Femme] Ships in a single turn.",
    Flavor: "I don't know, I just think het couples are boring… - Twilight's Secret Diary Volume XIX",
    Set: "Core Deck",
    Art: "Pixel Prism "
  }
  
];

//We get the total number of cards in the database and display it to the user
let cardCount = document.getElementById("card-count");
let shownCards = cardsList.length;
cardCount.textContent = shownCards;

//Create the cardsContainer div
const cardsContainer = document.getElementById("cards-container");
//We then loop through the cardsList and create a div for each card, then we append that div to the cardsContainer
for (let i = 0; i < cardsList.length; i++) {

  //Create the div tag
  const cardItem = document.createElement("div");
  cardItem.id = ("card-" + String(i));

  //Our current card we are putting into the div
  const card = cardsList[i];

  //Insert the link
  const cardLink = document.createElement("a");
  cardLink.href = card.Link;
  cardLink.target = "_blank";
  cardItem.appendChild(cardLink);

  //Insert the img
  const cardImage = document.createElement("img");
  cardImage.src = card.Image;
  cardLink.appendChild(cardImage);

  //Add the class card-item for styling later
  cardItem.classList.add("card-item");

  //Lastly append the card to the cardsContainer
  cardsContainer.appendChild(cardItem);
}

//Event for when the ENTER key is pressed
nameInput.addEventListener("keypress", function(event){
    if(event.key === "Enter"){
      //We take the input from the user and lowercase it to make matching case easier
      let searchTerms = nameInput.value.toLowerCase();
        //We default to our current card being index 0 just to initialize it
        let currentCard = document.getElementById("card-0");
        //Same reasoning for orSearchTerms. Just needs initialized first
        let orSearchTerms = ""
        //Reset the number of shown cards to the total number of cards in the database
        shownCards = cardsList.length;
        //If the user has not input any search terms, we reveal all the cards
        if(searchTerms == ""){
          for(let i = 0; i < cardsList.length; i++){
              currentCard = document.getElementById("card-" + String(i));
              if((currentCard.classList.contains("hidden-card"))){
                currentCard.classList.toggle("hidden-card");
              }
            }
        }
        else{
          //Firstly we reveal all the cards so we can hide the ones we don't want later
          for(let i = 0; i < cardsList.length; i++){
                currentCard = document.getElementById("card-" + String(i));
                if((currentCard.classList.contains("hidden-card"))){
                  currentCard.classList.toggle("hidden-card");
                }
              }
          //We split the search into seperate terms so we search each one individually. The OR operator is " / " and the AND operator is " | ". We split by the AND operator first, then the OR operator
          let splitSearchTerms = searchTerms.split(" | ");
          //Loop through the search terms and check if the current card matches any of the criteria. If it does not, we hide it
          for(let i = 0; i < splitSearchTerms.length; i++){
            //Splits our current search term and then checks each part of that array
            //If the user did not use the OR operator, this will just be an array of length 1
            orSearchTerms = splitSearchTerms[i].split(" / ");
            for(let i = 0; i < cardsList.length; i++){
              //Our current card we are checking against the search terms
              let currentCard = document.getElementById("card-" + String(i));
              //Initialize foundCriteria to false, so we assume that we are not going to find any matches
              let foundCriteria = false;
              for(let j = 0; j < orSearchTerms.length; j++){
                let newSearchTerm = "";
                //Type
                if(orSearchTerms[j].toLowerCase().includes("type:") || orSearchTerms[j].toLowerCase().includes("t:")){
                  if(orSearchTerms[j].toLowerCase().includes("type:")){
                    newSearchTerm = orSearchTerms[j].substring(orSearchTerms[j].indexOf("type:") + 5);
                  }
                  else if(orSearchTerms[j].toLowerCase().includes("t:")){
                    newSearchTerm = orSearchTerms[j].substring(orSearchTerms[j].indexOf("t:") + 2);
                  }
                  if(cardsList[i].Type.toLowerCase().includes(newSearchTerm)){
                    foundCriteria = true;
                  }
                }
                //Name
                if(orSearchTerms[j].toLowerCase().includes("name:") || orSearchTerms[j].toLowerCase().includes("n:")){
                  if(orSearchTerms[j].toLowerCase().includes("name:")){
                    newSearchTerm = orSearchTerms[j].substring(orSearchTerms[j].indexOf("name:") + 5);
                  }
                  else if(orSearchTerms[j].toLowerCase().includes("n:")){
                    newSearchTerm = orSearchTerms[j].substring(orSearchTerms[j].indexOf("n:") + 2);
                  }
                  if(cardsList[i].Name.toLowerCase().includes(newSearchTerm)){
                    foundCriteria = true;
                  }
                }
                //Gender
                if((cardsList[i].Type.toLowerCase() == "pony" || cardsList[i].Type.toLowerCase() == "start") && (orSearchTerms[j].toLowerCase().includes("gender:") || orSearchTerms[j].toLowerCase().includes("g:"))){
                  if(orSearchTerms[j].toLowerCase().includes("gender:")){
                    newSearchTerm = orSearchTerms[j].substring(orSearchTerms[j].indexOf("gender:") + 7);
                  }
                  else if(orSearchTerms[j].toLowerCase().includes("g:")){
                    newSearchTerm = orSearchTerms[j].substring(orSearchTerms[j].indexOf("g:") + 2);
                  }
                  if(cardsList[i].Gender.toLowerCase().includes(newSearchTerm)){
                    foundCriteria = true;
                  }
                }
                //Species
                //Excludes Ships and Goals becuase they don't have a Species
                if((cardsList[i].Type.toLowerCase() == "pony" || cardsList[i].Type.toLowerCase() == "start") && (orSearchTerms[j].toLowerCase().includes("species:") || orSearchTerms[j].toLowerCase().includes("spe:"))){
                  if(orSearchTerms[j].toLowerCase().includes("species:")){
                    newSearchTerm = orSearchTerms[j].substring(orSearchTerms[j].indexOf("species:") + 8);
                  }
                  else if(orSearchTerms[j].toLowerCase().includes("spe:")){
                    newSearchTerm = orSearchTerms[j].substring(orSearchTerms[j].indexOf("spe:") + 4);
                  }
                  if(cardsList[i].Species.toLowerCase().includes(newSearchTerm)){
                    foundCriteria = true;
                  }
                }
                //Timeline
                //Excludes Ships and Goals becuase they don't have a Timeline
                if((cardsList[i].Type.toLowerCase() == "pony" || cardsList[i].Type.toLowerCase() == "start") && (orSearchTerms[j].toLowerCase().includes("timeline:") || orSearchTerms[j].toLowerCase().includes("time:"))){
                  if(orSearchTerms[j].toLowerCase().includes("timeline:")){
                    newSearchTerm = orSearchTerms[j].substring(orSearchTerms[j].indexOf("timeline:") + 9);
                  }
                  else if(orSearchTerms[j].toLowerCase().includes("time:")){
                    newSearchTerm = orSearchTerms[j].substring(orSearchTerms[j].indexOf("time:") + 5);
                  }
                  if(cardsList[i].Timeline.toLowerCase().includes(newSearchTerm)){
                    foundCriteria = true;
                  }
                }
                //Keywords
                //Excludes Goals becuase they don't have keywords
                if((!(cardsList[i].Type.toLowerCase() == "goal")) && (orSearchTerms[j].toLowerCase().includes("keyword:") || orSearchTerms[j].toLowerCase().includes("k:"))){
                  if(orSearchTerms[j].toLowerCase().includes("keyword:")){
                    newSearchTerm = orSearchTerms[j].substring(orSearchTerms[j].indexOf("keyword:") + 8);
                  }
                  else if(orSearchTerms[j].toLowerCase().includes("k:")){
                    newSearchTerm = orSearchTerms[j].substring(orSearchTerms[j].indexOf("k:") + 2);
                  }
                  if(cardsList[i].Keywords.toLowerCase().includes(newSearchTerm)){
                    foundCriteria = true;
                  }
                }
                //Points
                //Limits it to Goals becuase they are the only cards that have points
                if(cardsList[i].Type.toLowerCase() == "goal" && (orSearchTerms[j].toLowerCase().includes("points:"))){
                  if(orSearchTerms[j].toLowerCase().includes("points:")){
                    newSearchTerm = orSearchTerms[j].substring(orSearchTerms[j].indexOf("points:") + 7);
                  }
                  if(cardsList[i].Points.toLowerCase().includes(newSearchTerm)){
                    foundCriteria = true;
                  }
                }
                //Multiple Ponies
                //Excludes Ships and Goals becuase they don't have any Ponies
                if((cardsList[i].Type.toLowerCase() == "pony" || cardsList[i].Type.toLowerCase() == "start") && (orSearchTerms[j].toLowerCase().includes("multiple ponies:") || orSearchTerms[j].toLowerCase().includes("mp:"))){
                  if(orSearchTerms[j].toLowerCase().includes("multiple ponies:")){
                    newSearchTerm = orSearchTerms[j].substring(orSearchTerms[j].indexOf("multiple ponies:") + 15);
                  }
                  else if(orSearchTerms[j].toLowerCase().includes("mp:")){
                    newSearchTerm = orSearchTerms[j].substring(orSearchTerms[j].indexOf("mp:") + 3);
                  }
                  if(cardsList[i].MultiplePonies.toLowerCase().includes(newSearchTerm)){
                    foundCriteria = true;
                  }
                }
                //Character
                //Excludes Ships and Goals becuase they don't have any Ponies
                if((cardsList[i].Type.toLowerCase() == "pony" || cardsList[i].Type.toLowerCase() == "start") && (orSearchTerms[j].toLowerCase().includes("character:") || orSearchTerms[j].toLowerCase().includes("char:"))){
                  if(orSearchTerms[j].toLowerCase().includes("character:")){
                    newSearchTerm = orSearchTerms[j].substring(orSearchTerms[j].indexOf("character:") + 9);
                  }
                  else if(orSearchTerms[j].toLowerCase().includes("char:")){
                    newSearchTerm = orSearchTerms[j].substring(orSearchTerms[j].indexOf("char:") + 5);
                  }
                  if(cardsList[i].Character.toLowerCase().includes(newSearchTerm)){
                    foundCriteria = true;
                  }
                }
                //Power
                //Excludes Goals becuase they don't have powers
                if((!(cardsList[i].Type.toLowerCase() == "goal")) && (orSearchTerms[j].toLowerCase().includes("power:") || orSearchTerms[j].toLowerCase().includes("p:"))){
                  if(orSearchTerms[j].toLowerCase().includes("power:")){
                    newSearchTerm = orSearchTerms[j].substring(orSearchTerms[j].indexOf("power:") + 6);
                  }
                  else if(orSearchTerms[j].toLowerCase().includes("p:")){
                    newSearchTerm = orSearchTerms[j].substring(orSearchTerms[j].indexOf("p:") + 2);
                  }
                  if(cardsList[i].Power.toLowerCase().includes(newSearchTerm)){
                    foundCriteria = true;
                  }
                }
                //Requirements
                //Limits it to Goals becuase they are the only cards that have requirements
                if(cardsList[i].Type.toLowerCase() == "goal" && (orSearchTerms[j].toLowerCase().includes("requirements:") || orSearchTerms[j].toLowerCase().includes("req:"))){
                  if(orSearchTerms[j].toLowerCase().includes("requirements:")){
                    newSearchTerm = orSearchTerms[j].substring(orSearchTerms[j].indexOf("requirements:") + 12);
                  }
                  else if(orSearchTerms[j].toLowerCase().includes("req:")){
                    newSearchTerm = orSearchTerms[j].substring(orSearchTerms[j].indexOf("req:") + 4);
                  }
                  if(cardsList[i].Requirements.toLowerCase().includes(newSearchTerm)){
                    foundCriteria = true;
                  }
                }
                //Flavor
                if(orSearchTerms[j].toLowerCase().includes("flavor:") || orSearchTerms[j].toLowerCase().includes("f:")){
                  if(orSearchTerms[j].toLowerCase().includes("flavor:")){
                    newSearchTerm = orSearchTerms[j].substring(orSearchTerms[j].indexOf("flavor:") + 7);
                  }
                  else if(orSearchTerms[j].toLowerCase().includes("f:")){
                    newSearchTerm = orSearchTerms[j].substring(orSearchTerms[j].indexOf("f:") + 2);
                  }
                  if(cardsList[i].Flavor.toLowerCase().includes(newSearchTerm)){
                    foundCriteria = true;
                  }
                }
                //Set
                if(orSearchTerms[j].toLowerCase().includes("set:")){
                  if(orSearchTerms[j].toLowerCase().includes("set:")){
                    newSearchTerm = orSearchTerms[j].substring(orSearchTerms[j].indexOf("set:") + 4);
                  }
                  if(cardsList[i].Set.toLowerCase().includes(newSearchTerm)){
                    foundCriteria = true;
                  }
                }
                //Art
                if(orSearchTerms[j].toLowerCase().includes("art:")){
                  if(orSearchTerms[j].toLowerCase().includes("art:")){
                    newSearchTerm = orSearchTerms[j].substring(orSearchTerms[j].indexOf("art:") + 4);
                  }
                  if(cardsList[i].Art.toLowerCase().includes(newSearchTerm)){
                    foundCriteria = true;
                  }
                }
              }
              if(foundCriteria == false && !(currentCard.classList.contains("hidden-card"))){
                currentCard.classList.toggle("hidden-card");
                shownCards--;
              }
            }
          }
        }
      cardCount.textContent = shownCards;
    }
  }
)