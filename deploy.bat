@echo off
echo Starting deployment to Vercel...
echo If this is your first time, a browser window will open for you to log in.
echo.
call npx -y vercel --prod
echo.
echo Deployment command finished.
pause
