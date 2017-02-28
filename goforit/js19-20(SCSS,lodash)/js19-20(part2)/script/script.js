

var skills = _(data).map("skills").flatten().sort().uniq().value();
    console.log('Вывести массив скиллов всех людей, не должно быть повторяющихся скиллов, так же они должны быть отсортированы по алфавиту:', skills);

var names = _(data).sortBy(['friends.length', 'name']).map(function (i) { return i.name; }).value();
    console.log('Массив имен людей, отсортированных в зависимости от количества их друзей:', names);

var friends = _(data).map('friends').flatten().map('name').uniq().value();
    console.log('Массив всех друзей всех пользователей, не должно быть повторяющихся людей:', friends);


