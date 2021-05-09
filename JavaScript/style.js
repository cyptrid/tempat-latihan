// While : buat pengulangan menampilkan 0 - 5

    // var nilaiAwal = 1;
    // while(nilaiAwal <= 5){
    //     console.log(nilaiAwal);
    //     nilaiAwal++;
    // }

// =======================================================================================

// if..else if..else : buat pengkondisian prompt, jika % 2 = 0 : genap | ganjil | bukan angka

    // var angka = parseInt(prompt('masukkan angka :'));
    // if(angka % 2 === 0){
    //     console.log(angka + ' Angka Genap');
    // }else if(angka % 2 === 1){
    //     console.log(angka + ' Angka Ganjil');
    // }else{
    //     console.error('Bukan angka');
    // }

// =======================================================================================
// (Aplikasi) Game Suwit Jawa

    //     var tanya = true;
    //     while(tanya == true){
    //         // menangkap pilihan player
    //         var p = prompt("Pilih : Gajah, Semut, Orang");
    //         // membangkitkan bilangan random
    //         var comp = Math.random();            
    //         // Menangkap pilihan computer
    //         if(comp < 0.34){
    //             comp = 'gajah';
    //         }else if(comp >= 0.34 && comp < 0.67){
    //             comp = 'semut';
    //         }else{
    //             comp = 'orang';
    //         }            
    //         //menentukan rules
    //         var hasil = '';
    //         if(p == comp){
    //             hasil = 'seri';
    //         }else if(p == 'gajah'){
    //             hasil = (comp == 'orang') ? "Menang" : "Kalah";
    //         }else if(p == 'orang'){
    //             hasil = (comp == 'gajah') ? "Kalah" : "Menang";
    //         }else if(p == 'semut'){
    //             hasil =(comp == 'orang') ? "kalah" : "menang";
    //         }else{
    //             hasil = "wrong input";
    //         }
            
    //         // tampilkan hasilnya dengan alert
    //         alert("Kamu Memilih : " + p + ' dan komputer memilih ' + comp + ' maka kamu :' +hasil )
    //         // buat alert confirm selesai
    //         tanya = confirm('lagi?');
    //   }
    //   alert('Terima kaish sudah bermain');

// =======================================================================================

// Switch : buat pengkondisian prompt, jika memasukkan angka 1 | 2 tampikan 1 | 2, else : bukan angka

    // var angka = parseInt(prompt("Masukkan angka 1 / 2"));
    // switch(angka){
    //     case 1:
    //         alert('yang di masukkan angka' + angka);
    //         break;
    //     case 2:
    //         alert('yang di masukkan angka ' + angka);
    //         break;
    //     default:
    //         alert('bukan angka 1 / 2');
    //         break;
    // }

// =======================================================================================

// function declaration : buat function menghitung sisi kubus , rumus : sisi x sisi x sisi

    // function penjumlahan(a){
    //     var total;
    //     total = a * a * a;;
    //     return total;
    // }

    // console.log(penjumlahan(2));

// =======================================================================================

// function expression : pengenalan diri, nama & umur

    // var perkenalan = function(nama, umur){
    //     hasil =    `perkenalkan nama saya ${nama}, umur saya ${umur}`
    //     return hasil;
    // }


// =======================================================================================

// pengulangan rekursif : buat segitiga siku-siku pakai '*'

    // var p = '';
    // for(var i = 0; i <= 5; i++){
    //     for(var j = 0; j <= i; j++){
    //         p += '*';
    //     }
    //     p += '\n';
    // }
    // console.log(p);

