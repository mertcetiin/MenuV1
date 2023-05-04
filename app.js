const searchDOM = document.querySelector('.form-control');
const colDOM = document.querySelectorAll('.col');

searchDOM.addEventListener('input', () => {
    const filterDOM = searchDOM.value.toLowerCase()

    colDOM.forEach((item) => {
        let text = item.textContent
        if (text.toLowerCase().includes(filterDOM.toLowerCase())) {
            item.style.display = ''
        } else {
            item.style.display = 'none'
        }
    })
});