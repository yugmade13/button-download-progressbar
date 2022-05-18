const buttonDownload = document.getElementById('btn-download');

buttonDownload.addEventListener('click', function () {
    buttonDownload.classList.add('active');

    setTimeout(() => {
        buttonDownload.classList.remove('active');
        document.querySelector('i').classList.replace('bx-cloud-download', 'bx-check-circle');
        document.querySelector('.btn-text').textContent = 'Success';
        buttonDownload.style.backgroundColor = '#14b8a6';
        buttonDownload.setAttribute('disabled', true);

    }, 5500);
});