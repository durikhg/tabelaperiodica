function toggleMenu() {
    var menu = document.getElementById("aswMenu");
    if (menu.style.display === "none") {
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }
}

function toggleDarkMode() {
    const isDarkMode = document.body.classList.toggle('dark-mode');
    
    if (isDarkMode) {
        document.body.classList.remove('light-mode'); // Desativa o modo claro
        localStorage.setItem('darkModeEnabled', '1');
        localStorage.setItem('lightModeEnabled', '0');
    } else {
        localStorage.setItem('darkModeEnabled', '0');
    }
}

function toggleLightMode() {
    const isLightMode = document.body.classList.toggle('light-mode');
    
    if (isLightMode) {
        document.body.classList.remove('dark-mode'); // Desativa o modo escuro
        localStorage.setItem('lightModeEnabled', '1');
        localStorage.setItem('darkModeEnabled', '0');
    } else {
        localStorage.setItem('lightModeEnabled', '0');
    }
}

function toggleNavbar() {
    const navbar = document.getElementById('navbar');
    if (navbar.style.display === 'none' || navbar.style.display === '') {
        navbar.style.display = 'flex';
    } else {
        navbar.style.display = 'none';
    }
}

window.addEventListener('load', () => {
    // Load dark mode preference
    const darkModeEnabled = localStorage.getItem('darkModeEnabled');
    if (darkModeEnabled === '1') {
        document.body.classList.add('dark-mode');
    }
});


 
    
    function enableDyslexicFont(load = false) {
        let isDyslexicFontEnabled = parseInt(localStorage.getItem('isDyslexicFontEnabled'));
        if(load)
        {
            isDyslexicFontEnabled = !isDyslexicFontEnabled;
        }
        if (!isDyslexicFontEnabled) {
            document
                .querySelectorAll("*")
                .forEach((el) => {
                    if (!el.classList.contains('material-icons')) {
                        orgFontFamily = el.style['font-family'];
                        el.setAttribute('data-asw-orgFontFamily', orgFontFamily);
                        el.style['font-family'] = 'OpenDyslexic3';
                    }
                });

            localStorage.setItem('isDyslexicFontEnabled', 1);
        } else {
            document
                .querySelectorAll("*")
                .forEach((el) => {
                    if (!el.classList.contains('material-icons')) {
                        orgFontFamily = el.getAttribute('data-asw-orgFontFamily');
                        if (orgFontFamily) {
                            el.style['font-family'] = orgFontFamily;
                            el.removeAttribute('data-asw-orgFontFamily');
                        }
                        else
                        {
                            el.style.removeProperty('font-family');
                        }
                    }
                });

            localStorage.setItem('isDyslexicFontEnabled', 0);
        }
    }


    function enableBigCursor(load = false) {
        let isBigCursorEnabled = parseInt(localStorage.getItem('isBigCursorEnabled'));
        if(load)
        {
            isBigCursorEnabled = !isBigCursorEnabled;
        }
        if (!isBigCursorEnabled) {
            document
                .querySelectorAll("*")
                .forEach((el) => {
                    el.style.cursor = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='64' height='64' viewBox='0 0 512 512'%3E%3Cpath d='M429.742 319.31L82.49 0l-.231 471.744 105.375-100.826 61.89 141.083 96.559-42.358-61.89-141.083 145.549-9.25zM306.563 454.222l-41.62 18.259-67.066-152.879-85.589 81.894.164-333.193 245.264 225.529-118.219 7.512 67.066 152.878z' xmlns='http://www.w3.org/2000/svg'/%3E%3C/svg%3E"), default`; ;
                });
            localStorage.setItem('isBigCursorEnabled', 1);
        } else {
            document
                .querySelectorAll("*")
                .forEach((el) => {
                    el.style.cursor = 'default';
                });

            localStorage.setItem('isBigCursorEnabled', 0);
        }
    }


    
    function adjustTdSize(load = false) {
        let isadjustTdSize = parseInt(localStorage.getItem('isadjustTdSize'));
        if(load)
        {
            isadjustTdSize = !isadjustTdSize;
        }
        if (!isadjustTdSize) {
            document.querySelectorAll('td').forEach((anchor) => {
                const orgTdWidth = window.getComputedStyle(anchor).getPropertyValue('width');
                const orgTdheight= window.getComputedStyle(anchor).getPropertyValue('height');
                anchor.setAttribute('data-asw-orgTdWidth', orgTdWidth);
                anchor.setAttribute('data-asw-orgTdheight', orgTdheight);
                anchor.style.width = '300px';
                anchor.style.height = '80px';
            });

            localStorage.setItem('isadjustTdSize', 1);
        } else {
            document.querySelectorAll('td').forEach((anchor) => {
                const orgTdWidth = anchor.getAttribute('data-asw-orgTdWidth');
                const orgTdheight = anchor.getAttribute('data-asw-orgTdheight');
                anchor.style.width = orgTdWidth;
                anchor.style.height = orgTdheight;
            });

            localStorage.setItem('isadjustTdSize', 0);
        }
    }
    


