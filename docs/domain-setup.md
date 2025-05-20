# Domain Setup for GraviitalBeats

This document provides information about the domain configuration for the GraviitalBeats landing page.

## Domain Strategy

The project uses the following domain configuration:

- **Primary domain**: `graviitalbeats.com`
- **Secondary domain**: `www.graviitalbeats.com` (redirects to primary domain)

The deployment is configured to serve the landing page on both domains but redirects all `www` traffic to the non-www version for consistency and SEO benefits.

## DNS Configuration

To set up DNS properly, you need to configure:

1. **A Record** for `graviitalbeats.com`:
   - Points to your server's IP address
   - TTL: 3600 (or as preferred)

2. **CNAME Record** for `www.graviitalbeats.com`:
   - Points to `graviitalbeats.com`
   - TTL: 3600 (or as preferred)

Alternatively, you can use an A record for the `www` subdomain that points to the same IP address.

## SSL Certificate

The deployment process automatically secures both domains with a single SSL certificate from Let's Encrypt. This certificate:

- Covers both `graviitalbeats.com` and `www.graviitalbeats.com`
- Is automatically renewed every 90 days by the Let's Encrypt service
- Uses strong encryption and is configured for optimal security

## Nginx Configuration

The deployment process creates an Nginx configuration that:

1. Redirects all HTTP traffic to HTTPS
2. Redirects all `www.graviitalbeats.com` traffic to `graviitalbeats.com`
3. Serves the landing page from `/var/www/graviitalbeats.com/dist`
4. Applies security headers and optimized caching rules

## Testing the Domain Setup

After deployment, you can verify the domain setup works correctly by checking:

1. HTTP to HTTPS redirection:
   ```bash
   curl -I http://graviitalbeats.com
   # Should show a 301 redirect to https://graviitalbeats.com
   ```

2. WWW to non-WWW redirection:
   ```bash
   curl -I https://www.graviitalbeats.com
   # Should show a 301 redirect to https://graviitalbeats.com
   ```

3. HTTPS security:
   Visit [SSL Labs](https://www.ssllabs.com/ssltest/) and enter your domain to test the SSL configuration.

## Troubleshooting

### Domain Not Resolving

- Check that DNS records are correctly set up with your domain registrar
- DNS changes can take up to 48 hours to fully propagate
- Use `dig graviitalbeats.com` or `nslookup graviitalbeats.com` to verify DNS resolution

### SSL Certificate Issues

- Ensure ports 80 and 443 are open on your server
- Check Let's Encrypt logs: `/var/log/letsencrypt/letsencrypt.log`
- Manually request a certificate: `sudo certbot --nginx -d graviitalbeats.com -d www.graviitalbeats.com` 