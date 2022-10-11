import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';

export type LayoutProps = {};

export default function Layout({}: LayoutProps) {
  return (
    <div className="flex">
      <Sidebar />
      <div className="h-screen w-full border-2 border-blue-600">
        <Outlet />
      </div>
    </div>
  );
}
