import Image from "next/image";

export default function EmailField({ item, register, errors, }) {

  return (
    <div className="form__item flex-col">
      <label htmlFor="email" className="form__label" >{ item.label }</label>
      <input
        id="email"
        type="text"
        placeholder={ item.placeholder }
        { ...register }
        className="form__input mb-[7px]"
      />
      <Image src="/images/email-icon.svg" width={ 18 } height={ 18 } alt="Email" className="form__input-icon" title="Ввести email"/>
      { errors && <p className="text-red-500 text-[14px]">{ errors.message }</p> }
    </div>
  );
}