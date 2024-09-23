document.getElementById('donate-btn-3').addEventListener('click',function(event){
    event.preventDefault();
    // const value = document.getElementById('donate-value-1').value;
    // console.log(value);
    const donate3 = getInputValue('donate-value-3');
    const cardHeade3 = getHeaderValue('card3-head');

    // date 
    const now = new Date();
    // console.log(now);
    getMadeList(donate3,cardHeade3,now);
    // console.log(donate3,cardHeade3)

    const addValue = document.getElementById('value3').innerText;
    const previousValue1 = Number(addValue);

    const DecrirseValue = document.getElementById('totalValue').innerText;
    const previousValue2 = Number(DecrirseValue);

    
    const nowDonatevalue = donate3 + previousValue1;
    const nowDecrieseValue = previousValue2 - donate3;
    console.log(nowDecrieseValue,nowDonatevalue);
    document.getElementById('value3').innerText =nowDonatevalue;
    document.getElementById('totalValue').innerText = nowDecrieseValue;
})