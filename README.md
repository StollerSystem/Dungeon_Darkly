# _Dungeon Darkly_

_17 September 2020_

#### _A text-based adventure game_

#### By _**Garrett Brown, Emme Buentiempo, Janet Karpenske, Vanessa Stewart, Ben Stoller**_

## Description

Harken back to the days of text adventures, MUDs and RPGs! _Dungeon Darkly_
is a fresh take on an old classic, with players picking up their
clubs and leather armor to traverse a dark and dangerous terrain in search
of guts, glory, and goods. 

As a minimun viable product, this game 
1. Uses a retro UI in homage to the classic text adventure experience
1. Allows for character customization options, including multiple race and class possibilites
1. Creates a playable tutorial quest
1. Includes the following basic game mechanics: movement, exploration, and combat

Originally built as a JavaScript capstone project for Epicodus, we have plans to continue buidling out this game because . . . why wouldn't we? Have you seen this game yet?

## Specifications
| Spec | Name | Behavior |
| -----| ----- | ----- |
| 1 | Character Creation/ Display Screen | When a user presses play, the player is prompted to enter new character details, which are then loaded to a new display screen  that includes the following sections: an input and output terminal, a map, inventory details, monster details, and character details, which has the name, race, and class selected by the user and other attributes which are calculated based on the race and class selected.|
| 2| Text Submit and Terminal | When a user types in the terminal and hits enter, the entered text is grabbed andrun through a parser to determine and initialize the correct command. |
| 3 | Look Command  | When a user types 'look' or 'l' in the "terminal submit" section, the room name, room description, and items/monsters in the room are printed to the "terminal" section. |
| 4 | Get Command | When a user types 'get <object>' in the "terminal submit" section, the object is added to the player's inventory and displayed in the inventory screen. |
| 5 | Move Command | When a user types 'move' in the 'terminal submit' section, the player moves into the next room, and the map is updated to show where the user is in the castle. |
| 6 | Attack Command | When the user types 'attack <object>' or 'fight <object> in the "terminal submit" section, the program runs one round of battle in which player rolls determine hits or misses and the amount of damage incurred to each player. Player and monster stats change as a result of the round and all round details are printed to the 'terminal.' At the end of a round, the user is prommpted to either keep fighting or flee.|
| 7 | Corpsification | After each combat round, a check is run to see if either player has died. If the monster dies, the monste is removed from the game and their death is printed to the screen. If a player dies, that information is printed to the screen, and the game is effectively over. |


## Setup/Installation Requirements

To play this game:
* Open a web browser of your choice and navigate to the following page:

To extend this project:
* Clone this project using the 'git clone' command in terminal/command line.
* Navigate to the cloned folder and run 'npm install' in your terminal to download all dependencies.
* Open the cloned folder in a text editor of your choice.
* When you are ready to view your project, run 'npm run start' in your terminal. This command will bundle your code and start a live server, which will open automatically in your browser.
OR
Run 'npm run build' to bundle your code, and then open dist/index.html in a web browser.
* Have fun, noble warrior!

## Known Bugs

_There are no known bugs at this time; however, we have lots of visions for future work:_
* Create a tutorial quest that allows teaches users how and when to use each command while they play a mini quest
* Add more interactable environement features
* Enable randomly generated items to appear in each room
* Add more commands
* Add puzzles, feats, and skills

## Support and contact details

_Connect with us and/or check out our other work!_
Garrett Brown:      https://github.com/GarrettBrown-dev
Emme Buentiempo:    https://github.com/3Emme
Janet Karpenske:    https://github.com/janetkarpenske
Vanessa Stewart:    https://github.com/vanmars
Ben Stoller:        https://github.com/StollerSystem

## Technologies Used

* HTML5
* CSS/Bootstrap
* JavaScript/jQuery
* Webpack

### License

Copyright (c) 2020 **_Garrett Brown, Emme Buentiempo, Janet Karpenske, Vanessa Stewart, Ben Stoller_**

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.