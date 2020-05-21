import React from "react"

const InterestForm = ({
  form,
  handleSubmit,
  handleChange,
  cancelPath,
  history,
}) => (
  <div className="form-container">
    <form onSubmit={handleSubmit}>
      {/* <label>Title</label> */}
      <input
        placeholder="Enter your first interest"
        value={form.title}
        name="title"
        required
        onChange={handleChange}
      />

      {/* <label>Link</label> */}
      <input
        placeholder="Enter your second interest"
        value={form.link}
        name="link"
        required
        onChange={handleChange}
      />

      <button type="submit">Submit</button>
      <button className="danger" onClick={() => history.push(cancelPath)}>
        Cancel
      </button>
    </form>
  </div>
)

export default InterestForm
