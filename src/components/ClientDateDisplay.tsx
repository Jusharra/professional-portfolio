
import { useState, useEffect } from 'react';

export default function ClientDateDisplay() {
  const [mounted, setMounted] = useState(false);
  const [dateInfo, setDateInfo] = useState<{
    currentYear: number;
    currentMonth: string;
  } | null>(null);

  useEffect(() => {
    setMounted(true);
    setDateInfo({
      currentYear: new Date().getFullYear(),
      currentMonth: new Date().toLocaleString('default', { month: 'long' })
    });
  }, []);

  if (!mounted || !dateInfo) {
    return (
      <p className="text-gray-300 text-sm mb-2">
        Last updated: Loading... • Available for new opportunities
      </p>
    );
  }

  return (
    <p className="text-gray-300 text-sm mb-2">
      Last updated: {dateInfo.currentMonth} {dateInfo.currentYear} • Available for new opportunities
    </p>
  );
}