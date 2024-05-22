(function() {
    const fontAwesomeIcons = [
        'fa-solid fa-home', 'fa-solid fa-user', 'fa-solid fa-envelope', 'fa-solid fa-cube', 'fa-solid fa-qrcode', 'fa-solid fa-box-archive',
        'fa-solid fa-layer-group', 'fa-solid fa-globe', 'fa-solid fa-calendar-days',
        'fa-solid fa-envelope', 'fa-solid fa-video', 'fa-solid fa-tower-broadcast',
    
    ];

    document.querySelector('.classname').addEventListener('click', function() {
        document.querySelector('.awesomefontpicker-overlay').style.display = 'block';
        document.querySelector('.awesomefontpicker-modal').style.display = 'block';
    });

    document.querySelector('.awesomefontpicker-overlay').addEventListener('click', function() {
        document.querySelector('.awesomefontpicker-overlay').style.display = 'none';
        document.querySelector('.awesomefontpicker-modal').style.display = 'none';
    });

    const iconsContainer = document.querySelector('.awesomefontpicker-icons');
    fontAwesomeIcons.forEach(icon => {
        const iconElement = document.createElement('i');
        iconElement.className = `awesomefontpicker-icon ${icon}`;
        iconsContainer.appendChild(iconElement);

        iconElement.addEventListener('click', function() {
            document.querySelector('.classname').value = icon;
            document.querySelector('.awesomefontpicker-overlay').style.display = 'none';
            document.querySelector('.awesomefontpicker-modal').style.display = 'none';
        });
    });
})();