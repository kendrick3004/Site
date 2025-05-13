const texts = ["404", "Page not found"];
const decryptionText = document.getElementById('decryption-text');
const decryptionSubtext = document.getElementById('decryption-subtext');
let iteration = 0;

const decrypt = (element, text, intervalTime) => {
    let iteration = 0;
    const interval = setInterval(() => {
        element.innerText = text
            .split('')
            .map((letter, index) => {
                if(index < iteration) {
                    return text[index];
                }
                return String.fromCharCode(65 + Math.floor(Math.random() * 26));
            })
            .join('');

        if(iteration >= text.length) {
            clearInterval(interval);
        }

        iteration += 1 / 3;
    }, intervalTime);
};

decrypt(decryptionText, texts[0], 30);
setTimeout(() => decrypt(decryptionSubtext, texts[1], 50), 1000);