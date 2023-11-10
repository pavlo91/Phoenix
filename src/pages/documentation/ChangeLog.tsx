import PhoenixDocCard from 'components/base/PhoenixDocCard';

const ChangeLog = () => {
  return (
    <div>
      <h2 className="mb-4 lh-sm">Changelog</h2>

      <PhoenixDocCard className="mb-4">
        <PhoenixDocCard.Header noPreview>
          <h5 className="mb-2">
            <code className="fw-bold fs-7">v1.0.0</code> - Initial Release
          </h5>
          <p className="mb-0">11 Sep, 2023</p>
        </PhoenixDocCard.Header>
        <PhoenixDocCard.Body>
          <p className="mb-0">Nothing to see here.</p>
        </PhoenixDocCard.Body>
      </PhoenixDocCard>
    </div>
  );
};

export default ChangeLog;
