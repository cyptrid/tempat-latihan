// buat fungsi pilihan komputer
function getPilihanComputer(){
    var comp = Math.random();
    if(comp < 0.34 ) return 'gajah';
    if(comp >= 0.34 && comp < 0.67 )return 'orang';
    return 'semut';
}

function getHasil(comp, player){
    if(player == comp)  return  'SERI!';
        if(player == 'gajah') return ( comp == 'orang' ) ? 'MENANG!' : 'KALAH!';
        if(player == 'orang') return ( comp == 'gajah' ) ? 'KALAH!' : 'MENANG!';
        if(player == 'semut') return ( comp == 'orang' ) ? 'KALAH' : 'MENANG!';
    
}

function putar(){
    const imgComp = document.querySelector('.img-computer');
    const gambar = ['gajah', 'semut', 'orang'];
    let i = 0;
    const waktuMulai = new Date().getTime();
setInterval(function(){
    if(new Date().getTime() - waktuMulai > 1000){
        clearInterval 
        return
    };
    imgComp.setAttribute('src', 'img' + gambar[i++] + '.png');
    if(i == gambar.length) i = 0;
}, 100);  
}