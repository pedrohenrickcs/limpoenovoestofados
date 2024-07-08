// pages/api/mock.js

export default function handler(req, res) {
  const mockData = {
    title: "Higienização Completa e Impermeabilização de Estofados",
    description: "Tenha um estofado limpo e novo e toda sua família protegida das impurezas"
  };

  res.status(200).json(mockData);
}
