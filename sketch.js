/***********************************************************************************
    Project 3: Subconscious Accessor
    by Natalie Morris

  The Subconcious Accessor programs documents several hypothetical narratives in 
  which technology is introduced to society that will improve and speed up mental 
  health counseling.

  This program uses the p5.play game library and the utilization of state machines, 
  conditional logic, classes, animation, collision detection, and micro-interactions, 
  to create its narrative-driven experience.

***********************************************************************************/

// Variables
var backgroundImage;
var adventureManager;
var state1Active = true;
var state2Active = false;
var state3Active = false;
var state4Active = false;
var state5Active = false;
var state6Active = false;
var state7Active = false;
var state8Active = false;
var state9Active = false;
var state10Active = false;
var state11Active = false;
var state12Active = false;
var state13Active = false;
var state14Active = false;
var state15Active = false;
var state16Active = false;
var state17Active = false;

// Movement variables
var spinny;
var spinnyImage;
var direction = 50;

// Clickable counters
var playerCounter = 0;
var variableCounter = 0;

// Image variables
  // Descriptions
  var techDesc;
  var socioDesc;
  var upperDesc;
  var middleDesc;
  var lowerDesc;

  // Buttons
  var button1;
  var option1;
  var option2;
  var beginButton;
  var beginButtonWhite;
  var continueButton;
  var continueButtonWhite;
  var playerButton;
  var playerButtonWhite;
  var variableButton;
  var variableButtonWhite;
  var playerChart;
  var variableChart;
  var beginButtonWhite;
  var continueProductionButton;
  var continueProductionButtonWhite;
  var increaseButton;
  var increaseButtonWhite;
  var studentPlanButton;
  var studentPlanButtonWhite;
  var overCounterButton;
  var overCounterButtonWhite;
  var plansSameButton;
  var plansSameButtonWhite;
  var playAgainButton;
  var playAgainButtonWhite;
  var stayOutPoliticsButton;
  var stayOutPoliticsButtonWhite;
  var subscriptionButton;
  var subscriptionButtonWhite;
  var supportCampaignButton;
  var supportCampaignButtonWhite;

function preload() {
  adventureManager = new AdventureManager("data/adventureStates.csv", 
    "data/interactionTable.csv", "data/clickableLayout.csv");

  // Load images
  beginButton = loadImage('assets/beginbutton.png');
  beginButtonWhite = loadImage('assets/beginwhite.png');
  continueButton = loadImage('assets/continuebutton.png');
  continueButtonWhite = loadImage('assets/continuebuttonwhite.png');
  playerButton = loadImage('assets/showplayer.png');
  playerButtonWhite = loadImage('assets/showplayerwhite.png');
  lowerDesc = loadImage('assets/lowerdesc.png');
  middleDesc = loadImage('assets/middledesc.png');
  upperDesc = loadImage('assets/upperdesc.png');
  playerChart = loadImage('assets/playerchart.png');
  variableButton = loadImage('assets/variablebutton.png');
  variableButtonWhite = loadImage('assets/variablebuttonwhite.png');
  techDesc = loadImage('assets/techdesc.png');
  socioDesc = loadImage('assets/sociodesc.png');
  variableChart = loadImage('assets/globalvariables.png');
  subscriptionButton = loadImage('assets/subscription.png');
  subscriptionButtonWhite = loadImage('assets/subscriptionwhite.png');
  overCounterButton = loadImage('assets/overthecounter.png');
  overCounterButtonWhite = loadImage('assets/overthecounterwhite.png');
  continueProductionButton = loadImage('assets/continueproduction.png');
  continueProductionButtonWhite = loadImage('assets/continueproductionwhite.png');
  increaseProductionButton = loadImage('assets/increaseproduction.png');
  increaseProductionButtonWhite = loadImage('assets/inscreaseproductionwhite.png');
  stayOutPoliticsButton = loadImage('assets/stayoutofpolitics.png');
  stayOutPoliticsButtonWhite = loadImage('assets/stayoutofpoliticswhite.png');
  supportCampaignButton = loadImage('assets/supportcampaign.png');
  supportCampaignButtonWhite = loadImage('assets/supportcampaignwhite.png');
  plansSameButton = loadImage('assets/planssame.png');
  plansSameButtonWhite = loadImage('assets/planssamewhite.png');
  studentPlanButton = loadImage('assets/offerstudentplan.png');
  studentPlanButtonWhite = loadImage('assets/offerstudentplanwhite.png');
  spinnyImage = loadImage('assets/mouse.png')
}

