// var inits
let power = 1
let amount = 0
let Seabird_worker = 0
let Groupie_worker = 0
let Seadrive_worker = 0
let Convict_worker = 0
let Vince_worker = 0
let Crazycat_worker = 0
let Tetra_worker = 0
let Routine_worker = 0
let Clownfish_worker = 0
let Wildflower_worker = 0
let Papercraft_worker = 0
let Sweettreat_worker = 0
let Goldfish_worker = 0
let Honestlie_worker = 0
let Watercolour_worker = 0
// le funny
let boobs = 80085
// The part of the code that allows you to... Get this, earn cookies :o
function Cookie() {
    amount += power

    document.getElementById("cookies").innerHTML = amount
}
// Saves me like 5 seconds of typing
function charge(cost) {
    amount -= cost
    document.getElementById("cookies").innerHTML = amount
}
// Hotkeys
function Getkey(Pressed) {
    Key = Pressed.key
    
    switch (Key) {
        case " ":
            Cookie()
            break;
        default:
            console.log(Key)
            break;
    }

    return Key
}

// Shop function a.k.a giant switch statement clusterfuck
function Shop(upg_num, cost_num) {
    amount = parseFloat(document.getElementById("cookies").innerHTML)
    cost = document.getElementById(cost_num).innerHTML
    if (amount >= cost) {
        switch (upg_num) {
            case 1:
                Seabird_worker += 1                                                                      /*Placeholder no more!*/
                document.getElementById("Seabird-section").innerHTML += "<img width='75px' height='75px' src='img/seabird.png'>"
                
                charge(cost)
                Seabird()
                break;
            case 2:
                Groupie_worker += 1                                                                           
                document.getElementById("Groupie-section").innerHTML += "<img width='75px' height='75px' src='img/Groupie.png'>"
                
                charge(cost)
                Groupie()
                break;
            case 3:
                Seadrive_worker += 1
                document.getElementById("Seadrive-section").innerHTML += "<img width='75px' height='75px' src='img/Seadrive.png'>"
                
                charge(cost)
                Seadrive()
                break;
            case 4:
                Convict_worker += 1
                document.getElementById("Convict-section").innerHTML += "<img width='75px' height='75px' src='img/Convict.png'>"
                
                charge(cost)
                Convict()
                break;
            case 5:
                Vince_worker += 1
                document.getElementById("Vince-section").innerHTML += "<img width='75px' height='75px' src='img/Vince.png'>"
                
                charge(cost)
                Vince()
                break;
            case 6:
                Crazycat_worker += 1
                document.getElementById("Crazycat-section").innerHTML += "<img width='75px' height='75px' src='img/Crazycat.png'>"
                
                charge(cost)
                Crazycat()
                break;
            case 7:
                Tetra_worker += 1
                document.getElementById("Tetra-section").innerHTML += "<img width='75px' height='75px' src='img/Tetra.png'>"
                
                charge(cost)
                Tetra()
                break;
            case 8:
                Routine_worker += 1
                document.getElementById("Routine-section").innerHTML += "<img width='75px' height='75px' src='img/Routine.png'>"
                
                charge(cost)
                Routine()
                break;
            case 9:
                Clownfish_worker += 1
                document.getElementById("Clownfish-section").innerHTML += "<img width='75px' height='75px' src='img/Clownfish.png'>"
                
                charge(cost)
                Clownfish()
                break;
            case 10:
                Wildflower_worker += 1
                document.getElementById("Wildflower-section").innerHTML += "<img width='75px' height='75px' src='img/Wildflower.png'>"
                
                charge(cost)
                Wildflower()
                break;
            case 11:
                Papercraft_worker += 1
                document.getElementById("Papercraft-section").innerHTML += "<img width='75px' height='75px' src='img/Papercraft.png'>"
                
                charge(cost)
                Papercraft()
                break;
            case 12:
                Sweettreat_worker += 1
                document.getElementById("Sweettreat-section").innerHTML += "<img width='75px' height='75px' src='img/Sweettreat.png'>"
                
                charge(cost)
                Sweettreat()
                break;
            case 13:
                Goldfish_worker += 1
                document.getElementById("Goldfish-section").innerHTML += "<img width='75px' height='75px' src='img/Goldfish.png'>"
                
                charge(cost)
                Goldfish()
                break;
            case 14:
                Honestlie_worker += 1
                document.getElementById("Honestlie-section").innerHTML += "<img width='75px' height='75px' src='img/Honestlie.png'>"
                
                charge(cost)
                Honestlie()
                break;
            case 15:
                Watercolour_worker += 1
                document.getElementById("Watercolour-section").innerHTML += "<img width='75px' height='75px' src='img/Watercolour.png'>"
                
                charge(cost)
                Watercolour()
                break;
            case 16:
                console.log("Uhhh... Selfish currently not implemented")
                break;
            // It is the upgrades, Camarade! Remember, 5 unique upgrades with 5 levels per worker + your mouse cuz y not
            case 17: // Higher clicking power
                power += 1
                
                charge(cost)
                break;
            case 18: // Double Trouble 
                power = power * 2

                charge(cost)
                break;
            case 19: // Exponent bonus 
                power = power ** 1.1

                charge(cost)
                break;
            case 20: // Spacebar unlock
                document.addEventListener("keydown", Getkey)
                document.getElementById("spacebar_purchase").style.visibility = "hidden"

                charge(cost)
                break;
            case 21: // Gambler's luck
                document.getElementById("cookie").onclick += "Gamble()"
                document.getElementById("gambling_purchase").style.visibility = "hidden" 

                charge(cost)
                break;
        }
    } else {window.alert("Get the fuck out, come back when you have money")}
}
// Worker functions a.k.a ctrl-c + ctrl-v, cuz ma recursion no werk otherwayse
function Seabird() {
    if (69/420 != true) {
        amount += Seabird_worker
        document.getElementById("cookies").innerHTML = amount
        setTimeout(Seabird, 1000)
    }
}
function Groupie() {
    if (0/0 != "defined") {
        amount += Groupie_worker * 2
        document.getElementById("cookies").innerHTML = amount
        setTimeout(Groupie, 1000)
    }
}
function Seadrive() {
    if (Error != null) {
        amount += Seadrive_worker * 3
        document.getElementById("cookies").innerHTML = amount
        setTimeout(Seadrive, 1000)
    }
}
function Convict() {
    if (1+1 != true) {
        amount += Convict_worker * 4
        document.getElementById("cookies").innerHTML = amount
        setTimeout(Convict, 1000)
    }
}
function Vince() {
    if (2+2 != 5) {
        amount += Vince_worker * 5
        document.getElementById("cookies").innerHTML = amount
        setTimeout(Vince, 1000)
    }
}
function Crazycat() {
    if (3**2 != 6) {
        amount += Crazycat_worker * 6
        document.getElementById("cookies").innerHTML = amount
        setTimeout(Crazycat, 1000)
    }
}
function Tetra() {
    if (2137 != "Swięty") {
        amount += Tetra_worker * 7
        document.getElementById("cookies").innerHTML = amount
        setTimeout(Tetra, 1000)
    }
}
function Routine() {
    if (620 + 1 == 621) {
        amount += Routine_worker * 8
        document.getElementById("cookies").innerHTML = amount
        setTimeout(Routine, 1000)
    }
}
function Clownfish() {
    if (621 + 306 != 926) {
        amount += Clownfish_worker * 9
        document.getElementById("cookies").innerHTML = amount
        setTimeout(Clownfish, 1000)
    }
}
function Wildflower() {
    if (10*10 == 100) {
        amount += Wildflower_worker * 10
        document.getElementById("cookies").innerHTML = amount
        setTimeout(Wildflower, 1000)
    }
}
function Papercraft() {
    if (boobs == 80085) {
        amount += Papercraft_worker * 11
        document.getElementById("cookies").innerHTML = amount
        setTimeout(Papercraft, 1000)
    }
}
function Sweettreat() {
    if (69/420 != true) {
        amount += Sweettreat_worker * 12
        document.getElementById("cookies").innerHTML = amount
        setTimeout(Sweettreat, 1000)
    }
}
function Goldfish() {
    if (69/420 != true) {
        amount += Goldfish_worker * 13
        document.getElementById("cookies").innerHTML = amount
        setTimeout(Goldfish, 1000)
    }
}
function Honestlie() {
    if (69/420 != true) {
        amount += Honestlie_worker * 14
        document.getElementById("cookies").innerHTML = amount
        setTimeout(Honestlie, 1000)
    }
}
function Watercolour() {
    if (69/420 != true) {
        amount += Watercolour_worker * 15
        document.getElementById("cookies").innerHTML = amount
        setTimeout(Watercolour, 1000)
    }
}