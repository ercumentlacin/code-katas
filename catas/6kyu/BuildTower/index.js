function towerBuilder(nFloors) {
  const tower = [];
  const asteriks = "*";
  const space = " ";

  // her sayi için bir n oluşturuyoruz
  for (let n = 1; n <= nFloors; n++) {
    // tower dizisinin her indeksine (n*2-1) kadar yildiz ekliyoruz ve bu yildizlarin basina ve sonuna bosluk ekliyoruz bosluk sayisina space diyelim
    // space = nFloors - i
    const count = n * 2 - 1 < 0 ? 1 : n * 2 - 1;
    const spaceCount = nFloors - n;
    const spaceWrite = space.repeat(spaceCount);
    const floor = spaceWrite + asteriks.repeat(count) + spaceWrite;
    tower.push(floor);
  }

  return tower;
}

module.exports = towerBuilder;
