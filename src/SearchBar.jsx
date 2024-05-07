export const SearchBar = ({ onSubmit, valorInput, onChange }) => {
    return (
        <form className="form-searchbar" onSubmit={onSubmit}>
            <input className="barra" value={valorInput} onChange={onChange}/>
        </form>
    )
}