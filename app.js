// ─── DATA ─────────────────────────────────────────────────
const SERVICES = [
  { id:'1', name:'Wash & Fold',       pricePerKg:50,  flatPrice:null, category:'Wash',     emoji:'🧺' },
  { id:'2', name:'Wash & Iron',       pricePerKg:65,  flatPrice:null, category:'Wash',     emoji:'👔' },
  { id:'3', name:'Dry Clean',         pricePerKg:120, flatPrice:null, category:'Premium',  emoji:'✨' },
  { id:'4', name:'Express Wash',      pricePerKg:80,  flatPrice:null, category:'Express',  emoji:'⚡' },
  { id:'5', name:'Iron Only',         pricePerKg:30,  flatPrice:null, category:'Iron',     emoji:'🔥' },
  { id:'6', name:'Delivery Fee',      pricePerKg:null,flatPrice:80,   category:'Delivery', emoji:'🚚' },
  { id:'7', name:'Blanket/Comforter', pricePerKg:90,  flatPrice:null, category:'Special',  emoji:'🛏️' },
  { id:'8', name:'Sneakers Wash',     pricePerKg:null,flatPrice:150,  category:'Special',  emoji:'👟' },
];

const ORDERS = [
  { id:'ORD-0234', customer:'Maria Santos',   phone:'09171234567', service:'Wash & Fold 3.5kg',  status:'IN_PROGRESS',      amount:175, type:'WALK_IN',  time:'8:42 AM' },
  { id:'ORD-0233', customer:'Juan dela Cruz', phone:'09281234567', service:'Dry Cleaning 2pcs',  status:'READY_FOR_PICKUP', amount:350, type:'WALK_IN',  time:'8:10 AM' },
  { id:'ORD-0232', customer:'Ana Reyes',      phone:'09191234567', service:'Express Wash 5kg',   status:'COMPLETED',        amount:300, type:'WALK_IN',  time:'7:30 AM' },
  { id:'ORD-0231', customer:'Pedro Garcia',   phone:'09951234567', service:'Wash & Iron 4kg',    status:'IN_QUEUE',         amount:240, type:'WALK_IN',  time:'7:00 AM' },
  { id:'ORD-0230', customer:'Liza Cruz',      phone:'09551234567', service:'Delivery Pack 6kg',  status:'OUT_FOR_DELIVERY', amount:420, type:'DELIVERY', time:'6:50 AM' },
  { id:'ORD-0229', customer:'Carlo Mendoza',  phone:'09671234567', service:'Blanket Wash 2pcs',  status:'PENDING',          amount:190, type:'PICKUP',   time:'6:00 AM' },
];

const STAFF = [
  { id:'1', name:'Rosa Dela Cruz',  role:'Cashier', status:'PRESENT', timeIn:'7:58 AM', shift:'8AM-5PM',  dailyRate:450 },
  { id:'2', name:'Ben Magtanggol',  role:'Washer',  status:'LATE',    timeIn:'8:25 AM', shift:'8AM-5PM',  dailyRate:420 },
  { id:'3', name:'Clara Perez',     role:'Ironer',  status:'PRESENT', timeIn:'8:02 AM', shift:'8AM-5PM',  dailyRate:430 },
  { id:'4', name:'Danny Ramos',     role:'Driver',  status:'PRESENT', timeIn:'7:45 AM', shift:'7AM-4PM',  dailyRate:500 },
  { id:'5', name:'Eva Santos',      role:'Cashier', status:'ABSENT',  timeIn:null,      shift:'2PM-10PM', dailyRate:450 },
];

