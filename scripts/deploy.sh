cd out
rm -Rf .git
touch .nojekyll
touch CNAME
echo "www.rohwoohyeon.com" >> CNAME
git init
git add -A
git commit -a -m "Deployed at $(date)"
git remote add origin git@github.com:rohjs/rohjs.github.io.git
git push -f origin master