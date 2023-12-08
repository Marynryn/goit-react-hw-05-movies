import { Btn, Form, Input } from "./SearchForm.styled";
import { useState } from "react";
import { Container } from "pages/Home/Home.styled";
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
        <Container>
            <Form onSubmit={handleSubmit}>
                <label>
                    <Input
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
                <Btn type="submit">Search</Btn>

            </Form >

        </Container>
    );
};
export default SearchForm;