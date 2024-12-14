import { useState } from "react";

export default function Form(props) {
  const [formData, setFormData] = useState({ searchterm: "" });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.moviesearch(formData.searchterm); // Send search term to parent via props
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="searchterm"
        onChange={handleChange}
        value={formData.searchterm}
      />
      <input type="submit" value="Submit" />
    </form>
  );
}
