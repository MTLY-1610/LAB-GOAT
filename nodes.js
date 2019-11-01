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
      }
    ]
  },
  // Textnode = 1
  {
    text:
      "YOU MAY PLAY THE GAME IF YOU WANT TO \n I have time to waste so yes \n Naa i just lost a goat and need to find it, next time maybe",
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
  {
    text: "ARE HETEROSEXUAL?",
    options: [
      {
        text: "YES",
        nextTextNode: 7
      },

      {
        text: "NO",
        nextTextNode: 5
      }
    ]
  },
  // Textnode = 3
  {
    text:
      "YOUR PARTNER TURNED STRAIGHT!BUMMER\n ARE YOU WILLING TO DO SOMETHING ABOUT IT?",
    options: [
      {
        text: "YES",
        nextTextNode: 4
      },

      {
        text: "NO",
        nextTextNode: 8
      }
    ]
  },
// Textnode = 4
  {
    text:
      "WELL... WE BOTH KNOW THERE IS ONLY ONE SOLUTION TO WIN YOUR PARTNER BACK...\n S E X  C H A N G E ! ! ! \n ARE YOU IN?",
    options: [
      {
        text: "YES",
        nextTextNode: 5
      },

      {
        text: "NO",
        nextTextNode: 8
      }
    ]
  },
  // Textnode = 5
  {
    text:
      "S E X  C H A N G E ! ! ! ARE YOU NUTS???\n YOU CLEARLY SHOW VERY POOR JUDGMENT, OBSESSSIONAL BEHAVIOR AND, I HAVE TO SAY, A CLEAR LACK OF INTEGRITY.\n CONSULT A PROFFESSIONIAL BEFORE ENGAGING IN A NEW RELATIONSHIP.\n OUR CONVERSATION ENDS HERE"
  },
 // Textnode = 6
  {
    text:
      "YOUR PARTNER TURNED GAY!BUMMER... ARE YOU WILLING TO DO SOMETHING ABOUT IT?",
    options: [
      {
        text: "YES",
        nextTextNode: 4
      },

      {
        text: "NO",
        nextTextNode:8
      }
    ]
  },
  // Textnode = 7
  {
    text: "OK GOOD LUCK FINDING THAT GOAT, MAYBE NEXT TIME",
    
  },
  // Textnode = 8
  {
    text:
      "YOU MADE THE RIGHT CHOICE, YOU ARE A SANE AND RATIONAL HUMAN BEING AND ANY MAN WOMAN OR GOAT WOULD BE LUCKY TO HAVE YOU ON YOU SIDE",
    
  }
];
