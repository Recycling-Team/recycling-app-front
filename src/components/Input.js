const Input = ({ id, name, type, value, onchange}) => {
return (
    <>
        <input
            id={id}
            name={name}
            type={type}
            value={value}
            onChange={onchange}
        />
    </>
    )
}

export default Input;