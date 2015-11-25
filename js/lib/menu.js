var Menu = (function() {

	this.menuAlpha = 1.0;
	this.directionsAlpha = 0.0;
	this.levelSelectionAlpha = 0.0;
	this.gameAlph = 0.0;

	this.atom = new Atom("lithium", "Menu");
	this.atom.x = 200;
	this.atom.y = 300;
	
	this.atom2 = new Atom("hydrogen", "Menu");
	this.atom2.x = 200;
	this.atom2.y = 210;
	
	this.atom1 = new Atom("lithium", "Menu");
	this.atom1.x = 200;
	this.atom1.y = 450;
	
	this.atom3 = new Atom("helium", "Menu");
	this.atom3.x = 700;
	this.atom3.y = 320;
	


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
			this.gameAlph -= 0.05;

			if(this.directionsAlpha <= 0 || this.levelSelectionAlpha <= 0 || this.gameAlph <= 0)
			{
				this.directionsAlpha = 0;
				this.levelSelectionAlpha = 0;
				this.gameAlph = 0;
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
		
		if(fade.active && fade.path === "game")
		{
			
				this.levelSelectionAlpha -= 0.05;
				
				if(this.levelSelectionAlpha <= 0)
				{
					this.levelSelectionAlpha = 0;
					this.gameAlph += 0.05;
				}

				if(this.gameAlph  >= 1 && fade.active)
				{
					this.gameAlph = 1;
					fade.active = false;
					scene.type = "gameplay";
					
				}
		}

	});

	this.update = (function() {

		if(this.gameAlpha >= 1) 
		
		if(this.directionsAlpha >= 1)
		{ this.updateDirections();}
		
		if(this.levelSelectionAlpha >= 1)
		{ this.updateLevelSelection();}

		this.fadeEnable();
		if(this.menuAlpha >= 1)
		{ this.drawMain(); neutrinoRain.update();}
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

			if(mouse.x > buttons.easyX && mouse.y > buttons.easyPivotY && mouse.x < buttons.easyX + buttons.easyWidth && mouse.y < buttons.easyPivotY + buttons.easyHeight)
			  { graphics.drawCicle(buttons.easyX - 20, buttons.easyPivotY + 30,10, "GREEN") 
				if(mouse.click) { fade.active = true; fade.path = "game";} atom.name = "hydrogen";}
			
			
			if(mouse.x > buttons.meadiumX && mouse.y > buttons.meadiumPivotY && mouse.x < buttons.easyX + buttons.meadiumWidth && mouse.y < buttons.meadiumPivotY + buttons.meadiumHeight)
			  { graphics.drawCicle(buttons.meadiumX - 20, buttons.meadiumPivotY + 30,10, "GREEN") 
				if(mouse.click) { fade.active = true; fade.path = "game";}atom.name = "helium";}
					
			
			if(mouse.x > buttons.hardX && mouse.y > buttons.hardPivotY && mouse.x < buttons.hardX + buttons.hardWidth && mouse.y < buttons.hardPivotY + buttons.hardHeight)
			  { graphics.drawCicle(buttons.hardX - 20, buttons.hardPivotY + 30,10, "GREEN") 
				if(mouse.click) { fade.active = true; fade.path = "game";}atom.name = "lithium";}
			
	});

	this.drawDirections = (function(){
			graphics.drawText(225 , 100, "80px", "Directions", "blue");

			if(this.menuAlpha <= 0)
			{ this.atom.draw();}
	});
	
	this.drawLevelSelection = (function(){
			graphics.drawText(100 , 100, "80px", "Level Selection", "blue");
			

			if(this.menuAlpha <= 0)
			{	
				this.atom1.draw();
				this.atom2.draw();
				this.atom3.draw(); 
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
		graphics.drawText(buttons.easyX , buttons.easyY, "50px", "Easy", "Green");
		graphics.drawText(buttons.meadiumX , buttons.meadiumY, "50px", "Medium", "Green");
		graphics.drawText(buttons.hardX , buttons.hardY, "50px", "Hard", "Green");
		
	});

	this.draw = (function() {

		
		
		
			// Draw neutrinos rain
			graphics.ctx.save();
			graphics.ctx.globalAlpha = this.menuAlpha;
			neutrinoRain.draw();
			graphics.ctx.restore();
		
			
			
			// Draw main menu
			graphics.ctx.save();
			if(this.directionsAlpha != 0) this.drawDirections();
			graphics.ctx.globalAlpha = this.directionsAlpha;
			graphics.drawText(600, 540, "50px", "Back", "BLUE");
			graphics.drawCicle(600,(graphics.canvas.height / 2), 5, "#CC0000");
			this.drawTexts();
			graphics.ctx.restore();
			
			// Draw main Level Selection
			graphics.ctx.save();
			if(this.levelSelectionAlpha != 0) this.drawLevelSelection();
			graphics.ctx.globalAlpha = this.levelSelectionAlpha;
			this.drawTextsLs();
			graphics.ctx.restore();	
			
			graphics.ctx.fillStyle = "#FF0000"; 
		
		
		
		
		
	});

});
var menu = new Menu();
