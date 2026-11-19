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
    Power: "Revisionist History (Special): You may copy the power of any non-[Changeling] Pony card currently on the shipping grid and/or apply the power of any non-Love Poison Ship card currently on the shipping grid. This power cannot be copied.",
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
    Character: "Big Mac / Big Macintosh / Big McIntosh",
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
    Gender: "Masc",
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
  //#region Pony - B
  //B.B.B.F.F. Shining Armor
  {
    Image: "Images/Ponies/B/B.B.B.F.F. Shining Armor.jpg",
    Type: "Pony",
    MultiplePonies:"No / False",
    Name: "B.B.B.F.F. Shining Armor",
    Gender: "Masc",
    Species: "Unicorn (None)",
    Timeline: "(None)",
    Keywords: "(None)",
    Character: "Shining Armor",
    Power: "Helping Little Sis (Replace): While this card is in your hand, you may discard a Pony card from the grid and play this card in its place.",
    Flavor: "I'm surrounded by idiots! Nopony's really worthy of my exquisite genius except Shining. And maybe that foalsitter. Surely her name will come to me.... I think it starts with a C. - Twilight's Secret Diary, Volume IV",
    Set: "Core Deck",
    Art: "Pixel Prism", 
    Link:"https://docs.google.com/document/d/12TeI7bx8lL3SY0VRt4xqs1wYg_Vive6fAnT7JgPE7-c/edit?tab=t.6m1j5jkt3g47"
  },
  //Babs Seed, Life of the Party
  {
    Image: "Images/Ponies/B/Babs Seed, Life Of The Party.jpg",
    Type: "Pony",
    MultiplePonies:"No / False",
    Name: "Babs Seed, Life of the Party",
    Gender: "Femme",
    Species: "Earth Pony",
    Timeline: "(None)",
    Keywords: "Apple, CMC, Uni",
    Character: "Babs Seed",
    Power: "Shmoozing (Swap): You may swap 2 Pony cards on the shipping grid.",
    Flavor: "\"Apple cider,\" Babs slurred with a grin, tilting her mug toward each smiling pony around her in turn, \"is proof that Celestia loves us and wants us to be happy.\" All the ponies cheered! Little did they know what was coming. - Blood Moon",
    Set: "Ponyville University",
    Art: "Pixel Prism",
    Link:"https://docs.google.com/document/d/12TeI7bx8lL3SY0VRt4xqs1wYg_Vive6fAnT7JgPE7-c/edit?tab=t.tzb8avj2fhpd"
  },
  //Babs the Barber
  {
    Image: "Images/Ponies/B/Babs The Barber.jpg",
    Type: "Pony",
    MultiplePonies:"No / False",
    Name: "Babs the Barber",
    Gender: "Femme",
    Species: "Earth Pony",
    Timeline: "(None)",
    Keywords: "Apple, Babs Seed",
    Character: "Babs Seed",
    Power: "Just a Bad, Bad Hair Day (Special): You may discard a Pony card that is shipped with Babs the Barber and replace it with a Pony card from the Pony deck or discard pile. That card’s power does not activate. Shuffle the Pony deck afterwards. This power cannot be copied.",
    Flavor: "\"Don't move. I've got scissors and access to your neck.\" - The Demon Barber of Flank Street",
    Set: "Made Our Mark",
    Art: "Arcadian Phoenix",
    Link:"https://docs.google.com/document/d/12TeI7bx8lL3SY0VRt4xqs1wYg_Vive6fAnT7JgPE7-c/edit?tab=t.6iizwmu3letb"
  },
  //Badfic Readers Sly Shuffle & Duster Dawnhorse
  {
    Image: "Images/Ponies/B/Badfic Readers Sly Shuffle & Duster Dawnhorse.jpg",
    Type: "Pony",
    MultiplePonies:"No / False",
    Name: "Badfic Readers Sly Shuffle & Duster Dawnhorse",
    Gender: "Masc / Femme",
    Species: "Earth Pony",
    Timeline: "(None)",
    Keywords: "Eohippus, OC",
    Character: "Sly Shuffle (Left: Masc, Earth Pony, OC) / Duster Dawnhorse (Right: Femme, Earth Pony, Eohippus, OC)",
    Power: "This card counts as 2 Ponies. One [Masc] and one [Femme]. Public Humiliation (Special): Choose any Ship on the shipping grid. A player of your choice must either come up with a short story for that Ship and dramatically narrate it or skip their next turn. This power cannot be copied.",
    Flavor: "\"Sly Shuffle! I did it! I found the worst fanfiction in all of Equestria!\" The eohippus gleefully shoved a messy stack of freshly printed paper into the stallion's hooves. She tapped her little toes together, watching his lip curl in disgust. \"I know, right?! This will be perfect for the convention! Let's hope this 'Twilight Sparkle' never finds out.\" - Through the Fire and Flamers",
    Set: "Card by Rainbow-Smashed",
    Art: "Duster Dawnhorse",
    Link:"https://docs.google.com/document/d/12TeI7bx8lL3SY0VRt4xqs1wYg_Vive6fAnT7JgPE7-c/edit?tab=t.3fmzc1eq2uei"
  },
  //Bálor
  {
    Image: "Images/Ponies/B/Bálor.jpg",
    Type: "Pony",
    MultiplePonies:"No / False",
    Name: "Bálor / Balor",
    Gender: "Masc",
    Species: "Unicorn",
    Timeline: "(None)",
    Keywords: "Demon, OC, Villain",
    Character: "Bálor / Balor",
    Power: "Mine (Special): If Golden Tone is on the grid, Let's Have a Chat (Special): You may swap a Pony card that is shipped with Bálor with the Start card.",
    Flavor: "Bálor is known as the demon king of Tartarus. He will always try to get on your good side unless you cross him, and he won't hesitate to eliminate you in a snap. - The Dark Prince",
    Set: "Card by Raribot",
    Art: "Fur-What-Loo",
    Link:"https://docs.google.com/document/d/12TeI7bx8lL3SY0VRt4xqs1wYg_Vive6fAnT7JgPE7-c/edit?tab=t.aid70lz3yrdu"
  },
  //Baseball Slugger Moonshot
  {
    Image: "Images/Ponies/B/Baseball Slugger Moonshot.jpg",
    Type: "Pony",
    MultiplePonies:"No / False",
    Name: "Baseball Slugger Moonshot",
    Gender: "Masc",
    Species: "Pegasus" ,
    Timeline: "(None)",
    Keywords: "Batpony, OC",
    Character: "Moonshot",
    Power: "Out of the Park (New Goal): You may discard 1 active Goal and draw 1 new Goal to replace it.",
    Flavor: "\"Hey, batter, batter! Swing, batter, batter!\" - Up to Bat",
    Set: "Nocturnal Adventures",
    Art: "Koonzy",
    Link:"https://docs.google.com/document/d/12TeI7bx8lL3SY0VRt4xqs1wYg_Vive6fAnT7JgPE7-c/edit?tab=t.52wrauligobn"
  },
  //Batmare
  {
    Image: "Images/Ponies/B/Batmare.jpg",
    Type: "Pony",
    MultiplePonies:"No / False",
    Name: "Batmare",
    Gender: "Femme",
    Species: "Pegasus",
    Timeline: "(None)",
    Keywords: "Applejack, Batpony, Hero",
    Character: "Applejack",
    Power: "MY PARENTS ARE DEEEEEEAD! (Special): Discard all Pony cards with the Elder keyword from the shipping grid. This power cannot be copied.",
    Flavor: "\"Holy Apples, Batmare!\" Robinbloom cried, dangling precariously over the perch of the sizzling acid pit. The General stood menacingly above it all, laughing menacingly at Batmare's sidekick's plight. \"How do you feel, you ugly vigilante?\" the villain growled. \"How do you feel watching another of your loved ones about to die?\" Batmare said nothing. She'd felt this pain before. But she would not let it happen again... - The New Batmare Comics #42",
    Set: "2015 Workshop Cards",
    Art: "Pixel Prism",
    Link:"https://docs.google.com/document/d/12TeI7bx8lL3SY0VRt4xqs1wYg_Vive6fAnT7JgPE7-c/edit?tab=t.wl54c9mdqaod"
  },
  //Belfry
  {
    Image: "Images/Ponies/B/Belfry.jpg",
    Type: "Pony",
    MultiplePonies:"No / False",
    Name: "Belfry",
    Gender: "Femme",
    Species: "Pegasus",
    Timeline: "(None)",
    Keywords: "OC",
    Character: "Belfry",
    Power: "Lactose Intolerant (Special): You may swap a Pony card with the Object keyword with another Pony card on the shipping grid.",
    Flavor: "She couldn't believe Domino had fallen for such a cheesy pickup line. Something had to be done about this saucy wretch. No one steals her marefriend and gets away with it! - Please Notice Me SenFry",
    Set: "WEB CARD",
    Art: "Arcadian Phoenix",
    Link:"https://docs.google.com/document/d/12TeI7bx8lL3SY0VRt4xqs1wYg_Vive6fAnT7JgPE7-c/edit?tab=t.ba0eqrqh8k3g"
  },
  //Berry Punch
  {
    Image: "Images/Ponies/B/Berry Punch.jpg",
    Type: "Pony",
    MultiplePonies:"No / False",
    Name: "Berry Punch",
    Gender: "Femme",
    Species: "Earth Pony",
    Timeline: "(None)",
    Keywords: "(None)",
    Character: "Berry Punch" ,
    Power: "Black Out (Replace): While this card is in your hand, you may discard a Pony card from the grid and play this card in its place.",
    Flavor: "Twilight backed up against the wall a little harder, as though it might grow a door. \"Mmmaybe I should try again when you're, um, less indisposed?\" Berry only chuckled. \"Filly, I do EVERYTHING indisposed.\" - Coyote Ugly",
    Set: "Core Deck",
    Art: "Pixel Prism",
    Link:"https://docs.google.com/document/d/12TeI7bx8lL3SY0VRt4xqs1wYg_Vive6fAnT7JgPE7-c/edit?tab=t.9htyy8qxlu4s"
  },
  //Best Foalsitter Cadance
  {
    Image: "Images/Ponies/B/Best Foalsitter Cadance.jpg",
    Type: "Pony",
    MultiplePonies:"No / False",
    Name: "Best Foalsitter Cadance",
    Gender: "Femme",
    Species: "Alicorn" ,
    Timeline: "(None)",
    Keywords: "Princess",
    Character: "Cadance",
    Power: "The Other Sitter Cancelled (Swap): You may swap 2 Pony cards on the shipping grid.",
    Flavor: "I should mention that I've now observed the foalsitter and my brother attempting to ingest one another's tongues. If this is adulthood, it's really gross! - Twilight's Secret Diary, Volume V",
    Set: "Core Set",
    Art: "Pixel Prism",
    Link:"https://docs.google.com/document/d/12TeI7bx8lL3SY0VRt4xqs1wYg_Vive6fAnT7JgPE7-c/edit?tab=t.8fap15a3emg5"
  },
  //Beverly Hooves
  {
    Image: "Images/Ponies/B/Beverly Hooves.jpg",
    Type: "Pony",
    MultiplePonies:"No / False",
    Name: "Beverly Hooves",
    Gender: "Femme",
    Species: "Earth Pony",
    Timeline: "(None)",
    Keywords: "Celebrity, OC",
    Character: "Beverly Hooves",
    Power: "Center of Attention (Special): As long as Beverly Hooves is on the grid, all new Ship cards must be played off of her if able. This includes playing a Ship card between her and an adjacent Pony card.",
    Flavor: "\"Paradise,\" Beverly drawled in her expensive-sounding accent, \"is wherever I am!\" The throng of fans around her seemed to agree. - Con Tales",
    Set: "Equestria LA Official Promos",
    Art: "Pixel Prism",
    Link:"https://docs.google.com/document/d/12TeI7bx8lL3SY0VRt4xqs1wYg_Vive6fAnT7JgPE7-c/edit?tab=t.z9pkdvt1kq1a"
  },
  //Big Mac
  {
    Image: "Images/Ponies/B/Big Mac.jpg",
    Type: "Pony",
    MultiplePonies:"No / False",
    Name: "Big Mac / Big Macintosh / Big McIntosh",
    Gender: "Masc",
    Species: "Earth Pony",
    Timeline: "(None)",
    Keywords: "Apple",
    Character: "Big Mac",
    Power: "Bumper Crop (Draw): You may draw 1 card from the Ship or Pony deck.",
    Flavor: "As he looked into her eyes, he knew that he would love her deeply for all time, to the ends of the known universe. He could swim in those eyes for hours, bathe in their luminescence. His heart swelled, thoughts skittering across his mind for an eternal, soul-warming moment. \"Eeyup,\" he said. - Flutter On My Wayward Foal",
    Set: "Core Deck",
    Art: "Pixel Prism",
    Link:"https://docs.google.com/document/d/12TeI7bx8lL3SY0VRt4xqs1wYg_Vive6fAnT7JgPE7-c/edit?tab=t.4bc0qrmjb3sa"
  },
  //Big Sister Nightwatch
  {
    Image: "Images/Ponies/B/Big Sister Nightwatch.jpg",
    Type: "Pony",
    MultiplePonies:"No / False",
    Name: "Big Sister Nightwatch" ,
    Gender: "Femme",
    Species: "Pegasus",
    Timeline: "(None)",
    Keywords: "Batpony, OC",
    Character: "Nightwatch",
    Power: "No Personal Space (Replace): While this card is in your hand, you may discard a Pony card from the grid and play this card in its place.",
    Flavor: "\"I want to ravage you.\" - No Time for Small Talk",
    Set: "Nocturnal Adventures",
    Art: "Art by Koonzy",
    Link:"https://docs.google.com/document/d/12TeI7bx8lL3SY0VRt4xqs1wYg_Vive6fAnT7JgPE7-c/edit?tab=t.ibkl6sy4vua6"
  },
  //Bizarre Song
  {
    Image: "Images/Ponies/B/Bizarre Song.jpg",
    Type: "Pony",
    MultiplePonies:"No / False",
    Name: "Bizarre Song" ,
    Gender: "Masc",
    Species: "Pegasus",
    Timeline: "(None)",
    Keywords: "OC",
    Character: "Bizarre Song ",
    Power: "The Antihero (New Goal): You may discard 1 active Goal and draw 1 new Goal to replace it.",
    Flavor: "Blood dripped from the bat in his mouth. His eyes looked dangerous, but I couldn't stop looking at them. - The Antihero",
    Set: "Card by Summerium",
    Art: "Artmael Sverr",
    Link:"https://docs.google.com/document/d/12TeI7bx8lL3SY0VRt4xqs1wYg_Vive6fAnT7JgPE7-c/edit?tab=t.9k1300agortj"
  },
  //Black Widow Rarity
  {
    Image: "Images/Ponies/B/Black Widow Rarity.jpg",
    Type: "Pony",
    MultiplePonies:"No / False",
    Name: "Black Widow Rarity",
    Gender: "Femme",
    Species: "Unicorn",
    Timeline: "(None)",
    Keywords: "Mane 6",
    Character: "Rarity",
    Power: "Malicious Machinations (New Goal): You may discard 1 active Goal and draw 1 new Goal to replace it.",
    Flavor: "She was black as silk and sharp as the nighttime wind. The stallions all had eyes for her, but she only had eyes for one thing: danger. - Casaflanka",
    Set: "Core Deck",
    Art: "Pixel Prism",
    Link:"https://docs.google.com/document/d/12TeI7bx8lL3SY0VRt4xqs1wYg_Vive6fAnT7JgPE7-c/edit?tab=t.bbgr64v8bzns"
  },
  //Blackjack, Security Mare
  {
    Image: "Images/Ponies/B/Blackjack, Security Mare.jpg",
    Type: "Pony",
    MultiplePonies:"No / False",
    Name: "Blackjack, Security Mare",
    Gender: "Femme",
    Species: "Unicorn",
    Timeline: "Dystopian Future",
    Keywords: "OC, Wastelander",
    Character: "Blackjack",
    Power: "Bounty Hunted (Special): You may play the top card of the Pony deck off of Blackjack, Security Mare using the top card of the Ship deck.",
    Flavor: "Was it her natural charm, her rugged good looks, or her irresistible sensuality that drew all the ponies towards her? Then again, it also might be the price on her head. - FoE: Expanded Horizons",
    Set: "Card by Hobbes_maxwell",
    Art: "Boiler3",
    Link:"https://docs.google.com/document/d/12TeI7bx8lL3SY0VRt4xqs1wYg_Vive6fAnT7JgPE7-c/edit?tab=t.f9g8voxldqy5"
  },
  //Blazed Tree Hugger
  {
    Image: "Images/Ponies/B/Blazed Tree Hugger.jpg",
    Type: "Pony",
    MultiplePonies:"No / False",
    Name: "Blazed Tree Hugger" ,
    Gender: "Femme",
    Species: "Earth Pony",
    Timeline: "(None)",
    Keywords: "(None)",
    Character: "Tree Hugger",
    Power: "Munchies (Draw): You may draw 1 card from the Ship or Pony deck.",
    Flavor: "\"Whoa, check out my hoof, Flutters,\" said Tree Hugger, her plate empty after her fourth \"special\" brownie. \"Isn't it just... righteous? We have four of them to touch the Mother Earth and feel her fluid aura and vibrations.\" Fluttershy stammered a bit as she put a lid on the pan of chocolate leftovers. \"M-Maybe we should hold off on these...\" Brownies did make her a bit paranoid. - Twenty Past Four",
    Set: "Card by FaeDeeDraws",
    Art: "FaeDeeDraws",
    Link:"https://docs.google.com/document/d/12TeI7bx8lL3SY0VRt4xqs1wYg_Vive6fAnT7JgPE7-c/edit?tab=t.lpo6cr1xl2sr"
  },
  //Blazin' Hot Wild Fire
  {
    Image: "Images/Ponies/B/Blazin' Hot Wild Fire.jpg",
    Type: "Pony",
    MultiplePonies:"No / False",
    Name: "Blazin' Hot Wild Fire" ,
    Gender: "Femme",
    Species: "Pegasus",
    Timeline: "(None)",
    Keywords: "OC",
    Character: "Wild Fire",
    Power: "Trailblazer (Special): Discard the 3 Pony cards in the same row as Blazin' Hot Wild Fire that are closest to her left.",
    Flavor: "She could feel the G's pulling at her cheeks, the wind ripping at her hair, the trail of fire roasting her opponents! She thought she should feel bad, but all she could feel was the sheer exhilaration of LOVE! - Wild Fire's Wild Ride",
    Set: "2014 Con Exclusives",
    Art: "Pixel Prism",
    Link:"https://docs.google.com/document/d/12TeI7bx8lL3SY0VRt4xqs1wYg_Vive6fAnT7JgPE7-c/edit?tab=t.5yheu5x6k11r"
  },
  //Blog Princess Phoe
  {
    Image: "Images/Ponies/B/Blog Princess Phoe.jpg",
    Type: "Pony",
    MultiplePonies:"No / False",
    Name: "Blog Princess Phoe",
    Gender: "Femme",
    Species: "Pegasus",
    Timeline: "(None)",
    Keywords: "Princess, OC",
    Character: "Phoe",
    Power: "The Ties That Bind Us (Special): Pony cards shipped with Blog Princess Phoe cannot be moved or removed from the grid by powers.",
    Flavor: "The plucking drew closer, every note a summons from some unseen hoof. She could see it in her mind's eye, however... ice cream green, dancing across a lyre of gold. - Queens and Kings Laid Low by Strings",
    Set: "Card by CouchCrusader",
    Art: "CouchCrusader",
    Link:"https://docs.google.com/document/d/12TeI7bx8lL3SY0VRt4xqs1wYg_Vive6fAnT7JgPE7-c/edit?tab=t.uppa66ree9lu"
  },
  //Bloomberg
  {
    Image: "Images/Ponies/B/Bloomberg.jpg",
    Type: "Pony",
    MultiplePonies:"No / False",
    Name: "Bloomberg" ,
    Gender: "Masc",
    Species: "Non-Pony",
    Timeline: "(None)",
    Keywords: "Apple, Object",
    Character: "Bloomberg",
    Power: "Appleloosan Pit Stop (New Goal): You may discard 1 active Goal and draw 1 new Goal to replace it.",
    Flavor: "Strong, sturdy branches spread over the dusty plains of Appleloosa. He was a watcher. A guardian. A friend. - The Giving Tree",
    Set: "Core Deck",
    Art: "Pixel Prism",
    Link:"https://docs.google.com/document/d/12TeI7bx8lL3SY0VRt4xqs1wYg_Vive6fAnT7JgPE7-c/edit?tab=t.lbxg0zp677uj"
  },
  //Blown Wing
  {
    Image: "Images/Ponies/B/Blown Wing.jpg",
    Type: "Pony",
    MultiplePonies:"No / False",  
    Name: "Blown Wing",
    Gender: "Femme",
    Species: "Pegasus",
    Timeline: "(None)",
    Keywords: "Object, OC",
    Character: "Blown Wing",
    Power: "Free International Shipping (Special): You may play Blown Wing onto the grid using the top card of the Ship deck rather than using a Ship card in your hand. ",
    Flavor: "The creamy beige mare watched, helpless, entranced by the fire-red flickering flames as they burned away her dog-eared ticket home and all her poorly considered hopes behind it. The arsonist smiled widely, fanning the flames to a hoarse chorus of “No, please no...” - Blown Away ",
    Set: "No Holds Barred: Card by Crystal Cameo",
    Art: "Pixel Prism",
    Link:"https://docs.google.com/document/d/12TeI7bx8lL3SY0VRt4xqs1wYg_Vive6fAnT7JgPE7-c/edit?tab=t.ppb2elqmssn6"
  },
  //Blueberry, Spa Mastermind
  {
    Image: "Images/Ponies/B/Blueberry, Spa Mastermind.jpg",
    Type: "Pony",
    MultiplePonies:"No / False",
    Name: "Blueberry, Spa Mastermind",
    Gender: "Masc",
    Species: "Earth Pony",
    Timeline: "(None)",
    Keywords: "Spa Pony",
    Character: "Blueberry",
    Power: "Just Relax (Special): This card can only be played onto the grid by removing the Start card from the game and playing this card in its place. Once during each of their turns, a player may choose a Pony card on the grid and have it gain the Spa Pony keyword until the end of their turn. Once during each of their turns, a player may discard 1 active Goal and draw 1 new Goal to replace it. If they do, each player in turn order other than them may draw 2 cards from the Ship and/or Pony deck. This card is treated as the Start card and cannot be moved or removed from the grid. This power cannot be copied.",
    Flavor: "\"You don't seem to understand the circumstances you now find yourself in.\" - Special Treatment",
    Set: "An Extra Special Spa Day",
    Art: "AsajioPie01",
    Link:"https://docs.google.com/document/d/12TeI7bx8lL3SY0VRt4xqs1wYg_Vive6fAnT7JgPE7-c/edit?tab=t.nrs6chgzdkr2"
  },
  //Bo
  {
    Image: "Images/Ponies/B/Bo.jpg",
    Type: "Pony",
    MultiplePonies:"No / False",
    Name: "Bo" ,
    Gender: "Masc",
    Species: "Unicorn",
    Timeline: "(None)",
    Keywords: "Draft Horses, OC",
    Character: "Bo",
    Power: "Big (Replace): While this card is in your hand, you may discard a Pony card from the grid and play this card in its place.",
    Flavor: "\"A billion abs, and they start at his chin.\" - Shirecorn Artists Draw Crazy Moments from My Little Pony G5",
    Set: "youtube.com/@DraftHorses",
    Art: "Shirecorn",
    Link:"https://docs.google.com/document/d/12TeI7bx8lL3SY0VRt4xqs1wYg_Vive6fAnT7JgPE7-c/edit?tab=t.jp2qx3j0egc2"
  },
   //Bon Bon
  {
    Image: "Images/Ponies/B/Bon Bon.jpg",
    Type: "Pony",
    MultiplePonies:"No / False",
    Name: "Bon Bon" ,
    Gender: "Femme",
    Species: "Earth Pony",
    Timeline: "(None)",
    Keywords: "(None)",
    Character: "Bon Bon",
    Power: "Sweet Tooth (Draw): You may draw 1 card from the Ship or Pony deck.",
    Flavor: "Bon Bon slammed the bag of sugar down on the table. “Bats fly, monkeys climb, and filly, I make candy.” - Iron Confectioner",
    Set: "Core Deck",
    Art: "Pixel Prism",
    Link:"https://docs.google.com/document/d/12TeI7bx8lL3SY0VRt4xqs1wYg_Vive6fAnT7JgPE7-c/edit?tab=t.iha27z9f1gx4"
  },
  //Boneless Pizza Bat
  {
    Image: "Images/Ponies/B/Boneless Pizza Bat.jpg",
    Type: "Pony",
    MultiplePonies:"No / False",
    Name: "Boneless Pizza Bat ",
    Gender: "Masc",
    Species: "Pegasus",
    Timeline: "(None)",
    Keywords: "Batpony, OC, Stuffed Crust",
    Character: "Stuffed Crust",
    Power: "Pineapple Pizza (New Goal): You may discard 1 active Goal and draw 1 new Goal to replace it.",
    Flavor: "As 2 am drew near, the bat lifts the ringing phone, his happy, peppy greeting quickly cut off by the drunken slurs of the pony over the phone.” - In 2 Deep",
    Set: "Koonzy's BronyCon2017 Exclusive",
    Art: "Koonzy",
    Link:"https://docs.google.com/document/d/12TeI7bx8lL3SY0VRt4xqs1wYg_Vive6fAnT7JgPE7-c/edit?tab=t.g2srl0nhg050"
  },
  //Boo
  {
    Image: "Images/Ponies/B/Boo.jpg",
    Type: "Pony",
    MultiplePonies:"No / False",
    Name: "Boo" ,
    Gender: "Femme",
    Species: "Earth Pony",
    Timeline: "(None)",
    Keywords: "Elite Beat Agent, OC",
    Character: "Boo",
    Power: "Lightning Reflexes (Special): You may swap any number of Pony cards on the shipping grid, but you only have 3 seconds to do it. This power cannot be copied.",
    Flavor: "\"I'm no good at thinking of things on the spot.\" - Love Is Not a Quick Time Event",
    Set: "TJPones Blog",
    Art: "TJPones",
    Link:"https://docs.google.com/document/d/12TeI7bx8lL3SY0VRt4xqs1wYg_Vive6fAnT7JgPE7-c/edit?tab=t.85rlvbpq0ykr"
  },
  //Bookworm
  {
    Image: "Images/Ponies/B/Bookworm.jpg",
    Type: "Pony",
    MultiplePonies:"No / False",
    Name: "Bookworm",
    Gender: "Femme",
    Species: "Alicorn",
    Timeline: "(None)",
    Keywords: "Mane 6, Twilight Sparkle",
    Character: "Bookworm",
    Power: "First Mate (Search): You may search the Ship or Pony discard pile for 1 card of your choice and put it into your hand. If that card is still in your hand at the end of your turn, discard it.",
    Flavor: "No book in the library could prepare Twilight for this new chapter in her life. There were too many unknowns on the open seas of Equestria, but she felt secure in her decision, knowing that her best friend would be at her side. - The Pirate and Her Princess, Chapter 1",
    Set: "Card by T.J. Carson",
    Art: "Pixel Prism",
    Link:"https://docs.google.com/document/d/12TeI7bx8lL3SY0VRt4xqs1wYg_Vive6fAnT7JgPE7-c/edit?tab=t.2ku8pemfjozj"
  },
  //Boulder
  {
    Image: "Images/Ponies/B/Boulder.jpg",
    Type: "Pony",
    MultiplePonies:"No / False",
    Name: "Boulder", 
    Gender: "Masc",
    Species: "Non-Pony",
    Timeline: "(None)",
    Keywords: "Object",
    Character: "Boulder",
    Power: "Get Us Out of Here, Boy (New Goal): You may discard 1 active Goal and draw 1 new Goal to replace it.",
    Flavor: "Boulder is a rock A rock like no other Because he is mine - Maud Pie's Guide to Lithology Vol. 1",
    Set: "Card by Shipping & Handling",
    Art: "BefishProductions",
    Link:"https://docs.google.com/document/d/12TeI7bx8lL3SY0VRt4xqs1wYg_Vive6fAnT7JgPE7-c/edit?tab=t.cj2u82yg3gne"
  }

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
  
  /*
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
    */
  
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
percentage.textContent = ((cardsList.length / 1023)*100).toFixed(2);

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
                    newSearchTerm = orSearchTerms[j].substring(orSearchTerms[j].indexOf("character:") + 10);
                    console.log(newSearchTerm);
                  }
                  else if(orSearchTerms[j].toLowerCase().includes("char:")){
                    newSearchTerm = orSearchTerms[j].substring(orSearchTerms[j].indexOf("char:") + 5);
                    console.log(newSearchTerm);
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