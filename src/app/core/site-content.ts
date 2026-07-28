import type { SiteContent } from './site.models';

export const SITE_CONTENT: SiteContent = {
  profile: {
    name: 'Ricardo Mendes',
    shortName: 'Ricardo Mendes',
    professionalRegistry: 'CRN-3 12.345',
    biography: [
      'Nutricionista clínico com atendimento acolhedor e estratégias que respeitam a rotina, as preferências e os objetivos de cada pessoa.',
      'O acompanhamento une ciência, escuta e praticidade. Cada plano é construído em conjunto, com metas possíveis, ajustes ao longo do caminho e autonomia para fazer escolhas mais conscientes sem abrir mão do prazer de comer.',
    ],
    phone: '(84) 98738-3844',
    phoneHref: 'tel:+5584987383844',
    whatsappUrl:
      'https://wa.me/5584987383844?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta%20nutricional.',
    email: 'contato@ricardomendesnutri.com.br',
    location: 'Natal — RN e atendimento online',
  },
  hero: {
    eyebrow: 'NUTRIÇÃO CLÍNICA E COMPORTAMENTAL',
    titleStart: 'Alimentação possível para uma vida com mais',
    titleEmphasis: 'equilíbrio',
    titleEnd: 'e saúde',
    description:
      'Um acompanhamento individual, baseado em ciência e adaptado à sua rotina — sem dietas impossíveis ou soluções prontas.',
  },
  navigation: [
    { label: 'Início', href: '#inicio' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Especialidades', href: '#areas' },
    { label: 'Depoimentos', href: '#depoimentos' },
    { label: 'Contato', href: '#contato' },
  ],
  practiceAreas: [
    {
      icon: 'reeducation',
      title: 'Reeducação alimentar',
      description:
        'Estratégias práticas para melhorar sua relação com a comida e criar hábitos que façam sentido na vida real.',
    },
    {
      icon: 'clinical',
      title: 'Nutrição clínica',
      description:
        'Cuidado nutricional em diabetes, colesterol, hipertensão e outras condições, integrado à sua rotina.',
    },
    {
      icon: 'sports',
      title: 'Nutrição esportiva',
      description:
        'Planejamento alimentar para melhorar energia, recuperação e desempenho de atletas e praticantes.',
    },
    {
      icon: 'weight',
      title: 'Emagrecimento saudável',
      description:
        'Um processo gradual, sem radicalismo, com metas realistas e acompanhamento próximo de cada evolução.',
    },
    {
      icon: 'women',
      title: 'Saúde da mulher',
      description:
        'Acompanhamento nutricional em diferentes fases, do ciclo menstrual à gestação e ao climatério.',
    },
    {
      icon: 'vegetarian',
      title: 'Alimentação vegetariana',
      description:
        'Planejamento equilibrado para uma alimentação vegetal variada, segura e nutricionalmente completa.',
    },
  ],
  statistics: [
    { value: '100%', label: 'Plano individual' },
    { value: '6', label: 'Frentes de cuidado' },
    { value: 'Online', label: 'Para todo o Brasil' },
    { value: 'Contínuo', label: 'Suporte entre consultas' },
  ],
  testimonials: [
    {
      quote:
        'Aprendi a organizar minha alimentação sem cortar tudo o que gosto. O plano cabe na minha rotina e hoje tenho muito mais disposição.',
      name: 'Maria Fernanda S.',
      role: 'Acompanhamento nutricional',
    },
    {
      quote:
        'O acompanhamento é muito humano. As metas são ajustadas à minha realidade e cada consulta traz orientações simples de aplicar.',
      name: 'Carlos Eduardo S.',
      role: 'Reeducação alimentar',
    },
    {
      quote:
        'Melhorei meu rendimento nos treinos sem depender de uma dieta engessada. Entendi como fazer escolhas melhores em qualquer lugar.',
      name: 'Ana Paula O.',
      role: 'Nutrição esportiva',
    },
  ],
  contacts: [
    {
      icon: 'location',
      title: 'Endereço',
      lines: ['Atendimento presencial em Natal — RN', 'Consultas online para todo o Brasil'],
    },
    {
      icon: 'phone',
      title: 'Telefone',
      lines: ['(84) 98738-3844'],
      href: 'tel:+5584987383844',
    },
    {
      icon: 'mail',
      title: 'E-mail',
      lines: ['contato@ricardomendesnutri.com.br'],
      href: 'mailto:contato@ricardomendesnutri.com.br',
    },
    {
      icon: 'clock',
      title: 'Horário',
      lines: ['Segunda a sexta: 8h às 19h', 'Sábado: 8h às 12h'],
    },
  ],
  quote: {
    text: 'Comer bem não precisa ser uma pausa na sua vida. Precisa fazer parte dela.',
    attribution: 'Nosso jeito de cuidar',
  },
};
