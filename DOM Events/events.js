// EVENTS 

// addEvenstListener => browser akan mendengarkan kejadian yang akan terjadi pada halaman web

const p1 = document.getElementById('P1');
const p2 = document.getElementById('P2');

const p4 = document.getElementById('P4');

p4.addEventListener('click', function(){
    const ul = document.querySelector('section#B ul');

    const liB = document.createElement('li');
    liB.textContent = 'ini adalah list baru';

    ul.append(liB);
})