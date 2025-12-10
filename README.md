# 🌐 Damien J Burks – Personal Website

![GitHub Issues](https://img.shields.io/github/issues/damienjburks/personal-website?logo=github&style=for-the-badge)
![GitHub Forks](https://img.shields.io/github/forks/damienjburks/personal-website?logo=github&style=for-the-badge)
![GitHub Stars](https://img.shields.io/github/stars/damienjburks/personal-website?logo=github&style=for-the-badge)
![GitHub Last Commit](https://img.shields.io/github/last-commit/damienjburks/personal-website?logo=github&style=for-the-badge)
![AWS](https://img.shields.io/badge/AWS-FF9900?style=for-the-badge&logo=amazon-aws&logoColor=white)

![Image](./app/public/images/preview.png)

This repository contains the source code for my personal website! The site serves as my digital presence—highlighting my work as a Cloud Security Engineer, showcasing projects, speaking engagements, and offering a centralized location where you can contact me and setup time for an appointment.

## 🚀 Tech Stack

- **Frontend Framework**: React + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Infrastructure**: AWS (CloudFront, S3, Route 53)
- **Infrastructure as Code**: Terraform
- **Deployment**: Python Invoke tasks
- **Domain**: [damienjburks.com](https://www.damienjburks.com)

## ✨ Features

- **Modern React Architecture**: Built with React 18, TypeScript, and Vite for optimal performance
- **Responsive Design**: Mobile-first design with Tailwind CSS
- **Speaking Engagements**: Dedicated section showcasing conference talks and presentations
- **Dynamic Content**: YouTube video integration and project showcases
- **SEO Optimized**: Structured data, meta tags, and performance optimization
- **AWS Infrastructure**: Scalable, secure hosting with global CDN
- **Dark Mode Support**: Seamless theme switching
- **Contact Integration**: Formspree-powered contact forms

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+
- Python 3.8+
- AWS CLI configured
- Terraform installed

### Local Development

```bash
# Clone the repository
git clone https://github.com/damienjburks/personal-website.git
cd personal-website

# Install frontend dependencies
cd app
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Infrastructure Setup

```bash
# Install Python dependencies
pip install -r requirements.txt

# Initialize Terraform
invoke init

# Plan infrastructure changes
invoke plan

# Deploy infrastructure
invoke apply
```

### Deployment

#### Manual Deployment
```bash
# Full deployment (build + deploy + invalidate)
invoke deploy

# Or step by step
invoke build
invoke sync-s3 <bucket-name>
invoke invalidate <distribution-id>
```

#### Automated Deployment (GitHub Actions)
The repository includes a GitHub Actions workflow that automatically deploys on pushes to `main`. 

**Setup:**
1. Create an IAM role for GitHub Actions with necessary permissions
2. Add repository secrets:
   - `AWS_ROLE_ARN`: Your IAM role ARN for AWS access
   - `TF_API_TOKEN`: Your Terraform Cloud API token
3. Enable GitHub Actions OIDC provider in your AWS account
4. Configure Terraform Cloud workspace with your AWS credentials

**Workflow features:**
- Builds and deploys on push to `main`
- Runs Terraform plan on pull requests
- Uses OIDC for secure AWS authentication
- Caches dependencies for faster builds

## 📦 AWS Infrastructure

This site is hosted on a robust AWS infrastructure:

- **S3**: Static website hosting with versioning and replication
- **CloudFront**: Global CDN with custom SSL certificate
- **Route 53**: DNS management and domain routing
- **Security**: Response headers, CSP, and HTTPS enforcement
- **Monitoring**: CloudWatch logs and metrics

The infrastructure is managed as code using Terraform and deployed via Python Invoke tasks for a streamlined workflow.

## 🏗️ Architecture

```
┌─────────────────┐    ┌──────────────────┐    ┌─────────────────┐
│   Route 53      │───▶│   CloudFront     │───▶│      S3         │
│   DNS           │    │   Global CDN     │    │   Static Site   │
└─────────────────┘    └──────────────────┘    └─────────────────┘
                              │
                              ▼
                       ┌──────────────────┐
                       │  Security Headers │
                       │  SSL Certificate  │
                       └──────────────────┘
```

## 🤝 Contributing

This is a personal project, but feel free to fork and adapt the structure for your own portfolio. The Terraform module used is open source and available at [damienjburks/terraform-aws-secure-static-site](https://github.com/damienjburks/terraform-aws-secure-static-site).

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
