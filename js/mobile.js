class Mobile {
    // khai bao thuoc tinh
    battery;
    messages;
    inBox;
    outBox;
    status;
    name;

    constructor(iName) {
        this.name = iName;
        this.battery = 80;
        this.messages = "";
        this.inBox = [];
        this.outBox = [];
        this.status = true;
    }

    checkStatus(){
        this.battery--;
        if(this.status == true) {
            console.log('Dien thoai ' + this.name  + " dang bat");
        } else {
            console.log('Dien thoai ' + this.name  + " dang tat");
        }
    }

    turnOn(){
        this.battery--;
        this.status = true;
    }

    turnOff(){
        this.battery--;
        this.status = false;
    }
    
    changeBattery(){
        let x = setInterval(() => {
            this.battery++;
            console.log('dang sac pin ' + this.pin + "%")
            if(this.battery == 100) {
                console.log('pin da day')
                clearInterval(x);
            }
        }, 500)
    }

    writeMessage(text){
        this.battery--;
        this.messages = text;
    }

    sendMessage(phone){
        this.battery--;
        phone.inBox.push(this.messages)
        this.outBox.push(this.messages)
    }
    seeInBox(){
        this.battery--;
        return this.inBox;
    }
    seeOutBox(){
        this.battery--;
        return this.outBox;
    }
}