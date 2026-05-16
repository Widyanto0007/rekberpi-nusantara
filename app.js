// Menghubungkan tombol dari halaman index.html ke kode ini
document.querySelector('.btn-kunci').addEventListener('click', function() {
    alert("Proses Blockchain: Menghubungkan ke Dompet Pi Pembeli untuk mengunci dana 100%...");
    // Nanti di sini kita masukkan fungsi Pi SDK untuk transfer ke brankas multisig
});

document.querySelector('.btn-resi').addEventListener('click', function() {
    let resi = prompt("Masukkan Nomor Resi Pengiriman (J&T / JNE / dll):");
    if (resi) {
        alert("Resi " + resi + " tersimpan! Blockchain memulai hitung mundur 72 Jam otomatis sejak sekarang.");
    }
});

document.querySelector('.btn-cair').addEventListener('click', function() {
    alert("Memeriksa kunci digital... Jika pembeli klik 'Selesai' ATAU waktu 72 jam sudah habis, dana otomatis cair ke Penjual!");
});
