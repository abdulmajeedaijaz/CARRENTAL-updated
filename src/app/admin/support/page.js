'use client'
import Layout from '../../../../components/Layout';
import { useRouter } from 'next/navigation';

export default function Support() {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    router.push('/login');
  };

  return (
    <Layout onLogout={handleLogout}>
      <div className="dashboard-container">
        <h1>Support</h1>
        <div className="dashboard-content">
          <p>Support content will be displayed here.</p>
          {/* Add your support content here */}
        </div>
      </div>
    </Layout>
  );
}