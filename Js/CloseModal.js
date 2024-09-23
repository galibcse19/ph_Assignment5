document.getElementById("closeModalBtn").addEventListener("click", function() {
    document.getElementById('myModal').classList.add('hidden');
});
document.getElementById('history-btn').addEventListener("click", function(){
    document.getElementById('hideIndex').classList.add('hidden');
    document.getElementById('hideHistory').classList.remove('hidden');
    document.getElementById('index-btn').classList.remove('bg-custom-green');
    document.getElementById('history-btn').classList.add('bg-custom-green');
    
})

document.getElementById('index-btn').addEventListener('click',function(){
    document.getElementById('hideHistory').classList.add('hidden');
    document.getElementById('hideIndex').classList.remove('hidden');
    document.getElementById('index-btn').classList.add('bg-custom-green');
    document.getElementById('history-btn').classList.remove('bg-custom-green');
})