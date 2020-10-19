function setup(){
  
  
  stop = createSprite(1390,200,15,150)
  stop.shapeColor = "blue"
  redbulletGroup = new Group();
  greenbulletGroup = new Group();
  yellowbulletGroup = new Group();
  
}

function draw(){
  createCanvas(1400,400)
  
  if (redbulletGroup.collide(stop)){
    
    stop.shapeColor = "red" 
  }
  
  
  if (greenbulletGroup.collide(stop)){
    
    stop.shapeColor = "green" 
  }
  
  if (yellowbulletGroup.collide(stop)){
    
    stop.shapeColor = "yellow" 
  }
  
  if(frameCount % 100===0){
     
     redbullet = createSprite(1,200,20,20);
     redbullet.velocityX=10;
     redbulletGroup.add(redbullet);
     redbulletGroup.lifetime = 200;
   }
  
     if(frameCount % 120===0){
     
     greenbullet = createSprite(1,200,20,20);
     greenbullet.velocityX=13;
     greenbulletGroup.lifetime = 200;
     greenbulletGroup.add(greenbullet);
     
   }
  
      if(frameCount % 160===0){
     
     yellowbullet = createSprite(1,200,20,20);
     yellowbullet.velocityX=13;
     yellowbullet.lifetime = 200;
     yellowbulletGroup.add(yellowbullet);
     
   }
  
  
  
  
   greenbulletGroup.collide(stop)
   redbulletGroup.collide(stop)
  yellowbulletGroup.collide(stop)
  
  
     drawSprites();
}