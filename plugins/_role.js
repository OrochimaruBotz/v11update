/*let handler = m => m

handler.before = function (m) {
  let user = global.db.data.users[m.sender]
        let role = (user.level <= 20) ? 'Beginner'
          : ((user.level >= 20) && (user.level <= 40)) ? 'Commander Elite'
          : ((user.level >= 40) && (user.level <= 60)) ? 'The Commander Hero'
          : ((user.level >= 60) && (user.level <= 80)) ? 'The Commander Elite Hero'
          : ((user.level >= 80) && (user.level <= 100)) ? 'The Commander Elite Super Strong Hero'
          : ((user.level >= 100) && (user.level <= 120)) ? 'The Commander Elite Super Strong Shadow Hero'
          : ((user.level >= 120) && (user.level <= 140)) ? 'The Commander Legends Shadow Hero'
          : ((user.level >= 140) && (user.level <= 160)) ? 'The Commander Super Legends Shadow Hero'
          : 'Legends'
  user.role = role
  return true
}

module.exports = handler*/

const roles = {
  /*
  'Role Name': <Minimal Level To Obtain this Role>
  */
  'Beginner': 0, 
  'Early Soldier': 20,
  'Commander': 50,
  'Initial Commander': 80,
  'Commander Elite': 130,
  'Initial Commander Elit': 180,
  'Commander Elite Hero': 245,
  'The Commander Elite Super Strong Hero': 350,
  'The Commander Elite Super Strong Shadow Hero': 460,
  'The Commander Legends Shadow Hero': 685,
  'The Commander Super Legends Shadow Hero': 780,
  'The Commander Super Legends Shadow Hero': 1000,
  'The Strongest Legend': 5000,
  'The Hero Of The Legend\'s Strongest': 10000
}

module.exports = {
  before (m) {
    let user = global.db.data.users[m.sender]
    let level = user.level
    let role = (Object.entries(roles).sort((a, b) => b[1] - a[1]).find(([,minLevel]) => level >= minLevel) || Object.entries(roles)[0])[0]
    user.role = role
    return true
  }
}
