var time = function()
{
	this.start = (new Date()).getTime();
	
	this.deltaTime = function()
	{
		current = (new Date()).getTime();		
		elapsed = current - this.start;
		var delta = elapsed / 1000;			
		return delta;
	}
	this.restartTime = function()
	{
		this.start = (new Date()).getTime();
	}
	this.update = function()
	{
		this.score = this.deltaTime();
		graphics.drawText(300, 70, "50px", "Score:  " + Math.floor(this.score).toString(), "Green", "right");
		for(var i = 0; i < neutrinoRain.number; i++)
		{
			neutrinoRain.neutrinos[i].speed += menu.value;
		}
	}
}

var time = new time();