const INVENTORY = [
  { name:'Detergent (5kg sack)',   category:'Supplies',    qty:2,  unit:'pcs', reorder:5,  cost:350 },
  { name:'Fabric Softener 1L',    category:'Supplies',    qty:3,  unit:'btl', reorder:10, cost:120 },
  { name:'Plastic Bags (pack)',   category:'Packaging',   qty:1,  unit:'pck', reorder:5,  cost:85  },
  { name:'Bleach 1L',             category:'Supplies',    qty:8,  unit:'btl', reorder:5,  cost:55  },
  { name:'Dryer Sheets (100pcs)', category:'Supplies',    qty:12, unit:'pck', reorder:5,  cost:95  },
  { name:'Receipt Paper (rolls)', category:'Operations',  qty:6,  unit:'pcs', reorder:5,  cost:45  },
  { name:'Stain Remover Spray',   category:'Supplies',    qty:4,  unit:'btl', reorder:3,  cost:180 },
  { name:'Laundry Bags',          category:'Packaging',   qty:25, unit:'pcs', reorder:20, cost:15  },
];

const CUSTOMERS = [
  { name:'Maria Santos',   phone:'09171234567', email:'maria@email.com', orders:24, spent:4800, pts:96,  last:'May 27' },
  { name:'Juan Cruz',      phone:'09281234567', email:'',               orders:18, spent:3600, pts:72,  last:'May 26' },
  { name:'Ana Reyes',      phone:'09191234567', email:'ana@email.com',  orders:15, spent:2925, pts:58,  last:'May 25' },
  { name:'Pedro Garcia',   phone:'09951234567', email:'',               orders:12, spent:2400, pts:48,  last:'May 24' },
  { name:'Liza Cruz',      phone:'09551234567', email:'liza@email.com', orders:10, spent:2100, pts:42,  last:'May 27' },
  { name:'Carlo Mendoza',  phone:'09671234567', email:'',               orders:8,  spent:1600, pts:32,  last:'May 23' },
];

const PAYROLL = [
  { name:'Rosa Dela Cruz', role:'Cashier', days:26, rate:450 },
  { name:'Ben Magtanggol', role:'Washer',  days:24, rate:420 },
  { name:'Clara Perez',    role:'Ironer',  days:25, rate:430 },
  { name:'Danny Ramos',    role:'Driver',  days:26, rate:500 },
  { name:'Eva Santos',     role:'Cashier', days:22, rate:450 },
];

const STATUS_LABEL = {
  PENDING:'Pending', IN_QUEUE:'In Queue', IN_PROGRESS:'In Progress',
  READY_FOR_PICKUP:'Ready', OUT_FOR_DELIVERY:'Out for Delivery',
  COMPLETED:'Completed', CANCELLED:'Cancelled'
};

const STATUS_CLASS = {
  PENDING:'badge-amber', IN_QUEUE:'', IN_PROGRESS:'badge-blue',
  READY_FOR_PICKUP:'badge-green', OUT_FOR_DELIVERY:'badge-violet',
  COMPLETED:'', CANCELLED:'badge-red'
};

const NEXT_STATUS = {
  PENDING:'IN_QUEUE', IN_QUEUE:'IN_PROGRESS', IN_PROGRESS:'READY_FOR_PICKUP',
  READY_FOR_PICKUP:'COMPLETED', OUT_FOR_DELIVERY:'COMPLETED'
};

const KANBAN_COLS = [
  { key:'PENDING',          label:'Pending',    color:'#f59e0b' },
  { key:'IN_QUEUE',         label:'In Queue',   color:'#94a3b8' },
  { key:'IN_PROGRESS',      label:'Processing', color:'#3b82f6' },
  { key:'READY_FOR_PICKUP', label:'Ready',      color:'#10b981' },
];

// ─── STATE ────────────────────────────────────────────────
let cart = [];
let activeCategory = 'All';
let activePayment = 'CASH';
let orders = [...ORDERS];
let currentView = 'kanban';
let chartsInitialized = false;

// ─── INIT ─────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  setDates();
  renderRecentOrders();
  renderPOS();
  renderOrders();
  renderInventory();
  renderCustomers();
  renderStaff();
  renderPayroll();
});

function setDates() {
  const now = new Date();
  const opts = { weekday:'long', year:'numeric', month:'long', day:'numeric' };
  const str = now.toLocaleDateString('en-PH', opts);
  const el1 = document.getElementById('dashDate');
  const el2 = document.getElementById('topbarDate');
  if (el1) el1.textContent = str;
  if (el2) el2.textContent = now.toLocaleTimeString('en-PH', { hour:'2-digit', minute:'2-digit' });
  setInterval(() => {
    const t = document.getElementById('topbarDate');
    if (t) t.textContent = new Date().toLocaleTimeString('en-PH', { hour:'2-digit', minute:'2-digit' });
  }, 60000);
}