function setup() {
  createCanvas(1280, 720);

  adventureManager.setup();
  setupButtons();

  // Initial buttons upon first state
  button1.image = beginButton;
  button1.width = beginButton.width;
  button1.height = beginButton.height;

  button1.locate(1050 - beginButton.width/2, 650 - beginButton.height/2);

  option2.image = overCounterButton;
  option2.width = overCounterButton.width;
  option2.height = overCounterButton.height;

  option2.locate(320 - option2.width/2, 650 - option2.height/2);

  // Animated spinny circle
  spinny = createSprite(1065, 75);
  spinny.addImage(spinnyImage);
}

function draw() {
  adventureManager.draw();

  button1.draw();

  direction += 2;

  spinny.setSpeed(3, direction);

  if (!state1Active) {
    drawSprites();
  }
}

function setupButtons() {
  // Make buttons for continue and two options
  button1 = new Clickable();
  option1 = new Clickable();
  option2 = new Clickable();

  button1.onPress = button1Pressed;
  button1.onHover = button1Hover;
  button1.onOutside = button1Outside;

  option2.onPress = option2Pressed;
  option2.onHover = option2Hover;
  option2.onOutside = option2Outside;
}

button1Pressed = function() {
  if (state1Active) {
    // Move to next state
    adventureManager.changeState('Premise', null);

    // Trigger next button
    button1.image = continueButton;
    button1.width = continueButton.width;
    button1.height = continueButton.height;
    button1.locate(915 - beginButton.width/2, 650 - beginButton.height/2);
  }

  if (state2Active) {
    adventureManager.changeState('Players', null);

    // Trigger next button
    button1.image = playerButton;
    button1.width = playerButton.width;
    button1.height = playerButton.height;
    button1.locate(923 - playerButton.width/2, 650 - playerButton.height/2);
  }

  if (state3Active) {
    playerCounter += 1;
    if (playerCounter === 3) {
      button1.image = continueButton;
      button1.width = continueButton.width;
      button1.height = continueButton.height;
      button1.locate(915 - beginButton.width/2, 650 - beginButton.height/2);
    }
    if (playerCounter === 4) {
      adventureManager.changeState('State4', null);
      // Trigger next button
      button1.image = variableButton;
      button1.width = variableButton.width;
      button1.height = variableButton.height;
      button1.locate(888 - variableButton.width/2, 650 - variableButton.height/2);
    }
  }

  if (state4Active) {
    variableCounter += 1;
    if (variableCounter === 2) {
      button1.image = continueButton;
      button1.width = continueButton.width;
      button1.height = continueButton.height;
      button1.locate(915 - beginButton.width/2, 650 - beginButton.height/2);
    }
    if (variableCounter === 3) {
      // Trigger next button
      adventureManager.changeState('State5', null);
      button1.image = subscriptionButton;
      button1.width = subscriptionButton.width;
      button1.height = subscriptionButton.height;
      button1.locate(975 - subscriptionButton.width/2, 647 - subscriptionButton.height/2);

      button1.image = subscriptionButton;
      button1.width = subscriptionButton.width;
      button1.height = subscriptionButton.height;
      button1.locate(975 - subscriptionButton.width/2, 647 - subscriptionButton.height/2);
    }
  }

  if (state5Active) {
    adventureManager.changeState('State7', null);
    button1.image = continueButton;
    button1.width = continueButton.width;
    button1.height = continueButton.height;
    button1.locate(915 - beginButton.width/2, 650 - beginButton.height/2);
  }

  if (state6Active) {
    adventureManager.changeState('State8', null);
    button1.image = continueProductionButton;
    button1.width = continueProductionButton.width;
    button1.height = continueProductionButton.height;
    button1.locate(985 - continueProductionButton.width/2, 650 - continueProductionButton.height/2);

    option2.image = increaseProductionButton;
    option2.width = increaseProductionButton.width;
    option2.height = increaseProductionButton.height;
    option2.locate(340 - option2.width/2, 650 - option2.height/2);
}

  if (state8Active) {
    adventureManager.changeState('State10', null);
    button1.image = continueButton;
    button1.width = continueButton.width;
    button1.height = continueButton.height;
    button1.locate(915 - beginButton.width/2, 650 - beginButton.height/2);
  }

  if (state9Active) {
    adventureManager.changeState('State11', null);
    button1.image = null;
    button1.width = null;
    button1.height = null;
  }

  if (state10Active) {
    adventureManager.changeState('State12', null);
    button1.image = supportCampaignButton;
    button1.width = supportCampaignButton.width;
    button1.height = supportCampaignButton.height;
    button1.locate(985 - supportCampaignButton.width/2, 650 - supportCampaignButton.height/2);

    option2.image = stayOutPoliticsButton;
    option2.width = stayOutPoliticsButton.width;
    option2.height = stayOutPoliticsButton.height;
    option2.locate(340 - option2.width/2, 650 - option2.height/2);
  }

  if (state12Active) {
    adventureManager.changeState('State14', null);
    button1.image = null;
    button1.width = null;
    button1.height = null;
  }

  if (state7Active) {
    adventureManager.changeState('State15', null);
    button1.image = plansSameButton;
    button1.width = plansSameButton.width;
    button1.height = plansSameButton.height;
    button1.locate(985 - plansSameButton.width/2, 650 - plansSameButton.height/2);

    option2.image = studentPlanButton;
    option2.width = studentPlanButton.width;
    option2.height = studentPlanButton.height;
    option2.locate(340 - option2.width/2, 650 - option2.height/2);
  }

  if (state15Active) {
    adventureManager.changeState('State17', null);
    button1.image = null;
    button1.width = null;
    button1.height = null;
  }
}

