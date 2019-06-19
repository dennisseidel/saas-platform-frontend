#!/usr/bin/env python3
import os
# import shutil
# import boto3
# import botocore
import argparse

parser = argparse.ArgumentParser()
parser.add_argument(
    "-a", "--action", help="Specify yor action either: deploy or destroy", default="deploy")
parser.add_argument("-ni", "--noninteractive", type=bool,
                    help="Auto approve the command.", default=False)
parser.add_argument("-c", "--component",
                    help="Specify which component to deploy/destroy: infrastructure, website", default="infrastructure")
args = parser.parse_args()

path_to_infrastructure = '../infrastructure'
noninteractive = ''
if args.noninteractive:
    noninteractive = '-auto-approve'

if args.component == "infrastructure":
    if args.action == 'deploy':
        bash_command = f'cd {path_to_infrastructure} && terraform init && terraform apply {noninteractive}'
        os.system(bash_command)
        bash_command = f'cd {path_to_infrastructure} && terraform output --json > config.json'
        os.system(bash_command)
    if args.action == 'destroy':
        bash_command = f'cd {path_to_infrastructure} && terraform destroy {noninteractive}'
        os.system(bash_command)
if args.component == "website":
    if args.action == "deploy":
        path_to_website = '../'
        #bash_command = f'cp {path_to_infrastructure}/config.json  {path_to_website}/config.json'
        #bash_command = f'cd {path_to_website} && npm install && npm run build'
        # os.system(bash_command)
        bash_command = f'cd {path_to_website} && aws s3 sync build/ s3://saas-platform-frontend --acl public-read'
        os.system(bash_command)
