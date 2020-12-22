window.onload = function() {

    var num = document.getElementsByClassName('btn')
    var equation = document.querySelector('[name=equation]')
    var answer = ""

    for (var a = 0; a < num.length; a++) {
        num[a].onclick = function () {

            if(RegExp('^-?\d+.?\d+[-+*/]-?\d+.?\d+$').test(this.value)) {
                equation.value = answer;
                return false
            }

            if (this.value == "C") {
                equation.value = ""
                answer = 0
            } else {
                equation.value += this.value
                answer = equation.value
            }
        }
    }
   
    document.querySelector('input[value="="]').onclick = function calculate() {
       
        try {
            answer = eval(answer)
        } catch (e) {
            answer = "error"
        }
        equation.value = answer
        return false
    }
} 