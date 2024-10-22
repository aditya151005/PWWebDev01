

function calcVowel() {
    const originalName = document.getElementById('user-name').value;
    const result = document.getElementById('result');
    const temporayName=originalName.toLowerCase();
    let count = 0;
    for(let i = 0; i < temporayName.length; i++) {

        if(temporayName[i] == 'a' || temporayName[i] == 'e' || temporayName[i] == 'i' || temporayName[i] == 'o' || temporayName[i] == 'u') {
            count++;
        }
    }
    result.innerText = count;
};

document.getElementById('submit-btn').addEventListener("click", calcVowel);