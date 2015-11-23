var Neutrino = (function(){

		this.x = 0;
		this.y = 0;
		this.direction = "";
		this.speed = 10;
		this.isAreadyInside = false;
		
});

var NeutrinoRain = (function(){

		this.count = 5;

		this.direction = ["UpDown", "DownUp", "RightLeft", "LeftRight"];
		this.initPosX = [100, 200, 300, 400, 500, 600, 700];
		this.iniyPosY = [100, 200, 300, 400, 500];

		this.neutrinos = new Array();

		for(var i = 0; i < 10; i++)
		{
			this.neutrinos[i] = new Neutrino();
			this.neutrinos[i].direction = this.direction[Math.floor(Math.random() * this.direction.length)];

			switch (this.neutrinos[i].direction)
			{
				case "UpDown": this.neutrinos[i].x = this.initPosX[Math.floor(Math.random() * this.initPosX.length)]; this.neutrinos[i].y = 10 + Math.floor(Math.random() * 100); break;
				case "DownUp": this.neutrinos[i].x = this.initPosX[Math.floor(Math.random() * this.initPosX.length)]; this.neutrinos[i].y = 610 + Math.floor(Math.random() * 700); break;
				case "RightLeft": this.neutrinos[i].x = 810 + Math.floor(Math.random() * 900); this.neutrinos[i].y = this.iniyPosY[Math.floor(Math.random() * this.iniyPosY.length)]; break;
				case "LeftRight": this.neutrinos[i].x = -100 + Math.floor(Math.random() * -10); this.neutrinos[i].y = this.iniyPosY[Math.floor(Math.random() * this.iniyPosY.length)]; break;
			}
		}

		this.move = (function(){

				for(var i = 0; i < 10; i++)
				{
						//console.log("Direction: " + this.neutrinos[0].direction + " PosX: " + this.neutrinos[0].x);
						switch (this.neutrinos[i].direction)
						{
							case "UpDown": this.neutrinos[i].y += this.neutrinos[i].speed; break;
							case "DownUp": this.neutrinos[i].y -= this.neutrinos[i].speed; break;
							case "RightLeft": this.neutrinos[i].x -= this.neutrinos[i].speed; break;
							case "LeftRight": this.neutrinos[i].x += this.neutrinos[i].speed; break;
						}

						this.neutrinos[i].speed = this.count;
				}
		});

		this.returnToInitPos = (function(){
				for(var i = 0; i < 10; i++)
				{
					if(this.neutrinos[i].x > 0 && this.neutrinos[i].x < 800 && this.neutrinos[i].y > 0 && this.neutrinos[i].x < 800)
					{
						this.neutrinos[i].isAreadyInside = true;
					}


					if((this.neutrinos[i].x < 0 || this.neutrinos[i].x > 800 || this.neutrinos[i].y < 0 || this.neutrinos[i].x > 800) && this.neutrinos[i].isAreadyInside)
					{
						switch (this.neutrinos[i].direction)
						{
							case "UpDown": this.neutrinos[i].x = this.initPosX[Math.floor(Math.random() * this.initPosX.length)]; this.neutrinos[i].y = 10 + Math.floor(Math.random() * 100); break;
							case "DownUp": this.neutrinos[i].x = this.initPosX[Math.floor(Math.random() * this.initPosX.length)]; this.neutrinos[i].y = 610 + Math.floor(Math.random() * 700); break;
							case "RightLeft": this.neutrinos[i].x = 810 + Math.floor(Math.random() * 900); this.neutrinos[i].y = this.iniyPosY[Math.floor(Math.random() * this.iniyPosY.length)]; break;
							case "LeftRight": this.neutrinos[i].x = -100 + Math.floor(Math.random() * -10); this.neutrinos[i].y = this.iniyPosY[Math.floor(Math.random() * this.iniyPosY.length)]; break;
						}
						this.neutrinos[i].isAreadyInside = false;

						if(this.count <= 20)
						{ this.count += 0.05; }
					}
			}
		});

		this.update = (function() {
				this.move();
				this.returnToInitPos();
		});

		this.draw = (function() {

			for(var i = 0; i < 10; i++)
			{ graphics.drawCicle(this.neutrinos[i].x,this.neutrinos[i].y, 5, "#CC0000"); }

		});

});
var neutrinoRain = new NeutrinoRain();