// =======================================================================================
// (Aplikasi)  array : buat aplikasi juragan angkot.

        // var penumpang = [];
        // // function tambah penumpang
        // var tambahPenumpang = function(namaPenumpang, penumpang){
        //     // jika angkot masih kosong, naikkan penumpang
        //     if(penumpang == 0){
        //         penumpang.push(namaPenumpang);
        //         return penumpang;
        //     }
        //     // telusuri seluruh kursi penumpang
        //     for(var i = 0; i < penumpang.length; i++){
        //     // jika ada kursi kosong naikkan penumpang ke kursi tersebut
        //         if(penumpang[i] == undefined){
        //             penumpang[i] = namaPenumpang;
        //             return penumpang;
        //         }
        //     // jika ada nama yang sama, tampilkan pesan kesalahan
        //         if(penumpang[i] == namaPenumpang){
        //             console.error('nama tersebut sudah ada di dalam angkot');
        //             return penumpang;
        //         }            
        //     // jika kursi penuh, naikkan penumpang baru ke kursi belakang
        //         if( i == penumpang.length - 1){
        //             penumpang.push(namaPenumpang);
        //             return penumpang;
        //         }
        //    }
        // }
        // // function hapus penumpang
        //     var hapusPenumpang = function(namaPenumpang, penumpang){
        //     // jika angkot masih kosong, tampilkan pesan kesalahan
        //         if(penumpang.length == 0){
        //             console.error("angkot masih kosong");
        //             return penumpang;
        //         }
        //     // telusuri seluruh kursi penumpang
        //         for(var i = 0; i <= penumpang.length; i++){
        //             // jika ada penumpang dengan nama sesuai, hapus / ubah menjadi undefined                 
        //             if(penumpang[i] == namaPenumpang){
        //                 penumpang[i] = undefined;
        //                 return penumpang;
        //             }
        //             // jika tidak ada penumpang dengan nama sesuai, tampilkan pesan kesalahan
        //             if(i == penumpang.length){
        //                 console.error(namaPenumpang + ' tidak ada dalam angkot');
        //                 return penumpang;
        //             }
        //         }
        // }
        

// =======================================================================================

    // Object Literal 
    // Konsep = buat object mhs -> nama, umur, object alamat -> jalan, kota
    // var mhs = {
    //     nama : 'joban',
    //     umur : 20,
    //     alamat : {
    //         jalan : 'jl.industri',
    //         kota : 'bogor'
    //     }
    // } 
    // console.log(mhs);

    // latihan = buat 2 object mahasiswa -> nama, energi, function makan untuk menambah energi
    // let mahasiswa1 = {
    //     nama : 'Ikhdan',
    //     energi : 10,
    //     makan : function(porsi){
    //         this.energi = this.energi + porsi;
    //         console.log(`Selamat Datang ${this.nama}, Selamat makan`)
    //     }
    // }
    
    //  let mahasiswa2 = {
    //     nama : 'Joban',
    //     energi : 10,
    //     makan : function(porsi){
    //         this.energi = this.energi + porsi;
    //         console.log(`Selamat Datang ${this.nama}, Selamat makan`)
    //     }
    // }
// =======================================================================================

    // Object with Function Declaration 
    // Konsep = buat function namaMahasiswa berisi object -> nama, nim, jurusan
    // function namaMahasiswa(nama, nim, jurusan){
    //     var mhs =[];
    //     mhs.nama = nama;
    //     mhs.nim = nim;
    //     mhs.jurusan = jurusan;
    //     return mhs;
    // }
    // var mhs1 = namaMahasiswa('Ikhdan', '123', 'SI');
    // console.log(mhs1);
    
    // Latihan = buat function mahasiswa berisi object -> nama, energi. function untuk menambah (makan), dan mengurangi (main)
    // function mahasiswa(nama, energi){
    //     let mahasiswa = {};
    //     mahasiswa.nama = nama;
    //     mahasiswa.energi = energi

    //     mahasiswa.makan = function(porsi){
    //         this.energi += porsi;
    //         console.log(`Halo ${this.nama}, Selamat Makan`);
    //     }

    //     mahasiswa.main = function(jam){
    //         this.energi -= jam;
    //         console.log(`Halo ${nama}, Selamat Bermain`)
    //     }
    //     return mahasiswa;
    // }

    // let joban = mahasiswa('joban', 10);

// =======================================================================================
    // Constructor
    // Konsep = buat function mahasiswa berisi object nama, nim, jurusan

    // function Mahasiswa(nama, nim, jurusan){
    //     this.nama = nama;
    //     this.nim = nim;
    //     this.jurusan = jurusan;
    // }
    // var mhs1 = new Mahasiswa("Ikhdan", '123', 'SI')
    // console.log(mhs1);

    // Latihan = buat function mahasiswa berisi object -> nama, energi. function untuk menambah (makan), dan mengurangi (main)
    // function Mahasiswa(nama, energi){
    //     let mahasiswa = {};
    //     this.nama = nama;
    //     this.energi = energi;

    //     this.makan = function(porsi){
    //         this.energi += porsi;
    //         console.log(`Halo ${nama}, selamat makan`);
    //     }

    //     this.main = function(jam){
    //         this.energi -= jam;
    //         console.log(`Halo ${nama}, selamat bermain`);
    //     }
    // }
    // let joban = new Mahasiswa('joban', 10);

    // Latihan Versi Class = 
    // class Mahasiswa{
    //     constructor(nama, energi){
    //         this.nama = nama;
    //         this.energi = energi;
    //     }

    //     makan(porsi){
    //         this.energi += porsi;
    //         return `Halo ${this.nama}, Selamat Makan`;
    //     }

    //     main(jam){
    //         this.energi -= jam * 2;
    //         return `Halo ${this.nama}, Selamat Bermain`;
    //     }
    // }

    // let joban = new Mahasiswa('joban', 10);

