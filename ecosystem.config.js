module.exports = {
  apps: [
    {
      name: 'client',
      script: 'nest start client --watch',
      // watch: true,
      // watch_delay: 1000,
      ignore_watch: ['node_modules', 'logs'],
      // out_file: './logs/client/out.log',
      // log_file: './logs//client/combined.log',
    },
    {
      name: 'authentication',
      script: 'nest start authentication --watch',
      // watch: true,
      // watch_delay: 1000,
      ignore_watch: ['node_modules', 'logs'],
      // out_file: './logs/authentication/out.log',
      // log_file: './logs/authentication/combined.log',
    },
  ],
};
