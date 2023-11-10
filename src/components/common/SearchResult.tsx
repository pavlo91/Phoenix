import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { getFileIcon } from 'helpers/utils';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import Avatar, { Status } from 'components/base/Avatar';
import { SearchResult as SearchResultType, searchItems } from 'data/search';
import Scrollbar from 'components/base/Scrollbar';
import useSearchHook from 'hooks/useSearchHook';
import { ColumnDef } from '@tanstack/react-table';
import { useMemo } from 'react';

const ResultSectionHeader = ({ title }: { title: string }) => {
  return (
    <h6 className="text-1000 fs-9 border-y border-200 py-2 lh-sm mb-0 px-3">
      {title}
    </h6>
  );
};

const searchFields: ColumnDef<SearchResultType>[] = [
  {
    accessorKey: 'label'
  }
];

const SearchResult = ({ searchValue = '' }: { searchValue?: string }) => {
  const results = useSearchHook(searchItems, searchFields, searchValue);

  const recentlySearchedItems = useMemo(
    () => results.filter(item => item.category === 'recently_searched'),
    [results]
  );

  const products = useMemo(
    () => results.filter(item => item.category === 'products'),
    [results]
  );

  const quickLinks = useMemo(
    () => results.filter(item => item.category === 'quick_links'),
    [results]
  );

  const suggestionFiles = useMemo(
    () => results.filter(item => item.category === 'suggestion_files'),
    [results]
  );

  const members = useMemo(
    () => results.filter(item => item.category === 'members'),
    [results]
  );

  const relatedSearchedItems = useMemo(
    () => results.filter(item => item.category === 'related_search'),
    [results]
  );

  return (
    <Scrollbar autoHeight autoHeightMax={'30rem'}>
      <h6 className="text-1000 fs-10 py-2 mb-0 px-3">
        {results.length} <span className="text-500">Results</span>{' '}
      </h6>
      {recentlySearchedItems.length > 0 && (
        <>
          <ResultSectionHeader title="Recently Searched" />
          <div className="py-2">
            {recentlySearchedItems.map(item => (
              <Dropdown.Item as={Link} to={item.url} key={item.label}>
                <div className="d-flex align-items-center fw-normal gap-1 text-1000">
                  <FontAwesomeIcon
                    icon="clock-rotate-left"
                    transform="shrink-2"
                  />
                  {item.label}
                </div>
              </Dropdown.Item>
            ))}
          </div>
        </>
      )}
      {products.length > 0 && (
        <>
          <ResultSectionHeader title="Products" />
          <div className="py-2">
            {products.map(item => (
              <Dropdown.Item
                as={Link}
                to={item.url}
                key={item.label}
                className="py-2 d-flex gap-2 align-items-center"
              >
                <div className="file-thumbnail">
                  <img
                    className="fit-cover rounded-3"
                    src={item.image}
                    height={28}
                    width={28}
                    alt={item.label}
                  />
                </div>
                <div className="flex-1">
                  <h6 className="mb-0 text-1000">{item.label}</h6>
                  <p className="fs-10 mb-0 d-flex text-700">
                    <span className="fw-medium text-600">{item.details}</span>
                  </p>
                </div>
              </Dropdown.Item>
            ))}
          </div>
        </>
      )}
      {quickLinks.length > 0 && (
        <>
          <ResultSectionHeader title="Quick Links" />
          <div className="py-2">
            {quickLinks.map(item => (
              <Dropdown.Item as={Link} to={item.url} key={item.label}>
                <div className="d-flex align-items-center fw-normal gap-1 text-1000">
                  <FontAwesomeIcon
                    icon="link"
                    transform="shrink-2"
                    className="text-900"
                  />
                  {item.label}
                </div>
              </Dropdown.Item>
            ))}
          </div>
        </>
      )}
      {suggestionFiles.length > 0 && (
        <>
          <ResultSectionHeader title="Files" />
          <div className="py-2">
            {suggestionFiles.map(item => (
              <Dropdown.Item as={Link} to={item.url} key={item.label}>
                <div className="d-flex align-items-center fw-normal gap-1 text-1000">
                  <FontAwesomeIcon
                    icon={getFileIcon(item.format || '')}
                    transform="shrink-2"
                    className="text-900"
                  />
                  {item.label}
                </div>
              </Dropdown.Item>
            ))}
          </div>
        </>
      )}
      {members.length > 0 && (
        <>
          <ResultSectionHeader title="Members" />
          <div className="py-2">
            {members.map(item => (
              <Dropdown.Item as={Link} to={item.url} key={item.label}>
                <div className="d-flex align-items-center fw-normal gap-1 text-1000">
                  <Avatar
                    src={item.avatar}
                    size="l"
                    status={item.status as Status}
                  />
                  <div className="flex-1">
                    <h6 className="mb-0 text-1000 title">{item.label}</h6>
                    <p className="fs-10 mb-0 d-flex text-700">{item.details}</p>
                  </div>
                </div>
              </Dropdown.Item>
            ))}
          </div>
        </>
      )}
      {relatedSearchedItems.length > 0 && (
        <>
          <ResultSectionHeader title="Related Searches" />
          <div className="py-2">
            {relatedSearchedItems.map(item => (
              <Dropdown.Item as={Link} to={item.url} key={item.label}>
                <div className="d-flex align-items-center fw-normal gap-1 text-1000">
                  <FontAwesomeIcon
                    icon={item.icon as IconProp}
                    transform="shrink-2"
                    className="text-900"
                  />
                  {item.label}
                </div>
              </Dropdown.Item>
            ))}
          </div>
        </>
      )}
    </Scrollbar>
  );
};

export default SearchResult;
