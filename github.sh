git add .
echo "write commit_message"
read cm
echo "$cm"
git commit -m "$cm"
git push origin master