// ─── NAVIGATION ───────────────────────────────────────────
function showPage(name, el) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  const page = document.getElementById('page-' + name);
  if (page) page.classList.add('active');
  if (el) el.classList.add('active');
  if (name === 'reports' && !chartsInitialized) { initCharts(); chartsInitialized = true; }
  window.scrollTo(0, 0);
}

function toggleSidebar() {
  document.getElementById('sidebar').classList.toggle('open');
}

// ─── RECENT ORDERS ────────────────────────────────────────
function renderRecentOrders() {
  const el = document.getElementById('recentOrdersList');
  if (!el) return;
  el.innerHTML = ORDERS.slice(0, 5).map(o => `
    <div class="order-row">
      <div>
        <div class="order-id">${o.id}</div>
        <span class="badge ${STATUS_CLASS[o.status]}" style="margin-top:3px">${STATUS_LABEL[o.status]}</span>
      </div>
      <div class="order-info">
        <div class="order-name">${o.customer}</div>
        <div class="order-service">${o.service}</div>
      </div>
      <div class="order-right">
        <div class="order-amount">₱${o.amount}</div>
        <div class="order-time">${o.time}</div>
      </div>
    </div>
  `).join('');
}

// ─── POS ──────────────────────────────────────────────────
function renderPOS() {
  renderCategories();
  renderServices();
  renderPaymentMethods();
}

function renderCategories() {
  const cats = ['All', ...new Set(SERVICES.map(s => s.category))];
  const el = document.getElementById('categoryTabs');
  if (!el) return;
  el.innerHTML = cats.map(c => `
    <button class="cat-btn ${c === activeCategory ? 'active' : ''}" onclick="selectCategory('${c}')">${c}</button>
  `).join('');
}

function selectCategory(cat) {
  activeCategory = cat;
  renderCategories();
  renderServices();
}

function renderServices() {
  const el = document.getElementById('servicesGrid');
  if (!el) return;
  const filtered = activeCategory === 'All' ? SERVICES : SERVICES.filter(s => s.category === activeCategory);
  el.innerHTML = filtered.map(s => `
    <div class="service-card" onclick="addToCart('${s.id}')">
      <div class="service-emoji">${s.emoji}</div>
      <div class="service-name">${s.name}</div>
      <div class="service-price">${s.pricePerKg ? '₱' + s.pricePerKg + '/kg' : '₱' + s.flatPrice + ' flat'}</div>
      ${s.pricePerKg ? `<input class="service-kg" id="kg-${s.id}" placeholder="kg" value="1" onclick="event.stopPropagation()" />` : ''}
    </div>
  `).join('');
}

function addToCart(id) {
  const svc = SERVICES.find(s => s.id === id);
  if (!svc) return;
  const kg = parseFloat(document.getElementById('kg-' + id)?.value || '1') || 1;
  const price = svc.pricePerKg ? svc.pricePerKg * kg : svc.flatPrice;
  const existing = cart.find(i => i.id === id);
  if (existing) {
    existing.qty += 1;
    existing.price += price;
  } else {
    cart.push({ id, name: svc.name, price, qty: 1, kg: svc.pricePerKg ? kg : null });
  }
  renderCart();
}

function removeFromCart(id) {
  cart = cart.filter(i => i.id !== id);
  renderCart();
}

function renderCart() {
  const el = document.getElementById('cartItems');
  const countEl = document.getElementById('cartCount');
  if (!el) return;
  if (cart.length === 0) {
    el.innerHTML = '<div class="empty-cart">🛒<br/>Tap a service to add</div>';
  } else {
    el.innerHTML = cart.map(item => `
      <div class="cart-item">
        <div class="cart-item-info">
          <div class="cart-item-name">${item.name}</div>
          ${item.kg ? `<div class="cart-item-sub">${item.kg}kg</div>` : ''}
        </div>
        <span class="cart-item-price">₱${item.price.toFixed(2)}</span>
        <button class="cart-remove" onclick="removeFromCart('${item.id}')">✕</button>
      </div>
    `).join('');
  }
  if (countEl) countEl.textContent = cart.length + ' item' + (cart.length !== 1 ? 's' : '');
  updateTotals();
}

