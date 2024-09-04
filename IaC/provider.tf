terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "≥4.9.0"
    }
  }
}
provider "aws" {
  profile = "SaintGeele"
  # access_key = "your_access_key"
  # secret_key = "your_secret_key"
  region = "us-east-1"

}
