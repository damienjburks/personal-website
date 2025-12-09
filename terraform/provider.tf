terraform {
  cloud {
    organization = "damienjburks"

    workspaces {
      name = "personal-website"
    }
  }

  required_providers {
    aws = {
      source = "hashicorp/aws"
    }
    random = {
      source = "hashicorp/random"
    }
  }
}

provider "aws" {
  region = var.aws_region
}
