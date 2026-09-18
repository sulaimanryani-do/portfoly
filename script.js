function filterProjects(category, btnElement) {
    const cards = document.querySelectorAll('.project-card');
    
    // T-bdel l-class active l les boutons b tariqa smooth
    const buttons = document.querySelectorAll('.filter-btns button');
    buttons.forEach(btn => btn.classList.remove('active'));
    
    if(btnElement) {
        btnElement.classList.add('active');
    }

    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'scale(0.95)';
        
        setTimeout(() => {
            if (category === 'all' || card.classList.contains(category)) {
                card.style.display = 'block';
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'scale(1)';
                }, 50);
            } else {
                card.style.display = 'none';
            }
        }, 200);
    });
}
