#!/usr/bin/env python3
import os
# import shutil
import boto3
import argparse
import json


def user_missing(user_pool_id, username):
    try:
        client.admin_get_user(
            UserPoolId=user_pool_id,
            Username=username
        )
        return True
    except:
        return False


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
        # parse config
        with open(f"{path_to_infrastructure}/config.json", "r") as read_file:
            config = json.load(read_file)
            REGION = config['region']['value']
            CLIENT_ID = config['user_pool_web_client_id']['value']
            USER_POOL_ID = config['user_pool_id']['value']
            TEST_USER = os.environ["TEST_USER"]
            TEST_USER_PW = os.environ["TEST_USER_PW"]
            client = boto3.client('cognito-idp', region_name=REGION)
            if user_missing(USER_POOL_ID, TEST_USER):
                # sign up user
                print('TEST')
                response = client.sign_up(
                    ClientId=CLIENT_ID,
                    Username=TEST_USER,
                    Password=TEST_USER_PW
                )
                # verify user
                response = client.admin_confirm_sign_up(
                    UserPoolId=USER_POOL_ID,
                    Username=TEST_USER
                )
    if args.action == 'destroy':
        bash_command = f'cd {path_to_infrastructure} && terraform destroy {noninteractive}'
        os.system(bash_command)

if args.component == "website":
    if args.action == "deploy":
        path_to_website = '../'
        bash_command = f'cd {path_to_website} && aws s3 sync build/ s3://saas-platform-frontend --acl public-read'
        os.system(bash_command)
