echo "[Run my app]"
pm2 delete all
pm2-dev start ecosystem.config.js