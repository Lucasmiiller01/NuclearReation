var time = function()
{
	var start = (new Date()).getTime();
	
		
	function deltaTime()
	{
		current = (new Date()).getTime();		
		elapsed = current - start;
		var delta = elapsed / 1000;			
		return delta;
			
	}
	
	this.update = function()
	{
		var delta = deltaTime();
		graphics.drawText(20, 70, "50px", "Score :", "Green");
		graphics.drawText(200, 70, "50px", Math.floor(delta).toString(), "Green");
		
	}
}

var time = new time();