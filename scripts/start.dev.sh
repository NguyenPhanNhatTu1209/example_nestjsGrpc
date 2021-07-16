echo "[Run my app]"
pm2 delete all
pm2 start ecosystem.config.js