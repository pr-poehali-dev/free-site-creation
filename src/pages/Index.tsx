import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const designWorks = [
    {
      id: 1,
      title: "Современный логотип",
      description: "Креативный дизайн логотипа с геометрическими формами",
      image: "/img/55c9ddf5-f5ac-40dd-835e-00593a066cf7.jpg",
      category: "Брендинг"
    },
    {
      id: 2,
      title: "UI/UX Дизайн",
      description: "Интерфейс мобильного приложения с современным дизайном",
      image: "/img/43519e62-16dd-4adb-8e93-2039a5968b18.jpg",
      category: "UI/UX"
    },
    {
      id: 3,
      title: "Айдентика бренда",
      description: "Полный пакет фирменного стиля для стартапа",
      image: "/img/1e28a536-7775-4981-a76b-d6cb857e31e8.jpg",
      category: "Брендинг"
    }
  ];

  const services = [
    {
      title: "Логотип и айдентика",
      description: "Создание уникального логотипа и фирменного стиля",
      price: "от 15 000 ₽",
      features: ["Логотип", "Фирменные цвета", "Типографика", "Гайдлайн"]
    },
    {
      title: "UI/UX Дизайн",
      description: "Дизайн интерфейсов веб-сайтов и мобильных приложений",
      price: "от 25 000 ₽",
      features: ["Wireframes", "Прототипы", "UI Kit", "Адаптивный дизайн"]
    },
    {
      title: "Графический дизайн",
      description: "Создание рекламных материалов и полиграфии",
      price: "от 5 000 ₽",
      features: ["Баннеры", "Листовки", "Визитки", "Презентации"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-coral to-turquoise rounded-lg flex items-center justify-center">
                <Icon name="Palette" size={24} className="text-white" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-coral to-turquoise bg-clip-text text-transparent">
                vivangelduuust-castom
              </h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#gallery" className="text-gray-600 hover:text-coral transition-colors">Галерея</a>
              <a href="#about" className="text-gray-600 hover:text-coral transition-colors">О дизайнере</a>
              <a href="#services" className="text-gray-600 hover:text-coral transition-colors">Услуги</a>
              <a href="#contact" className="text-gray-600 hover:text-coral transition-colors">Контакты</a>
            </nav>
            <Button className="bg-coral hover:bg-coral/90 text-white">
              Связаться
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-coral via-turquoise to-mint bg-clip-text text-transparent leading-tight">
              Творческий дизайнер
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Создаю уникальные визуальные решения для брендов и цифровых продуктов. 
              Воплощаю идеи в яркие креативные проекты.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-coral hover:bg-coral/90 text-white">
                <Icon name="Eye" size={20} className="mr-2" />
                Посмотреть работы
              </Button>
              <Button size="lg" variant="outline" className="border-turquoise text-turquoise hover:bg-turquoise hover:text-white">
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Обсудить проект
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold mb-4 text-gray-900">Галерея работ</h3>
            <p className="text-xl text-gray-600">Избранные проекты из моего портфолио</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {designWorks.map((work) => (
              <Card key={work.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden border-0 shadow-lg">
                <div className="relative overflow-hidden">
                  <img 
                    src={work.image} 
                    alt={work.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-coral text-white">{work.category}</Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl group-hover:text-coral transition-colors">
                    {work.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {work.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-gradient-to-r from-turquoise/10 to-mint/10">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-4xl font-bold mb-6 text-gray-900">О дизайнере</h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Привет! Я творческий дизайнер с более чем 5-летним опытом создания 
                визуальных решений для брендов по всему миру. Специализируюсь на 
                создании уникальных логотипов, айдентики и цифровых интерфейсов.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Моя философия — каждый проект должен рассказывать историю и вызывать 
                эмоции. Я верю в силу хорошего дизайна менять мир к лучшему.
              </p>
              <div className="flex flex-wrap gap-3">
                {['Illustrator', 'Photoshop', 'Figma', 'After Effects'].map((skill) => (
                  <Badge key={skill} variant="secondary" className="text-sm py-2 px-4">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-coral/20 to-turquoise/20 rounded-2xl flex items-center justify-center">
                <Icon name="User" size={120} className="text-gray-400" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold mb-4 text-gray-900">Услуги и цены</h3>
            <p className="text-xl text-gray-600">Профессиональные дизайн-услуги для вашего бизнеса</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-coral to-turquoise"></div>
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900 group-hover:text-coral transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {service.description}
                  </CardDescription>
                  <div className="text-2xl font-bold text-coral mt-4">
                    {service.price}
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <Icon name="Check" size={16} className="text-turquoise mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-6 bg-gradient-to-r from-coral to-turquoise hover:opacity-90 text-white">
                    Заказать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h3 className="text-4xl font-bold mb-4 text-gray-900">Свяжитесь со мной</h3>
              <p className="text-xl text-gray-600">Готов обсудить ваш проект и воплотить идеи в жизнь</p>
            </div>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle>Напишите мне</CardTitle>
                    <CardDescription>Расскажите о своем проекте</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Input placeholder="Ваше имя" />
                    </div>
                    <div>
                      <Input placeholder="Email" type="email" />
                    </div>
                    <div>
                      <Textarea placeholder="Расскажите о вашем проекте..." rows={5} />
                    </div>
                    <Button className="w-full bg-coral hover:bg-coral/90 text-white">
                      <Icon name="Send" size={16} className="mr-2" />
                      Отправить сообщение
                    </Button>
                  </CardContent>
                </Card>
              </div>
              <div className="space-y-8">
                <div>
                  <h4 className="text-xl font-semibold mb-6 text-gray-900">Контактная информация</h4>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-coral/10 rounded-lg flex items-center justify-center mr-4">
                        <Icon name="Mail" size={20} className="text-coral" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Email</p>
                        <p className="text-gray-600">hello@vivangelduuust.com</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-turquoise/10 rounded-lg flex items-center justify-center mr-4">
                        <Icon name="Phone" size={20} className="text-turquoise" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Телефон</p>
                        <p className="text-gray-600">+7 (999) 123-45-67</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-mint/10 rounded-lg flex items-center justify-center mr-4">
                        <Icon name="MapPin" size={20} className="text-mint" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Местоположение</p>
                        <p className="text-gray-600">Москва, Россия</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-4 text-gray-900">Социальные сети</h4>
                  <div className="flex space-x-4">
                    <Button size="sm" variant="outline" className="border-coral text-coral hover:bg-coral hover:text-white">
                      <Icon name="Instagram" size={16} />
                    </Button>
                    <Button size="sm" variant="outline" className="border-turquoise text-turquoise hover:bg-turquoise hover:text-white">
                      <Icon name="Twitter" size={16} />
                    </Button>
                    <Button size="sm" variant="outline" className="border-mint text-mint hover:bg-mint hover:text-white">
                      <Icon name="Linkedin" size={16} />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-coral to-turquoise rounded-lg flex items-center justify-center">
                <Icon name="Palette" size={18} className="text-white" />
              </div>
              <h4 className="text-xl font-bold bg-gradient-to-r from-coral to-turquoise bg-clip-text text-transparent">
                vivangelduuust-castom
              </h4>
            </div>
            <p className="text-gray-400 mb-6">Творческий дизайнер • Создаю уникальные визуальные решения</p>
            <p className="text-gray-500 text-sm">
              © 2024 vivangelduuust. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;