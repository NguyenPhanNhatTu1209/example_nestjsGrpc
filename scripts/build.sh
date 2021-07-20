#!/bin/bash
echo "[Run build Client]"
nest build client
echo "======================== AKenZy ========================"
echo "[Run build Post-App]"
nest build post-app
echo "[Run build Post-App]"
nest build user-app