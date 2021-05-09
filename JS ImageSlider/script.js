  // ambil container, kasih event click 
  const container = document.querySelector('.container');
  // ambil class jumbo
  const jumbo = document.querySelector('.jumbo');
  // ambil thumbnails
  const thumbs = document.querySelectorAll('.thumb');

  container.addEventListener('click', function(e){
      // cek apakah yang di klik adalah thumb
      if(e.target.className == 'thumb'){
          // ganti gambar jumbo dengan yang ada di thumb
          jumbo.src = e.target.src;
          // tambah class fade pada jumbo
          jumbo.classList.add('fade');
          // hilangkan class fade supaya animasi tetap berjalan
          setTimeout(function(){
              jumbo.classList.remove('fade');
          }, 500);
          // looping semua thumbnails
          thumbs.forEach(function(thumb){
              // ubah semua class menjadi thumb saja
              thumb.classList = 'thumb';
          });
          // tambah class active, supaya gambar yang aktif tetap transparant
          e.target.classList.add('active');
      }
  }); 
