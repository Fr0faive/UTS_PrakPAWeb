export const Button = (props) => {
    const {children, href} = props
    return (
        <a href={href} className="btn btn-accent w-1/4">{children}</a>
    )
}

export const ButtonSubmit = () => {
    return (
        <button type="submit" className="btn btn-accent w-1/4 mx-0 md:mx-9">Submit</button>
    )
}