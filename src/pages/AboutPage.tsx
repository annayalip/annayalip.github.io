
import React from 'react';
import Layout from '@/components/layout/Layout';

const AboutPage = () => {
  // Team members data
  const team = [
    {
      name: 'Алексей Петров',
      role: 'Шеф-повар',
      image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'
    },
    {
      name: 'Марина Иванова',
      role: 'Кондитер',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'
    },
    {
      name: 'Дмитрий Сидоров',
      role: 'Менеджер',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'
    }
  ];

  return (
    <Layout>
      {/* Page Header */}
      <div className="bg-pizza-gray py-16 animate-on-scroll">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center">О нас</h1>
          <p className="text-center text-gray-600 mt-2 max-w-xl mx-auto">
            Узнайте больше о нашей пиццерии и о том, что делает нас особенными
          </p>
        </div>
      </div>
      
      {/* Our Story */}
      <section className="py-16 animate-on-scroll">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Наша история</h2>
              <p className="text-gray-600 mb-4">
                "Дом Пиццы" был основан в 2010 году с простой идеей: создавать идеальную пиццу, 
                используя только самые свежие и качественные ингредиенты. Мы начали с маленькой 
                пиццерии в центре города, но быстро завоевали любовь и доверие наших клиентов.
              </p>
              <p className="text-gray-600 mb-4">
                Сегодня мы гордо обслуживаем тысячи довольных клиентов каждый месяц, сохраняя при этом 
                тот же уровень качества и внимания к деталям, который отличал нас с самого начала.
              </p>
              <p className="text-gray-600">
                В основе нашей философии лежит стремление предложить вам не просто еду, а настоящее 
                гастрономическое удовольствие, которое заставит вас возвращаться снова и снова.
              </p>
            </div>
            
            <div className="md:w-1/2 animate-fade-in">
              <img 
                src="https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                alt="История нашей пиццерии"
                className="rounded-lg shadow-lg w-full"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Mission */}
      <section className="py-16 bg-pizza-gray animate-on-scroll">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row-reverse items-center gap-10">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Наша миссия</h2>
              <p className="text-gray-600 mb-4">
                Наша миссия — приносить радость и удовольствие через качественную еду, превосходное 
                обслуживание и уютную атмосферу. Мы стремимся быть не просто местом, где можно поесть, 
                а местом, где создаются воспоминания.
              </p>
              <p className="text-gray-600">
                Мы верим, что хорошая еда объединяет людей, и наша цель — стать неотъемлемой частью 
                важных моментов вашей жизни, будь то семейный ужин, встреча с друзьями или праздничное 
                мероприятие.
              </p>
            </div>
            
            <div className="md:w-1/2 animate-fade-in">
              <img 
                src="https://images.unsplash.com/photo-1622483767028-3f66f32aef97?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                alt="Наша миссия"
                className="rounded-lg shadow-lg w-full"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Team */}
      <section className="py-16 animate-on-scroll">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-10">Наша команда</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:-translate-y-2 duration-300">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-64 object-cover"
                  loading="lazy"
                />
                <div className="p-4 text-center">
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-pizza-red">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;
