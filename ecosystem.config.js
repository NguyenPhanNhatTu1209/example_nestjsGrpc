module.exports = {
  apps: [
    {
      name: 'client',
      script: 'dist/apps/client/main.js',
      // watch: true,
      // watch_delay: 1000,
      ignore_watch: ['node_modules', 'logs'],
      // out_file: './logs/client/out.log',
      // log_file: './logs//client/combined.log',
    },
    {
      name: 'authentication',
      script: 'dist/apps/authentication/main.js',
      // watch: true,
      // watch_delay: 1000,
      ignore_watch: ['node_modules', 'logs'],
      // out_file: './logs/authentication/out.log',
      // log_file: './logs/authentication/combined.log',
    },
    {
      name: 'post',
      script: 'dist/apps/post/main.js',
      // watch: true,
      // watch_delay: 1000,
      ignore_watch: ['node_modules', 'logs'],
      // out_file: './logs/authentication/out.log',
      // log_file: './logs/authentication/combined.log',
    },
  ],
};
