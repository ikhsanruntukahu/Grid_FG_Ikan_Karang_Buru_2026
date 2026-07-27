import streamlit as st
from PIL import Image

# ==============================================================================
# 1. Pengaturan Layout Halaman Utama (Wajib paling atas)
# ==============================================================================
# Buka gambar logo
logo = Image.open("_ MDPI Primary Logo.png")

st.set_page_config(
    page_title="Grid FG Ikan Karang Buru 2026",
    page_icon=logo,
    layout="wide"
)

# Kustomisasi CSS Streamlit untuk mengurangi jarak kosong di atas halaman
st.markdown("""
<style>
    .block-container {
        padding-top: 2rem;
        padding-bottom: 2rem;
    }
</style>
""", unsafe_allow_html=True)


# ==============================================================================
# 2. Tata Letak Konten (Kolom Utama)
# ==============================================================================
# Membagi layar: 1 (kiri) : 8 (tengah untuk konten) : 1 (kanan)
kolom_kiri, kolom_tengah, kolom_kanan = st.columns([1, 8, 1])

with kolom_tengah:
    
    # --- BAGIAN HEADER (Logo & Judul) ---
    sub_col1, sub_col2, sub_col3 = st.columns([2, 6, 2])
    
    with sub_col1:
        st.image(logo, width=160) 
        
    with sub_col2:
        st.markdown(
            """
            <h1 style='text-align: center; font-size: 24px; margin-top: 10px; margin-bottom: 20px; line-height: 1.3;'>
                Peta Lokasi Penangkapan Ikan Demersal dan Karang Dominan<br>
                Perairan Pulau Buru<br>
                Tahun 2026
            </h1>
            """, 
            unsafe_allow_html=True
        )
        
    with sub_col3:
        st.empty()

    # --- BAGIAN PETA ---
    # Menggunakan st.markdown untuk menyuntikkan iframe secara langsung (menghindari double iframe dari components.html)
    kode_peta = """
    <div style="
        width: 100%; 
        height: 600px; 
        border: 3px solid #2C3E50; 
        border-radius: 14px; 
        overflow: hidden; 
        box-shadow: 0 4px 12px rgba(0,0,0,0.15); 
        box-sizing: border-box;
    ">
        <iframe src="https://ikhsanruntukahu.github.io/Grid_FG_Ikan_Karang_Buru_2026/" 
                width="100%" 
                height="100%" 
                frameborder="0" 
                style="border:0;" 
                allowfullscreen="">
        </iframe>
    </div>
    """
    
    # Render langsung menggunakan markdown
    st.markdown(kode_peta, unsafe_allow_html=True)

    # --- BAGIAN KETERANGAN ---
    st.markdown("---")
    st.markdown(
        "<p style='text-align: center; font-size: 16px;'>"
        "Peta ini dibuat untuk kemudahan menentukan lokasi penangkapan."
        "</p>", 
        unsafe_allow_html=True
    )