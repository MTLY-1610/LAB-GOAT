const textNodes = [
  
  // Textnode = 0
    {
    text: "ARE YOU HUMAN OR GOAT?",
    options: [
      {
        text: "HUMAN",
        nextTextNode: 1
      },

      {
        text: "GOAT",
        nextTextNode: 2
      },
      
      
    ]
  },
  // Textnode = 1
  {
    text:
      "You may play the game if you have time to waste type YES otherwise type NO ",
    options: [
      {
        text: "YES",
        nextTextNode: 3
      },

      {
        text: "NO",
        nextTextNode: 8
      }
    ]
  },
  // Textnode = 2
  {
    text:
      "HOW DID YOU GOT YOUR DIRTY HOOFS TO TYPE GOAT AND FOR STARTER HOW CAN YOU READ?????BEAT IT GOAT..."
      
  },
    // Textnode = 3
  {
    text: "ARE YOU HETEROSEXUAL?",
    options: [
      {
        text: "YES",
        nextTextNode: 7
      },

      {
        text: "NO",
        nextTextNode: 4
      }
    ]
  },
  // Textnode = 4
  {
    text:
    "Your partner turned straight! Bummer... Are you willing to do something about it YES or NO?",
    options: [
      {
        text: "YES",
        nextTextNode: 5
      },

      {
        text: "NO",
        nextTextNode: 9
      }
    ]
  },
// Textnode = 5
  {
    text:
      "Well... We both know there is only one solution to get your partner back...SEX CHANGE of course!! now are you in YES or NO ?",
    options: [
      {
        text: "YES",
        nextTextNode: 6
      },

      {
        text: "NO",
        nextTextNode: 9
      }
    ]
  },
  // Textnode = 6
  {
    text:
      "GAME OVER\n\n SEX CHANGE?!\n HAVE YOU LOST YOUR MIND??\n You need to learn to let go my friend. Peace out :)"
  },
 // Textnode = 7
  {
    text:
      "Your partner turned gay! Bummer... Are you willing to do something about it YES or NO?",
    options: [
      {
        text: "YES",
        nextTextNode: 5
      },

      {
        text: "NO",
        nextTextNode:9
      }
    ]
  },
  // Textnode = 8
  {
    text: "OK... Time is precious, got it...Have a nice one :) ",
    
  },
  // Textnode = 9
  {
    text:
      "YOU MADE THE RIGHT CHOICE, YOU ARE A SANE AND RATIONNAL HUMAN BEING AND ANY MAN, WOMAN OR GOAT WOULD BE LUCKY TO HAVE YOU ON  SIDE",
    
  }
];
