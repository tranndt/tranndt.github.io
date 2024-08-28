document.addEventListener('DOMContentLoaded', (event) => {
    let likeCount = 0;
    const likeButton = document.getElementById('like-button');
    const likeCountDisplay = document.getElementById('like-count');

    likeButton.addEventListener('click', () => {
        if (likeButton.classList.contains('liked')) {
            likeCount--;
            likeButton.classList.remove('liked');
        } else {
            likeCount++;
            likeButton.classList.add('liked');
        }
        likeCountDisplay.textContent = likeCount;
    });
});