function updateTotals() {
  const subtotal = cart.reduce((s, i) => s + i.price, 0);
  const discount = parseFloat(document.getElementById('posDiscount')?.value || '0') || 0;
  const total = Math.max(0, subtotal - discount);
  const subEl = document.getElementById('posSubtotal');
  const totEl = document.getElementById('posTotal');
  if (subEl) subEl.textContent = '₱' + subtotal.toFixed(2);
  if (totEl) totEl.textContent = '₱' + total.toFixed(2);
  updateChange();
}

function updateChange() {
  const discount = parseFloat(document.getElementById('posDiscount')?.value || '0') || 0;
  const subtotal = cart.reduce((s, i) => s + i.price, 0);
  const total = Math.max(0, subtotal - discount);
  const cash = parseFloat(document.getElementById('cashReceived')?.value || '0') || 0;
  const changeEl = document.getElementById('changeDisplay');
  if (changeEl && cash > 0) {
    const change = cash - total;
    changeEl.textContent = change >= 0 ? 'Change: ₱' + change.toFixed(2) : 'Insufficient amount';
    changeEl.style.color = change >= 0 ? '#059669' : '#ef4444';
  } else if (changeEl) { changeEl.textContent = ''; }
}

function renderPaymentMethods() {
  const el = document.getElementById('paymentMethods');
  if (!el) return;
  const methods = [{ key:'CASH', icon:'💵', label:'Cash' }, { key:'GCASH', icon:'📱', label:'GCash' }, { key:'CARD', icon:'💳', label:'Card' }];
  el.innerHTML = methods.map(m => `
    <button class="pay-btn ${m.key === activePayment ? 'active' : ''}" onclick="selectPayment('${m.key}')">
      <span class="pay-icon">${m.icon}</span>${m.label}
    </button>
  `).join('');
  const cashSection = document.getElementById('cashSection');
  if (cashSection) cashSection.style.display = activePayment === 'CASH' ? 'block' : 'none';
}

function selectPayment(method) {
  activePayment = method;
  renderPaymentMethods();
}

function checkout() {
  if (cart.length === 0) { alert('Please add items to cart first.'); return; }
  const name = document.getElementById('posCustomerName')?.value || 'Walk-in Customer';
  const discount = parseFloat(document.getElementById('posDiscount')?.value || '0') || 0;
  const subtotal = cart.reduce((s, i) => s + i.price, 0);
  const total = Math.max(0, subtotal - discount);
  const orderNum = 'ORD-0' + (235 + orders.length);
  orders.unshift({ id: orderNum, customer: name, phone: '', service: cart[0].name + (cart.length > 1 ? ' +' + (cart.length-1) : ''), status: 'PENDING', amount: total, type: 'WALK_IN', time: new Date().toLocaleTimeString('en-PH', {hour:'2-digit',minute:'2-digit'}) });
  alert(`✅ Order ${orderNum} placed!\nCustomer: ${name}\nTotal: ₱${total.toFixed(2)}`);
  cart = [];
  document.getElementById('posCustomerName').value = '';
  document.getElementById('posCustomerPhone').value = '';
  document.getElementById('posDiscount').value = '0';
  document.getElementById('cashReceived').value = '';
  renderCart();
  renderRecentOrders();
  renderOrders();
}

