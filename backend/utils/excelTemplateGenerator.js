import xlsx from 'xlsx';

export const buildVerificationTemplate = () => {
  const rows = [
    [
      'Candidate Name',
      'Father Name',
      'Verification Reference',
      'Course',
      'Course Duration',
      'Training Session',
      'Trainer Name',
      'Final Grade',
    ],
    ['', '', '', '', '', '', '', ''],
  ];

  const worksheet = xlsx.utils.aoa_to_sheet(rows);
  const workbook = xlsx.utils.book_new();
  xlsx.utils.book_append_sheet(workbook, worksheet, 'VerificationTemplate');
  return xlsx.write(workbook, { type: 'buffer', bookType: 'xlsx' });
};
