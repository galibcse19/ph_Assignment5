document.getElementById('donate-btn-1').addEventListener('click',function(event){
    event.preventDefault();
    // const value = document.getElementById('donate-value-1').value;
    // console.log(value);
    const donate1 = getInputValue('donate-value-1');
    const cardHeade1 = getHeaderValue('card1-head');
    // date 
    const now = new Date();
    // console.log(now);
    getMadeList(donate1,cardHeade1,now);

    // console.log(donate1,cardHeade1)
    const addValue = document.getElementById('value1').innerText;
    const previousValue1 = Number(addValue);

    const DecrirseValue = document.getElementById('totalValue').innerText;
    const previousValue2 = Number(DecrirseValue);

    
    const nowDonatevalue = donate1 + previousValue1;
    const nowDecrieseValue = previousValue2 - donate1;
    console.log(nowDecrieseValue,nowDonatevalue);
    document.getElementById('value1').innerText =nowDonatevalue;
    document.getElementById('totalValue').innerText = nowDecrieseValue;
})