function printReceipt() {
  if (cart.length === 0) { alert('Cart is empty.'); return; }
  const name = document.getElementById('posCustomerName')?.value || 'Walk-in';
  const discount = parseFloat(document.getElementById('posDiscount')?.value || '0') || 0;
  const subtotal = cart.reduce((s,i) => s+i.price, 0);
  const total = subtotal - discount;
  const cash = parseFloat(document.getElementById('cashReceived')?.value || '0') || 0;
  const win = window.open('', '_blank', 'width=380,height=600');
  win.document.write(`<!DOCTYPE html><html><head><style>
    body{font-family:'Courier New',monospace;font-size:12px;width:280px;margin:0 auto;padding:8px}
    .c{text-align:center}.b{font-weight:bold}.d{border-top:1px dashed #000;margin:6px 0}
    .r{display:flex;justify-content:space-between}.t{font-size:15px;font-weight:bold}
  </style></head><body>
  <div class="c b" style="font-size:18px">🧺 LAUNDRYPRO</div>
  <div class="c">Your Trusted Laundry Partner</div>
  <div class="c">Quezon City | 09XX-XXX-XXXX</div>
  <div class="d"></div>
  <div class="r"><span>Date:</span><span>${new Date().toLocaleDateString('en-PH')}</span></div>
  <div class="r"><span>Customer:</span><span>${name}</span></div>
  <div class="d"></div>
  ${cart.map(i=>`<div class="r"><span>${i.name}${i.kg?' ('+i.kg+'kg)':''}</span><span>₱${i.price.toFixed(2)}</span></div>`).join('')}
  <div class="d"></div>
  <div class="r"><span>Subtotal:</span><span>₱${subtotal.toFixed(2)}</span></div>
  <div class="r"><span>Discount:</span><span>-₱${discount.toFixed(2)}</span></div>
  <div class="r t"><span>TOTAL:</span><span>₱${total.toFixed(2)}</span></div>
  ${cash > 0 ? `<div class="r"><span>Cash:</span><span>₱${cash.toFixed(2)}</span></div><div class="r"><span>Change:</span><span>₱${Math.max(0,cash-total).toFixed(2)}</span></div>` : ''}
  <div class="d"></div>
  <div class="c">Thank you for your business!</div>
  <div class="c">Follow us on Facebook 💙</div>
  </body></html>`);
  win.document.close();
  win.print();
}

// ─── ORDERS ───────────────────────────────────────────────
function advanceOrder(id) {
  const order = orders.find(o => o.id === id);
  if (order && NEXT_STATUS[order.status]) {
    order.status = NEXT_STATUS[order.status];
    renderOrders();
    renderRecentOrders();
  }
}

function setView(v) {
  currentView = v;
  document.getElementById('btnKanban').classList.toggle('active', v === 'kanban');
  document.getElementById('btnList').classList.toggle('active', v === 'list');
  document.getElementById('kanbanView').style.display = v === 'kanban' ? 'block' : 'none';
  document.getElementById('listView').style.display = v === 'list' ? 'block' : 'none';
}

function renderOrders() {
  const search = (document.getElementById('orderSearch')?.value || '').toLowerCase();
  const filtered = orders.filter(o =>
    o.customer.toLowerCase().includes(search) || o.id.toLowerCase().includes(search)
  );
  renderKanban(filtered);
  renderListView(filtered);
}

function renderKanban(filtered) {
  const el = document.getElementById('kanbanView');
  if (!el) return;
  el.innerHTML = '<div class="kanban-board">' + KANBAN_COLS.map(col => {
    const colOrders = filtered.filter(o => o.status === col.key);
    return `
      <div>
        <div class="kanban-col-header">
          <div class="kanban-dot" style="background:${col.color}"></div>
          <span class="kanban-col-label">${col.label}</span>
          <span class="badge">${colOrders.length}</span>
        </div>
        ${colOrders.length === 0 ? '<div class="kanban-empty">No orders</div>' : colOrders.map(o => `
          <div class="kanban-card">
            <div style="display:flex;justify-content:space-between;align-items:center">
              <span class="kanban-card-id">${o.id}</span>
              <span style="font-size:12px;font-weight:700;color:#2563eb">₱${o.amount}</span>
            </div>
            <div class="kanban-card-name">${o.customer}</div>
            <div class="kanban-card-svc">${o.service}</div>
            <div class="kanban-card-footer"><span>🕐 ${o.time}</span><span class="badge" style="font-size:10px">${o.type}</span></div>
            ${NEXT_STATUS[o.status] ? `<button class="kanban-advance" onclick="advanceOrder('${o.id}')">Move → ${STATUS_LABEL[NEXT_STATUS[o.status]]}</button>` : ''}
          </div>
        `).join('')}
      </div>
    `;
  }).join('') + '</div>';
}

