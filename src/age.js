export default function Age(earth) {
  this.earth = earth;
}

Age.prototype.toMercury = function () {
  const age = new Age();
  const mercury = (this.earth / .24 );
  return Math.round(mercury * 100) /100;
}

Age.prototype.toVenus = function () {
  const age = new Age();
  const venus = (this.earth / .62);
  return Math.round(venus * 100) / 100;
}
Age.prototype.toMars = function () {
  const age = new Age();
  const mars = (this.earth/ 1.88);
  return Math.round(mars * 100) / 100;
}
Age.prototype.toJupiter = function () {
  const age = new Age();
  const jupiter = (this.earth/ 11.86);
  return Math.round(jupiter * 100) / 100;
}

Age.prototype.toTimeLeft = function () {
  const age = new Age();
  const timeLeft = 100 - this.earth; 
  return Math.round(timeLeft * 100) / 100;
} 

Age.prototype.toCheck = function () {
  const age = new Age();
  const output1= "wow! you're " + (age) +". That's " + (age - 100) + " more years than the average earthling!";
  const output2 = "you have " + (100 - age) + " years before the end of your life! "+ " wow, you're young";
  if (this.earth >= 100) {
    return output1;
  } (this.earth< 100 && this.earth > 0); {
    return output2;
  } 
}









