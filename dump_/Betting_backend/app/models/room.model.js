module.exports = (sequelize, Sequelize) => {
  const Room = sequelize.define("rooms", {
    room_number: {
      type: Sequelize.STRING,
    },
    img: {
      type: Sequelize.STRING
    },
    status: {
      type: Sequelize.BOOLEAN,
    },
  });

  return Room;
};
