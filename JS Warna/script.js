// ambil tombolnya
// buat event pada tombol ketika di clcik mengubah warna body, ketika di click lagi hilang warnanya
const tUbahWarna = document.getElementById('tUbahWarna');
tUbahWarna.onclick = function(){
    document.body.classList.toggle('biru-muda');
}

// buat tombol baru untuk mengubah warna
const tAcakWarna = document.createElement('button');
const teksTombol = document.createTextNode('Acak Warna');
tAcakWarna.appendChild(teksTombol);
tAcakWarna.setAttribute('type', 'button');
tUbahWarna.after(tAcakWarna);

// kasih event di tombol baru
tAcakWarna.addEventListener('click', function(){
    // buat warna random
    const r = Math.round(Math.random() * 255 + 1);
    const g = Math.round(Math.random() * 255 + 1);
    const b = Math.round(Math.random() * 255 + 1);
    

    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
});

// ambil slider
    const sMerah = document.querySelector('input[name=sMerah]');
    const sHijau = document.querySelector('input[name=sHijau]');
    const sBiru = document.querySelector('input[name=sBiru]');
// tambah event change  
    sMerah.addEventListener('change', function(){
        // tangkap nilai kiri : 0, kanan : 255
        const r = sMerah.value;
        document.body.style.backgroundColor = `rgb(${r}, 100, 100)`;
    });
    sHijau.addEventListener('change', function(){
        // tangkap nilai kiri : 0, kanan : 255
        const r = sMerah.value;
        const g = sHijau.value;
        document.body.style.backgroundColor = `rgb(${r}, ${g}, 100)`;
    });
    sBiru.addEventListener('change', function(){
        // tangkap nilai kiri : 0, kanan : 255
        const r = sMerah.value;
        const g = sHijau.value;
        const b = sBiru.value;
        document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    });

// mengganti warna body dengan cursor
// ambil body
// document.body.addEventListener('mousemove', function(e){
//     // buat posisi x
//     const xPos = Math.round((e.clientX / window.innerWidth) * 255);
//     //buat posisi y
//     const yPos = Math.round((e.clientY / window.innerWidth) * 255);
//     document.body.style.backgroundColor = `rgb(${xPos}, ${yPos}, 100)`
// });