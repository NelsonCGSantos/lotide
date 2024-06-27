const assertEqual = function (actual, expected) {
    if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual}!== ${expected}`);
    }
};


const findKey = (object, callback) => {
    for (let key in object) {
        if (callback(object[key])) {
            return key;
        }
    }
    return undefined
};


const planets ={
    "Blue Hill": { stars: 1 },
    "Akaleri":   { stars: 3 },
    "noma":      { stars: 2 },
    "elBulli":   { stars: 3 },
    "Ora":       { stars: 2 },
    "Akelarre":  { stars: 3 }
};

const test1 = findKey(planets, x => x.stars === 2);
assertEqual(test1, "noma");

const players = {
    "Messi": { goals: 30 },
    "Ronaldo": { goals: 25 },
    "Mbappe": { goals: 22 },
    "Neymar": { goals: 28 },
    "Lewandowski": { goals: 25 }
  };
  
  const test2 = findKey(players, x => x.goals === 22); // should return "Mbappe"
  assertEqual(test2, "Mbappe");

  const test3 = findKey(players, x => x.goals === 50);
  assertEqual(test3, undefined);