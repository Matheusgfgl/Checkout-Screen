#/bin/bash

# Fill with project name
# -- Generally is the repository name
projectName=NOME_PROJETO
# Fill with ECR URI
# -- Ask for someone with AWS access to create it
ecrUri=ECR_URI

# Accepted two params: production or staging
if [ $1 = production ]
then
  projectTag=$(git describe)
else
  projectTag=staging
fi

# AWS Profile.
# -- If it's empty then use the aws default profile
# -- You need to configure it in your machine
if [ -z $2 ]
then
  awsProfile=""
else
  awsProfile="--profile $2"
fi

aws ecr get-login-password --region=us-east-1 $awsProfile | docker login --username AWS --password-stdin $ecrUri
docker image build --build-arg ENVIRONMENT_BUILD=$1 -f docker/Dockerfile -t $projectName:$projectTag .
docker image tag $projectName:$projectTag $ecrUri:$projectTag
docker image push $ecrUri:$projectTag

# Image URL
echo "The image URL is: $ecrUri:$projectTag"