button1Hover = function() {
  if (button1.image === beginButton) {
    button1.image = beginButtonWhite;
  }

  if (button1.image === continueButton) {
    button1.image = continueButtonWhite;
  }

  if (button1.image === playerButton) {
    button1.image = playerButtonWhite;
  }

  if (button1.image === variableButton) {
    button1.image = variableButtonWhite;
  }

  if (button1.image === subscriptionButton) {
    button1.image = subscriptionButtonWhite;
  }

  if (button1.image === continueProductionButton) {
    button1.image = continueProductionButtonWhite;
  }

  if (button1.image === supportCampaignButton) {
    button1.image = supportCampaignButtonWhite;
  }

  if (button1.image === plansSameButton) {
    button1.image = plansSameButtonWhite;
  }
}

button1Outside = function() {
  if (button1.image === beginButton) {
    button1.image = beginButton;
  }
  else if (button1.image === beginButtonWhite) {
    button1.image = beginButton;
  }

  if (button1.image === continueButton) {
    button1.image = continueButton;
  }
  else if (button1.image === continueButtonWhite) {
    button1.image = continueButton;
  }

  if (button1.image === playerButton) {
    button1.image = playerButton;
  }
  else if (button1.image === playerButtonWhite) {
    button1.image = playerButton;
  }

  if (button1.image === variableButton) {
    button1.image = variableButton;
  }
  else if (button1.image === variableButtonWhite) {
    button1.image = variableButton;
  }

  if (button1.image === subscriptionButton) {
    button1.image = subscriptionButton;
  }
  else if (button1.image === subscriptionButtonWhite) {
    button1.image = subscriptionButton;
  }

  if (button1.image === continueProductionButton) {
    button1.image = continueProductionButton;
  }
  else if (button1.image === continueProductionButtonWhite) {
    button1.image = continueProductionButton;
  }

  if (button1.image === supportCampaignButton) {
    button1.image = supportCampaignButton;
  }
  else if (button1.image === supportCampaignButtonWhite) {
    button1.image = supportCampaignButton;
  }

  if (button1.image === plansSameButton) {
    button1.image = plansSameButton;
  }
  else if (button1.image === plansSameButtonWhite) {
    button1.image = plansSameButton;
  }
}

option2Pressed = function() {
  if (state5Active) {
    adventureManager.changeState('State6', null);
    button1.image = continueButton;
    button1.width = continueButton.width;
    button1.height = continueButton.height;
    button1.locate(915 - beginButton.width/2, 650 - beginButton.height/2);
  }

  if (state8Active) {
    adventureManager.changeState('State9', null);
    button1.image = continueButton;
    button1.width = continueButton.width;
    button1.height = continueButton.height;
    button1.locate(915 - beginButton.width/2, 650 - beginButton.height/2);
  }

  if (state12Active) {
    adventureManager.changeState('State13', null);
    button1.image = null;
    button1.width = null;
    button1.height = null;
  }

  if (state15Active) {
    adventureManager.changeState('State16', null);
    button1.image = null;
    button1.width = null;
    button1.height = null;
  }
}

