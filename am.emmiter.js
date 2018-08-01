'use strict'
function amEventEmitter(){
    this.events = {};
    //e.x:
    //  this.events = {
    //      'event1' : [ function(){}, function(){} ]
    //  }
    
    this.register = (event, callBackFunction) => {

        if(event == undefined || callBackFunction == undefined){
            errorNotifier({'error': 'register function required parameters EventName and callback function'});
            return false;
        }

        if(typeof callBackFunction !== "function"){
            errorNotifier({'error': 'register function required second parameters to be a callback function'});
            return false;
        }

        if (this.events[event] != undefined){
            this.events[event].push(callBackFunction);
        }else{
            this.events[event] = [];
            this.events[event].push(callBackFunction);            
        }
        return true;
    }

    this.unregister = (event) => {
        if (this.events[event] != undefined){
            delete this.events[event];
            return true;
        }else{
            errorNotifier({'error' : 'No event registered with name <'+event+'>'});
            return false;
        }
    }

    this.mute = (event) => {
        if (this.events[event] != undefined){
            this.events[event].unshift('mutted');
            return true;
        }else{
            errorNotifier({'error' : 'No event registered with name <'+event+'>'});
            return false;
        }
    }

    this.unmute = (event) => {
        if (this.events[event] != undefined && this.events[event][0] == "mutted"){
            this.events[event].shift();
            return true;
        }else{
            errorNotifier({'error' : 'No event registered with name <'+event+'>'});
            return false;
        }
    }

    this.emit = (event,data) => {
        if(typeof this.events[event] === 'undefined' ){
            errorNotifier({'error' : 'No event registered with name <'+event+'>'});
            return false;
        }

        if(this.events[event][0] == 'mutted'){
            return false;
        }

        for(let i=0;i<this.events[event].length;i++){
            this.events[event][i](data);
        }
    }

    let errorNotifier = (error) => {
        throw(error);
        console.error(error)
    }
}



