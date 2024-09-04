terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.9.0"
    }
  }
}
provider "aws" {
  profile = "your_cli_profile"
  access_key = "your_access_key"
  secret_key = "your_secret_key"
  region = "us-east-1"

}
