import streamlit as st
import streamlit.components.v1 as components
from PIL import Image




# ==============================================================================
# WAJIB DI ATAS: 1. Pengaturan Layout Halaman Utama (Wide/Landscape)
# ==============================================================================
# LANDING PAGE
logo = Image.open("_ MDPI Primary Logo.png")
st.set_page_config(
    page_title="Grid FG Ikan Karang Buru 2026",
    page_icon=logo,
    layout="wide"
)
# Import logo/gambar
logo = Image.open("_ MDPI Primary Logo.png")

# Kustomisasi CSS untuk jarak atas halaman
st.markdown("""
<style>
.block-container{
    padding-top:2rem;
}
</style>
""", unsafe_allow_html=True)

# 2. Desain Bingkai (Frame) dan Peta Web
kode_bingkai_peta = """
<div style="
    border: 3px solid #2C3E50; 
    border-radius: 14px;
    overflow: hidden; 
    box-shadow: 0 4px 12px rgba(0,0,0,0.15); 
    width: 100%;               
    height: 600px; /* TINGGI PETA DI DALAM BINGKAI */
">
    <iframe src="https://ikhsanruntukahu.github.io/Grid_FG_Ikan_Karang_Buru_2026/" 
            width="100%" 
            height="100%" 
            style="border: none;" 
            scrolling="no">
    </iframe>
</div>
"""

# 3. Membuat tata letak 80% dengan kolom Streamlit
# Rasio 1 : 8 : 1 agar area tengah mengambil tepat 80% lebar layar
kolom_kiri, kolom_tengah, kolom_kanan = st.columns([1, 9.5, 1])

# Tampilkan SEMUA elemen utama HANYA di kolom tengah (Lebar 80%)
with kolom_tengah:
    
    # ------------------------------------------------------------------------
    # PERBAIKAN DI SINI:
    # Gunakan rasio [2, 6, 2] agar kolom judul (6) diapit ruang yang sama (2 & 2)
    # ------------------------------------------------------------------------
    sub_col1, sub_col2, sub_col3 = st.columns([2, 6, 2])
    
    with sub_col1:
        st.image(logo, width=160) # Sesuaikan lebar logo jika perlu
        
    with sub_col2:
        # Judul sekarang akan presisi di tengah terhadap area peta
        st.markdown(
            "<h1 style='text-align: center; font-size: 24px; margin-top: 10px; margin-bottom: 20px; line-height: 1.3;'>"
            "Peta Lokasi Penangakapan Ikan Demersal dan Karang Dominan<br>"
            "Perairan Pulau Buru<br>"
            "Tahun 2026"
            "</h1>", 
            unsafe_allow_html=True
        )
        
    with sub_col3:
        # Kolom kanan sengaja dibiarkan kosong untuk menyeimbangkan logo di kiri
        st.empty()
    
    # Menampilkan peta di bawah logo & judul
    components.html(kode_bingkai_peta, height=620)

    # 4. Teks Keterangan di Bawah Peta
    st.markdown("""
    ---
    Peta ini dibuat untuk kemudahan menentukan lokasi penangkapan.

 """)