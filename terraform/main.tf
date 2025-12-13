module "website" {
  source  = "damienjburks/secure-static-site/aws"
  version = "1.1.0"

  bucket_name             = "${var.bucket_name}-${data.aws_caller_identity.current.account_id}"
  enable_domain           = true
  logging_enabled         = true
  enable_failover         = true
  enable_replication      = true
  enable_security_headers = true
  create_route53_zone     = true
  primary_region          = var.primary_region
  failover_region         = var.failover_region

  domain_name = "damienjburks.com"

  tags = {
    Environment = "Production"
    ManagedBy   = "Terraform Cloud"
  }
}

# Blog Endpoint
resource "aws_route53_record" "blog_a" {
  zone_id = module.website.route53_zone_id
  name    = "blog.damienjburks.com"
  type    = "A"
  ttl     = 300
  records = [
    "76.76.21.21"
  ]
}

# Google Workspace MX records (for email)
resource "aws_route53_record" "mx" {
  zone_id = module.website.route53_zone_id
  name    = "damienjburks.com"
  type    = "MX"
  ttl     = 300
  records = [
    "1 aspmx.l.google.com",
    "5 alt1.aspmx.l.google.com",
    "5 alt2.aspmx.l.google.com",
    "10 alt3.aspmx.l.google.com",
    "10 alt4.aspmx.l.google.com",
  ]
}

# Google site verification TXT record
resource "aws_route53_record" "txt_verification" {
  zone_id = module.website.route53_zone_id
  name    = "damienjburks.com"
  type    = "TXT"
  ttl     = 300
  records = [
    "v=spf1 include:_spf.google.com include:_spf-us.ionos.com ~all"
  ]
}
