// DO NOT MODIFY
var genericNumberArray = [1, 2, 3, 4, 5];
var colors = ['Blue', 'Red', 'Yellow', 'Charlie'];
var scrambledWords = ['win', 'the', 'for', 'burritos'];
var phoneNumber = [9, 0, 3, 5, 7, 6, 8];
var orderQueue = [{ takeOut: 'Ice Cream' }, { takeOut: 'Medium Salad'}, { takeOut: 'Burger'}];
var mixedNums = [5, 81, 40, 4, 805, 10, 76, 21, 3, 2, 7, 1, 7];
var mixedWords = ['Dont', 'You', 'Forget', 'About', 'Me'];
var fruitCollection = ['Apple', 'Scissors', 'Pug', 'Lady Bug', 'Banana', 'Pear'];
var gemBox = ['Ruby', 'Diamond', 'Diamond', 'Emerald', 'Moonstone', 'Pizza', 'Sneaker', 'Sapphire', 'Baby', 'Jeans', 'Soda Can', 'Boat'];
var upToTen = [1, 2, 9, 10];
var brownOnly = ['brown', 'brownish', 'ad8fy7iuhj23nrsf', 9813, {}, undefined,  'brown'];
var orderedValues = [4, 5, 6, 7, 8, 9, 10];
var friends = ['Todd', 'Jacoby', 'Miko', 'Joseph', 'Kevin', 'Todd C.'];
var monthNames = ['Jan', 'Feb', 'Mar', 'Apr'];
var bulkNumbers = [5, 5, 6, 6, 9, 9, 2, 2, 2, 5, 2];

// do your work below!

//#nameArray
var nameArray = [];
nameArray.push("Jocelyn", "Belden");

//#genericNumberArray
genericNumberArray.push(6, 7, 8, 9, 10);

//#colors
var popResult = colors.pop();

//#scrambledWords
scrambledWords.reverse();

//#phoneNumber
phoneNumber.reverse();

//#orderQueue
var nextOrder = orderQueue.shift();

//#mixedNums
mixedNums.sort();

//#mixedWords
mixedWords.sort();

//#notFruit
var notFruit = fruitCollection.splice(1, 3);

//#gemBox
gemBox.splice(8);
gemBox.splice(5, 2);

//#upToTen
upToTen.splice(2, 0, 3, 4, 5, 6, 7, 8);

//#brownOnly
brownOnly.splice(1, 5, "brown", "brown", "brown");

//#orderedValuesNewLength
var orderedValuesNewLength = orderedValues.unshift(1, 2, 3);

//#randomThingsArray
var randomThingsArray = genericNumberArray.concat(colors);

//#updatedOrders
var newOrders = [{takeOut: "Cheeseburger"}, {takeOut: "Small Salad"}]
var updatedOrders = orderQueue.concat(newOrders);

//#sentence
var sentence = scrambledWords.join(" ");

//#myFruits
var myFruits = fruitCollection.join(" + ");

//#favoriteFriends
var favoriteFriends = friends.slice(1, 3);

//#owesMoney
var owesMoney = friends.slice(3);

//#monthNameString
var monthNameString = monthNames.toString();

//#favoriteColor
var favoriteColor = colors.indexOf("Red");

//#favoriteEvenNumber
var favoriteEvenNumber = mixedNums.indexOf(76);

//#lastNine
var lastNine = bulkNumbers.lastIndexOf(9);

//#lastFive 
var lastFive = bulkNumbers.lastIndexOf(5);