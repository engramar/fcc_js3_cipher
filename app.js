const Cipher = (str) => {        
    let obj = {A:"N",B:"O",C:"P",D:"Q",E:"R",F:"S",G:"T",H:"U",I:"V",J:"W",K:"X",L:"Y",M:"Z",
               N:"A",O:"B",P:"C",Q:"D",R:"E",S:"F",T:"G",U:"H",V:"I",W:"J",X:"K",Y:"L",Z:"M"};
    let chars = str.split('');
    let key = '';
    let newWord = '';
    for (let i=0; i<chars.length; i++){        
        if (obj.hasOwnProperty(chars[i])){ 
            newWord += obj[chars[i]]
        } else {
            newWord += chars[i]
        }
    }
    return newWord;
}

module.exports = Cipher;