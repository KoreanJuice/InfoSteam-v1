export interface GetUserGroupList {
  response: {
    success: boolean;
    groups: [
      {
        gid: string;
      }
    ]
  };
}
