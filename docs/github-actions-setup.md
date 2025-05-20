# GitHub Actions Deployment Setup Guide

This document explains how to set up the required GitHub Actions secrets for automated deployment of the GraviitalBeats landing page.

## Required Secrets

The following secrets need to be added to your GitHub repository:

| Secret Name | Description |
|-------------|-------------|
| `SERVER_HOST` | The hostname or IP address of your production server |
| `SERVER_USERNAME` | SSH username for accessing the server |
| `SERVER_PASSWORD` | SSH password for accessing the server (consider using SSH keys instead) |
| `ADMIN_EMAIL` | Email address for Let's Encrypt certificate notifications |

## Setting Up Secrets

1. Navigate to your GitHub repository
2. Click on **Settings**
3. In the left sidebar, click on **Secrets and variables** → **Actions**
4. Click on **New repository secret**
5. Add each of the required secrets one by one

## Alternative: Using SSH Keys Instead of Password

For better security, you can use SSH keys instead of a password:

1. Generate an SSH key pair if you don't already have one:
   ```bash
   ssh-keygen -t ed25519 -C "github-actions-deploy"
   ```

2. Add the public key to your server's `~/.ssh/authorized_keys` file:
   ```bash
   cat ~/.ssh/id_ed25519.pub >> ~/.ssh/authorized_keys
   ```

3. Add the private key as a GitHub secret named `SSH_PRIVATE_KEY`

4. Update the GitHub Actions workflow file (`.github/workflows/deploy-landing.yml`) to use the SSH key:

   Replace the deploy and configure steps with:

   ```yaml
   - name: Deploy to server
     uses: appleboy/scp-action@master
     with:
       host: ${{ secrets.SERVER_HOST }}
       username: ${{ secrets.SERVER_USERNAME }}
       key: ${{ secrets.SSH_PRIVATE_KEY }}
       source: "dist/,package.json,.env"
       target: "/var/www/graviitalbeats.com"
       strip_components: 0
       overwrite: true
   
   - name: Configure and serve application
     uses: appleboy/ssh-action@master
     with:
       host: ${{ secrets.SERVER_HOST }}
       username: ${{ secrets.SERVER_USERNAME }}
       key: ${{ secrets.SSH_PRIVATE_KEY }}
       script: |
         # Rest of the script remains the same
   ```

## Server Preparation

Before the first deployment, ensure your server has:

1. Nginx installed:
   ```bash
   sudo apt update
   sudo apt install nginx
   ```

2. Node.js installed (if using server-side functionality):
   ```bash
   curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
   sudo apt-get install -y nodejs
   ```

3. Created the target directory:
   ```bash
   sudo mkdir -p /var/www/graviitalbeats.com
   sudo chown -R $USER:$USER /var/www/graviitalbeats.com
   ```

4. Domain DNS configuration:
   - Ensure both `graviitalbeats.com` and `www.graviitalbeats.com` DNS records are pointing to your server's IP address.
   - Typical DNS configuration would include:
     - An A record for `graviitalbeats.com` pointing to your server IP
     - Either a CNAME record for `www` pointing to `graviitalbeats.com` or another A record pointing to the same IP

## Troubleshooting

### Deployment Failed with SSH Error

- Verify the server host, username, and password/SSH key are correct
- Check that the server is accessible via SSH from an external location
- Ensure the user has sufficient permissions on the target directory

### Nginx Configuration Failed

- Check if Nginx is installed on your server
- Verify that your domain DNS is pointing to your server
- Check if port 80 and 443 are open in your server firewall

### SSL Certificate Failed

- Ensure your domain is correctly pointing to your server
- Check if Certbot is installed correctly
- Verify that port 80 is accessible (required for Let's Encrypt verification)

## Additional Security Considerations

1. **Use environment-specific variables**: Configure different variables for staging and production
2. **Limit deployment access**: Restrict who can push to the main branch or manually trigger workflows
3. **Regular secret rotation**: Update your passwords and keys regularly
4. **Monitor deployment logs**: Check GitHub Actions logs for any suspicious activities 