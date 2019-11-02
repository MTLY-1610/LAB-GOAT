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
      {
        text: "NEITHER",
        nextTextNode: 8
      }
      
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
    text: "ARE HETEROSEXUAL?",
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
      "YOUR PARTNER TURNED STRAIGHT!BUMMER\n ARE YOU WILLING TO DO SOMETHING ABOUT IT?",
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
      "WELL... WE BOTH KNOW THERE IS ONLY\n ONE SOLUTION TO WIN YOUR PARTNER BACK IS\n TO GET A SEX CHANGE SURGERY AND RECLAME HIM/HER AS HER NEWLY PREFERED GENDER.\n NOW ARE YOU IN?",
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
      "GAME OVER\n\n SEX CHANGE?!\n HAVE YOU LOST YOUR MIND??\n LEARN TO LET GO  "
  },
 // Textnode = 7
  {
    text:
      "YOUR PARTNER TURNED GAY!BUMMER...\n ARE YOU WILLING TO DO SOMETHING ABOUT IT?",
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
    text: "OK GOOD LUCK FINDING THAT GOAT, MAYBE NEXT TIME",
    
  },
  // Textnode = 9
  {
    text:
      "YOU MADE THE RIGHT CHOICE, YOU ARE A SANE AND RATIONAL HUMAN BEING AND ANY MAN, WOMAN OR GOAT WOULD BE LUCKY TO HAVE YOU ON YOU SIDE",
    
  }
];
