export default function handler(req, res) {
  const mockData = {
    title: 'Higienização Completa e Impermeabilização de Estofados',
    description:
      'Tenha um estofado limpo e novo e toda sua família protegida das impurezas',
    benefits: {
      titleLeft: 'Higienização',
      titleRight: 'Benefícios',
      description:
        'Os estofados são uma parte essencial de nossas casas e escritórios, proporcionando conforto e estilo aos nossos ambientes. No entanto, muitas vezes negligenciamos a necessidade de mantê-los limpos e higienizados. A higienização regular dos estofados é crucial por várias razões',
      items: [
        'Saúde e Bem-Estar',
        'Durabilidade e Aparência',
        'Eliminação de Odores',
        'Prevenção de Infestações',
        'Adequado para uso em ambientes comerciais',
      ],
    },
  }

  res.status(200).json(mockData)
}
