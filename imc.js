
const calculate = document.getElementById('calculate');

function imc (){
    const name = document.getElementById('name').value;
    const height = document.getElementById('height').value;
    const weight = document.getElementById('weight').value;
    const result = document.getElementById('result');

    if(name !== '' && height.value !== '' && weight.value !== ''){
        
        const valueIMC = (weight / (height * height)).toFixed(2);

        let classification = '';
        if(valueIMC < 18.5){
            classification = 'abaixo do peso.';
        }else if(valueIMC < 25) {
            classification = 'com peso ideal. Parabéns!';
        }else if(valueIMC < 30){
            classification = 'levemente acima do peso.';   
        }else if(valueIMC < 35){
            classification = 'com obesidade grau I.';   
        }else if(valueIMC < 40){
            classification = 'com obesidade grau II.';   
        }else{
            classification = 'com obesidade grau III. Cuidado!';   
        }

        result.textContent = `${name} , o seu IMC é de ${valueIMC} e você está ${classification}`;

    }else {
        result.textContent = 'Preencha todos os campos...';
    }
    

}

calculate.addEventListener('click', imc);
