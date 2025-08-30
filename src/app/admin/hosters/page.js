'use client'
import Layout from '../../../../components/Layout';
import { useRouter } from 'next/navigation';

export default function Hosters() {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    router.push('/login');
  };

  return (
    <Layout onLogout={handleLogout}>
      <div className="dashboard-container">
        <h1>Hosters Management</h1>
        <div className="dashboard-content">
          <p>Hosters content will be displayed here.</p>
          {/* Add your hosters table/content here */}
        </div>
      </div>
    </Layout>
  );
}