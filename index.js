function printPdf() {   
    window.open();
}

function downloadPdf() {
    var element = document.getElementsByTagName('body')[0];
    var opt = {
        margin: 0,
        filename: 'Nima Ghomri - Resume.pdf',
        jsPDF: { unit: 'mm', format: 'A4', orientation: 'portrait' }
    };
    html2pdf(element, opt);
}