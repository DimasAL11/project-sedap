import { useNavigate } from "react-router-dom";

export default function ErrorPage({ errorCode, errorTitle, errorDescription, errorImage }) {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-6">
      {/* Gambar Error (Dinamis dari Props) */}
      <div className="mb-6">
        {errorImage ? (
          <img src={errorImage} alt="Error" className="w-80 h-auto" />
        ) : (
          <h1 className="text-9xl font-black text-gray-200">{errorCode}</h1>
        )}
      </div>

      {/* Info Error */}
      <h2 className="text-3xl font-bold text-slate-800 mb-2">
        {errorCode} - {errorTitle}
      </h2>
      <p className="text-slate-500 text-center max-w-md mb-8">
        {errorDescription}
      </p>

      {/* Tombol Navigasi */}
      <div className="flex gap-4">
        <button 
          onClick={() => navigate(-1)}
          className="px-6 py-2.5 border border-gray-300 rounded-lg font-medium text-slate-700 hover:bg-gray-50 transition-all"
        >
          Kembali
        </button>
        <button 
          onClick={() => navigate("/")}
          className="px-6 py-2.5 bg-green-500 text-white rounded-lg font-medium hover:bg-green-600 transition-all shadow-md"
        >
          Ke Dashboard
        </button>
      </div>
    </div>
  );
}