# amEventEmitter
Custom Quick &amp; Easy Java Script Event Emitter no need of any third party library. From this you register multiple events with call back function &amp; can be able to emit event multiple times with data.  And pragmatically mute &amp; unmute event  which you created.

# Installation
 
 Download am.emmiter.js file from this repo and import am.emmiter.js file in you project
 ```sh
 <script src="am.emmiter.js"></script>
 ```
 
 # Examples
 `Refer index.html in this repo`

# Features & Usage
  #### Step1: Create Instance 
```sh
var eventEmitter = new amEventEmitter();
```

  #### Step2: Register your custom event with Event Name & Callback 
  ```sh
  eventEmitter.register('event1', function(){
    console.log('Event1 emitted');
  });
  ```
  
  #### Step3: Emit your event. 
  ```sh
  eventEmitter.emit('event1');
  ```
  consoles
  `Event1 emitted`
  
 
  #### More Options 
  ##### Emitting with data
  ```sh
  eventEmitter.register('event2', function(data){
    console.log('event2 emitted with data',data);
  });

  eventEmitter.emit('event2',{'name' : 'Jhon Potter'});
  ```
  
  ##### Multiple register to same event
  ```sh
  eventEmitter.register('event3', function(data){
    console.log('event3 emitted!! first register',data);
});

eventEmitter.register('event3', function(data){
    console.log('event3 emitted!! second register',data);
});

eventEmitter.emit('event3',{'name' : 'Jhon Potter'});
  ```
  
  ##### Emitting single event multiple times with different data
  
  ```sh
  eventEmitter.register('event4', function(data){
    console.log('event4 emitted!! ',data);
});
eventEmitter.emit('event4',{'name' : 'Jhon Potter'});  
eventEmitter.emit('event4',{'name' : 'Harry Potter'});  
  ```
  
  ##### Mutting & UnMutting event. call mute method to disable event emit & call unmute method to enable back
  
  ```sh
  eventEmitter.register('event5', function(data){
    console.log('event5 emitted!! ',data);
});
eventEmitter.emit('event5',{'name' : 'Jhon Potter'});  
eventEmitter.mute('event5');
eventEmitter.emit('event5',{'name' : 'Harry Potter'});  
eventEmitter.unmute('event5');
eventEmitter.emit('event5',{'name' : 'Mark welson'}); 
  ```
  
  #### Exception handling 
  Wrap `register`,  `emit`, `mute` and `unmute` method with try & catch block.
  
  ```sh
  try{
    eventEmitter.register('event4', function(data){
      console.log('event4 emitted!! ',data);
    });
  } catch(e){
    console.log('Error',e);
  }
  ```
  
  
  
