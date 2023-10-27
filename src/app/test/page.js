export default function TestTaskPage() {
  return (
    <>
      <h1 className="">Тестовое задание</h1>
      <p className="">Для прохождения тестового задания, необходимо сверстать по заданному <Link className="text-link-blue-100 underline hover:text-my-orange-100"  href="https://www.figma.com/file/IzomCNCemtEBchR7PqsA5B/testovoe-fixer?type=design&node-id=0-1&mode=design&t=jwsWI3eqcdBWmo4A-0" title="Посмотреть макет" target="_blank">макету</Link> простое мини Web приложение (сайт).
        Приложение должно иметь общедоступную форму входа и форму регистрации (email и пароль ) с валидацией данных.
        Также, должна быть часть приложения доступная только после входа, которая будет иметь форму для загрузки
        картинки (popup), и страницу отображающую эту картинку.</p>

      <p className="">Картинка должна быть преобразована в Base64 и отправлена на back-end. Детали ниже</p>

      <h2 className="">Требования:</h2>
      <ul className="">
        <li className=""> ReactJS фреймворк NextJS в связке с TailwindCSS без TypeScrypt.</li>
        <li className=""> Сайт должен экспортироваться в статичный</li>
        <li className=""> Сайт должен проверять размер и тип файла, в случае если не картинка или размер больше 5Мб писать
          соответсвующую ошибку
        </li>
      </ul>

      <h2 className="">Приветствуется:</h2>
      <ul className="">
        <li className=""> Использование шаблонов (layout)</li>
        <li className=""> Использование контекста</li>
        <li className="">Проверка JWT токена на стороне клиента</li>
        <li className=""> Приветствуется использование SWR</li>
      </ul>

      <p className=""> Точка входа https://test-task.test211.workers.dev , все запросы POST и PUT отправляют JSON</p>

     <h2 className=""> Регистрация:</h2>

      {/*POST: /user*/}
      {/*{*/}
      {/*  email:<valid email>*/}
      {/*  password: <password min 5 >*/}
      {/*  }*/}

      {/*  Ответ:*/}

      {/*  Успешный:*/}
      {/*{*/}
      {/*  ok:true,*/}
      {/*  token: <JWT>*/}
      {/*  }*/}
      {/*  Ошибка:*/}
      {/*{*/}
      {/*  ok:false,*/}
      {/*  errors:<Errors Object>*/}
      {/*  }*/}

      {/* <h2>Вход:</h2>*/}

      {/*  POST: /login*/}
      {/*{*/}
      {/*  email:<valid email>*/}
      {/*  password: <password min 5 >*/}
      {/*  }*/}

      {/*  Ответ:*/}

      {/*  Успешный:*/}
      {/*{*/}
      {/*  ok:true,*/}
      {/*  token: JWT*/}
      {/*}*/}
      {/*  Ошибка:*/}
      {/*{*/}
      {/*  ok:false,*/}
      {/*  errors:<Errors Object>*/}
      {/*  }*/}



        </>
        )
      }