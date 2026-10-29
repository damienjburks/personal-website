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

# ProtonMail apex TXT records: domain verification + SPF
resource "aws_route53_record" "txt_verification" {
  zone_id = module.website.route53_zone_id
  name    = "damienjburks.com"
  type    = "TXT"
  ttl     = 300
  records = [
    "protonmail-verification=${var.TFC_PROTONMAIL_CODE}",
    "v=spf1 include:_spf.protonmail.ch ~all",
  ]
}

# ProtonMail MX records (route incoming mail to Proton)
resource "aws_route53_record" "proton_mx" {
  zone_id = module.website.route53_zone_id
  name    = "damienjburks.com"
  type    = "MX"
  ttl     = 300
  records = [
    "10 mail.protonmail.ch.",
    "20 mailsec.protonmail.ch.",
  ]
}

# ProtonMail DKIM records (CNAMEs; Proton rotates keys via these)
resource "aws_route53_record" "proton_dkim" {
  for_each = {
    "protonmail._domainkey"  = "protonmail.domainkey.dnno2e4dpevq46vhndyghnox5rdipy6cxbpi6vvvu6hceyscoywma.domains.proton.ch."
    "protonmail2._domainkey" = "protonmail2.domainkey.dnno2e4dpevq46vhndyghnox5rdipy6cxbpi6vvvu6hceyscoywma.domains.proton.ch."
    "protonmail3._domainkey" = "protonmail3.domainkey.dnno2e4dpevq46vhndyghnox5rdipy6cxbpi6vvvu6hceyscoywma.domains.proton.ch."
  }

  zone_id = module.website.route53_zone_id
  name    = "${each.key}.damienjburks.com"
  type    = "CNAME"
  ttl     = 300
  records = [each.value]
}

# ProtonMail DMARC record
resource "aws_route53_record" "proton_dmarc" {
  zone_id = module.website.route53_zone_id
  name    = "_dmarc.damienjburks.com"
  type    = "TXT"
  ttl     = 300
  records = [
    "v=DMARC1; p=quarantine"
  ]
}
