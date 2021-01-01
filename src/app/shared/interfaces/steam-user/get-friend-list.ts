export interface GetFriendList {
  friendslist: SimpleGetFriendList;
}

export interface SimpleGetFriendList {
  friends: MultipleFriends[];
}

export interface MultipleFriends {
  steamid: string;
  relationship: string;
  friend_since: number;
}
