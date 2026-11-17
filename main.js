const nameInput = document.getElementById("name");

const cardsList = [
  //Each Card and all of its attributes
  //#region Start Cards
  //"Anonymous" 4 Chan User Echo
  {
    Image: "Images/Start/“Anonymous” 4 Chan User Echo.jpg",
    Type: "Start",
    MultiplePonies:"No / False",
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
    MultiplePonies:"No / False",
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
    MultiplePonies:"Yes / True",
    Name: "Cutie Mark Crusaders: Fanfic Authors!",
    Gender: "Femme",
    Species: "Earth Pony, Pegasus, Unicorn",
    Timeline: "(None)",
    Keywords: "Apple, Apple Bloom, CMC, Scootaloo, Sweetie Belle",
    Character: "Sweetie Belle, Scootaloo, Apple Bloom",
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
    MultiplePonies:"No / False",
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
    MultiplePonies:"No / False",
    Name: "Fanfic Author Discord",
    Gender: "Masc",
    Species: "Alicorn",
    Timeline: "(None)",
    Keywords: "Draconequus, Elder, Twilight Sparkle",
    Character: "Discord, Twilight Sparkle",
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
    MultiplePonies:"No / False",
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
    MultiplePonies:"No / False",
    Name: "Fanfic Author Gabby Gums",
    Gender: "Femme",
    Species: "Earth Pony, Pegasus, Unicorn",
    Timeline: "(None)",
    Keywords: "Apple, Apple Bloom, CMC, Scootaloo, Sweetie Belle",
    Character: "Gabby Gums, Apple Bloom, Scootaloo, Sweetie Belle",
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
    MultiplePonies:"No / False",
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
    MultiplePonies:"No / False",
    Name: "Fanfic Detective Rarity",
    Gender: "Femme",
    Species: "Unicorn",
    Timeline: "(None)",
    Keywords: "Mane 6, Shadow Shade",
    Character: "Rarity, Shadow Spade",
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
    MultiplePonies:"No / False",
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
    MultiplePonies:"No / False",
    Name: "Future Soarin, Alicorn of Spacetime",
    Gender: "Masc",
    Species: "Alicorn",
    Timeline: "Dystopian Future",
    Keywords: "Apple, Elder",
    Character: "Future Soarin, Soarin",
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
    MultiplePonies:"No / False",
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
    MultiplePonies:"No / False",
    Name: "Grand Creator Fausticorn",
    Gender: "Femme",
    Species: "Alicorn",
    Timeline: "(None)",
    Keywords: "Lauren Faust",
    Character: "Fausticorn, Lauren Faust",
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
    MultiplePonies:"No / False",
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
    MultiplePonies:"No / False",
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
    MultiplePonies:"No / False",
    Name: "Mix Master Magic",
    Gender: "Femme",
    Species: "Alicorn",
    Timeline: "(None)",
    Keywords: "Mane 6, Princess, Twilight Sparkle",
    Character: "Twilight Sparkle",
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
    MultiplePonies:"No / False",
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
    MultiplePonies:"No / False",
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
  //#endregion
  //#region Pony Cards
  //#region Pony - 0-9
  //(None)
  {
    Image: "Images/Ponies/0-9/(None).jpg",
    Type: "Pony",
    MultiplePonies:"No / False",
    Name: "(None)",
    Gender: "Masc",
    Species: "Earth Pony",
    Timeline: "(None)",
    Keywords: "(None)",
    Character: "(None)",
    Power: "I've Been Through the Desert (Draw): You may draw 1 card from the Ship or Pony deck.",
    Flavor: "It felt good to be out of the rain In the desert, you can remember your name 'Cause there ain't no one for to give you no pain - A Horse With No Name - America",
    Set: "Card by Glitchen",
    Art: "America",
    Link:"https://docs.google.com/document/d/156p_g_qgZ8BMnbCx9chPMnXb4m0Rd1uy1Uwb47l6x-0/edit?tab=t.0"
  },
  //7hrone
  {
    Image: "Images/Ponies/0-9/7hrone.jpg",
    Type: "Pony",
    MultiplePonies:"No / False",
    Name: "7hrone",
    Gender: "Masc",
    Species: "Pegasus",
    Timeline: "(None)",
    Keywords: "OC",
    Character: "7hrone",
    Power: "Mine (Special): If Golden Tone is on the grid, 7hrone can only be played onto the grid shipped with her. While this card is in your hand, if each of Golden Tone's sides has a Ship card attached to it, you may discard a Pony card that is shipped with Golden Tone and play this card in its place.",
    Flavor: "Mine. - Scribbled writing on one of Golden Tone's legs.",
    Set: "Card by EmkayMLP",
    Art: "EmkayMLP",
    Link:"https://docs.google.com/document/d/156p_g_qgZ8BMnbCx9chPMnXb4m0Rd1uy1Uwb47l6x-0/edit?tab=t.adnq3st1gq5x"
  },
  //#endregion
  //#region Pony - A
  //Abarenbou
  {
    Image: "Images/Ponies/A/Abarenbou.jpg",
    Type: "Pony",
    MultiplePonies:"No / False",
    Name: "Abarenbou",
    Gender: "Masc",
    Species: "Unicorn",
    Timeline: "(None)",
    Keywords: "OC",
    Character: "Abarenbou",
    Power: "Abarenbou's Card Collection (Special): Starting with you, each player in turn order randomly takes a card from the hand of the player to their left and puts it into their own hand. This power cannot be copied.",
    Flavor: "“Wow, I collect these cards too! I have this one... Here, let me show you... I have these ones too; I think they're rare... Uh, this card was yours, right?” - Heart of the Cards",
    Set: "No Holds Barred: Card by Abarenbou",
    Art: "Pixel Prism",
    Link:"https://docs.google.com/document/d/1qvRWtGuBPBBRmH-rW9zpW0VHJLUqBFfTRg0PlqhXbcY/edit?tab=t.3wn0a41tibw2"
  },
  //Abidella
  {
    Image: "Images/Ponies/A/Abidella.jpg",
    Type: "Pony",
    MultiplePonies:"No / False",
    Name: "Abidella",
    Gender: "Femme",
    Species: "Alicorn",
    Timeline: "(None)",
    Keywords: "OC",
    Character: "Abidella",
    Power: "Back to Life (Special): You may play the top card of the Pony discard pile onto the grid using the top card of the Ship deck. Neither of those cards' powers activate.",
    Flavor: "Abidella is known as the Tree of Life and lives in an unknown location within the Everfree Forest that not many have heard of and helps those who are lost and guides them to the Garden of Life or back to their home. - In the Garden",
    Set: "Card by Raribot",
    Art: "Fur-What-Loo",
    Link:"https://docs.google.com/document/d/1qvRWtGuBPBBRmH-rW9zpW0VHJLUqBFfTRg0PlqhXbcY/edit?tab=t.2fgojvfrzzps"
  },
  //Aces of Aces
  {
    Image: "Images/Ponies/A/Ace Of Aces.jpg",
    Type: "Pony",
    MultiplePonies:"No / False",
    Name: "Aces of Aces",
    Gender: "Femme",
    Species: "Pegasus",
    Timeline: "(None)",
    Keywords: "Hero, Zipporwhill",
    Character: "Zipporwhill",
    Power: "Friendship Through Firepower (Special): You may discard another player's achieved Goals. If you do, that player achieves Goals from the top of the Goal deck equal to the number of Goals they discarded. If that player would win the game as a result of this power, you also win the game. This power cannot be copied.",
    Flavor: "She'd tried everything, but Ripley wouldn't listen. Whatever he'd become was clearly beyond all words now. All but two: \"Full power.\" - Shoot For The Stars, Chapter 1",
    Set: "Magical Mares",
    Art: "BefishProductions",
    Link:"https://docs.google.com/document/d/1qvRWtGuBPBBRmH-rW9zpW0VHJLUqBFfTRg0PlqhXbcY/edit?tab=t.yneuk062o19b"
  },
  //Adagio Dazzle, The Leader
  {
    Image: "Images/Ponies/A/Adagio Dazzle, The Leader.jpg",
    Type: "Pony",
    MultiplePonies:"No / False",
    Name: "Adagio Dazzle, The Leader",
    Gender: "Femme",
    Species: "Earth Pony",
    Timeline: "(None)",
    Keywords: "Dazzlings, Siren, Villain",
    Character: "Adagio Dazzle",
    Power: "Now You Need Us (Replace): While this card is in your hand, you may discard a Pony card from the grid and play this card in its place.",
    Flavor: "With their mystic pendants restored once more, they would finally have their revenge. And the first to be enslaved would be the one who banished them... Star Swirl himself. Adagio felt her heart thrum in anticipation of that moment. - The Beckoning",
    Set: "Panel of Ponies",
    Art: "KP-ShadowSquirrel",
    Link:"https://docs.google.com/document/d/1qvRWtGuBPBBRmH-rW9zpW0VHJLUqBFfTRg0PlqhXbcY/edit?tab=t.1szrykweumkb"
  },
  //Adjutant
  {
    Image: "Images/Ponies/A/Adjutant.jpg",
    Type: "Pony",
    MultiplePonies:"No / False",
    Name: "Adjutant",
    Gender: "Masc",
    Species: "Alicorn",
    Timeline: "Dystopian Future",
    Keywords: "Logic Gate, OC",
    Character: "Adjutant, Logic Gate",
    Power: "Retroactive Continuity (Special): You may choose up to 2 Ship and/or Pony cards on the grid and return them to your hand. This power cannot be copied.",
    Flavor: "She couldn't believe her ears as the blue stallion spoke, his gaze inscrutable. \"You seem to grossly misunderstand the purpose of timeline management. I am not a prince of love or friendship. Time is a purview of necessary evils.\" - Of Ponies and Peril: Operation Paradox",
    Set: "No Holds Barred: Card by Makuru",
    Art: "Pixel Prism",
    Link:"https://docs.google.com/document/d/1qvRWtGuBPBBRmH-rW9zpW0VHJLUqBFfTRg0PlqhXbcY/edit?tab=t.fz4vy87lkjxl",
  },
  //Adorable Bat Twins Melting & Ignic Rhythm
  {
    Image: "Images/Ponies/A/Adorable Bat Twins Melting & Ignic Rhythm.jpg",
    Type: "Pony",
    MultiplePonies:"Yes / True",
    Name: "Adorable Bat Twins Melting & Ignic Rhythm",
    Gender: "Masc, Femme",
    Species: "Pegasus",
    Timeline: "(None)",
    Keywords: "Batpony, OC, Twins",
    Character: "Melting,  Ignic Rhythm",
    Power: "This card counts as 2 Ponies. One [Masc] and one [Femme]. Preferred Cuddle Partner (Special): As long as Adorable Bat Twins Melting & Ignic Rhythm are on the grid, all new Ship cards must be played off of them if able. This includes playing a Ship card between them and an adjacent Pony card.",
    Flavor: "\"The world could handle one of them, but was not prepared for two.\" - Two Heads Are Better Than One",
    Set: "Nocturnal Adventures",
    Art: "Koonzy",
    Link:"https://docs.google.com/document/d/1qvRWtGuBPBBRmH-rW9zpW0VHJLUqBFfTRg0PlqhXbcY/edit?tab=t.6sgsc3f9miek"
  },
  //Adventure Expert Daring Do
  {
    Image: "Images/Ponies/A/Adventure Expert Daring Do.jpg",
    Type: "Pony",
    MultiplePonies:"No / False",
    Name: "Adventure Expert Daring Do",
    Gender: "Femme",
    Species: "Pegasus",
    Timeline: "(None)",
    Keywords: "A.K. Yearling",
    Character: "Daring Do, A.K. Yearling",
    Power: "This Belongs in a Museum (Swap): You may swap 2 Pony cards on the shipping grid.",
    Flavor: "As the mist made of blood and darkness pursued her down the jungle-foliage hallway, Daring Do felt fear grip her chest like a cold, clammy bite! She only wished Twilight were there to save her! - The Mists of Alki Tumba",
    Set: "Adventure Pack",
    Art: "Pixel Prism",
    Link:"https://docs.google.com/document/d/1qvRWtGuBPBBRmH-rW9zpW0VHJLUqBFfTRg0PlqhXbcY/edit?tab=t.lcjjopjwhacv"
  },
  //Aeterna
  {
    Image: "Images/Ponies/A/Aeterna.jpg",
    Type: "Pony",
    MultiplePonies:"No / False",
    Name: "Aeterna",
    Gender: "Femme",
    Species: "Changeling",
    Timeline: "Dystopian Future",
    Keywords: "Flickering Oracle, OC",
    Character: "Aeterna, Flickering Oracle",
    Power: "Revisionist History (Special): You may copy the power of any non-Changeling Pony card currently on the shipping grid and/or apply the power of any non-Love Poison Ship card currently on the shipping grid. This power cannot be copied.",
    Flavor: "She hastily jotted down a few words on the scroll in front of her, causing a terribly confused mare to mysteriously appear before her. She sighed, thoroughly exasperated. \"I can't stand being put on shipping duty, sometimes...\" - Of Ponies and Peril: Operation Parallax",
    Set: "No Holds Barred: Card by Makuru",
    Art: "Pixel Prism",
    Link:"https://docs.google.com/document/d/1qvRWtGuBPBBRmH-rW9zpW0VHJLUqBFfTRg0PlqhXbcY/edit?tab=t.m2orui9fv519"
  },
  //Ahcyknnt
  {
    Image: "Images/Ponies/A/Ahcyknnt.jpg",
    Type: "Pony",
    MultiplePonies:"No / False",
    Name: "Ahcyknnt",
    Gender: "Femme",
    Species: "Changeling",
    Timeline: "(None)",
    Keywords: "OC",
    Character: "(None)",
    Power: "Riomjvonmlx Yvstskc (Jcecmtp): Pbu mer gfcy tlx tfjer sy eel nor-Vlragepbrx Conc veiq cuvkiegly sg xyr shmitzag gvbh rad/ov ttgyy tlx tfjer sy eel nor-Esmr Pomlse Fhit veiq cuvkiegly sg xyr shmitzag gvbh. Kuis thave cargsk oe csimvq.",
    Flavor: "Ij rsl pan vxeu ghiw, rsl'ee tvrmet wac msf uarh - Wim Yogw",
    Set: "No Holds Barred: Card by Makuru",
    Art: "Pixel Prism",
    Link:"https://docs.google.com/document/d/1qvRWtGuBPBBRmH-rW9zpW0VHJLUqBFfTRg0PlqhXbcY/edit?tab=t.cr4dwy6ymdwb"
  },
  //Alcoholicorn Berry Punch
  {
    Image: "Images/Ponies/A/Alcoholicorn Berry Punch.jpg",
    Type: "Pony",
    MultiplePonies:"No / False",
    Name: "Alcoholicorn Berry Punch",
    Gender: "Femme",
    Species: "Alicorn",
    Timeline: "(None)",
    Keywords: "Elder, Princess",
    Character: "Berry Punch",
    Power: "Join the Party (Draw): You may draw 1 card from the Ship or Pony deck.",
    Flavor: "As the magic surrounded her and flowed through her, she learned that wine wasn't the only thing that was intoxicating. - Immortality is a Pinot Noir Away",
    Set: "Brony Brewer Con Exclusive",
    Art: "BerryPAWNCH",
    Link:"https://docs.google.com/document/d/1qvRWtGuBPBBRmH-rW9zpW0VHJLUqBFfTRg0PlqhXbcY/edit?tab=t.pbl4332nll91"
  },
  //Alicorn Big Mac
  {
    Image: "Images/Ponies/A/Alicorn Big Mac.jpg",
    Type: "Pony",
    MultiplePonies:"No / False",
    Name: "Alicorn Big Mac", 
    Gender: "Masc",
    Species: "Alicorn",
    Timeline: "(None)",
    Keywords: "Apple, Princess",
    Character: "Big Mac",
    Power: "The Larson Effect (Special): As long as Alicorn Big Mac is on the grid, all other Ponies on the grid become [Alicorns] and gain the Princess keyword, and all Shapeshift powers must copy Alicorn Big Mac even if they normally couldn't.",
    Flavor: "\"I am become Princess, the Devourer of Apples.\" - Runes scratched into the wall of a ruined temple.",
    Set: "2015 Workshop Cards",
    Art: "Pixel Prism",
    Link:"https://docs.google.com/document/d/1qvRWtGuBPBBRmH-rW9zpW0VHJLUqBFfTRg0PlqhXbcY/edit?tab=t.mig32ts7x03b"
  },
  //Aloe & Lotus
  {
    Image: "Images/Ponies/A/Aloe & Lotus.jpg",
    Type: "Pony",
    MultiplePonies:"Yes / True",
    Name: "Aloe & Lotus",
    Gender: "Femme",
    Species: "Earth Pony",
    Timeline: "(None)",
    Keywords: "Spa Pony",
    Character: "Aloe, Lotus",
    Power: "This card counts as 2 Ponies. Makeover (New Goal): You may discard 1 active Goal and draw 1 new Goal to replace it.",
    Flavor: "\"Oh, ja! You are vanting ze couple's massage?\" Aloe cooed, nudging her stuttering client towards the spa room. Lotus smiled at him, dimming the lights with a mischievous glint in her eye. - The Ultimate Relaxation",
    Set: "Core Deck",
    Art: "Pixel Prism",
    Link:"https://docs.google.com/document/d/1qvRWtGuBPBBRmH-rW9zpW0VHJLUqBFfTRg0PlqhXbcY/edit?tab=t.v5zahmmhvprp"
  },
  //Aloe, Spa Expert
  {
    Image: "Images/Ponies/A/Aloe, Spa Expert.jpg",
    Type: "Pony",
    MultiplePonies:"No / False",
    Name: "Aloe, Spa Expert",
    Gender: "Femme",
    Species: "Earth Pony",
    Timeline: "(None)",
    Keywords: "Spa Pony",
    Character: "Aloe",
    Power: "Sweet Massage (Special): You may swap 2 Pony cards on the shipping grid. Then, if this card is shipped with Lotus, Spa Expert, you may search the Ship and/or Pony discard piles for up to 2 cards of your choice and put them into your hand. If either of those cards is still in your hand at the end of your turn, discard them.",
    Flavor: "\"Welcome to ze Ponyville Day Spa. Please feel free to use any of our services.\" - Special Treatment",
    Set: "An Extra Special Spa Day",
    Art: "AsajioPie01",
    Link:"https://docs.google.com/document/d/1qvRWtGuBPBBRmH-rW9zpW0VHJLUqBFfTRg0PlqhXbcY/edit?tab=t.m1ulshx9abio"
  },
  //Alton
  {
    Image: "Images/Ponies/A/Alton.jpg",
    Type: "Pony",
    MultiplePonies:"No / False",
    Name: "Alton",
    Gender: "Femme",
    Species: "Unicorn",
    Timeline: "(None)",
    Keywords: "OC",
    Character: "Alton",
    Power: "Better Living Through Alchemy (Special): You may search the Ship deck or discard pile for a Love Poison and put it into your hand. Shuffle the Ship deck afterwards. If that card is still in your hand at the end of your turn, discard it. This power cannot be copied.",
    Flavor: "His lips said, \"Get the hay away from me, you annoying twit,” but his eyes said... “Read my lips.\" - Get Off My Property, or I Will Set You on Fire, I Swear to Faust: An Unauthorized Biography",
    Set: "Card by MerriAuthor",
    Art: "MerriAuthor",
    Link:"https://docs.google.com/document/d/1qvRWtGuBPBBRmH-rW9zpW0VHJLUqBFfTRg0PlqhXbcY/edit?tab=t.juz0vl6aanky"
  },
  //An Entire Swarm of Breezies
  {
    Image: "Images/Ponies/A/An Entire Swarm of Breezies.jpg",
    Type: "Pony",
    MultiplePonies:"Yes / True",
    Name: "An Entire Swarm of Breezies",
    Gender: "Masc, Femme",
    Species: "Pegasus",
    Timeline: "(None)",
    Keywords: "Breezie",
    Character: "(None)",
    Power: "This card may count as either [Masc] or [Femme] for all Goals, Ships, and powers. Swarm (Special): An Entire Swarm of Breezies counts as 10 Ponies. You heard me. 10 Ponies.",
    Flavor: "The delicate creatures placed spindly hooves on their spinning skulls. They had no idea how they’d gotten into this predicament, but there was no doubt... they were positively intrigued. - A Breezie Sunday",
    Set: "2015 Con Exclusives",
    Art: "Pixel Prism",
    Link:"https://docs.google.com/document/d/1qvRWtGuBPBBRmH-rW9zpW0VHJLUqBFfTRg0PlqhXbcY/edit?tab=t.llrrygtytf0j"
  },
  //Angry Twilight
  {
    Image: "Images/Ponies/A/Angry Twilight.jpg",
    Type: "Pony",
    MultiplePonies:"No / False",
    Name: "Angry Twilight",
    Gender: "Femme",
    Species: "Unicorn",
    Timeline: "(None)",
    Keywords: "Mane 6, Sexual Dynamo, Twilight Sparkle",
    Character: "Twilight Sparkle",
    Power: "NO. (Special): You may discard 2 Ship cards from the shipping grid. If you do, remove all Spikes on the shipping grid from the game.",
    Flavor: "\"EUTHANASIA IS NOT ALWAYS IMMORAL,\" Twilight posited, \"TAKE FOR EXAMPLE: APPLEJACK.\" - Twilight Sparkle's Guide to Ethics Vol. 1",
    Set: "Horse Wife Pack",
    Art: "TJPones",
    Link:"https://docs.google.com/document/d/1qvRWtGuBPBBRmH-rW9zpW0VHJLUqBFfTRg0PlqhXbcY/edit?tab=t.fbrnnnjmldzd"
  },
  //Animated James
  {
    Image: "Images/Ponies/A/Animated James.jpg",
    Type: "Pony",
    MultiplePonies:"No / False",
    Name: "Animated James",
    Gender: "Masc",
    Species: "Earth Pony",
    Timeline: "(None)",
    Keywords: "OC, #horsefamous",
    Character: "Animated James",
    Power: "Continuity Error (Special): Reverse the game’s turn order. This power cannot be copied.",
    Flavor: "\"Hey!\" AnimatedJames shouted, \"I never wanted to be in this; take me out before it's too-\" and just like that, he was shipped with Nowacking. AnimatedJames cried in agony, \"WHY???\" - My Horrible Brain",
    Set: "Be completely honest, you never read this, so why should I put anything?",
    Art: "Animated James",
    Link:"https://docs.google.com/document/d/1qvRWtGuBPBBRmH-rW9zpW0VHJLUqBFfTRg0PlqhXbcY/edit?tab=t.uxbvohw6cgqu"
  },
  //Anti-Confectionery Rebel Pumpkin Cake
  {
    Image: "Images/Ponies/A/Anti-Confectionery Rebel Pumpkin Cake.jpg",
    Type: "Pony",
    MultiplePonies:"No / False",
    Name: "Anti-Confectionery Rebel Pumpkin Cake",
    Gender: "Femme",
    Species: "Unicorn",
    Timeline: "(None)",
    Keywords: "PCC",
    Character: "Pumpkin Cake",
    Power: "I Can't Eat This! (New Goal): You may discard 1 active Goal and draw 1 new Goal to replace it.",
    Flavor: "As the young mare stormed screaming out of her parents' cupcake-shaped house, Pumpkin's parents couldn't help but wonder where their daughter had picked up the strange notion that homegrown grass and ONLY homegrown grass was the appropriate pony diet. - Friction Fricassee",
    Set: "Ponyville University",
    Art: "Pixel Prism",
    Link:"https://docs.google.com/document/d/1qvRWtGuBPBBRmH-rW9zpW0VHJLUqBFfTRg0PlqhXbcY/edit?tab=t.7vdy9h8ie1kk"
  },
  //Antonymph Fluttershy
  {
    Image: "Images/Ponies/A/Antonymph Fluttershy.jpg",
    Type: "Pony",
    MultiplePonies:"No / False",
    Name: "Antonymph Fluttershy",
    Gender: "Femme",
    Species: "Pegasus",
    Timeline: "(None)",
    Keywords: "Mane 6",
    Character: "Fluttershy",
    Power: "Half of You Weren't Born Yet (Replace): While this card is in your hand, you may discard a Pony card from the grid and play this card in its place.",
    Flavor: "\"ZOMG! Rawr means I love you in dinosaur X3,\" Fluttershy giggled. \"Ma'am, you just need to say 'I do,'\" the pastor exasperatedly reminded the bride. - True Love At First Sight",
    Set: "Card by Str8aura",
    Art: "Str8aura",
    Link:"https://docs.google.com/document/d/1qvRWtGuBPBBRmH-rW9zpW0VHJLUqBFfTRg0PlqhXbcY/edit?tab=t.uxr33cfapcgr"
  },
  //Apple Bottom
  {
    Image: "Images/Ponies/A/Apple Bottom.jpg",
    Type: "Pony",
    MultiplePonies:"Yes / True",
    Name: "Apple Bottom",
    Gender: "Masc",
    Species: "Earth Pony",
    Timeline: "(None)",
    Keywords: "Apple, Apple Split",
    Character: "Apple Bottom, Apple Split",
    Power: "This card counts as 2 Ponies. Yeah, Like That Kind of Bottom (Special): As long as Apple Bottom is on the grid, at the end of each player's turn, that player must move Apple Bottom and a Ship card attached to him to another position on the grid.",
    Flavor: "\"Other stallions in the family buck trees. I buck the stallions who buck the trees, and in exchange, those stallions will give me whatever I want.\" - Twilight Sparkle and Friends Get Stuck in a Porta Potty",
    Set: "Tamersverse",
    Art: "Tamers12345",
    Link:"https://docs.google.com/document/d/1qvRWtGuBPBBRmH-rW9zpW0VHJLUqBFfTRg0PlqhXbcY/edit?tab=t.3d9e6tes0zoq"
  },
  //Apple Bottom, Never Technically Died
  {
    Image: "Images/Ponies/A/Apple Bottom, Never Technically Died.jpg",
    Type: "Pony",
    MultiplePonies:"Yes / True",
    Name: "Apple Bottom, Never Technically Died",
    Gender: "Masc",
    Species: "Earth Pony",
    Timeline: "(None)",
    Keywords: "Apple, Apple Split",
    Character: "Apple Bottom, Apple Split",
    Power: "This card counts as 2 Ponies. Why Would He Do Something Like That? (Special): During their turn, a player may play Apple Bottom, Never Technically Died from the Pony discard pile onto the grid using a Ship card in their hand.",
    Flavor: "\"He's cold, and he hurts me. I'm not blind, but I'd rather be hurt by him than be touched by some other stallion that doesn't care. And if he kills me, why should I be mad? Because his remorse would at least mean I existed, and it's not like I don't hurt him back too.\" - MY LITTLE PONY THE MOVIE: INFECTION",
    Set: "Tamersverse",
    Art: "Tamers12345",
    Link:"https://docs.google.com/document/d/1qvRWtGuBPBBRmH-rW9zpW0VHJLUqBFfTRg0PlqhXbcY/edit?tab=t.kt0iq14lqboq"
  },
  //Apple Split
  {
    Image: "Images/Ponies/A/Apple Split.jpg",
    Type: "Pony",
    MultiplePonies:"Yes / True",
    Name: "Apple Split",
    Gender: "Masc",
    Species: "Unicorn",
    Timeline: "(None)",
    Keywords: "Apple, Apple Bottom",
    Character: "Apple Bottom, Apple Split",
    Power: "This card counts as 2 Ponies. Murder Is Hot (Special): As long as Apple Split is on the grid, at the end of each player’s turn, that player must discard a Pony card other than Apple Split from the shipping grid. Do this an additional time if a Care Package with the Villain keyword is on the grid.",
    Flavor: "\"Now pass me over one of my ice cream cones so I can continue role-playing as the superior race.\" - Twilight Sparkle and Friends Get Stuck in a Porta Potty",
    Set: "Tamersverse",
    Art: "Tamers12345",
    Link:"https://docs.google.com/document/d/1qvRWtGuBPBBRmH-rW9zpW0VHJLUqBFfTRg0PlqhXbcY/edit?tab=t.tz7yo771iuj5"
  },
  //Apple Split & Care Package, Sadistic Reapers
  {
    Image: "Images/Ponies/A/Apple Split & Care Package, Sadistic Reapers.jpg",
    Type: "Pony",
    MultiplePonies:"Yes / True",
    Name: "Apple Split & Care Package, Sadistic Reapers",
    Gender: "Masc",
    Species: "Earth Pony / Pegasus",
    Timeline: "(None)",
    Keywords: "Apple, Apple Bottom, Villain",
    Character: "Apple Bottom, Apple Split, Care Package",
    Power: "This card counts as 3 Ponies. Two [Earth Ponies]  and one [Pegasus]. A Little Pruning (Special): Discard 2 Pony cards from the shipping grid.",
    Flavor: "\"Cleaning up any bloody messes would be such a bother.\" - MY LITTLE PONY THE MOVIE: INFECTION",
    Set: "Tamersverse",
    Art: "Tamers12345",
    Link:"https://docs.google.com/document/d/1qvRWtGuBPBBRmH-rW9zpW0VHJLUqBFfTRg0PlqhXbcY/edit?tab=t.2oe16dxnyc96"
  },
  //Applejack (The Male One)
  {
    Image: "Images/Ponies/A/Applejack (The Male One).jpg",
    Type: "Pony",
    MultiplePonies:"No / False",
    Name: "Applejack (The Male One)",
    Gender: "Masc",
    Species: "Earth Pony",
    Timeline: "Dimension 63",
    Keywords: "Apple, Mane 6",
    Character: "Applejack",
    Power: "Name's the Same (Special): While this card is in your hand, you may discard any Applejack from the grid and play this card in its place. When Applejack (The Male One) is played onto the grid, you may copy the power of any Applejack currently on the shipping grid.",
    Flavor: "Applejack stopped as she exited her barn and ran smack into an orange stallion with a western hat. “\"What the hay is going on here?\" she asked, confused by the new arrival. \"What's your name?\" she asked. \"Applejack?\" he replied. \"That's my name!\" she shot back. There was a slight pause, and both of them replied, \"Something's not right here...\" - The 63rd Dimension",
    Set: "The 63rd Dimension",
    Art: "Skipsy",
    Link:"https://docs.google.com/document/d/1qvRWtGuBPBBRmH-rW9zpW0VHJLUqBFfTRg0PlqhXbcY/edit?tab=t.58q8o5b0nggs"
  },
  //Applejack, Wellness Chef
  {
    Image: "Images/Ponies/A/Applejack, Wellness Chef.jpg",
    Type: "Pony",
    MultiplePonies:"No / False",
    Name: "Applejack, Wellness Chef",
    Gender: "Femme",
    Species: "Earth Pony",
    Timeline: "(None)",
    Keywords: "Apple, Mane 6, Spa Pony",
    Character: "Applejack",
    Power: "An Apple a Day (Special): You may search the Ship or Pony discard pile for 1 card of your choice and put it into your hand. If there are no other Pony cards on the grid with the Spa Pony keyword, discard 1 card from your hand. If the card you searched is still in your hand at the end of your turn, discard it.",
    Flavor: "\"Pardon me? Do you like apples?\" - Special Treatment",
    Set: "An Extra Special Spa Day",
    Art: "AsajioPie01",
    Link:"https://docs.google.com/document/d/1qvRWtGuBPBBRmH-rW9zpW0VHJLUqBFfTRg0PlqhXbcY/edit?tab=t.whv9vnlqlhsz"
  },
  //Applejack: The Cutest, Smartest, All-Around-Best Background Pony
  {
    Image: "Images/Ponies/A/Applejack_ The Cutest, Smartest, All-Around-Best, Background Pony.jpg",
    Type: "Pony",
    MultiplePonies:"No / False",
    Name: "Applejack: The Cutest, Smartest, All-Around-Best Background Pony",
    Gender: "Femme",
    Species: "Earth Pony",
    Timeline: "(None)",
    Keywords: "Apple, Mane 6",
    Character: "Applejack",
    Power: "Another Derpy Episode (Swap): You may swap 2 Pony cards on the shipping grid.",
    Flavor: "The day was saved again by Twilight and all her best friends: Fluttershy, Rainbow Dash, Pinkie Pie, and Rarity! - The Gang's All Here",
    Set: "Core Deck",
    Art: "Pixel Prism",
    Link:"https://docs.google.com/document/d/1qvRWtGuBPBBRmH-rW9zpW0VHJLUqBFfTRg0PlqhXbcY/edit?tab=t.tdxkkxq87401"
  },
  //Applejack's Parents
  {
    Image: "Images/Ponies/A/Applejack's Parents.jpg",
    Type: "Pony",
    MultiplePonies:"Yes / True",
    Name: "Applejack's Parents",
    Gender: "Masc, Femme",
    Species: "Earth Pony",
    Timeline: "(None)",
    Keywords: "Apple, Bright Mac, Pear Butter",
    Character: "Bright Mac, Pear Butter",
    Power: "This card counts as 2 Ponies. One [Masc] and one [Femme]. Shooting Stars (Special): You may discard this card from your hand to draw 2 cards from the Ship and/or Pony decks.",
    Flavor: "\"Applejack?\" Apple Bloom spoke softly into the dark room, the air feeling heavy though she couldn't put a hoof on why. \"When are Mom and Dad getting home?\" The only answer was the quiet sound of cider pouring into a shallow glass. \"Go eat your dinner, sugarcube.\" - The Longest Cider Season",
    Set: "Hearth's Warming",
    Art: "Pixel Prism",
    Link:""
  },
  //Arcana Mage Dusk Shine
  {
    Image: "Images/Ponies/A/Arcana Mage Dusk Shine.jpg",
    Type: "Pony",
    MultiplePonies:"No / False",
    Name: "Arcana Mage Dusk Shine",
    Gender: "Masc",
    Species: "Pegasus",
    Timeline: "(None)",
    Keywords: "Batpony, OC",
    Character: "Dusk Shine",
    Power: "Spell Master (New Goal): You may discard 1 active Goal and draw 1 new Goal to replace it.",
    Flavor: "\"The unknown is frightening, but by studying the past and the mysteries of the world, we can learn so much.\" - Mysteries of the Arcane",
    Set: "Nocturnal Adventure ",
    Art: "Koonzy",
    Link:"https://docs.google.com/document/d/1qvRWtGuBPBBRmH-rW9zpW0VHJLUqBFfTRg0PlqhXbcY/edit?tab=t.1n4fgkxupkbh"
  },
  //Archeological Junior Assistant Ada
  {
    Image: "Images/Ponies/A/Archeological Junior Assistant Ada.jpg",
    Type: "Pony",
    MultiplePonies:"No / False",
    Name: "Archeological Junior Assistant Ada",
    Gender: "Femme",
    Species: "Earth Pony",
    Timeline: "Dystopian Future",
    Keywords: "OC",
    Character: "Ada",
    Power: "Search the Bunker (Search): You may search the Ship or Pony discard pile for 1 card of your choice and put it into your hand. If that card is still in your hand at the end of your turn, discard it.",
    Flavor: "\"For Saint Celestia's sake, NO!!!\" burst Mr. Lair. \"Ada, you may be my daughter, and you may be very budding, but I'm not letting you into this... that… the...\" Mr. Lair stuttered. \"The bunker, Dad?\" Ada finished for her father. \"And can you tell me why?\" Mr. Lair sighed deeply, and his forehead wrinkled a bit. \"A tear in time.\" - Stuck Underground: The Prologue",
    Set: "CodeName: Mimimi",
    Art: "Arfaise",
    Link:"https://docs.google.com/document/d/1qvRWtGuBPBBRmH-rW9zpW0VHJLUqBFfTRg0PlqhXbcY/edit?tab=t.jxiswy7bpwwv"
  },
  //Archmage Twilight Sparkle
  {
    Image: "Images/Ponies/A/Archmage Twilight Sparkle.jpg",
    Type: "Pony",
    MultiplePonies:"No / False",
    Name: "Archmage Twilight Sparkle",
    Gender: "Femme",
    Species: "Alicorn",
    Timeline: "(None)",
    Keywords: "Mane 6, RPG",
    Character: "Twilight Sparkle",
    Power: "A Scholar's Knowledge (Search): You may search the Ship or Pony discard pile for 1 card of your choice and put it into your hand. If that card is still in your hand at the end of your turn, discard it.",
    Flavor: "\"Stand back,\" urged Twilight seriously, planting her hooves and drawing up her gaze to the puzzle. Her wings flared, and her horn lit up with power. Her spellbook glowed before her, one of its spells shimmering on the page. \"I'm about to try... MAGIC!\" - The Bloody Spires of X'natka'rak",
    Set: "Dungeon Delvers",
    Art: "Pixel Prism",
    Link:"https://docs.google.com/document/d/1qvRWtGuBPBBRmH-rW9zpW0VHJLUqBFfTRg0PlqhXbcY/edit?tab=t.wnu3ya4fyqpd"
  },
  //Arctic Heart
  {
    Image: "Images/Ponies/A/Arctic Heart.jpg",
    Type: "Pony",
    MultiplePonies:"No / False",
    Name: "Arctic Heart",
    Gender: "Femme",
    Species: "Earth Pony",
    Timeline: "(None)",
    Keywords: "OC",
    Character: "Arctic Heart",
    Power: "Nurse Back to Health (Special): You may play a Pony card from the Pony discard pile onto the grid using a Ship card in your hand.",
    Flavor: "Arctic Heart lives up in the mountains, taking care of the ponies who are cold and lost whenever they decide to hike up to her. - Below Freezing",
    Set: "Card by Raribot",
    Art: "Fur-What-Loo", 
    Link:"https://docs.google.com/document/d/1qvRWtGuBPBBRmH-rW9zpW0VHJLUqBFfTRg0PlqhXbcY/edit?tab=t.ipyhz5rrvrby"
  },
  //Aria
  {
    Image: "Images/Ponies/A/Aria.jpg",
    Type: "Pony",
    MultiplePonies:"No / False",
    Name: "Aria",
    Gender: "Femme",
    Species: "Pegasus",
    Timeline: "(None)",
    Keywords: "Dragon, OC",
    Character: "Aria",
    Power: "Slice and Dice (Special): Discard 3 Ship cards from the shipping grid.",
    Flavor: "Because no matter how murderous, how violent, how absolutely lethal Aria got, he just kept coming back for more. - Torn",
    Set: "No Holds Barred: Card by Vigilant Watch",
    Art: "Pixel Prism",
    Link:"https://docs.google.com/document/d/1qvRWtGuBPBBRmH-rW9zpW0VHJLUqBFfTRg0PlqhXbcY/edit?tab=t.dn6ie7wl0tex"
  },
  //Aria Blaze, The Plotter
  {
    Image: "Images/Ponies/A/Aria Blaze, The Plotter.jpg",
    Type: "Pony",
    MultiplePonies:"No / False",
    Name: "Aria Blaze, The Plotter",
    Gender: "Femme",
    Species: "Earth Pony",
    Timeline: "(None)",
    Keywords: "Dazzlings, Siren, Villain",
    Character: "Aria Blaze",
    Power: "Follow My Lead (New Goal): You may discard 1 active Goal and draw 1 new Goal to replace it.",
    Flavor: "While the spell required to bring them back to Equestria had denied them their true siren forms, they still held the siren's power. And there was something alluring about their new pony bodies... - The Beckoning",
    Set: "Panel of Ponies",
    Art: "KP-ShadowSquirrel",
    Link:"https://docs.google.com/document/d/1qvRWtGuBPBBRmH-rW9zpW0VHJLUqBFfTRg0PlqhXbcY/edit?tab=t.52ir17jvucf"
  },
  //Arinos
  {
    Image: "Images/Ponies/A/Arinos.jpg",
    Type: "Pony",
    MultiplePonies:"No / False",
    Name: "Arinos",
    Gender: "Masc",
    Species: "Alicorn",
    Timeline: "(None)",
    Keywords: "Clown, OC, Villain",
    Character: "Arinos",
    Power: "Autistic Gay Clown Pheromones (Special): Pony cards that are shipped with Arinos gain the Clown keyword.",
    Flavor: "\"The one and only Arinos appears at last. Grace me with your everlasting gaze immediately.\" - My Little Pony: Twilight Sparkle Fights a Clown? ? ? ? ? ?",
    Set: "Tamersverse",
    Art: "Tamers12345",
    Link:"https://docs.google.com/document/d/1qvRWtGuBPBBRmH-rW9zpW0VHJLUqBFfTRg0PlqhXbcY/edit?tab=t.ef65pykqf1dd"
  },
  //Arinos, Split in Two
  {
    Image: "Images/Ponies/A/Arinos, Split in Two.jpg",
    Type: "Pony",
    MultiplePonies:"No / False",
    Name: "Arinos, Split in Two", 
    Gender: "Masc",
    Species: "Alicorn",
    Timeline: "(None)",
    Keywords: "Clown, OC, Villain",
    Character: "Arinos",
    Power: "My Maker. I Need to Find My Maker (Special): As long as Arinos, Split in Two is on the grid, at the end of each player’s turn, that player must swap Arinos, Split in Two with another Pony card on the shipping grid.",
    Flavor: "\"This clown pony isn't just a piece of Apple Split. It's half of you too, isn't it, Soarin?” - My Little Pony: Twilight Sparkle Fights a Clown? ? ? ? ? ?",
    Set: "Tamersverse",
    Art: "Tamers12345",
    Link:"https://docs.google.com/document/d/1qvRWtGuBPBBRmH-rW9zpW0VHJLUqBFfTRg0PlqhXbcY/edit?tab=t.lqhex496zhkl"
  },
  //Artemis, Prince of Dreams
  {
    Image: "Images/Ponies/A/Artemis, Prince of Dreams.jpg",
    Type: "Pony",
    MultiplePonies:"No / False",
    Name: "Artemis, Prince of Dreams", 
    Gender: "Masc",
    Species: "Alicorn",
    Timeline: "Dimension 63",
    Keywords: "Elder, Luna, Princess",
    Character: "Luna",
    Power: "Nightmare Knight (Special): Until the end of your turn, Artemis, Prince of Dreams may count as any species for Goal requirements.",
    Flavor: "Twilight Sparkle moved over to the stallion prince and smiled at him in almost a sorry way. This really was Luna’s pair, unsure of his station and feeling awkward in various ways. - Discordia Diaries, Chapter 4",
    Set: "No Holds Barred: Card by Johanu Boulton",
    Art: "Pixel Prism",
    Link:"https://docs.google.com/document/d/1qvRWtGuBPBBRmH-rW9zpW0VHJLUqBFfTRg0PlqhXbcY/edit?tab=t.9xq66zh35q16"
  },
  //#endregion
  //#endregion
  /*
  //Template
  {
    Image: "",
    Type: "Pony",
    MultiplePonies:"No / False",
    
    Link:""
  },
  */
  

  {
    Image: "Images/Ponies/Black Widow Rarity.png",
    Type: "Pony",
    MultiplePonies:"No / False",
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
    MultiplePonies:"No / False",
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
    MultiplePonies:"No / False",
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
    MultiplePonies:"No / False",
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

//We get the total number of cards in the database and display it to the user
let numerator = document.getElementById("card-percent-numerator");
numerator.textContent = cardsList.length;
let denominator = document.getElementById("card-percent-denominator");
denominator.textContent = 1023;
let percentage = document.getElementById("percent-done");
percentage.textContent = Math.round((cardsList.length / 1023) * 100) / 100;

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
  cardImage.loading = "lazy";
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