option2Hover = function() {
  if (option2.image === overCounterButton) {
    option2.image = overCounterButtonWhite;
  }

  if (option2.image === increaseProductionButton) {
    option2.image = increaseProductionButtonWhite;
  }

  if (option2.image === stayOutPoliticsButton) {
    option2.image = stayOutPoliticsButtonWhite;
  }

  if (option2.image === studentPlanButton) {
    option2.image = studentPlanButtonWhite;
  }
}

option2Outside = function() {
  if (option2.image === overCounterButton) {
    option2.image = overCounterButton;
  }
  else if (option2.image === overCounterButtonWhite) {
    option2.image = overCounterButton;
  }

  if (option2.image === increaseProductionButton) {
    option2.image = increaseProductionButton;
  }
  else if (option2.image === increaseProductionButtonWhite) {
    option2.image = increaseProductionButton;
  }

  if (option2.image === stayOutPoliticsButton) {
    option2.image = stayOutPoliticsButton;
  }
  else if (option2.image === stayOutPoliticsButtonWhite) {
    option2.image = stayOutPoliticsButton;
  }

  if (option2.image === studentPlanButton) {
    option2.image = studentPlanButton;
  }
  else if (option2.image === studentPlanButtonWhite) {
    option2.image = studentPlanButton;
  }
}

class PremiseRoom extends PNGRoom {
  draw() {
    super.draw();
      state1Active = false;
      state2Active = true;
  }
}

class PlayersRoom extends PNGRoom {
  draw() {
    super.draw();
      state2Active = false;
      state3Active = true;

      if (playerCounter >= 1) {
        image(playerChart, 47, 195)
      }

      if (playerCounter === 1) {
        image(lowerDesc, 380, 195);
      }
      if (playerCounter === 2) {
        image(middleDesc, 380, 295);
      }
      if (playerCounter === 3) {
        image(upperDesc, 380, 395);
      }
  }
}

class State4Room extends PNGRoom {
  draw() {
    super.draw();
      state3Active = false;
      state4Active = true;

      if (variableCounter >= 1) {
        image(variableChart, 403, 195)
      }

      image(playerChart, 47, 195)

      if (variableCounter === 1) {
        image(techDesc, 750, 250);
      }
      if (variableCounter === 2) {
        image(socioDesc, 750, 370);
      }
  }
}

class State5Room extends PNGRoom {
  draw() {
    super.draw();
    state4Active = false;
    state5Active = true;

    option2.draw();
  }
}

class State6Room extends PNGRoom {
  draw() {
    super.draw();
      state5Active = false;
      state6Active = true;
  }
}

class State7Room extends PNGRoom {
  draw() {
    super.draw();
      state6Active = false;
      state7Active = true;
  }
}

class State8Room extends PNGRoom {
  draw() {
    super.draw();
      state7Active = false;
      state8Active = true;

      option2.draw();
  }
}

class State9Room extends PNGRoom {
  draw() {
    super.draw();
      state8Active = false;
      state9Active = true;
  }
}

class State10Room extends PNGRoom {
  draw() {
    super.draw();
      state9Active = false;
      state10Active = true;
  }
}

class State11Room extends PNGRoom {
  draw() {
    super.draw();
      state10Active = false;
      state11Active = true;
  }
}

class State12Room extends PNGRoom {
  draw() {
    super.draw();
      state11Active = false;
      state12Active = true;

      option2.draw();
  }
}

class State13Room extends PNGRoom {
  draw() {
    super.draw();
      state12Active = false;
      state13Active = true;
  }
}

class State14Room extends PNGRoom {
  draw() {
    super.draw();
      state13Active = false;
      state14Active = true;
  }
}

class State15Room extends PNGRoom {
  draw() {
    super.draw();
      state14Active = false;
      state6Active = false;
      state15Active = true;

      option2.draw();
  }
}

class State16Room extends PNGRoom {
  draw() {
    super.draw();
      state15Active = false;
      state16Active = true;
  }
}

class State17Room extends PNGRoom {
  draw() {
    super.draw();
      state16Active = false;
      state17Active = true;
  }
}