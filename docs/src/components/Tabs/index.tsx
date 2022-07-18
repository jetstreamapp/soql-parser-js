import clsx from 'clsx';
import React, { ReactNode, useState } from 'react';

export interface TabsProps {
  initialTab?: string;
  className?: string;
  tabs: {
    id: string;
    label: string;
    content: ReactNode;
  }[];
}

export default function Tabs({ initialTab, className, tabs = [] }: TabsProps): JSX.Element {
  const [activeTab, setActiveTab] = useState(initialTab || tabs[0]?.id);

  return (
    <div>
      <ul className="tabs tabs--block">
        {tabs.map(({ id, label }) => (
          <li key={id} className={clsx('tabs__item', { 'tabs__item--active': id === activeTab })} onClick={() => setActiveTab(id)}>
            {label}
          </li>
        ))}
      </ul>
      <div className={className}>{tabs.find(({ id }) => id === activeTab)?.content}</div>
    </div>
  );
}
