export interface GetFriendList {
  friendslist: {
    friends: [
      {
        steamid: string;
        relationship: string;
        friend_since: number;
      }
    ]
  };
}
