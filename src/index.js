module.exports = function check(string, bracketsConfig) {
    var brackets = [];
      bracketsConfig.forEach(item => brackets.push(item.join("")));
      for (let i = 0; i < brackets.length; i++) {
        if (string.includes(brackets[i])) {
          string = string.replace(brackets[i], "");
          i = -1;
          }
      }
    return !string;    
    }

