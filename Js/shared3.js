function getMadeList(price,name,time){
    const createDiv = document.createElement('div');
    createDiv.className = "mb-2 px-4 py-4 border rounded";
    const addDataInHistory = document.createElement('h3');
    addDataInHistory.className ="lg:text-xl text-md font-bold";
    const addTime = document.createElement('p');
    addTime.className="mt-4";
     
    addDataInHistory.innerText = `${price} is ${name}`;
    addTime.innerText = `Date: ${time}`;

    createDiv.appendChild(addDataInHistory);
    createDiv.appendChild(addTime);
    if(isNaN(price) || price<= 0){
        document.getElementById('addData').appendChild(' ');
    }
    else{
        document.getElementById('addData').appendChild(createDiv);
    } 
}