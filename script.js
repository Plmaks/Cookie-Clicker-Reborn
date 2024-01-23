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
// The part of the code that allows you to... Get this, earn cookies :o
function Cookie() {
    amount += power

    document.getElementById("cookies").innerHTML = amount
}
// Shop function a.k.a giant switch statement clusterfuck
function Shop(upg_num, cost_num) {
    amount = parseFloat(document.getElementById("cookies").innerHTML)
    cost = document.getElementById(cost_num).innerHTML
    if (amount >= cost) {
        switch (upg_num) {
            case 1:
                Seabird_worker += 1
                amount -= cost

                document.getElementById("cookies").innerHTML = amount
                Seabird()
                break;
            case 2:
                Groupie_worker += 1
                Workers("groupie")

                amount -= cost
                document.getElementById("cookies").innerHTML = amount
                break;
            case 3:
                Seadrive_worker_worker += 1
                Workers("seadrive")

                amount -= cost
                document.getElementById("cookies").innerHTML = amount
                break;
            case 4:
                Convict_worker += 1
                Workers("convict")

                amount -= cost
                document.getElementById("cookies").innerHTML = amount
                break;
            case 5:
                Vince_worker += 1
                Workers("vince")

                amount -= cost
                document.getElementById("cookies").innerHTML = amount
                break;
            case 6:
                Crazycat_worker += 1
                Workers("crazycat")

                amount -= cost
                document.getElementById("cookies").innerHTML = amount
                break;
            case 7:
                Tetra_worker += 1
                Workers("Tetra")

                amount -= cost
                document.getElementById("cookies").innerHTML = amount
                break;
            case 8:
                Routine_worker += 1
                Workers("routine")

                amount -= cost
                document.getElementById("cookies").innerHTML = amount
                break;
            case 9:
                Clownfish_worker += 1
                Workers("clownfish")

                amount -= cost
                document.getElementById("cookies").innerHTML = amount
                break;
            case 10:
                Wildflower_worker += 1
                Workers("wildflower")

                amount -= cost
                document.getElementById("cookies").innerHTML = amount
                break;
            case 11:
                Papercraft_worker += 1
                Workers("papercraft")

                amount -= cost
                document.getElementById("cookies").innerHTML = amount
                break;
            case 12:
                Sweettreat_worker += 1
                Workers("sweettreat")

                amount -= cost
                document.getElementById("cookies").innerHTML = amount
                break;
            case 13:
                Goldfish_worker += 1
                Workers("goldfish")

                amount -= cost
                document.getElementById("cookies").innerHTML = amount
                break;
            case 14:
                Honestlie_worker += 1
                Workers("honestlie")

                amount -= cost
                document.getElementById("cookies").innerHTML = amount
                break;
            case 15:
                Watercolour_worker += 1
                Workers("watercolour")

                amount -= cost
                document.getElementById("cookies").innerHTML = amount
                break;
        }
    } else {window.alert("Get the fuck out, come back when you have money")}
}
// Worker functions a.k.a ctrl-c + ctrl-v, cuz ma recursion
function Seabird() {
    if (69/420 != true) {
        amount += Seabird_worker
        document.getElementById("cookies").innerHTML = amount
        setTimeout(Seabird, 1000)
    }
}