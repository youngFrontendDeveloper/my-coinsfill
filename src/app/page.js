import Link from "next/link";

export const metadata = {
  title: "Coinsfill",
  description: "Вход или регистрация пользователя, получение данных пользователя и изменение аватара",
};

export default function HomePage() {
  return (
   <>
     <section className="">
       <h1 className="mb-[20px] text-[35px] text-center font-bold">Данная работа демонстрирует:</h1>

       <ul className="max-w-[600px] mx-auto mb-[20px] pl-[20px] pr-[10px] text-black-80 list-disc">
         <li>Адаптивную форму входа для mobile и desktop экранов (минимальное разрешение 430px)</li>
         <li>Подключение шрифтов Google</li>
         <li>Работу страницы входа/регистрации пользователя с помощью REST API (из данных пользователя - только аватар)</li>
         <li>Приватные и публичные страницы (<Link
           href="/profile" className="text-link-blue-100 underline hover:text-my-orange-100"
         >profile</Link> и <Link
           href="/profile/avatar" className="text-link-blue-100 underline hover:text-my-orange-100"
         >avatar</Link>- приватные страницы)
         </li>
         <li>Валидацию полей формы с помощью react-hook-form</li>
         <li>Кастомную стилизацию поля формы input type=&quot;file&quot;</li>
         <li>Ограничение загружаемого файла по типу и размеру</li>
         <li>Отображение полей формы загрузки аватара в зависимости от того, выбрано изображение или нет</li>
         <li>Обрезку изображения аватара с помощью библиотеки react-avatar-editor</li>
         <li>Изменение цвета svg-иконки у активного класса в меню навигации</li>
         <li>Хлебные крошки</li>
         <li>Оформление стилей с помощью Tailwindcss</li>

       </ul>
       <p className="max-w-[600px] mx-auto mb-[30px] text-black-80 font-medium">Для проверки работоспособности нажмите на
         иконку входа в шапке сайта. Вы можете зарегистрироваться или войти по логину: <span
           className="font-normal"
         >my-mail@mail.ru</span> и паролю: <span className="font-normal">123456</span></p>
       <p className="max-w-[600px] mx-auto mb-[30px] text-black-80 font-medium">Макет проекта в Figma находится по <Link
         href="https://www.figma.com/file/IzomCNCemtEBchR7PqsA5B/testovoe-fixer?type=design&node-id=0-1&mode=design&t=jwsWI3eqcdBWmo4A-0"
         title="Посмотреть макет" className="text-link-blue-100 underline hover:text-my-orange-100" target="_blank"
       >этой</Link> ссылке</p>
       <p className="max-w-[600px] mx-auto mb-[50px] text-black-80 font-medium">Задание находится по  <Link
         href="https://topup-solutions.com/test-task.html"
         title="Посмотреть задание" className="text-link-blue-100 underline hover:text-my-orange-100" target="_blank"
       >этой</Link> ссылке</p>
     </section>
   </>
  );
}
