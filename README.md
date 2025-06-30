# Clasico Barbershop Website

A modern, responsive barbershop website built with Next.js, featuring luxury grooming services and a premium user experience.

## 🚀 Features

- **Responsive Design**: Optimized for all devices (mobile, tablet, desktop)
- **Modern UI**: Clean, luxury design with gold accents
- **Fast Performance**: Optimized images and code splitting
- **SEO Optimized**: Meta tags, structured data, and sitemap
- **Mobile-First**: Touch-friendly navigation and interactions
- **Booking Integration**: Direct integration with Cojilio booking system

## 🛠️ Tech Stack

- **Framework**: Next.js 14.1.0
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Railway

## 📦 Services Offered

### Premium Packages
- **Silver Experience**: $45 - Classic precision haircut with hot towel treatment
- **Gold Experience**: $75 - Premium haircut with beard trim and luxury products
- **Platinum Experience**: $120 - Ultimate luxury experience with full grooming

### Additional Services
- Beard Sculpting
- Hot Towel Shave
- Scalp Treatment
- Hair Coloring
- Style Consultation
- Product Application

## 🚀 Railway Deployment

This project is configured for easy deployment on Railway:

### Prerequisites
- Railway account
- GitHub repository access

### Deployment Steps

1. **Connect to Railway**
   - Go to [railway.app](https://railway.app)
   - Sign up/Login with GitHub
   - Click "New Project"

2. **Deploy from GitHub**
   - Select "Deploy from GitHub repo"
   - Choose your repository: `NEW-CLASICO-BARBER-WEBSITE`
   - Railway will automatically detect it's a Next.js project

3. **Automatic Configuration**
   - Railway will use the scripts in `package.json`
   - Build Command: `yarn build`
   - Start Command: `yarn start`
   - Port: Automatically detected (3000)

4. **Environment Variables** (if needed)
   - Add any environment variables in Railway dashboard
   - For now, the app works without additional variables

### Configuration Files

- `railway.json`: Railway-specific configuration
- `.nvmrc`: Node.js version specification
- `package.json`: Dependencies and scripts
- `next.config.js`: Next.js configuration with standalone output
- `Dockerfile`: Production-ready Docker configuration

## 🏃‍♂️ Local Development

```bash
# Install dependencies
yarn install

# Run development server
yarn dev

# Build for production
yarn build

# Start production server
yarn start
```

## 📱 Mobile Optimization

The website is fully optimized for mobile devices:
- Touch-friendly navigation
- Responsive images and layouts
- Fast loading times
- PWA-ready configuration
- Safe area support for notches

## 🎨 Design Features

- **Luxury Aesthetic**: Gold and black color scheme
- **Smooth Animations**: Framer Motion powered transitions
- **Professional Typography**: Playfair Display and Inter fonts
- **High-Quality Images**: Optimized for web performance
- **Interactive Elements**: Hover effects and micro-interactions

## 📞 Contact & Booking

- **Booking**: [Cojilio Booking System](https://booking.cojilio.com/clasicobarbershop)
- **Services**: Premium grooming packages
- **Location**: Mississauga, Ontario

## 📄 License

MIT License - see LICENSE file for details.

---

Built with ❤️ for Clasico Barbershop
