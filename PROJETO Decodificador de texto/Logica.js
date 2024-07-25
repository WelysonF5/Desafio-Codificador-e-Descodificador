// Alerta para confirmar que o JavaScript está vinculado
alert('Documento HTML vinculado ao JavaScript!');

// Função para criptografar o texto
function encryptText() {
    const inputText = document.getElementById('inputTextField1').value.trim(); // Remove espaços extras no início e no fim
    const encryptedText = applyEncryption(inputText);
    document.getElementById('outputTextField2').value = encryptedText;
}

// Função para descriptografar o texto
function decryptText() {
    const inputText = document.getElementById('inputTextField1').value.trim(); // Remove espaços extras no início e no fim
    const decryptedText = applyDecryption(inputText);
    document.getElementById('outputTextField2').value = decryptedText;
}

// Função para copiar o texto criptografado para a área de transferência
function copyText() {
    const encryptedText = document.getElementById('outputTextField2').value; // Pega o texto criptografado
    if (encryptedText) {
        navigator.clipboard.writeText(encryptedText).then(() => {
            alert('Texto criptografado copiado para a área de transferência!');
        }).catch(err => {
            console.error('Erro ao copiar o texto: ', err);
        });
    } else {
        alert('Nenhum texto criptografado para copiar.');
    }
}

// Função para colar o texto copiado na tabela de entrada
function pasteText() {
    navigator.clipboard.readText().then(text => {
        document.getElementById('inputTextField1').value = text;
    }).catch(err => {
        console.error('Erro ao colar o texto: ', err);
    });
}

// Função para limpar o texto das tabelas de entrada e saída
function clearText() {
    document.getElementById('inputTextField1').value = '';
    document.getElementById('outputTextField2').value = '';
}

// Função para aplicar a criptografia
function applyEncryption(text) {
    const rules = {
        'e': 'enter',
        'i': 'imes',
        'a': 'ai',
        'o': 'ober',
        'u': 'ufat'
    };
    return text.replace(/[eioua]/g, match => rules[match]);
}

// Função para aplicar a descriptografia
function applyDecryption(text) {
    const rules = {
        'enter': 'e',
        'imes': 'i',
        'ai': 'a',
        'ober': 'o',
        'ufat': 'u'
    };
    return text.replace(/enter|imes|ai|ober|ufat/g, match => rules[match]);
}
