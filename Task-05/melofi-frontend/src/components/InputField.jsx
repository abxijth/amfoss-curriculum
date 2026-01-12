const InputField = ({ type = "text", name, id, placeholder, className, value, onChange, required }) => {
  return (

    <input className={className} type={type} name={name} id={id} placeholder={placeholder} value={value} onChange={onChange} required={required}/>

  );

}

export default InputField
