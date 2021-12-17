### Remember what projects were affected
affected=$(npx nx print-affected --base=HEAD~5 --select=projects)
echo $affected

### Build the affected projects
npx nx affected --target=build --base=HEAD~5

### Loop through the affected projects and build containers of them
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