// =======================================================================================
    // Object.Create()
    // const methodMahasiswa = {
    //     makan : function(porsi){
    //         this.energi += porsi;
    //         console.log(`Halo, ${this.nama}, Selamat Makan`);
    //     },

    //     main : function(jam){
    //         this.energi -= jam;
    //         console.log(`Halo, ${this.nama}, Selamat Main`);
    //     }
    // }

    // function mahasiswa(nama, energi){
    //     let mahasiswa = Object.create(methodMahasiswa);
    //     mahasiswa.nama = nama;
    //     mahasiswa.energi = energi;
    //     return mahasiswa;
    // }
    // let joban = mahasiswa('joban', 10);

// =======================================================================================
// Execution Phase 
    /*
    Latihan 1 : 
    field :
    - panggil function sayhello
    - buat function sayhello menampilkan nama & umur
    */ 

    // var nama = 'joban';
    // var umur = 10;
    // console.log(sayHello());
    // function sayHello(){
    //     return `Halo, nama saya ${nama}, umur saya ${umur} tahun`
    // }

    /*
    Latihan 2 : buat IIFE concat ig dan akun ig
    Field : 
    var instagram = @cyptrid 
    console.log(cetakURL(instagram))
    hasil = instagram.com@cyptrid 
    */ 
   
    // var instagram = '@cyptrid';

    // function cetakUrl(username){
    //     var instagramUrl = 'https://instagram.com';
    //     return instagramUrl + username;
    // }
    // console.log(cetakUrl(instagram));

// =======================================================================================

    // Hoisting 
    // function satu(){
    //     var nama = 'joban';
    //     console.log(nama);
    // }

    // function dua(){
    //     console.log(nama);
    // }
    
    // console.log(nama);
    // var nama = 'erik';
    // satu();
    // dua('doddy');
    // console.log(nama);

// =======================================================================================
// Closure 
    // Contoh 1
    // function init(){
    //     let nama = 'joban';
    //     function tampilNama(){
    //         console.log(nama);
    //     }
    //     return tampilNama;
    // }
    // let panggilNama = init();
    // panggilNama();

    // Contoh 2
    // function init(){
    //     return function(nama){
    //         console.log(nama);
    //     }
    // }
    // let panggilNama = init();
    // panggilNama('joban');

// =======================================================================================
// Function Factory 
    // contoh 1
    // function ucapkanSalam(waktu){
    //     return function(nama){
    //         console.log(`Halo ${nama}, selamat ${waktu}, semoga harimu menyanangkan`);
    //     }
    // }
    // let selamatPagi = ucapkanSalam('pagi');
    // selamatPagi('joban');
    
    // Contoh 2
    // let add = (function(){
    //     let counter = 0;
    //     return function(){
    //         return ++counter;
    //     }
    // })();
    // counter = 100;
    // console.log(add());
    // console.log(add());
    // console.log(add());    

// =======================================================================================    

// Arrow Function 
    // Latihan 1 : 1 Parameter
    // tampilNama = nama => `Halo, ${nama}`;
    // console.log(tampilNama('joban'));

    // Latihan 2 : 2 Parameter
    // const tampilNama = (nama, waktu) => `Halo ${nama}, Selamat ${waktu}`;
    // console.log(tampilNama('joban', 'malam'));
    
    // Latihan 3 : menhitung jumlah huruf pada aray menggunakan .map
    // let mahasiswa = ['ikhdan', 'widad', 'joban'];
    // let jumlahHuruf = mahasiswa.map(nama => nama.length);
    // console.log(jumlahHuruf);
    
    // Latihan 4 : 
    // let mahasiswa = ['ikhdan', 'widad', 'joban'];
    // let jumlahHuruf = mahasiswa.map( nama => ({nama:nama, jmlhHuruf:nama.length}) );
    // console.table(jumlahHuruf);

    // Latihan 5 (this pakai constructor) :
    // const Mahasiswa = function(){
    //     this.nama = 'joban';
    //     this.umur = 20;
    //     this.sayHello = () =>{
    //         console.log(`Halo, nama saya ${this.nama}, umur saya ${this.umur} tahun`);
    //     }
    // }
    // const joban = new Mahasiswa();

    // Latihan 6 (this pakai literal) :
    // const mhs1 = {
    //     nama: "joban",
    //     umur: 20,
    //     sayHello: () =>{
    //         console.log(`Halo, nama saya ${nama}, dan saya ${umur} tahun`);
    //     }
    // }
