var Menu = (function() {

	this.menuAlpha = 1.0;
	this.directionsAlpha = 0.0;
	this.levelSelectionAlpha = 0.0;

	this.atom = new Atom("lithium", "Menu");
	this.atom.x = 200;

	this.fadeEnable = (function(){

		fade.active = true;

		if(fade.active && fade.path === "directions")
		{
				this.menuAlpha -= 0.05;

				if(this.menuAlpha <= 0)
				{
					this.menuAlpha = 0;
					this.directionsAlpha += 0.05;
				}

				if(this.directionsAlpha >= 1 && fade.active)
				{
					this.directionsAlpha = 1;
					fade.active = false;
				}
		}

		if(fade.active && fade.path === "menu")
		{
			this.directionsAlpha -= 0.05;
			this.levelSelectionAlpha -= 0.05;

			if(this.directionsAlpha <= 0 || this.levelSelectionAlpha <= 0)
			{
				this.directionsAlpha = 0;
				this.levelSelectionAlpha = 0;
				this.menuAlpha += 0.05;
			}

			if(this.menuAlpha >= 1 && fade.active)
			{
				this.menuAlpha = 1;
				fade.active = false;
			}
		}

		
		if(fade.active && fade.path === "levelSelection")
		{
				this.menuAlpha -= 0.05;
				
				if(this.menuAlpha <= 0)
				{
					this.menuAlpha = 0;
					this.levelSelectionAlpha += 0.05;
				}

				if(this.levelSelectionAlpha >= 1 && fade.active)
				{
					this.levelSelectionAlpha = 1;
					fade.active = false;
				}
		}

	});

	this.update = (function() {

		neutrinoRain.update();

		if(this.directionsAlpha >= 1)
		{ this.updateDirections();}
		
		if(this.levelSelectionAlpha >= 1)
		{ this.updateLevelSelection();}

		this.fadeEnable();
	});

	this.updateDirections = (function(){

		var x = 600;
		var y = 500;
		var w = 120;
		var h = 50;

		graphics.drawText(x, y + 40, "50px", "Back", "BLUE");

		if(mouse.x > x && mouse.y > y && mouse.x < x + w && mouse.y < y + h)
		{ graphics.drawCicle(x - 20, y + 25, 7.5, "BLUE"); if(mouse.click) {fade.active = true; fade.path = "menu";} }

	});
	
	this.updateLevelSelection = (function(){

		var x = 600;
		var y = 500;
		var w = 120;
		var h = 50;

		graphics.drawText(x, y + 40, "50px", "Back", "BLUE");

		if(mouse.x > x && mouse.y > y && mouse.x < x + w && mouse.y < y + h)
		{ graphics.drawCicle(x - 20, y + 25, 7.5, "BLUE"); if(mouse.click) {fade.active = true; fade.path = "menu";} }
		
		

	});

	this.drawDirections = (function(){
			graphics.drawText(225 , 100, "80px", "Directions", "blue");

			if(this.menuAlpha <= 0)
			{ this.atom.draw(); }
	});
	
	this.drawLevelSelection = (function(){
			graphics.drawText(100 , 100, "80px", "Level Selection", "blue");
			

			if(this.menuAlpha <= 0)
			{	
				this.atom.draw();
				
			}	
	});

	this.drawMain = (function(){
		graphics.drawText(100 , 100, "80px", "Nuclear Reaction", "blue");
		buttons.draw();
	});

	this.drawTexts = (function(){
		graphics.drawText(160 , 435, "50px", "You", "Green");
		graphics.drawText(510 , 375, "50px", "How you", "Green");
		graphics.drawText(490 , 440, "50px", "need evite", "Green");
	});
	
	this.drawTextsLs = (function(){
		graphics.drawText(450 , 310, "50px", "Easy", "Green");
		graphics.drawText(450 , 375, "50px", "Medium", "Green");
		graphics.drawText(450 , 440, "50px", "Hard", "Green");
		
	});

	this.draw = (function() {

		// Draw main Level Selection
			graphics.ctx.save();
			graphics.ctx.globalAlpha = this.levelSelectionAlpha;
			this.drawLevelSelection();
			//graphics.drawCicle(600,(graphics.canvas.height / 2), 5, "#CC0000");
			this.drawTextsLs();
			graphics.ctx.restore();	
		
		
		// Draw neutrinos rain
		graphics.ctx.save();
		graphics.ctx.globalAlpha = this.menuAlpha;
		this.drawMain();
		neutrinoRain.draw();
		graphics.ctx.restore();
		
			// Draw main menu
			graphics.ctx.save();
			graphics.ctx.globalAlpha = this.directionsAlpha;
			this.drawDirections();
			graphics.drawText(600, 540, "50px", "Back", "BLUE");
			graphics.drawCicle(600,(graphics.canvas.height / 2), 5, "#CC0000");
			this.drawTexts();
			graphics.ctx.restore();
		
		
		
		
	});

});
var menu = new Menu();
