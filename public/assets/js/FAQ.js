document.addEventListener("DOMContentLoaded", function() {
    const faqItems = document.querySelectorAll('.faq-item');
  
    faqItems.forEach(item => {
      const question = item.querySelector('.faq-question');
      const answer = item.querySelector('.faq-answer');
  
      question.addEventListener('click', () => {
        item.classList.toggle('active');
  
        if (item.classList.contains('active')) {
          answer.style.maxHeight = "200px";
        } else {
          answer.style.maxHeight = '0';
        }
      });
    });
  });
  