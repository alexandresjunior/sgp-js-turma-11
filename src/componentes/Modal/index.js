function Modal({ titulo, texto, txtBtn01, onClickBtn01, txtBtn02, onClickBtn02 }) {
    return (
        <div className="modal modal-dialog-centered" tabIndex="-1">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">{titulo}</h5>
                    </div>

                    <div className="modal-body">
                        <p>{texto}</p>
                    </div>

                    <div className="modal-footer">
                        <button 
                            className="btn btn-primary"
                            onClick={onClickBtn01}
                        >
                            {txtBtn01}
                        </button>
                        <button 
                            className="btn btn-outline-primary"
                            onClick={onClickBtn02}
                        >
                            {txtBtn02}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modal;