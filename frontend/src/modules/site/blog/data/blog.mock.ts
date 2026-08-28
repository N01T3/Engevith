import type { FaqItem, Post } from '../types/post.types'

export const POSTS_MOCK: Post[] = [
  {
    id: 'post-georreferenciamento',
    slug: 'georreferenciamento-imovel-rural',
    title: 'Georreferenciamento de imóvel rural: por que é essencial?',
    excerpt:
      'Entenda a importância do georreferenciamento certificado pelo INCRA para a regularização fundiária.',
    content:
      'O georreferenciamento é obrigatório para imóveis rurais em diversas situações, como transferência de propriedade e regularização fundiária.\n\nEle consiste em levantar as coordenadas dos vértices do imóvel no Sistema Geodésico Brasileiro (SGB) e submeter a certificação ao INCRA.\n\nA ENGEVITH executa todo o processo com equipamentos GNSS de alta precisão e acompanha a certificação do início ao fim.',
    cover: '',
    author: 'Equipe ENGEVITH',
    publishedAt: '2026-08-01T09:00:00.000Z',
  },
  {
    id: 'post-gnss-topografia',
    slug: 'gnss-na-topografia',
    title: 'Como o GNSS revolucionou a topografia',
    excerpt: 'A tecnologia GNSS reduz prazos e aumenta a precisão dos levantamentos topográficos.',
    content:
      'O posicionamento por GNSS (GPS) permite levantar coordenadas com precisão centimétrica, reduzindo prazos e retrabalhos nos levantamentos topográficos.\n\nCom receptores e estações de referência, é possível georreferenciar áreas extensas com alta confiabilidade, mesmo em terrenos de difícil acesso.\n\nNa ENGEVITH, combinamos GNSS e estações totais para entregar levantamentos completos e confiáveis.',
    cover: '',
    author: 'Equipe ENGEVITH',
    publishedAt: '2026-07-15T09:00:00.000Z',
  },
  {
    id: 'post-regularizacao',
    slug: 'regularizacao-de-imoveis-guia',
    title: 'Regularização de imóveis: um guia prático',
    excerpt:
      'Saiba quais documentos são necessários e como funciona o processo de regularização de imóveis.',
    content:
      'A regularização de imóveis é o processo de adequar a situação documental de um imóvel junto aos órgãos competentes.\n\nEnvolve levantamento topográfico, projeto, desdobro ou unificação de matrículas e registro em cartório.\n\nContar com responsabilidade técnica qualificada é fundamental para evitar atrasos e retrabalhos.',
    cover: '',
    author: 'Equipe ENGEVITH',
    publishedAt: '2026-06-20T09:00:00.000Z',
  },
]

export const FAQ_MOCK: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'Quais serviços a ENGEVITH oferece?',
    answer:
      'Oferecemos projetos de engenharia, topografia e geodésia, regularização de imóveis, projetos arquitetônicos e estruturais, obras e soluções florestais.',
  },
  {
    id: 'faq-2',
    question: 'Como solicito um orçamento?',
    answer:
      'Basta preencher o formulário na página de Contato ou enviar um e-mail para contato@engevith.com.br com os detalhes do seu projeto.',
  },
  {
    id: 'faq-3',
    question: 'A ENGEVITH emite ART (Anotação de Responsabilidade Técnica)?',
    answer:
      'Sim. Todos os nossos serviços técnicos possuem responsável técnico habilitado no CREA, com emissão de ART.',
  },
  {
    id: 'faq-4',
    question: 'Atendem imóveis rurais e urbanos?',
    answer:
      'Sim. Atendemos tanto imóveis urbanos quanto rurais, incluindo georreferenciamento e regularização fundiária.',
  },
]
