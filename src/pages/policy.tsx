import Logo from "../logo.svg";

export default function Policy() {
  return (
    <>
      <section className="bg-white flex-grow">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-left text-4xl font-extrabold font-mono leading-none md:text-5xl xl:text-6xl dark">
              Политика конфиденциальности
            </h1>
          </div>
        </div>
      </section>

      <section className="bg-gray-5 flex-grow">
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div className="max-w-screen-md mb-8 lg:mb-16">
            <h2 className="mb-4 text-4xl font-extrabold text-gray-900">
            Основные понятия, используемые в Политике конфиденциальности персональных данных
            </h2>
            <p className="text-gray-500 sm:text-xl">
            <strong>Администрация Сайта</strong> - уполномоченные участники команды ALFAI на управление Сайтом<br/>
            <strong>Сайт</strong> - интернет-ресурс ai.laem.fun<br/>
            <strong>Нейросеть</strong> - модель RuDialogGPT3 обученная на открытых данных<br/>
            <strong>Пользователь</strong> - лицо, имеющее доступ к сети Интернет и использующее Нейросеть или сайт для своих целей<br/>
            <strong>Персональные данные</strong> - информация, которую Пользователь отправляет нейросети, а так же IP-адрес<br/>
            <strong>IP-адрес</strong> - уникальный сетевой адрес узла в компьютерной сети, построенной по протоколу IP
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-5 flex-grow">
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div className="max-w-screen-md mb-8 lg:mb-16">
            <h2 className="mb-4 text-4xl font-extrabold text-gray-900">
            Общие положения 
            </h2>
            <p className="text-gray-500 sm:text-xl">
            <strong>2.1</strong> Настоящая Политика конфиденциальности персональных данных Нейросети и Сайта создана командой ALFAI<br/>
            <strong>2.2</strong> Использование Нейросети или Сайта Пользователем означает его безоговорочное согласие с Политикой конфиденциальности<br/>
            <strong>2.3</strong> В случае несогласия с Политикой конфиденциальности Пользователь должен прекратить использование Сайта и Нейросети<br/>
            <strong>2.4</strong> Политика конфиденциальности определяет основные условия использования Персональных данных Пользователя<br/>
            <strong>2.5</strong> Персональными данными пользователя являются: <br/>
              * данные, отправляемые нейросети<br/>
              * IP-адрес<br/>
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-5 flex-grow">
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div className="max-w-screen-md mb-8 lg:mb-16">
            <h2 className="mb-4 text-4xl font-extrabold text-gray-900">
            Цели обработки персональных данных Пользователей 
            </h2>
            <p className="text-gray-500 sm:text-xl">
            <strong>3.1</strong> Сайт собирает и хранит только те данные, которые необходимы для обучения нейросети и статистики<br/>
            <strong>3.2</strong> Персональные данные Пользователя используются для обучения нейросети и сбора статистики<br/>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
