class Mobile {
    battery;
    message;
    inbox;
    outbox;
    status;
    name;

    //khai bao thuoc tinh

    constructor(iName) {    //name phụ thuộc vào các đối tượng khác nhau nên khai báo, còn mấy cái kia là bản chất của điện thoại rồi.
        this.name = iName;
        this.battery = 100;
        this.message = "";
        this.inbox = [];
        this.outbox = [];
        this.status = true;
    }

    //khai bao phuong thuc

    checkStatus() {
        this.battery--;
            if (this.status == true) {
                console.log('Dien thoai' + this.name + 'dang bat');
            } else {
                console.log('Dien thoai' + this.name + 'dang tat');
            }
    }

    turnOn() {
        this.battery--;
        this.status = true;
    }
    turnOff() {
        this.battery--;
        this.status = false;
    }

    changeBattery() {
        let x = setInterval(() => {
            this.battery++;
            console.log('dang sac pin ' + this.battery + '%')
            if(this.battery == 100) {
                console.log('pin da day');
                clearInterval(x);
            }
        }, 1000) //don vi mili giây
    }

    writeMessage(text) {
        this.battery--;
        this.message = text;
    }
    sendMessage(phone) {
        this.battery--;
        phone.inbox.push(this.message)
        this.outbox(this.message)
    }
    seeInbox() {
        this.battery--;
        return this.inbox;
    }
    seeOutbox() {
        this.battery--;
        return this.outbox;
    }

}