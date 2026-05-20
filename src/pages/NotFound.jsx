import { Link } from "react-router-dom";

// Tambahkan Props di sini sesuai tugas: errorCode, errorTitle, errorDescription, errorImage
export default function NotFound({ 
  errorCode = "404", 
  errorTitle = "Halaman Tidak Ditemukan", 
  errorDescription = "Halaman yang Anda cari mungkin telah dipindahkan, dihapus, atau Anda salah mengetikkan URL.",
  errorImage 
}) {
  return (
    <div className="flex flex-col min-h-[80vh] bg-slate-50">
      <main className="flex flex-1 items-center justify-center px-6">
        <div className="max-w-md w-full text-center">
          
          {/* Bagian Gambar / Angka Error */}
          <div className="relative">
            {errorImage ? (
              <img src={errorImage} alt="Error" className="mx-auto w-64 mb-4" />
            ) : (
              <h1 className="text-[120px] font-black text-slate-200 leading-none select-none">
                {errorCode}
              </h1>
            )}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="bg-white px-4 py-1 text-sm font-bold text-indigo-600 uppercase tracking-widest shadow-sm border border-slate-100 rounded-full">
                Oops! Terjadi Kesalahan
              </span>
            </div>
          </div>

          {/* Pesan Utama (Dinamis dari Props) */}
          <div className="mt-8">
            <h2 className="text-2xl font-bold text-slate-800 sm:text-3xl">
               {errorTitle}
            </h2>
            <p className="mt-4 text-slate-500 leading-relaxed">
              {errorDescription}
            </p>
          </div>

          {/* Tombol Navigasi */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/"
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-md hover:bg-indigo-700 transition-all"
            >
              Ke Dashboard
            </Link>
            
            <button
              onClick={() => window.history.back()}
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 text-sm font-semibold text-slate-700 border border-slate-200 shadow-sm hover:bg-slate-50 transition-all"
            >
              Kembali Sebelumnya
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}