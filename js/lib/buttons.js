var Buttons = (function(){

  this.playX = 350;
  this.playY = 250;

    this.playPivotY = this.playY - 50
    this.playWidth = 130;
    this.playHeight = 70;

  this.directionX = 200;
  this.directionY = 350;

    this.directionPivotY = this.directionY - 50
    this.directionWidth = 400;
    this.directionHeight = 60;


  this.creditsX = 285;
  this.creditsY = 450;

    this.creditsPivotY = this.creditsY - 50
    this.creditsWidth = 230;
    this.creditsHeight = 50;

  this.draw = (function() {

    //graphics.drawStrokeRect(this.playX, this.playPivotY, this.playWidth, this.playHeight, "BLACK");
    //graphics.drawStrokeRect(this.directionX, this.directionPivotY, this.directionWidth, this.directionHeight, "BLACK");
    //graphics.drawStrokeRect(this.creditsX, this.creditsPivotY, this.creditsWidth, this.creditsHeight, "BLACK");

      graphics.drawText(this.playX, this.playY, "70px", "Play", "Green");
      graphics.drawText(this.directionX, this.directionY, "70px", "Instructions", "Green");
      graphics.drawText(this.creditsX, this.creditsY, "70px", "Credits", "Green");

      if(mouse.x > this.playX && mouse.y > this.playPivotY && mouse.x < this.playX + this.playWidth && mouse.y < this.playPivotY + this.playHeight)
      { graphics.drawCicle(this.playX - 20, this.playPivotY + 30,10, "GREEN") 
		if(mouse.click) { fade.active = true; fade.path = "levelSelection";}}

      if(mouse.x > this.directionX && mouse.y > this.directionPivotY && mouse.x < this.directionX + this.directionWidth && mouse.y < this.directionPivotY + this.creditsHeight)
      { graphics.drawCicle(this.directionX - 20, this.directionPivotY + 30,10, "GREEN"); if(mouse.click) { fade.active = true; fade.path = "directions";} }

      if(mouse.x > this.creditsX && mouse.y > this.creditsPivotY && mouse.x < this.creditsX + this.creditsWidth && mouse.y < this.creditsPivotY + this.creditsHeight)
      { graphics.drawCicle(this.creditsX - 20, this.creditsPivotY + 30,10, "GREEN") }

  });

});

var buttons = new Buttons();
