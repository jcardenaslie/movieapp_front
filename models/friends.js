myStorage = window.localStorage;

const KEY_FRIENDS = "friends"

const addFriend = (newFriend) => {
  let friends = getFriends()
  if(!friends.includes(newFriend)){
    friends.push(newFriend)
    localStorage.setItem(KEY_FRIENDS, JSON.stringify(friends));
  }
  displayFriends()
}

const getFriends = () => {
  const friensdIds = localStorage.getItem(KEY_FRIENDS)

  if (!friensdIds.length)
    return []

  const friends = users.filter( u => friensdIds.includes(String(u.id)) )

  

  return friends
}


const removefriend = ({id}) => {

}
