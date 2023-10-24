const Input = (props) => {
    const { children, type, placeholder } = props;
    return (
        <div className="form-control w-full md:w-[210px] mx-0 md:mx-9">
            <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-first-name"
              >
                {children}
              </label>
              <input
                className="appearance-none block w-full bg-gray-100 text-gray-700 border-gray-600 rounded py-3 px-4 mb-3 leading-tight"
                id="grid-first-name"
                type={type}
                placeholder={placeholder}
              />
        </div>
    )
}

export default Input;