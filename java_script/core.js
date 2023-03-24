const players = document.querySelectorAll('.players');
let response;

const eth = new XMLHttpRequest();
eth.open('GET', 'json/render.json');
eth.addEventListener('load', () => {
    response = JSON.parse(eth.responseText);
});
eth.send();

players.forEach((item) => {
    item.addEventListener('click', (event) => {
        document.querySelectorAll('.tab').forEach((item) => {
            item.classList.remove('animation');
        });
        const key = event.target;
        const closest = key.closest('.ph');
        const id = closest.getAttribute('id');
        const tabImg = closest.querySelector('.find').getAttribute('value');
        const namePlayer = closest.querySelector('.find').getAttribute('alt');

        if (key.classList.contains('up')) {
            document.querySelectorAll('.up').forEach((item) => {
                item.style['background'] = '#2d3844';
                closest.querySelector('.pl1').style['background'] = '#435971';
                document.querySelector('.tab-ph').setAttribute('src', `${tabImg}`)
                setTimeout(() => {
                    document.querySelector('.tab-ph').classList.add('animation');
                    document.querySelector('[data-left-name]').textContent = namePlayer;
                }, 1);
                response.forEach((item) => {    
                    if (Number(id) === item.id) {
                        document.querySelector('[data-rating-left]').textContent = item.rating;
                        document.querySelector('[data-kpr-left]').textContent = item.kpr;
                        document.querySelector('[data-dpr-left]').textContent = item.dpr;
                        document.querySelector('[data-kast-left]').textContent = item.kast;
                        document.querySelector('[data-imp-left]').textContent = item.imp;
                        document.querySelector('[data-avg-left]').textContent = item.avg;
                    }
                });
            });
        } else if (key.classList.contains('down')) {
            document.querySelectorAll('.down').forEach((item) => {
                item.style['background'] = '#2d3844';
                closest.querySelector('.pl2').style['background'] = '#435971';
                document.querySelector('.tab-ph-2').setAttribute('src', `${tabImg}`)
                setTimeout(() => {
                    document.querySelector('.tab-ph-2').classList.add('animation');
                    document.querySelector('[data-right-name]').textContent = namePlayer;
                }, 1);
                response.forEach((item) => {    
                    if (Number(id) === item.id) {
                        document.querySelector('[data-rating-right]').textContent = item.rating;
                        document.querySelector('[data-kpr-right]').textContent = item.kpr;
                        document.querySelector('[data-dpr-right]').textContent = item.dpr;
                        document.querySelector('[data-kast-right]').textContent = item.kast;
                        document.querySelector('[data-imp-right]').textContent = item.imp;
                        document.querySelector('[data-avg-right]').textContent = item.avg;
                    }
                });
            });
        };
    });
});

setInterval(() => {
    document.querySelectorAll('.textSt').forEach((item) => {
            const left = item.querySelector('.left');
            const right = item.querySelector('.right');
            const leftTC = left.textContent;
            const rightTC = right.textContent;

            if (Number(leftTC) > Number(rightTC)) {
                right.classList.remove('more');
                left.classList.add('more');
            } else if (Number(leftTC) < Number(rightTC)) {
                left.classList.remove('more');
                right.classList.add('more');
            }
    });
}, 100);

if (window.innerWidth <= 650) {
    document.querySelector('[data-avg]').textContent = 'AVG';
    document.querySelector('[data-kpr]').textContent = 'KPR';
    document.querySelector('[data-dpr]').textContent = 'DPR';
    document.querySelector('[data-avg]').textContent = 'AVG';
}