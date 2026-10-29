module "website" {
  source  = "damienjburks/secure-static-site/aws"
  version = "1.2.5"

  bucket_name                 = "${var.bucket_name}-${data.aws_caller_identity.current.account_id}"
  enable_domain               = true
  logging_enabled             = true
  enable_failover             = true
  enable_replication          = true
  enable_security_headers     = true
  create_route53_zone         = true
  enable_waf                  = false
  security_notification_email = "damien@damienjburks.com"
  primary_region              = var.primary_region
  failover_region             = var.failover_region

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

# ---------------------------------------------------------------------------
# Google Workspace
# ---------------------------------------------------------------------------
# Apex TXT records: domain verification + SPF
# (Route 53 allows only one TXT record per name, so both live here.)
resource "aws_route53_record" "google_site_verification" {
  zone_id = module.website.route53_zone_id
  name    = "damienjburks.com"
  type    = "TXT"
  ttl     = 300
  records = [
    "google-site-verification=31DtAV5WPBaJFjDnMY62MNnTxci77PcZFmVwbg-SLKU",
    "v=spf1 include:_spf.google.com ~all",
  ]
}

# Google Workspace MX record (route incoming mail to Google)
resource "aws_route53_record" "google_mx" {
  zone_id = module.website.route53_zone_id
  name    = "damienjburks.com"
  type    = "MX"
  ttl     = 300
  records = [
    "1 smtp.google.com."
  ]
}

# DKIM — Google signing key (1024-bit; fits within the 255-char TXT limit)
resource "aws_route53_record" "google_dkim" {
  zone_id = module.website.route53_zone_id
  name    = "google._domainkey.damienjburks.com"
  type    = "TXT"
  ttl     = 300
  records = [
    "v=DKIM1;k=rsa;p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC2r2iles/Cf/1pTThQ0cb4Z/TJkxZRpFScFkcvEF1SNt/4xGD8OyN8Z864xvemxhVaA4ew8ZVxmiZSiXEBqtV8YcW3zdvv6eUtnK7qVGhKdR1qxoV6dhulR6S3T1TOvx0g4BIKplkQhpXoXRxU6iYYJ81G/m5OL6yZj/yTDRLgpwIDAQAB"
  ]
}
