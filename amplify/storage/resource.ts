import { defineStorage } from '@aws-amplify/backend';

export const storage = defineStorage({
  name: 'myStorageBucket',
  isDefault: true,
   access: (allow) => ({
    'bpoai_prod1/*': [
        allow.guest.to(['read', 'write']),
        allow.authenticated.to(['read', 'write', 'delete']),
    ],
    'bpoai_prod2/*': [
        allow.guest.to(['read', 'write']),
        allow.authenticated.to(['read', 'write', 'delete']),
    ],
    'bpoai_test1/*': [
        allow.guest.to(['read', 'write']),
        allow.authenticated.to(['read', 'write', 'delete']),
    ],
    'bpoai_test2/*': [
        allow.guest.to(['read', 'write']),
        allow.authenticated.to(['read', 'write', 'delete']),
    ]
    // 'admin/*': [
    //     allow.groups(['admin']).to(['read', 'write', 'delete']),
    //     allow.authenticated.to(['read'])
    // ],
    // 'private/{entity_id}/*': [
    //     allow.entity('identity').to(['read', 'write', 'delete'])
    // ]
   })
});

export const secondaryStorage = defineStorage({
  name: 'mySecondaryStorageBucket',
   access: (allow) => ({
    'backup_public/*': [
        allow.guest.to(['read', 'write']),
        allow.authenticated.to(['read', 'write', 'delete']),
    ],
    'backup_admin/*': [
        allow.groups(['admin']).to(['read', 'write', 'delete']),
        allow.authenticated.to(['read'])
    ],
    'backup_private/{entity_id}/*': [
        allow.entity('identity').to(['read', 'write', 'delete'])
    ]
   })
});



