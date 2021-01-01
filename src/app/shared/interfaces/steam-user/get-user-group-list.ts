export interface GetUserGroupList {
  response: SimpleGetUserGroupList;
}

export interface SimpleGetUserGroupList {
  success: boolean;
  groups: MultipleGroups[];
}

export interface MultipleGroups {
  gid: string;
}
