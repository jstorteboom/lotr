affected=$(npx nx print-affected --base=HEAD~5 --select=projects)
echo $affected
IFS=','
for i in $affected; 
do 
    i=`echo $i | xargs`
    dockerFile="./apps/$i/Dockerfile"
    if test -f "$dockerFile"; then
        echo "Build image for $dockerFile"
        docker build apps/$i
    fi
done