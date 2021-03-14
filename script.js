var colorList = [
  {
    color:"red"
  },
  {
    color:"green"
  },
  {
    color:"blue"
  }
];
var elements = [];

function colorBlock(data){
  var that = this;
  this.color = data.color;
  this.initialClick = 0;
  this.ele = document.createElement("div");
  this.clickEle = document.createElement("div");
  this.clickEle.innerHTML = this.initialClick;
  this.ele.addEventListener("click", function(){
    that.clickNumber();
  });
  
  this.ele.style.backgroundColor = this.color;
  this.ele.style.height = "100px";
  this.ele.style.width = "200px";
  this.ele.style.borderRadius = "10px";
  this.clickEle.style.fontSize = "18px";
  this.clickEle.style.color = "white";
  this.clickEle.style.textAlign = "center";
  this.clickEle.style.padding = "39px";
  
  this.ele.appendChild(this.clickEle);
  document.body.appendChild(this.ele);
  
}

colorBlock.prototype.clickNumber = function () {
  this.initialClick = this.initialClick + 1;
  this.clickEle.innerHTML = this.initialClick;
};

for(var i=0; i<colorList.length; i++){
  elements.push(new colorBlock(colorList[i]));
}