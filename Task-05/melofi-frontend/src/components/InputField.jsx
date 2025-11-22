const InputField = ({ type = "text", name, id, placeholder, className }) => {
  return (

    <input className={className} type={type} name={name} id={id} placeholder={placeholder}/>

  );

}

export default InputField
