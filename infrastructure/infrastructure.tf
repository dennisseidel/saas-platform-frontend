provider "aws" {
  access_key = "${var.AWS_ACCESS_KEY}"
  secret_key = "${var.AWS_SECRET_KEY}"
  region     = "${var.AWS_REGION}"
}

resource "aws_s3_bucket" "saas-platform-frontend-deployment-artefacts" {
  bucket = "saas-platform-frontend-deployment-artefacts"
  acl    = "private"
  versioning {
    enabled = true
  }
}

resource "aws_s3_bucket" "saas-platform-frontend" {
  bucket = "saas-platform-frontend"
  acl    = "public-read"
  website {
    error_document = "index.html"
    index_document = "index.html"
  }

  policy = <<EOF
{
    "Version": "2012-10-17",
    "Statement": [{
      "Effect": "Allow",
      "Principal": "*",
      "Action": [
          "s3:GetObject"
      ],
      "Resource": [
          "arn:aws:s3:::saas-platform-frontend/*"
      ]
      }]
}
EOF
}

// identity provider
resource "aws_cognito_user_pool" "saas-template-users" {
  name = "saas-template-users"
  auto_verified_attributes = ["email"]
}

resource "aws_cognito_user_pool_client" "client" {
  name = "client"

  user_pool_id = "${aws_cognito_user_pool.saas-template-users.id}"
}

output "base_url" {
  value = "${aws_s3_bucket.saas-platform-frontend.website_endpoint}"
}

output "user_pool_web_client_id" {
  value = "${aws_cognito_user_pool_client.client.id}"
}

output "user_pool_id" {
  value = "${aws_cognito_user_pool.saas-template-users.id}"
}

output "region" {
  value = "${var.AWS_REGION}"
}
