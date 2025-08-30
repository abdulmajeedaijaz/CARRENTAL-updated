'use client'
import { usePathname } from 'next/navigation';

export default function Sidebar({ onLogout }) {
  const pathname = usePathname();
  
  const menuItems = [
    { label: 'Home', path: '/admin/dashboard' },
    { label: 'Admin', path: '/admin/dashboard' },
    { label: 'Bookings', path: '/admin/bookings' },
    { label: 'Hosters', path: '/admin/hosters' },
    { label: 'Customers', path: '/admin/customers' },
    { label: 'Billing', path: '/admin/billing' },
    { label: 'Support', path: '/admin/support' },
  ];

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h2>Car Rental Admin</h2>
      </div>
      <nav className="sidebar-nav">
        <ul>
          {menuItems.map((item) => (
            <li key={item.label}>
              <button 
                className={pathname === item.path ? 'active' : ''}
                onClick={() => window.location.href = item.path}
              >
                {item.label}
              </button>
            </li>
          ))}
          <li>
            <button onClick={onLogout} className="logout-btn">
              Logout
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}