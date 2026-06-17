export default function Disyui() {
  return (
    <div class="card card-side bg-base-100 shadow-sm">
      <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
          alt="Movie"
        />
      </figure>
      <div class="card-body">
        <h2 class="card-title">New movie is released!</h2>
        <p>Click the button to watch on Jetflix app.</p>
        <div class="card-actions justify-end">
          <button
            className="btn"
            onClick={() => document.getElementById("my_modal_1").showModal()}
          >
            open modal
          </button>
          <dialog id="my_modal_1" className="modal">
            <div className="modal-box">
              <h3 className="font-bold text-lg">Hallo PCR Squad!!</h3>
              <p className="py-4">
                Maaf, fitur ini masih dalam tahap pengembangan. Sabar ya, kami sedang bekerja keras untuk menyelesaikannya secepat mungkin!
              </p>
              <p className="py-4">
                Terima kasih atas pengertian dan kesabaran kamu. Kami akan segera memberikan update terbaru tentang fitur ini. Tetap semangat dan terus dukung kami!
              </p>
              <div className="modal-action">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn">Close</button>
                </form>
              </div>
            </div>
          </dialog>
        </div>
      </div>
    </div>
  );
}
