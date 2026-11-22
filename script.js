const sidebar = document.getElementById('sidebar');
const sidebarBtn = document.getElementById('sidebar-toggle-btn');
const icon = document.getElementById('sidebar-toggle-icon');

sidebarBtn.addEventListener('click', () => {
    const isClosed = sidebar.classList.toggle('closed');
    if(isClosed)
    {
        icon.src = 'images/icons/menu.png'
    }
    else
    {
        icon.src = 'images/icons/close.png'
    }
});

