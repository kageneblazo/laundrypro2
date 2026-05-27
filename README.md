# 🧺 LaundryPro — Laundry Shop Management System

A production-grade, fully responsive laundry shop management system with POS, order queue, delivery tracking, inventory, financial reports, staff attendance, payroll, and customer management.

## 🔗 Live Preview
**[https://kageneblazo.github.io/laundrypro2/](https://kageneblazo.github.io/laundrypro2/)**

## ✅ Features
- **POS Terminal** — Service catalog, cart, cash/GCash/card payment, receipt printing
- **Order Queue** — Kanban board + list view, one-click status advancement
- **Pickup & Delivery** — Active delivery tracking per driver
- **Inventory** — Stock levels, low stock alerts, reorder tracking
- **Customers (CRM)** — Customer database with loyalty points
- **Staff & Attendance** — Daily attendance with present/late/absent status
- **Payroll** — Auto-compute with SSS, PhilHealth, Pag-IBIG deductions
- **Financial Reports** — Revenue vs expenses chart, service breakdown pie chart, top customers
- **Settings** — Shop info, payment methods, notification toggles

## 🖥️ Pages
| Page | Description |
|------|-------------|
| Dashboard | Overview KPIs, recent orders, queue status, low stock alerts |
| POS | Point-of-sale terminal with service catalog and checkout |
| Orders | Kanban + list order queue with status advancement |
| Delivery | Active pickup and delivery monitoring |
| Inventory | Stock management with low stock detection |
| Customers | CRM with loyalty points tracking |
| Staff | Daily attendance monitoring |
| Payroll | Semi-monthly payroll with government deductions |
| Reports | Financial analytics with Chart.js visualizations |
| Settings | Shop configuration and toggle switches |

## 🚀 Tech Stack
- Pure HTML5, CSS3, Vanilla JavaScript (no framework required)
- Chart.js for financial visualizations
- Google Fonts (Inter)
- Fully responsive — works on PC, tablet, and mobile
- GitHub Pages for static hosting

## 🛠️ Local Development
```bash
git clone https://github.com/kageneblazo/laundrypro2.git
cd laundrypro2
# Open index.html in your browser — no build step needed!
open index.html
```

## 📦 Production Upgrade Path
When ready to add backend, database, and real authentication:
- **Frontend**: Migrate to Next.js 14 + shadcn/ui + Tailwind CSS
- **Backend**: NestJS + PostgreSQL + Prisma ORM
- **Deployment**: Vercel (frontend) + Railway (backend + database)
- **SMS**: Semaphore PH API for customer notifications

## 📱 Mobile Support
Fully responsive mobile-first design. Access remotely from any device via the GitHub Pages URL.

---
Built with ❤️ for Filipino laundry shop owners.
