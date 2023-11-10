import SpecificationTable, {
  TableRowData
} from 'components/tables/SpecificationTable';
import React from 'react';

const processorData: TableRowData[] = [
  {
    key: 'Chip name',
    value: 'Apple M1 chip'
  },
  {
    key: 'Cpu core',
    value: '8 (4 performance and 4 efficiency)'
  },
  {
    key: 'Gpu core',
    value: 7
  },
  {
    key: 'Neural engine',
    value: '16 cores'
  }
];

const storageData: TableRowData[] = [
  {
    key: 'Memory',
    value: '8 GB unified'
  },
  {
    key: 'SSD',
    value: '256 GB'
  }
];

const displayData: TableRowData[] = [
  {
    key: 'Display type',
    value: 'Retina'
  },
  {
    key: 'Size',
    value: '24” (actual diagonal 23.5”)'
  },
  {
    key: 'Resolution',
    value: '4480 x 2520'
  },
  {
    key: 'Brightness',
    value: '500 nits'
  }
];

const additionalData: TableRowData[] = [
  {
    key: 'Camera',
    value: '1080p FaceTime HD camera'
  },
  {
    key: 'Video',
    value: [
      'Full native resolution on built-in display at 1 billion colors;',
      'One external display with up to 6K resolution at 60Hz'
    ]
  },
  {
    key: 'Audio',
    value: [
      'High-fidelity six-speaker with force-cancelling woofers',
      'Wide stereo sound',
      'Spatial audio with Dolby Atmos3',
      'Studio-quality three-mic array with directional beamforming'
    ]
  },
  {
    key: 'Inputs',
    value: ['Magic Keyboard', 'Magic Mouse']
  },
  {
    key: 'Wireless',
    value: [
      '802.11ax Wi-Fi 6 (IEEE 802.11a/b/g/n/ac compatible)',
      'Bluetooth 5.0 wireless technology'
    ]
  },
  {
    key: 'I/O & expantions',
    value: [
      'Thunderbolt / USB 4 ports x 2',
      '3.5 mm headphone jack',
      'Gigabit Ethernet',
      'USB 3 ports x2'
    ]
  },
  {
    key: 'Operating System',
    value: 'macOS Monterey'
  }
];

const ProductSpecificationTables = () => {
  return (
    <>
      <div className="mb-6">
        <SpecificationTable title="Processor/Chipset" data={processorData} />
      </div>
      <div className="mb-6">
        <SpecificationTable title="Storage" data={storageData} />
      </div>
      <div className="mb-6">
        <SpecificationTable title="Display" data={displayData} />
      </div>
      <div className="mb-6">
        <SpecificationTable
          title="Additional Specifications"
          data={additionalData}
        />
      </div>
      <div>
        <h3 className="mb-3 mt-6 ms-4 fw-bold">In The Box</h3>
        <p className="lh-sm border-top mb-0 py-3 px-4">iMac 24”</p>
        <p className="lh-sm border-top mb-0 py-3 px-4">Magic Keyboard </p>
        <p className="lh-sm border-top mb-0 py-3 px-4">Magic Mouse</p>
        <p className="lh-sm border-top mb-0 py-3 px-4">143W power adapter</p>
        <p className="lh-sm border-top mb-0 py-3 px-4">2m Power Cord</p>
        <p className="lh-sm border-y mb-0 py-3 px-4">
          USB-C to Lightning Cable
        </p>
      </div>
    </>
  );
};

export default ProductSpecificationTables;