function renderListView(filtered) {
  const el = document.getElementById('listView');
  if (!el) return;
  el.innerHTML = `
    <div class="card">
      <div style="overflow-x:auto">
        <table class="data-table">
          <thead><tr><th>Order #</th><th>Customer</th><th>Service</th><th>Type</th><th>Status</th><th>Amount</th><th>Time</th><th>Action</th></tr></thead>
          <tbody>
            ${filtered.map(o => `
              <tr>
                <td class="mono">${o.id}</td>
                <td style="font-weight:600">${o.customer}</td>
                <td style="color:#64748b">${o.service}</td>
                <td><span class="badge">${o.type}</span></td>
                <td><span class="badge ${STATUS_CLASS[o.status]}">${STATUS_LABEL[o.status]}</span></td>
                <td style="font-weight:700;color:#2563eb">₱${o.amount}</td>
                <td style="color:#94a3b8">${o.time}</td>
                <td>${NEXT_STATUS[o.status] ? `<button class="btn-outline" style="padding:4px 10px;font-size:11px" onclick="advanceOrder('${o.id}')">Advance →</button>` : '—'}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

// ─── INVENTORY ────────────────────────────────────────────
function renderInventory() {
  const el = document.getElementById('inventoryTable');
  if (!el) return;
  el.innerHTML = INVENTORY.map(item => {
    const low = item.qty <= item.reorder;
    return `
      <tr>
        <td style="font-weight:600">${item.name}</td>
        <td>${item.category}</td>
        <td style="font-weight:700;color:${low ? '#dc2626' : '#059669'}">${item.qty}</td>
        <td>${item.unit}</td>
        <td style="color:#64748b">${item.reorder}</td>
        <td>₱${item.cost}</td>
        <td><span class="badge ${low ? 'badge-red' : 'badge-green'}">${low ? 'Low Stock' : 'OK'}</span></td>
      </tr>
    `;
  }).join('');
}

// ─── CUSTOMERS ────────────────────────────────────────────
function renderCustomers() {
  const el = document.getElementById('customersTable');
  if (!el) return;
  el.innerHTML = CUSTOMERS.map(c => `
    <tr>
      <td style="font-weight:600">${c.name}</td>
      <td class="mono">${c.phone}</td>
      <td style="color:#64748b">${c.email || '—'}</td>
      <td style="text-align:center">${c.orders}</td>
      <td style="font-weight:700;color:#2563eb">₱${c.spent.toLocaleString()}</td>
      <td><span class="badge badge-violet">⭐ ${c.pts} pts</span></td>
      <td style="color:#94a3b8">${c.last}</td>
    </tr>
  `).join('');
}

// ─── STAFF ────────────────────────────────────────────────
function renderStaff() {
  const el = document.getElementById('staffList');
  if (!el) return;
  const statusMap = {
    PRESENT: { label:'Present', cls:'badge-green', icon:'✅' },
    LATE:    { label:'Late',    cls:'badge-amber',  icon:'⏰' },
    ABSENT:  { label:'Absent',  cls:'badge-red',    icon:'❌' },
  };
  el.innerHTML = STAFF.map(s => {
    const st = statusMap[s.status];
    const initials = s.name.split(' ').map(n=>n[0]).join('');
    return `
      <div class="staff-card">
        <div class="staff-avatar">${initials}</div>
        <div class="staff-info">
          <div class="staff-name">${s.name} <span class="badge" style="margin-left:4px">${s.role}</span></div>
          <div class="staff-meta">⏰ ${s.shift} ${s.timeIn ? '| Time in: '+s.timeIn : ''} | ₱${s.dailyRate}/day</div>
        </div>
        <span class="badge ${st.cls}">${st.icon} ${st.label}</span>
      </div>
    `;
  }).join('');
}

// ─── PAYROLL ──────────────────────────────────────────────
function renderPayroll() {
  const el = document.getElementById('payrollTable');
  if (!el) return;
  el.innerHTML = PAYROLL.map(p => {
    const gross = p.days * p.rate;
    const sss = Math.round(gross * 0.045);
    const ph = Math.round(gross * 0.03);
    const pi = 100;
    const net = gross - sss - ph - pi;
    return `
      <tr>
        <td style="font-weight:600">${p.name}</td>
        <td>${p.role}</td>
        <td style="text-align:center">${p.days}</td>
        <td>₱${p.rate}</td>
        <td style="font-weight:600">₱${gross.toLocaleString()}</td>
        <td style="color:#64748b">₱${sss}</td>
        <td style="color:#64748b">₱${ph}</td>
        <td style="color:#64748b">₱${pi}</td>
        <td style="font-weight:700;color:#059669">₱${net.toLocaleString()}</td>
        <td><span class="badge badge-green">Computed</span></td>
      </tr>
    `;
  }).join('');
}

// ─── REPORTS CHARTS ───────────────────────────────────────
function initCharts() {
  const revenueCtx = document.getElementById('revenueChart');
  const serviceCtx = document.getElementById('serviceChart');
  if (!revenueCtx || !serviceCtx) return;

  new Chart(revenueCtx, {
    type: 'bar',
    data: {
      labels: ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],
      datasets: [
        { label:'Revenue', data:[3200,4100,3800,4900,5600,7200,6100], backgroundColor:'#3b82f6', borderRadius:6 },
        { label:'Expenses', data:[800,950,870,1100,1200,1500,1300], backgroundColor:'#f87171', borderRadius:6 },
      ]
    },
    options: { responsive:true, plugins:{ legend:{ position:'top', labels:{ font:{ size:11 } } } }, scales:{ y:{ ticks:{ callback: v => '₱'+v.toLocaleString(), font:{ size:10 } }, grid:{ color:'#f1f5f9' } }, x:{ ticks:{ font:{ size:11 } }, grid:{ display:false } } } }
  });

  new Chart(serviceCtx, {
    type: 'doughnut',
    data: {
      labels: ['Wash & Fold','Wash & Iron','Dry Clean','Express','Others'],
      datasets: [{ data:[38,24,18,12,8], backgroundColor:['#3b82f6','#8b5cf6','#10b981','#f59e0b','#94a3b8'], borderWidth:0, hoverOffset:6 }]
    },
    options: { responsive:true, plugins:{ legend:{ position:'bottom', labels:{ font:{ size:11 }, padding:12 } } }, cutout:'60%' }
  });

  // Top customers
  const tc = document.getElementById('topCustomers');
  if (tc) tc.innerHTML = CUSTOMERS.map((c,i) => `
    <div style="display:flex;align-items:center;gap:12px;margin-bottom:14px">
      <div style="width:22px;height:22px;border-radius:99px;background:#dbeafe;color:#2563eb;font-size:11px;font-weight:700;display:flex;align-items:center;justify-content:center;flex-shrink:0">${i+1}</div>
      <div style="flex:1"><div style="font-size:13px;font-weight:600">${c.name}</div><div style="font-size:11px;color:#94a3b8">${c.orders} orders</div></div>
      <div style="font-weight:700;color:#2563eb">₱${c.spent.toLocaleString()}</div>
    </div>
  `).join('');

  // Expense breakdown
  const eb = document.getElementById('expenseBreakdown');
  const expenses = [['Supplies',35,4200],['Utilities',30,3600],['Salaries',20,2400],['Maintenance',10,1200],['Others',5,600]];
  if (eb) eb.innerHTML = expenses.map(([cat,pct,amt]) => `
    <div style="margin-bottom:14px">
      <div style="display:flex;justify-content:space-between;font-size:12px;margin-bottom:5px">
        <span style="font-weight:600">${cat}</span><span style="color:#64748b">₱${amt.toLocaleString()} (${pct}%)</span>
      </div>
      <div style="height:8px;background:#f1f5f9;border-radius:99px;overflow:hidden">
        <div style="height:100%;background:#3b82f6;border-radius:99px;width:${pct}%"></div>
      </div>
    </div>
  `).join('');
}
