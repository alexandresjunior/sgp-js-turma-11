function EntradaForm({ htmlFor, label, type = "text", placeholder = "", state, setState, required = false }) {
    return (
        <div className="col-md-6 col-12">
            <label className="form-label" htmlFor={htmlFor}>{label}</label>
            <input
                type={type}
                className="form-control"
                id={htmlFor}
                placeholder={placeholder}
                value={state}
                onChange={(e) => setState(e.target.value)}
                required={required}
            />
        </div>
    );
}

export default EntradaForm;