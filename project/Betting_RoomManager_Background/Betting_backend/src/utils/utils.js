const splitBySlash = (str) => {
  return str.split("/");
};

const splitByOneCharacter = (str) => {
  var result = [];
  for (var i = 0; i < str.length; i++) result.push(str[i]);

  return result;
};


module.exports = {
    splitBySlash,
    splitByOneCharacter
}