module.exports = {
    apps: [
      {
        name: 'sms-service-redis-subcriber',
        script: 'server.js',
        instances: 1,
        autorestart: true,
        watch: true,
        max_memory_restart: '1G',
      },
    ],
  };
  