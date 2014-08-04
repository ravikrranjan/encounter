'use strict';

var Level = {};

Level.number = null;  // not to be changed directly, use functions
Level.current = null; // reference to current level data object

Level.data = [
  // level 1
  {
    backgroundColor : C64.css.lightblue,
    groundColor : C64.green,
    obeliskColor : C64.black,
    firstEnemy : Enemy.TYPE_SAUCER_SINGLE,
    enemyCount : 4,
    spawnTable : [
      Enemy.TYPE_MISSILE,
      Enemy.TYPE_SAUCER_SINGLE,
      Enemy.TYPE_SAUCER_TRIPLE,
    ]
  },
  // level 2
  {
    backgroundColor : C64.css.black,
    groundColor : C64.brown,
    obeliskColor : C64.green,
    firstEnemy : Enemy.TYPE_SAUCER_TRIPLE,
    enemyCount : 6,
    spawnTable : [
      Enemy.TYPE_MISSILE,
      Enemy.TYPE_SAUCER_SINGLE,
      Enemy.TYPE_SAUCER_TRIPLE,
      Enemy.TYPE_SAUCER_CHAINGUN,
      Enemy.TYPE_SAUCER_SHOTGUN
    ]
  },
  // level 3
  {
    backgroundColor : C64.css.lightblue,
    groundColor : C64.lightred,
    obeliskColor : C64.black,
    firstEnemy : Enemy.TYPE_SAUCER_TRIPLE,
    enemyCount : 6,
    spawnTable : [
      Enemy.TYPE_MISSILE,
      Enemy.TYPE_SAUCER_TRIPLE,
      Enemy.TYPE_SAUCER_CHAINGUN,
      Enemy.TYPE_SAUCER_SHOTGUN,
      Enemy.TYPE_SAUCER_AUTOSHOTGUN
    ]
  },
  // level 4
  {
    backgroundColor : C64.css.black,
    groundColor : C64.red,
    obeliskColor : C64.purple,
    firstEnemy : Enemy.TYPE_SAUCER_AUTOSHOTGUN,
    enemyCount : 6,
    spawnTable : [
      Enemy.TYPE_MISSILE,
      Enemy.TYPE_SAUCER_TRIPLE,
      Enemy.TYPE_SAUCER_CHAINGUN,
      Enemy.TYPE_SAUCER_SHOTGUN,
      Enemy.TYPE_SAUCER_AUTOSHOTGUN
    ]
  },
  // level 5
  {
    backgroundColor : C64.css.lightblue,
    groundColor : C64.grey,
    obeliskColor : C64.black,
    firstEnemy : Enemy.TYPE_SAUCER_CHAINGUN,
    enemyCount : 6,
    spawnTable : [
      Enemy.TYPE_MISSILE,
      Enemy.TYPE_SAUCER_TRIPLE,
      Enemy.TYPE_SAUCER_CHAINGUN,
      Enemy.TYPE_SAUCER_SHOTGUN,
      Enemy.TYPE_SAUCER_AUTOSHOTGUN
    ]
  },
  // level 6
  {
    backgroundColor : C64.css.orange,
    groundColor : C64.brown,
    obeliskColor : C64.black,
    firstEnemy : Enemy.TYPE_SAUCER_TRIPLE,
    enemyCount : 6,
    spawnTable : [
      Enemy.TYPE_MISSILE,
      Enemy.TYPE_SAUCER_TRIPLE,
      Enemy.TYPE_SAUCER_CHAINGUN,
      Enemy.TYPE_SAUCER_SHOTGUN,
      Enemy.TYPE_SAUCER_AUTOSHOTGUN
    ]
  },
  // level 7
  {
    backgroundColor : C64.css.black,
    groundColor : C64.lightblue,
    obeliskColor : C64.blue,
    firstEnemy : Enemy.TYPE_SAUCER_TRIPLE,
    enemyCount : 6,
    spawnTable : [
      Enemy.TYPE_MISSILE,
      Enemy.TYPE_SAUCER_TRIPLE,
      Enemy.TYPE_SAUCER_CHAINGUN,
      Enemy.TYPE_SAUCER_SHOTGUN,
      Enemy.TYPE_SAUCER_AUTOSHOTGUN
    ]
  },
  // level 8
  {
    backgroundColor : C64.css.orange,
    groundColor : C64.brown,
    obeliskColor : C64.black,
    firstEnemy : Enemy.TYPE_SAUCER_TRIPLE,
    enemyCount : 6,
    spawnTable : [
      Enemy.TYPE_MISSILE,
      Enemy.TYPE_SAUCER_TRIPLE,
      Enemy.TYPE_SAUCER_CHAINGUN,
      Enemy.TYPE_SAUCER_SHOTGUN,
      Enemy.TYPE_SAUCER_AUTOSHOTGUN
    ]
  },
];

Level.init = function()
{
  Level.reset();
};

Level.nextLevel = function()
{
  Level.number += 1;
  Level.current = Level.data[Level.number - 1];
};

Level.reset = function()
{
  Level.number = 1;
  Level.current = Level.data[Level.number - 1];
};

Level.set = function(number)
{
  if (number < 1 || number > 8)
  {
    throw('invalid level number: ' + number);
  }
  Level.number = number;
  Level.current = Level.data[Level.number - 1];
};