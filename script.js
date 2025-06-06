// Get all elements with class
const faqElements = () => {
    const acc = document.querySelectorAll('.faqs-btn');
    const panels = document.querySelectorAll('.panel');
    const minusIcons = document.querySelectorAll('.minus-icon');
    const plusIcons = document.querySelectorAll('.plus-icon');
    const addActive = [panels, minusIcons, plusIcons]

    return { acc, addActive };
}

// Toggle between hiding and showing the 'active' accordion panel and 'active' icon
faqElements().acc.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        faqElements().addActive.forEach(e => e[index].classList.toggle('active'));
    })
})

// Get the element with id="defaultOpen" and click on it
document.querySelector('#defaultOpen').click();