"use strict";
import users from "./users.js";
// Массив имен (поле name) людей, отсортированных в зависимости от количества их друзей (поле friends)

const getNamesSortedByFriendsCount = (users) => {
  return users.sort((a, b) => a.length - b.length).map((user) => user.name);
};

console.log(getNamesSortedByFriendsCount(users));
