'use client'
import Sidebar from './Sidebar';

export default function Layout({ children, onLogout }) {
  return (
    <div className="layout">
      <Sidebar onLogout={onLogout} />
      <main className="main-content">
        {children}
      </main>
    </div>
  );
}