// =======================================================================================    
// Higher Object Function

    // Contoh 1
    // function kerjakanTugas(mataKuliah, selesai){
    //     console.log(`Mulai Mengerjakan ${mataKuliah}...`);
    //     selesai();
    // }
    // function selesai(){
    //     console.log('Selesai Mengerjakan Tugas!');
    // }
    // kerjakanTugas('Pemrograman Web', selesai);

    // Contoh 2
    // function repeat(n, action){
    //     for(let i = 0; i <= n; i++){
    //         action(i);
    //     }
    // }
    // repeat(3, alert);

    // Latihan 1 : Filter
    // const angka = [-1,2,5,6,3,0,7,9,8];
    // const newAngka = angka.filter( a => a >= 3);
    // console.log(newAngka);

    // Latihan 2 : map
    // const angka = [-1,2,5,6,3,0,7,9,8];
    // const newAngka = angka.map( a => a * 2);
    // console.log(newAngka);
    
    // Latihan 3 : reduce
    // const angka = [-1,2,5,6,3,0,7,9,8];
    // const newAngka = angka.reduce((accumulator, currentValue) => accumulator + currentValue);
    // console.log(newAngka);

    // Latihan 4 : Method Chaining
        // const angka = [-1,2,5,6,3,0,7,9,8];
        // const hasil = angka.filter(a => a > 5) //8, 9, 9
        //                     .map( a => a * 3 ) //24, 27, 27
        //                     .reduce((acc, cur) => acc + cur) //78
        //                     console.log(hasil)
// =======================================================================================    

// Template literals
    // Latihan 1. HTML Fragments
        // const mhs = {
        //     nama : "joban",
        //     umur : 20,
        //     nrp : "123"
        // };
        // const el = `<div>
        // <h2>${mhs.nama}</h2>
        // <h2>${mhs.umur}</h2>
        // </div>`;
        // document.body.innerHTML = el;
    
    // Latihan 2. HTML Fragments menggunakan looping
        // const mhs = [
        //     {
        //         nama : 'ikhdanul',
        //         email : 'jikhdan@gmail.com'
        //     },
        //     {
        //         nama : 'widad',
        //         email : 'joban@gmail.com'
        //     }
        // ];
        // const el = `<div>
        //     ${mhs.map(m => `<ul>
        //         <li>${m.nama}</li>
        //         <li>${m.email}</li>
        //     </ul>`)}
        // </div>`

        // document.body.innerHTML = el;


    // Latihan 3. HTML Fragments menggunakan ternary
    //    const lagu = {
    //         judul : "Tetap Dalam Jiwa",
    //         penyanyi : "isyana",
    //         feat : "joban"
    //     }
    //     const el = 
    //     `<ul>
    //         <li>${lagu.judul}</li>
    //         <li>${lagu.penyanyi} ${lagu.feat ? `(feat ${lagu.feat})` :``}</li>
    //     </ul>`
    //     document.body.innerHTML = el;

    // Latihan 4. HTML Fragments Bersarang
    // const mhs = {
    //     nama : 'joban',
    //     semester : 2,
    //     mataKuliah : ['kalkulus', 'si', 'webpemrog']
    // };
    // function cetakMatkul(mataKuliah){
    //     return `
    //         <ol>
    //             ${mataKuliah.map(mk => `<li>${mk}</li>`).join('')}
    //         </ol>
    //     `
    // };
    // const el = `<div>
    //     <h2>${mhs.nama}</h2>
    //     <span>Semester : ${mhs.semester}</span>
    //     <h4>Mata Kuliah : ${mhs.mataKuliah}</h4>
    //       ${cetakMatkul(mhs.mataKuliah)}
    // </div>`
    // document.body.innerHTML = el;

// =======================================================================================    

