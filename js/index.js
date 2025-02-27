console.log(
  "%c" +
    " __      __  ______   __  __   ______     " +
    "\n" +
    "/\\ \\  __/\\ \\ /\\__  _\\ /\\ \\ /\\ \\ /\\__  _\\    " +
    "\n" +
    "\\ \\ \\/\\ \\ \\ \\/_\\/\\ \\/ \\ \\ \\/'/'\\/ _/\\ \\/    " +
    "\n" +
    " \\ \\ \\ \\ \\ \\ \\ \\ \\ \\  \\ \\ , <    \\ \\ \\    " +
    "\n" +
    "  \\ \\ \\_/ \\_\\ \\ \\_\\ \\__\\ \\ \\\\`\\   \\_\\ \\__ " +
    "\n" +
    "   \\ `\\___x___/ /\\_____\\\\ \\_\\ \\_\\ /\\_____\\ " +
    "\n" +
    "    '/__//__/  /_____/ \\/_/\\/_/ /_____/",
  "color: #d81b60; font-size: 16px; font-weight: bold;"
);

console.log("알맞은 스크립트를 작성하세요");

function addComment() {
    const commentText = document.getElementById('comment-input').value;
    console.log(commentText);
    if (commentText.trim() !== '') {
        const commentCard = document.createElement('div');
        commentCard.className = 'comment-card';

        commentCard.innerHTML = `
            <div class="comment-header">
                <img src="./images/comment-author-icon.png" alt="avatar" class="avatar">
                <div class="author">방문자</div>
            </div>
            <div class="comment-content">
                ${commentText}
            </div>
        `;

        document.getElementById('comment-section').appendChild(commentCard);
        document.getElementById('comment-input').value = '';

        alert("댓글이 등록되었습니다");
    }
}

function cancelComment() {
    document.getElementById('comment-input').value = '';
}