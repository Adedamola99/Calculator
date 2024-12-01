let getTheme = window.localStorage.getItem("data-theme");
console.log(getTheme);


if (getTheme) {
    document.firstElementChild.setAttribute("data-theme", getTheme)
}

window.onload = () => {
    let theme = document.querySelectorAll('input[name="theme"]');

    console.log(theme);

    if (getTheme) {
        theme[0].checked = getTheme == 'dark' ? true : false;
        theme[1].checked = getTheme== 'light' ? true : false;
        theme[2].checked = getTheme == 'purple' ? true : false;
    }

    for (let i = 0; i <= theme.length; i++) {

        theme[i].addEventListener('change', function () {
            document.firstElementChild.setAttribute('data-theme', theme[i].value);

            localStorage.setItem('data-theme', theme[i].value);
        });

    }
}