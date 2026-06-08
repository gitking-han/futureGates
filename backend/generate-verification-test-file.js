const xlsx = require('xlsx');
const fs = require('fs');
const path = require('path');

const rows = [
  [
    'Candidate Name',
    'Father Name',
    'Enrollment Number',
    'Certificate Number',
    'Verification Reference',
    'Trade',
    'Course Duration',
    'Training Session',
    'Roster Status',
    'Total Marks',
    'Obtained Marks',
    'Percentage',
    'Final Grade',
  ],
  ['Ravi Kumar', 'Suresh Kumar', 'ENR-2026-001', 'CERT-2026-001', 'REF-2026-001', 'Electrician', '6 Months', 'Jan 2026 - Jun 2026', 'Verified', 100, 92, 92, 'A'],
  ['Meena Sharma', 'Anil Sharma', 'ENR-2026-002', 'CERT-2026-002', 'REF-2026-002', 'Computer', '3 Months', 'Feb 2026 - Apr 2026', 'Verified', 100, 88, 88, 'A'],
  ['Amit Patel', 'Rajesh Patel', 'ENR-2026-003', 'CERT-2026-003', 'REF-2026-003', 'Mechanic', '4 Months', 'Mar 2026 - Jun 2026', 'Pending', 100, 0, 0, ''],
];

const ws = xlsx.utils.aoa_to_sheet(rows);
const wb = xlsx.utils.book_new();
xlsx.utils.book_append_sheet(wb, ws, 'VerificationData');
const filePath = path.resolve(__dirname, '..', 'verification-test-data.xlsx');
fs.writeFileSync(filePath, xlsx.write(wb, { type: 'buffer', bookType: 'xlsx' }));
console.log('Wrote', filePath);
