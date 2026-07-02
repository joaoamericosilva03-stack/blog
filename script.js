document.addEventListener('DOMContentLoaded', () => {
    
    // --- LÓGICA DE CURTIDAS E DESCURTIDAS ---
    let likes = 14; // Valor inicial simulado
    let dislikes = 2; // Valor inicial simulado
    
    let hasLiked = false;
    let hasDisliked = false;

    const likeBtn = document.getElementById('like-btn');
    const dislikeBtn = document.getElementById('dislike-btn');
    const likeCount = document.getElementById('like-count');
    const dislikeCount = document.getElementById('dislike-count');

    // Inicializa os textos na tela
    likeCount.textContent = likes;
    dislikeCount.textContent = dislikes;

    likeBtn.addEventListener('click', () => {
        if (!hasLiked) {
            likes++;
            hasLiked = true;
            likeBtn.classList.add('active-like');
            
            // Se o usuário já tinha descurtido, remove o descurtir
            if (hasDisliked) {
                dislikes--;
                hasDisliked = false;
                dislikeBtn.classList.remove('active-dislike');
                dislikeCount.textContent = dislikes;
            }
        } else {
            likes--;
            hasLiked = false;
            likeBtn.classList.remove('active-like');
        }
        likeCount.textContent = likes;
    });

    dislikeBtn.addEventListener('click', () => {
        if (!hasDisliked) {
            dislikes++;
            hasDisliked = true;
            dislikeBtn.classList.add('active-dislike');
            
            // Se o usuário já tinha curtido, remove o curtir
            if (hasLiked) {
                likes--;
                hasLiked = false;
                likeBtn.classList.remove('active-like');
                likeCount.textContent = likes;
            }
        } else {
            dislikes--;
            hasDisliked = false;
            dislikeBtn.classList.remove('active-dislike');
        }
        dislikeCount.textContent = dislikes;
    });


    // --- LÓGICA DOS COMENTÁRIOS ---
    const commentForm = document.getElementById('comment-form');
    const commentsContainer = document.getElementById('comments-container');

    commentForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Impede a página de recarregar ao enviar o formulário

        const nameInput = document.getElementById('comment-name');
        const textInput = document.getElementById('comment-text');

        // Cria a estrutura do novo comentário
        const newComment = document.createElement('div');
        newComment.classList.add('comment');

        const commentAuthor = document.createElement('strong');
        commentAuthor.textContent = nameInput.value;

        const commentContent = document.createElement('p');
        commentContent.textContent = textInput.value;

        // Junta as tags dentro da div do comentário
        newComment.appendChild(commentAuthor);
        newComment.appendChild(commentContent);

        // Adiciona o comentário no topo da lista de comentários
        commentsContainer.insertBefore(newComment, commentsContainer.firstChild);

        // Limpa os campos do formulário
        nameInput.value = '';
        textInput.value = '';
    });
});
