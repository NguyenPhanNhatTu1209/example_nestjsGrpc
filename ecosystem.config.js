/* eslint-disable prettier/prettier */
module.exports = {
  apps: [
    {
      name: 'client',
      script: 'dist/apps/client/main.js',
      ignore_watch: ['node_modules', 'logs'],
    },
    {
      name: 'post-app',
      script: 'dist/apps/post-app/main.js',
      ignore_watch: ['node_modules', 'logs'],
    },
    {
      name: 'user-app',
      script: 'dist/apps/user-app/main.js',
      ignore_watch: ['node_modules', 'logs'],
    },
  ],
};
