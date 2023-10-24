const Textarea = () => {
    return (
        <div className="form-control w-full h-1/2 mx-0 md:mx-9">
            <label htmlFor="message" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Message</label>
            <textarea className="textarea textarea-bordered bg-white text-gray-900" placeholder="Message"></textarea>
        </div>
    )
}

export default Textarea;