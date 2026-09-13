const getHealthyAdvices = (req, res) => {
  const data = [
    {
      id: 1,
      name: "Anna",
      rating: 4.9,
    },
  ];
  res.json(data);
};

export default { getHealthyAdvices };
