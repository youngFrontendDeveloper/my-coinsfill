import EmailField from "../EmailField/EmailField";
import PasswordField from "../PasswordField/PasswordField";
import TextField from "../TextField/TextField";
import CheckboxField from "../CheckboxField/CheckboxField";
import Button from "../Button/Button";

export default function Form({
                               formFields,
                               buttonText,
                               register,
                               errors,
                               handleSubmit,
                               onError,
                               onSubmit,
                               error,
                               getValues,
                               type,
                               width,
                               height,
                               btnClass,
                             }) {

  return (
    <form
      className="w-[320px] mx-auto mb-[37px] py-[13px] form"
      onSubmit={ handleSubmit( onSubmit, onError ) }
    >
      {
        formFields.map( (item, index) => {
          switch( item.type ) {
            case( "email" ):
              return (
                <EmailField
                  item={ item }
                  register={ register( `${ item.name }`, {
                    required: "Пожалуйста, введите свой email",
                    // pattern: {
                    //   value: /^[a-zA-z0-9-._]+@[a-z0-9-_]+\.[a-z0-9-_]{2,6}/ui,
                    //   message: "Пожалуйста, введите валидный email",
                    // }
                  } ) }
                  errors={ errors[ item.name ] }
                  key={ `${ item.name }-${ index }` }
                />
              );

            case( "password" ):
              return (
                <PasswordField
                  item={ item }
                  register={ register( `${ item.name }`, {
                    required: "Пожалуйста, введите пароль не менее 5 символов",
                    minLength: {
                      value: 5,
                      message: "Должно быть не менее 5 символов",
                    },
                  } ) }
                  errors={ errors[ item.name ] }
                  key={ `${ item.name }-${ index }` }
                  errorPassword={ error.password }
                />
              );

            case( "confirmPassword" ):
              return (
                <PasswordField
                  item={ item }
                  register={ register( `${ item.name }`, {
                    required: "Пожалуйста, повторите пароль",
                    validate: (value) => value === getValues( "password" ),
                  } ) }
                  errors={ errors[ item.name ] }
                  key={ `${ item.name }-${ index }` }
                />
              );

            case( "text" ):
              return (
                <TextField
                  item={ item }
                  key={ `${ item.name }-${ index }` }
                />
              );

            case( "checkbox" ):
              return (
                <CheckboxField
                  item={ item }
                  register={ register( `${ item.name }`, {
                    required: "Пожалуйста, отметьте это поле",
                  } ) }
                  key={ `${ item.name }-${ index }` }
                />
              );

            default:
              return null;
          }

        } )
      }
      <Button
        type={ type }
        width={ width }
        height={ height }
        buttonText={ buttonText }
        btnClass={ btnClass }
      />
    </form>
  );
}