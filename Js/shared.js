function getInputValue(id){
    const value = document.getElementById(id).value;
    const numberValue = Number(value);
    // console.log(value,numberValue);
    if (isNaN(numberValue) || numberValue <= 0) {
        alert('Invalid Donation Amount');
        return null;
    }
    showModal()
    return numberValue;
}
 
function showModal(){
    document.getElementById('myModal').classList.remove('hidden');
}