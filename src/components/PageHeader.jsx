// src/components/PageHeader.jsx

export default function PageHeader({ title, breadcrumb, children }) {
    return (
        <div id="pageheader-container" className="flex items-center justify-between p-4 bg-white border-b border-gray-100">
            <div id="pageheader-left" className="flex flex-col">
                {/* 1. Menggunakan Prop 'title' */}
                <span id="page-title" className="text-3xl font-semibold text-slate-800">
                    {title}
                </span>

                <div id="breadcrumb-links" className="flex items-center font-medium space-x-2 mt-2">
                    {/* 2. Mengolah Prop 'breadcrumb' */}
                    {/* Jika breadcrumb dikirim sebagai array, kita tampilkan satu-satu */}
                    {Array.isArray(breadcrumb) ? (
                        breadcrumb.map((item, index) => (
                            <div key={index} className="flex items-center space-x-2">
                                <span className="text-gray-500">{item}</span>
                                {index < breadcrumb.length - 1 && (
                                    <span className="text-gray-400">/</span>
                                )}
                            </div>
                        ))
                    ) : (
                        <span className="text-gray-500">{breadcrumb}</span>
                    )}
                </div>
            </div>

            {/* 3. Menggunakan Prop 'children' untuk tombol */}
            <div id="action-button">
                {children}
            </div>
        </div>
    );
}