// Tagged Template = 
    // Contoh 1 
        // const nama = 'joban';
        // const umur = 20;

        // function coba(strings, ...values){
        //     return strings.reduce((result, str, i) => `${result}${str}${values[i] || ``}`, ``);
        // }
        // const str = coba `Halo Nama Saya ${nama}, saya ${umur} tahun`;
        // console.log(str);
    // Contoh 2
        // const nama = 'joban';
        // const umur = 20;
        // const email = 'jikhdan@gmail.com';

        // function highlight(strings, ...values){
        //     return strings.reduce((result, str, i) => `${result}${str}<span>${values[i] || ''}</span>`,'')
        // }

        // const str = highlight `Halo nama saya ${nama}, saya ${umur}, dan email saya ${email}`
        // document.body.innerHTML = str;

// =======================================================================================    
    // Destruction Assignment
    // Contoh 1
        // const perkenalan = ['Halo', 'Nama', 'Saya', 'Joban'];
        // const [salam, satu, dua, nama] = perkenalan;
        // console.log(dua);
    // Contoh 2 : SKipping Item
        // const perkenalan = ['Halo', 'Nama', 'Saya', 'Joban'];
        // const [salam, , , nama] = perkenalan;
        // console.log(nama);
    // Contoh 3 : Swap Item
        // let a = 1;
        // let b = 2;
        // console.log(a);
        // console.log(b);
        // [a, b] = [b, a];
        // console.log(a);
        // console.log(b);
    // Contoh 4 : return value pada function
        // function coba(){
        //    return [1,2];
        //   }
        // const [a, b] = coba();
        // console.log(a);
    // Contoh 5 : Rest Parameter
        // const [a, ...values] = [1,2,4,5,6];
        // console.log(values)

    // Contoh 6 : Destruction Object
        // const mhs = {
        //      nama : 'ikhdan',
        //      umur : 20
        //  }
        // const {nama, umur} = mhs;
        // console.log(nama);
    // Contoh 7 : Assignment tanpa deklarasi object 
        // ({nama, umur} = { nama : 'ikhdan', umur : 20});
        // console.log(nama);
    // Contoh 8 : Assign ke variable baru
        // const mhs = {
        //     nama : 'ikhdan',
        //     umur : 20
        // }

        // const {nama:a, umur:u} = mhs;
        // console.log(u);
    // Contoh 9 : Memberikan default value
        // const mhs = {
        //     nama : 'ikhdan',
        //     umur : 20
        // }

        // const {nama, umur, email = 'joban@gmail.com'} = mhs;
        // console.log(email);
    // Contoh 10 : Mengambil field pada object, setelah dikirim sebagai parameter untuk function 
        // const mhs = {
        //      id : 123,
        //      nama : 'ikhdan',
        //      umur : 20,
        //      email : 'jikhdan@gmail.com'
        //     }
        // function getIdMhs({id}){
        //     return id;
        //     }
        // console.log(getIdMhs(mhs));

    // Contoh 11 : Destructing
        // function penjumlahanPerkalian(a,b){
        //         return [a + b, a * b];}
        // const [jumlah, kali] = penjumlahanPerkalian(2,3);
        // console.log(jumlah);
        // console.log(kali);  

    // Contoh 12 :
        // function kalkulasi(a,b){
        //     return [a + b, a - b, a * b, a / b];
        //     }
        //     const [tambah, kurang, kali, bagi = 'tidak ada'] = kalkulasi(2,3);
        //     console.log(bagi);
    
    // Contoh 13 : jika ingin urutan tidak berpengaruh, gunakan object
        // function kalkulasi(a,b){
        //         return{
        //         tambah: a + b,
        //         kurang: a - b,
        //         kali: a * b,
        //         bagi: a / b
        //          }
        //     }
        // const {bagi, tambah, kali, kurang} = kalkulasi(2,3);
        // console.log(kurang);
    
    // Contoh 14 : Destructuring Function Arguments
        // const mhs1 = {
        //     nama: 'joban',
        //     umur: 20,
        //     email: 'jikhdan@gmail.com',
        //     nilai: {
        //     tugas: 90,
        //     uts: 85,
        //     uas: 75}}
        // function cetakMhs({nama, umur, nilai:{tugas, uts, uas}}){
        // return `Halo, nama saya ${nama}, umur saya ${umur} tahun, dan nilai uas saya ${uas}`;
        // }
        // console.log(cetakMhs(mhs1));

