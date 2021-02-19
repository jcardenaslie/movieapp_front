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
  const friends = localStorage.getItem(KEY_FRIENDS)
  return friends ? JSON.parse(friends) : []
}


const removefriend = ({id}) => {

}