function enableHighlightHeadings(load = false) {
    let isHighlightHeadings = parseInt(localStorage.getItem('isHighlightHeadings'));
    if(load)
    {
        isHighlightHeadings = !isHighlightHeadings;
    }
    if (!isHighlightHeadings) {
        document.querySelectorAll('h1, h2, h3,heading1').forEach((heading) => {
            const orgTextDecoration = window.getComputedStyle(heading).getPropertyValue('text-decoration');
            const orgHighlightColor = window.getComputedStyle(heading).getPropertyValue('color');
            heading.setAttribute('data-asw-orgHighlightTextDecoration', orgTextDecoration)
            heading.setAttribute('data-asw-orgHighlightColor', orgHighlightColor);
            heading.style.color = '#ff0000';
            heading.style.textDecoration = 'underline';
        });

        localStorage.setItem('isHighlightHeadings', 1);
    } else {
        document.querySelectorAll('h1, h2, h3,heading1').forEach((heading) => {
            const orgTextDecoration = heading.getAttribute('data-asw-orgHighlightTextDecoration');
            const orgHighlightColor = heading.getAttribute('data-asw-orgHighlightColor');
            heading.style.textDecoration = orgTextDecoration;
            heading.style.color = orgHighlightColor;
        });

        localStorage.setItem('isHighlightHeadings', 0);
    }
}




function adjustFontWeight(increment = 100) {
    let isFontWeightEnabled = parseInt(localStorage.getItem('isFontWeightEnabled'));
    if (increment === 100) {
        isFontWeightEnabled = !isFontWeightEnabled;
        increment = 400;
    }
    if (!isFontWeightEnabled) {
        document
        .querySelectorAll("*")
        .forEach((el) => {
            if (!el.classList.contains('material-icons')) {
            let orgBoldFontWeight = window.getComputedStyle(el).getPropertyValue('--org-bold-font-weight');
            if (!orgBoldFontWeight) {
                orgBoldFontWeight = window.getComputedStyle(el).getPropertyValue('font-weight');
                el.style.setProperty('--org-bold-font-weight', orgBoldFontWeight);
            }
            let newFontWeight = parseInt(orgBoldFontWeight) + increment;
            el.style.setProperty('font-weight', newFontWeight);
            }
        });
        localStorage.setItem('isFontWeightEnabled', 1);
    } else {
        document
        .querySelectorAll("*")
        .forEach((el) => {
            if (!el.classList.contains('material-icons')) {
            let orgBoldFontWeight = window.getComputedStyle(el).getPropertyValue('--org-bold-font-weight');
            if (orgBoldFontWeight) {
                el.style['font-weight']= orgBoldFontWeight;
            } else {
                el.style.removeProperty('font-weight');
            }
            el.style.removeProperty('--org-bold-font-weight');
            }
        });
        localStorage.setItem('isFontWeightEnabled', 0);
    }
    }

function adjustContrast(load = false) {
    let isContrastEnabled = parseInt(localStorage.getItem('isContrastEnabled'));
    if(load)
    {
        isContrastEnabled = !isContrastEnabled;
    }
    if (!isContrastEnabled) {
        document
        .querySelectorAll("*")
        .forEach((el) => {
            let orgColor = el.getAttribute('data-asw-orgContrastColor');
            let orgBgColor = el.getAttribute('data-asw-orgContrastBgColor');

            if (!orgColor) {
                orgColor = el.style.color;
                el.setAttribute('data-asw-orgContrastColor', orgColor);
            }
            if(!orgBgColor) {
                orgBgColor = window.getComputedStyle(el).getPropertyValue('background-color');
                el.setAttribute('data-asw-orgContrastBgColor', orgBgColor);
            }

            el.style["color"] = '#ffff00';
            el.style["background-color"] = '#0000ff';
        });

        localStorage.setItem('isContrastEnabled', 1);
        } else {
            document
            .querySelectorAll("*")
            .forEach((el) => {
                let orgContrastColor = el.getAttribute('data-asw-orgContrastColor');
                let orgContrastBgColor = el.getAttribute('data-asw-orgContrastBgColor');
                if (orgContrastColor) {
                el.style.color = orgContrastColor;
                } else {
                el.style.removeProperty('color');
                }
                if (orgContrastBgColor) {
                el.style.backgroundColor = orgContrastBgColor;
                } else {
                el.style.removeProperty('background-color');
                }
                el.removeAttribute('data-asw-orgContrastColor');
                el.removeAttribute('data-asw-orgContrastBgColor');
            });
        localStorage.setItem('isContrastEnabled', 0);
    }
    }


