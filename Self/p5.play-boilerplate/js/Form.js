class Form{

constructor(){
this.title = createElement("h1");
this.button1 = createButton("Begin");
this.greeting=createElement("h2");
this.input= createInput("Type your name in");
this.button2=createButton("Proceed")
this.greeting1  = createElement("h4");
this.greeting2 =createElement("h4");
this.greeting3=createElement("h4");
}

hide(){

this.button1.hide();
this.button2.hide();
this.input.hide();
this.greeting.hide();
this.greeting1.hide();
this.greeting2.hide();
this.greeting2.hide();
}

display(){

this.title.html("A Migrant's Walk");
this.title.position(displayWidth/2-120, displayHeight/20-30);
this.button1.position(displayWidth/2-20, displayHeight/2+20);

var name = this.input.value();
this.input.position(displayWidth/2-60,displayHeight/2-100);


this.button1.mousePressed(()=>{

this.button1.hide();


this.input.hide();


this.greeting.html("Hello, Welcome to a Migrant's Walk "+ name)
this.button2.position(displayWidth/2-50, displayHeight/2+50);

this.greeting.position(displayWidth/2-270, displayHeight/12+20);
this.greeting1.html("You are a migrant, fleeing from your country. Your family is held as political prisoners and you are all alone. While leaving, you learn that a refugee camp is nearby.");
this.greeting2.html("For the next 7 days, you need to forge for foods, find shelter and make it to the camp without being caught by the patrolling guards. It is going to be a dangerous journey");
this.greeting3.html("You have limited supplies and will have to go through challenges to reach your goal. Use the arrow keys to move through the game, and the mouse when required. Good luck.");
this.greeting1.position(displayWidth/2-500, displayHeight/2-200);
this.greeting2.position(displayWidth/2-510, displayHeight/2-150)
this.greeting3.position(displayWidth/2-515, displayHeight/2-100);
gameState = 1;

})
this.button2.mousePressed(()=>{
    this.greeting.hide();
    this.greeting1.hide();
    this.greeting2.hide();
    this.greeting3.hide();

this.button2.hide();
    gameState = 2;


})

}


}