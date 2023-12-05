
import { useState } from "react";

const SearchForm = ({ onSubmit }) => {
    const [query, setQuery] = useState('');

    const handleChange = e => {
        setQuery(e.target.value);
    };
    const reset = () => {

        setQuery('');
    }
    const handleSubmit = e => {
        e.preventDefault();
        onSubmit(query);
        reset();
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    <input
                        onChange={handleChange}
                        aria-label="select"
                        className="input"
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search movie"
                        value={query}
                    />
                </label>
                <button type="submit">Search</button>

            </form >

        </div>
    );
};
export default SearchForm;