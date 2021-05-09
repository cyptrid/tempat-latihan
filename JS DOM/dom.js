 
// DOM Selection
// ======================================================================================
    // ubah bgcolor body html jadi #f4f6f6
        var body = document.body.style.background = '#f4f6f6';
// ======================================================================================
    // document.getElementById() -> element
    /* Latihan  :
        - ambil id judul,
        - ubah text jadi nama lengkap
        - ubah text color jadi red
        - ubah bgcolor jadi grey
    */
        const id = document.getElementById('judul');
        id.innerHTML = "Ikhdanul WJ";
        id.style.color = "red";
        id.style.background = "grey";

// ======================================================================================
    //document.getElementsByTagName() -> HTMLCollections
    /*
     Latihan :
     - ambil tag p
     - buat pengulangan untuk mengambil tag p
     - ubah bgcolor jadi biru muda
    */

        const p1 = document.getElementsByTagName('p');
        for(let i = 0; i < p1.length; i++){
            p1[i].style.background = 'lightblue';
        }

// ======================================================================================
    //document.getElementsByClassName() -> HTMLCollections
    /*
        Latihan :
        - ambil class CN
        - ubah text jadi diubah sama saya
    */
        const cn = document.getElementsByClassName('cn');
        cn[0].innerHTML = "diubah sama saya"

// ======================================================================================
    //document.querySelector() -> element
    /*
        Latihan 1 :
        - ambil h2 di section id b
        - ubah text color jadi hijau
    */ 
   
        const p2 = document.querySelector(' #b h2');
        p2.style.color = 'green';

     /*
        Latihan 2 :
        - ambil l1 item 2 di section id b
        - ubah text jadi diubah oleh saya
    */ 
        const p3 = document.querySelector(' section#b ul li:nth-child(2)');
        p3.innerHTML = 'diubah oleh saya';

// ======================================================================================
    //document.querySelectorAll();  -> nodelist
    /*
        Latihan : 
        - ambil tag p(4);
        - ubah textnya menjadi "dirubah ku aing";
    */ 
        const p4 = document.querySelectorAll('p');
        for(let i = 0; i <p4.length; i++){
            p4[3].innerHTML = 'dirubah ku aing';
        }

// ======================================================================================
    // Scope DOM, gabung selector & tagname
    /*
        Latihan :
        - ambil item 3 section b dengan selector & bytagname
        - ubah bg.color jadi kuning
    */
        const p5 = document.querySelector('#b');
        const p6 = p5.getElementsByTagName('li')[2];
        p6.style.backgroundColor = 'yellow';
// ======================================================================================
    // Remove Attribute
    // Latihan : ambil id c hapus attribut class="gatau"
        const p7 = document.getElementById('c');
        const p8 = p7.removeAttribute('class', 'gatau');
// ======================================================================================
    // setAttribute()
    // Latihan : ambil id c tambah attribut name="nama"
        const p9 = p7.setAttribute('name','nama');

// ======================================================================================
    // removechild() 
    // Latihan : ambil link di id c, lalu hapus attribute a
        const p10 = document.getElementById('c');
        const p11 = p10.querySelector('a');
        p10.removeChild(p11);
// ======================================================================================
    // DOM Replace Element
    /*
    Latihan : 
    - replace element p pada section c,
    - ganti ke h2 dan text ganti jadi "DOM Replace h2"
   
    */ 
        const p12 = document.querySelector('#c');
        const p13Lama = p12.querySelector('p');
        const h2Baru = document.createElement('h2');
        const h2TextBaru = document.createTextNode('DOM Replace h2');
        h2Baru.appendChild(h2TextBaru);
        p12.replaceChild(h2Baru, p13Lama);

// ======================================================================================
    // DOM Event
    /*
    Latihan 1 :
    - ambil id d
    - buat function event listener, li bertambah kebawah ketika section d di klik
    */
        const p13 = document.getElementById('d');
        p13.addEventListener('click', function(){
            const ulLama = document.querySelector('section#d ul');
            
            const liBaru = document.createElement('li');
            const textliBaru = document.createTextNode('Li Baru');
            liBaru.appendChild(textliBaru);
            ulLama.append(liBaru);
        });
    
    /*
    Latihan 2 : 
    - ambil id e
    - buat function event listener, li bertambah ke atas ketika section d di klik
    */ 
        const p14 = document.getElementById('e');
        p14.addEventListener('click', function(){
            ulLama2 = document.querySelector(' section#e ul ');
            liLama = ulLama2.querySelector('li:nth-child(1)');

            const liBaru2 = document.createElement('li');
            const textLiBaru2 = document.createTextNode('Insert Before');
            liBaru2.appendChild(textLiBaru2);
            ulLama2.insertBefore(liBaru2, liLama);
        });
// =========================Class List=================================================
        /*
        Latihan 1 :
        - ambil h2 di id f
        - tambahkan class upcase
        
        Latihan 2 :
        - ambil id f hapus class hapus

        latihan 3 :
        - buat function toggle class tmerah untuk menjalankan function di button 
        */ 
        