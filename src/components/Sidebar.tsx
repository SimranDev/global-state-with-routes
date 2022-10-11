import { Link } from 'react-router-dom';

export type SidebarProps = {};

const steps = [
  'Property',
  'Borrowers',
  'Deposit',
  'Income',
  'Assets',
  'Liabilities',
];

function LinkItem({ step }: { step: string }) {
  return (
    <Link to={`/${step.toLowerCase()}`}>
      <li className="py-2 px-4 hover:bg-gray-100">{step}</li>
    </Link>
  );
}

export default function Sidebar({}: SidebarProps) {
  return (
    <div className="h-screen border-2 border-pink-500 w-52">
      <div className="grid h-min gap-4">
        {steps.map((step) => (
          <LinkItem step={step} />
        ))}
      </div>
    </div>
  );
}
