const openDialogBtn = document.querySelector('.open-dialog-btn');
        const dialogBox = document.getElementById('dialog-box');
        const dialogOverlay = document.getElementById('dialog-overlay');
        const closeDialogBtn = document.getElementById('close-dialog-btn');

        openDialogBtn.addEventListener('click', () => {
            dialogBox.style.display = 'block';
            dialogOverlay.style.display = 'block';
        });

        closeDialogBtn.addEventListener('click', () => {
            dialogBox.style.display = 'none';
            dialogOverlay.style.display = 'none';
        });

        dialogOverlay.addEventListener('click', () => {
            dialogBox.style.display = 'none';
            dialogOverlay.style.display = 'none';
        });