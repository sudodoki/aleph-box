To do, possibly (need feedback on this):
+ add support for 'is'/'are' properties to be boolean:
```
new Aleph().isAleph   // -> returns bool
new Aleph().areInsane // -> returns bool
```
+ add custom mappings
```
new Aleph({
  'birthdayDate': 'birthday',
  'gradutedIn': 'year'
  })
```
+ add support for object schemas, like
```
Aleph.tweetSchema = {
  hash: 'hashtag'
  text: 'sentence'
}
new Aleph().friends[0].tweet /* -> {
  hash: 'YOLO'
  text: 'Got my gun, would try to juggle',
}
*/
```
+ add support for referencing other objects, like:
```
var store = new Aleph();
var names = store.items.map(function (i) { return i.name})
store.create('bestShoppingCart', {items: 'store.items.name', relation: 'all'}
store.create('myShoppingCart', {items: 'store.items.name', relation: 'some'}
store.create('bestItemCart', {item: 'store.items.name', relation: 'single'}
expect(store.bestShoppingCart.items).to.equal(names)
expect(names).to.contain(store.myShoppingCart.items)
expect(names.indexOf(store.bestItemCart.item)).not.to.equal(1)
```
+ add composable fields:
```
new Aleph({
  fullName: '%title% %name% %surname%'
  DOB: '%DOB B.C.'
})
new Aleph().person /* -> {
  fullName: 'Dr John Brown',
  DOB: '11-12-1991 B.C.'
}
*/
```
+ add support for 'terminate'
```
var subject = new Aleph({terminate: 3})
subject.x.y.z.d // -> gets `undefined`, went too deep
```
+ add support for 'length' params
```
var subject = new Aleph({length: 5})
subject.map(function(i){ return i.name})
subject[6] // -> gets undefined
```
+ add export to json-generator.com schema
+ consider adding ability to provide callbacks/options to props