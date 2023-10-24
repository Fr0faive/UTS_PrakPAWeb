const Dropdown = () => {
  return (
    <div className="form-control w-full md:w-[210px] mx-0 md:mx-9">
      <label for="Roles" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Role</label>
      <select name="Roles" id="roles" className="block w-full bg-gray-100 text-gray-700 border-gray-600 rounded py-3 px-4 mb-3 leading-tight">
        <option value="Designer">Designer</option>
        <option value="Front-end Dev">Front-end Dev</option>
        <option value="Back-end Dev">Back-end Dev</option>
        <option value="Software Engineer">Software Engineer</option>
      </select>
    </div>
  );
};

export default Dropdown;
