function print() {
    var element = document.getElementsByTagName('body')[0];
    var opt = {
        margin: 0,
        filename: 'Nima Ghomri - Resume.pdf',
        // image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 75 },
        jsPDF: { unit: 'mm', format: 'A4', orientation: 'portrait' }
    };

    html2pdf(element, opt);
}

function download(){
    
}