// =======================================================================================    
    // Looping for ..of, for ..in
    // Contoh 1 : Array for..of
        // const mhs = ['joban', 'erik', 'doddy'];
        //     for( const m of mhs ){
        //         console.log(m);
        //     }
    // Contoh 2 : String for..of
        // const nama = 'joban';
        //     for( const n of nama){
        //         console.log(n);
        //     }
    // Contoh 3 :
        // const mhs = ['joban', 'erik', 'doddy'];
        //     for(const [i,m] of mhs.entries() ){
        //         console.log(`${m} adalah mahasiswa ke ${i + 1}`);
        //     }
    // Contoh 4 : Arguments
        // function jumlahAngka(){
        //     let jumlah = 0;
        //     // for..of
        //     for( a of arguments ){
        //         jumlah += a;
        //     }
        //     return jumlah;
        // }
        // console.log(jumlahAngka(1,2,3,4,5));
    // Contoh 5 : For..in
        // const mhs = {
        //         nama : 'joban',
        //         umur : 20,
        //         email : 'jikhdan@gmail.com'
        // }
        // for(m in mhs){
        //     console.log(m);
        // }
// =======================================================================================        
    // Spread Operator
    // Contoh 1 : memecah iterable menjadi single element
        // const mhs = ['ikhdan', 'widad', 'joban'];
        //     console.log(...mhs);
    // Contoh 2 : Menggabungkan 2 array
        // const mhs = ['ikhdanul', 'widad', 'joban'];
        // const dosen = ['zyan', 'zuhri', 'joban'];
        // const orang = [...mhs, 'ekal', ...dosen];
        // console.log(orang);
    // Contoh 3 : mencopy array 
        // const mhs = ['ikhdan', 'widad', 'joban'];
        //     const mhs1 = [...mhs];
        //     mhs1[0] = 'fajar';
        //     console.log(mhs1);
// =======================================================================================        
// Rest Parameter
    // Contoh 1 : Rest Parameter pada Array Destructuring  
        // const kelompok1 = ['Ikhdanul', 'Widad', 'Joban'];
        // const [ketua, wakil, ...anggota] = kelompok1;
        // console.log(ketua);
    // Contoh 2 : Rest Parameter Pada  Object Destructuring
        // const team = {
        //     pm : 'joban',
        //     frontEnd1 : 'widad',
        //     frontEnd2 : 'joban'
        // }
        // const {pm, ...myTeam} = team;
        // console.log(myTeam);
    // Contoh 3 : Rest Parameter pada Filtering
        // function filterBy(type, ...values){
        //     return values.filter( v => typeof v === type );
        // }
        // console.log(filterBy('string', 1, 2, 'user2', false, 10, true, 'user3'));
// =======================================================================================        
// Callback
    // Contoh 1 : 
        // function tampilkanPesan(callback){
        //     const nama = prompt('Masukkan Nama :');
        //     callback(nama);
        // }
        // tampilkanPesan(nama => alert(`Halo, ${nama}`));
    // Contoh 2 :
        // const mhs = [
        //     {
        //         "nama"  : "ikhdan",
        //         "nrp"   : "042065278",
        //         "email" : "jikhdan@gmail.com",
        //         "idDosenWali" : 1
        //     },
        //     {
        //         "nama"  : "widad",
        //         "nrp"   : "042065279",
        //         "email" : "widad@gmail.com",
        //         "idDosenWali" : 2
        //     },
        //     {
        //         "nama"  : "joban",
        //         "nrp"   : "042065277",
        //         "email" : "joban@gmail.com",
        //         "idDosenWali" : 3
        //     }
        // ];
        //     console.log('mulai');
        //     mhs.forEach(m => {
        //         for(let i = 0; i < 1000000; i++){
        //             let date = new Date();
        //         }
        //         console.log(m.nama)
        //     });
        //     console.log('selesai');
    // contoh 3 : Asyncrhronous Callback
        // function tampilkanPesan(callback){
        //       const nama = prompt('Masukkan Nama :' );
        //       callback(nama);
        //     }
        // tampilkanPesan((nama) => alert(`Halo, ${nama}`));

// =======================================================================================        

          // LATIHAN ADVANCE NANTI AJA









// Anonymous Callback, buat mahasiswa.json berisi object list mahasiswa
    //          1. buat Asynchronous Callback With Vanilla JavaScript
    //          2. buat Asynchronous Callback With Jquery
    //          3. buat asynchronous Callback menampilkan string 1,2 (pakai timer), 3

// Promise
    //          1. Buat Promise jika var janji di tepati | ingkar
    //          2. Buat Promise pakai timer jika var janji di tepati setalah beberapa waktu | ingkar setalah beberapa waktu 
    //          3. Promise.all(), buat promise film dan cuaca

// Async Await
    //          1. Buat func janji pakai async 