### Remember what projects were affected
affected=$(npx nx print-affected --base=$1 --select=projects)
echo "Affected are: $affected"
echo "##vso[task.setvariable variable=affected;]$affected"

### Build the affected projects
npx nx affected --target=build --base=$1

### Loop through the affected projects and build containers of them
IFS=','
for i in $affected; 
do 
    i=`echo $i | xargs`
    dockerFile="./apps/$i/Dockerfile"
    if test -f "$dockerFile"; then
        echo "Build image for $dockerFile"
        # docker build -f $dockerFile -t "$i:dev-latest" .
    fi
done