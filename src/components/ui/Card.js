// components/ui/Card.jsx
import clsx from 'clsx';

export default function Card({ children, className, title, action }) {
  return (
    <div className={clsx('bg-white rounded-lg shadow-sm', className)}>
      {(title || action) && (
        <div className="flex justify-between items-center p-4 border-b">
          {title && <h3 className="font-medium">{title}</h3>}
          {action && <div>{action}</div>}
        </div>
      )}
      <div className="p-4">
        {children}
      </div>
    </div>
  );
}