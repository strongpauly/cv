terraform {
  backend "s3" {
    bucket = "cv-potsides-com-terraform-state"
    key    = "terraform.tfstate"
    region = "eu-west-2"
  }
}
