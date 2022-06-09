export const RBAC_RULES = {
  admin: {
    view: ['home', 'dashboard'],
    actions: [
      'book:getAll',
      'book:getId',
      'book:edit',
      'book:post',
      'book:delete',
      'author:getAll',
      'author:getId',
      'author:edit',
      'author:post',
      'author:delete',
      'loan:getAll',
      'loan:getId',
      'loan:post',
      'loan:delete',
      'user:getAll',
      'user:getId',
      'user:edit',
      'user:post',
      'user:delete',
    ],
  },
  user: {
    view: ['home'],
    actions: [
      'book:getAll',
      'book:getId',
      'author:getAll',
      'author:getId',
      'loan:getAll',
      'loan:getId',
      'user:getId',
      'user:edit',
      'user:delete',
    ],
  },
}