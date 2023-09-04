let darthVader = {
    allegiance : "Empire",
    weapon : "lightsabre",
    sith : true
}

console.log(Object.keys(darthVader.weapon).length);

darthVader.children = 2;
darthVader.childNames = ['Luke', 'Leia']

console.log(darthVader.children);
console.log(darthVader.childNames[0]);

for(key in darthVader){
    console.log(`${darthVader[key]}`)
}

darthVader.allegiance = "The light side"
console.log(darthVader.allegiance)

delete darthVader.children;

let{allegiance, weapon, sith, childNames} = darthVader;

for (key in darthVader){
    console.log(`${darthVader[key]}`)
}