document.getElementById('donate-btn-2').addEventListener('click',function(event){
    event.preventDefault();
    // const value = document.getElementById('donate-value-1').value;
    // console.log(value);
    const donate2 = getInputValue('donate-value-2');
    const cardHeade2 = getHeaderValue('card2-head');

    // date 
    const now = new Date();
    // console.log(now);
    getMadeList(donate2,cardHeade2,now);

    // console.log(donate2,cardHeade2)
    const addValue = document.getElementById('value2').innerText;
    const previousValue1 = Number(addValue);
    // console.log(addValue);
    const DecrirseValue = document.getElementById('totalValue').innerText;
    const previousValue2 = Number(DecrirseValue);

    
    const nowDonatevalue = donate2 + previousValue1;
    const nowDecrieseValue = previousValue2 - donate2;
    console.log(nowDecrieseValue,nowDonatevalue);
    document.getElementById('value2').innerText =nowDonatevalue;
    document.getElementById('totalValue').innerText = nowDecrieseValue;
})